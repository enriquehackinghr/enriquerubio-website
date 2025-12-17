import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { appendBookingToSheet } from "./googleSheets";
import { sendBookingNotificationEmail, sendEmailToAddress } from "./gmail";
import { generateResponse, generateWelcomeEmail, generateInitialAssistantMessage, generateEmailResponse, type ChatMessage } from "./aiAgent";
import { createAnonymousConversationSchema, updateContactSchema, sendMessageSchema } from "@shared/schema";
import { getOrCreateAdaInbox, sendEmailReply, getAgentMailClient } from "./agentmail";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Booking form submission endpoint
  app.post('/api/booking', async (req, res) => {
    try {
      const { name, organization, email, eventDate, format, message } = req.body;

      if (!name || !organization || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          error: 'Missing required fields' 
        });
      }

      const bookingData = {
        name,
        organization,
        email,
        eventDate: eventDate || '',
        format: format || 'Not specified',
        message
      };

      // Append to Google Sheets
      const result = await appendBookingToSheet(bookingData);

      // Create conversation in database
      const conversation = await storage.createConversation({
        name,
        email,
        organization,
        eventDate: eventDate || null,
        format: format || null,
      });

      // Store their initial message
      await storage.createMessage({
        conversationId: conversation.id,
        role: 'user',
        content: message
      });

      // Generate and store AI's initial response
      const initialResponse = generateInitialAssistantMessage({
        name,
        organization,
        message,
        eventDate,
        format
      });

      await storage.createMessage({
        conversationId: conversation.id,
        role: 'assistant',
        content: initialResponse
      });

      // Send email notification to Enrique
      try {
        await sendBookingNotificationEmail(bookingData);
        console.log('Email notification sent successfully');
      } catch (emailError: any) {
        console.error('Email notification failed:', emailError.message);
      }

      // Send AI-generated welcome email to the prospect
      try {
        const baseUrl = process.env.REPLIT_DEV_DOMAIN 
          ? `https://${process.env.REPLIT_DEV_DOMAIN}`
          : process.env.REPL_SLUG 
          ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
          : 'https://enriquerubio.ai';
        
        const chatUrl = `${baseUrl}/chat/${conversation.id}`;
        
        const welcomeEmail = await generateWelcomeEmail({
          name,
          organization,
          message,
          eventDate,
          format,
          chatUrl
        });

        await sendEmailToAddress(
          email,
          `Thank you for reaching out to Enrique Rubio!`,
          welcomeEmail
        );
        console.log('Welcome email sent to prospect');
      } catch (emailError: any) {
        console.error('Welcome email failed:', emailError.message);
      }

      res.json({ 
        success: true, 
        message: 'Booking inquiry submitted successfully',
        spreadsheetId: result.spreadsheetId,
        conversationId: conversation.id
      });
    } catch (error: any) {
      console.error('Booking submission error:', error);
      res.status(500).json({ 
        success: false, 
        error: error.message || 'Failed to submit booking inquiry' 
      });
    }
  });

  // Create anonymous conversation (for chat widget)
  app.post('/api/conversations', async (req, res) => {
    try {
      const parsed = createAnonymousConversationSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: 'Invalid request', details: parsed.error.format() });
      }
      const { source } = parsed.data;
      const conversation = await storage.createAnonymousConversation(source);
      
      // Store initial AI greeting - each paragraph separated by double newlines
      const greeting = `Hi there! I'm Ada, named after Ada Lovelace — the world's first computer programmer.

She inspires Enrique because she believed technology should amplify human creativity, not replace it.

That's exactly what Enrique talks about: helping organizations thrive in the age of AI while keeping people at the center.

I'm here to answer your questions about his speaking topics, availability, and help you explore if he's the right fit for your event.

Before we dive in, what's your name?`;
      await storage.createMessage({
        conversationId: conversation.id,
        role: 'assistant',
        content: greeting
      });

      res.json({ 
        conversationId: conversation.id,
        greeting 
      });
    } catch (error: any) {
      console.error('Create conversation error:', error);
      res.status(500).json({ error: 'Failed to create conversation' });
    }
  });

  // Update conversation contact info
  app.patch('/api/conversation/:id/contact', async (req, res) => {
    try {
      const { id } = req.params;
      
      const parsed = updateContactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: 'Invalid request', details: parsed.error.format() });
      }

      const conversation = await storage.getConversation(id);
      if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found' });
      }

      await storage.updateConversationContact(id, parsed.data);
      
      // Send email notification to Enrique with conversation summary
      try {
        const messages = await storage.getMessagesByConversation(id);
        const conversationSummary = messages.map(m => 
          `${m.role === 'user' ? (parsed.data.name || 'Visitor') : 'Ada'}: ${m.content}`
        ).join('\n\n');

        await sendBookingNotificationEmail({
          name: parsed.data.name || 'Anonymous Visitor',
          organization: parsed.data.organization || 'Not specified',
          email: parsed.data.email || 'Not provided',
          eventDate: '',
          format: 'Chat Widget Inquiry',
          message: `A visitor shared their contact info after chatting with Ada.\n\n--- Conversation ---\n\n${conversationSummary}`
        });
        console.log('Contact info email sent to Enrique');
      } catch (emailError: any) {
        console.error('Failed to send contact info email:', emailError.message);
      }
      
      res.json({ success: true });
    } catch (error: any) {
      console.error('Update contact error:', error);
      res.status(500).json({ error: 'Failed to update contact info' });
    }
  });

  // Get conversation and messages
  app.get('/api/conversation/:id', async (req, res) => {
    try {
      const { id } = req.params;
      
      const conversation = await storage.getConversation(id);
      if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found' });
      }

      const messages = await storage.getMessagesByConversation(id);
      
      res.json({ conversation, messages });
    } catch (error: any) {
      console.error('Get conversation error:', error);
      res.status(500).json({ error: 'Failed to get conversation' });
    }
  });

  // Send message in conversation
  app.post('/api/conversation/:id/message', async (req, res) => {
    try {
      const { id } = req.params;
      
      const parsed = sendMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: 'Invalid request', details: parsed.error.format() });
      }
      const { message } = parsed.data;

      const conversation = await storage.getConversation(id);
      if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found' });
      }

      if (conversation.escalated) {
        return res.status(400).json({ 
          error: 'This conversation has been escalated to Enrique. He will contact you directly.' 
        });
      }

      // Store user's message
      await storage.createMessage({
        conversationId: id,
        role: 'user',
        content: message
      });

      // Get conversation history
      const allMessages = await storage.getMessagesByConversation(id);
      const history: ChatMessage[] = allMessages.slice(0, -1).map(m => ({
        role: m.role as 'user' | 'assistant',
        content: m.content
      }));

      // Generate AI response
      const aiResponse = await generateResponse(history, message, {
        name: conversation.name || 'Anonymous',
        organization: conversation.organization || 'Not specified',
        email: conversation.email || 'Not provided',
        eventDate: conversation.eventDate || undefined,
        format: conversation.format || undefined
      });

      // Store AI's response
      await storage.createMessage({
        conversationId: id,
        role: 'assistant',
        content: aiResponse.message
      });

      // Handle escalation
      if (aiResponse.shouldEscalate) {
        await storage.updateConversationEscalation(id, aiResponse.escalationReason || 'AI triggered escalation');
        
        // Notify Enrique about escalation
        try {
          const conversationSummary = allMessages.map(m => 
            `${m.role === 'user' ? conversation.name : 'AI'}: ${m.content}`
          ).join('\n\n');

          await sendBookingNotificationEmail({
            name: conversation.name || 'Anonymous',
            organization: conversation.organization || 'Not specified',
            email: conversation.email || 'Not provided',
            eventDate: conversation.eventDate || '',
            format: conversation.format || '',
            message: `ESCALATION: ${aiResponse.escalationReason || 'Ready for personal follow-up'}\n\n--- Conversation History ---\n\n${conversationSummary}`
          });
        } catch (e) {
          console.error('Failed to send escalation email:', e);
        }
      }

      res.json({ 
        response: aiResponse.message,
        escalated: aiResponse.shouldEscalate,
        escalationReason: aiResponse.escalationReason
      });
    } catch (error: any) {
      console.error('Send message error:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  });

  // AgentMail webhook for incoming emails - Ada auto-replies
  const processedEmailIds = new Set<string>();
  
  app.post('/api/webhook/agentmail', async (req, res) => {
    // Return 200 immediately to acknowledge receipt
    res.status(200).send('OK');
    
    // Process in background
    try {
      const payload = req.body;
      console.log('AgentMail webhook received:', JSON.stringify(payload, null, 2));
      
      // Skip our own sent messages to avoid infinite loops
      const labels = payload.labels || [];
      if (labels.includes('sent')) {
        console.log('AgentMail webhook: skipping sent message');
        return;
      }
      
      // Fields are at the top level in AgentMail webhook payload
      const messageId = payload.message_id;
      const inboxId = payload.inbox_id;
      const fromArray = payload.from_ || payload.from || [];
      const fromField = Array.isArray(fromArray) ? fromArray[0] : fromArray;
      const subject = payload.subject || '(no subject)';
      const body = payload.body || {};
      const textBody = body.text || body.html || '';
      
      // Validate required fields
      if (!messageId || !inboxId || !fromField) {
        console.log('AgentMail webhook: missing required fields', { messageId, inboxId, fromField });
        return;
      }
      
      // Prevent duplicate processing
      if (processedEmailIds.has(messageId)) {
        console.log('AgentMail webhook: duplicate message', messageId);
        return;
      }
      processedEmailIds.add(messageId);
      
      // Extract sender email
      let senderEmail = fromField;
      if (fromField.includes('<') && fromField.includes('>')) {
        senderEmail = fromField.split('<')[1].split('>')[0].trim();
      }
      
      console.log(`AgentMail: Received email from ${senderEmail}: ${subject}`);
      
      // Generate AI response
      const aiResponse = await generateEmailResponse(
        [], // No history for now - could be enhanced to track threads
        {
          from: senderEmail,
          subject,
          body: textBody
        }
      );
      
      // Send auto-reply
      await sendEmailReply(
        inboxId,
        messageId,
        aiResponse.response
      );
      
      console.log(`AgentMail: Auto-reply sent to ${senderEmail}`);
      
      // If escalation needed, notify Enrique
      if (aiResponse.shouldEscalate) {
        try {
          await sendBookingNotificationEmail({
            name: senderEmail,
            organization: 'Email via AgentMail',
            email: senderEmail,
            eventDate: '',
            format: 'Email Inquiry',
            message: `Email from ${senderEmail}:\nSubject: ${subject}\n\n${textBody}\n\n--- Ada's Response ---\n\n${aiResponse.response}`
          });
          console.log('AgentMail: Escalation email sent to Enrique');
        } catch (e) {
          console.error('Failed to send escalation email:', e);
        }
      }
      
      // Clean up old message IDs to prevent memory leak
      if (processedEmailIds.size > 1000) {
        const iterator = processedEmailIds.values();
        for (let i = 0; i < 500; i++) {
          processedEmailIds.delete(iterator.next().value!);
        }
      }
    } catch (error: any) {
      console.error('AgentMail webhook error:', error);
    }
  });

  // Get Ada's email address
  app.get('/api/ada-email', async (req, res) => {
    try {
      const { inboxId, emailAddress } = await getOrCreateAdaInbox();
      res.json({ inboxId, emailAddress });
    } catch (error: any) {
      console.error('Get Ada email error:', error);
      res.status(500).json({ error: 'Failed to get Ada email address' });
    }
  });

  // Debug endpoint to check AgentMail configuration
  app.get('/api/ada-email/debug', async (req, res) => {
    try {
      const client = await getAgentMailClient();
      
      // List webhooks
      const webhooks = await client.webhooks.list();
      
      // List inboxes
      const inboxes = await client.inboxes.list();
      
      res.json({ 
        webhooks: webhooks.webhooks,
        inboxes: inboxes.inboxes,
        expectedWebhookUrl: 'https://enriquerubio.ai/api/webhook/agentmail'
      });
    } catch (error: any) {
      console.error('Ada debug error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Initialize AgentMail inbox and webhook on startup
  initAgentMail().catch(console.error);

  return httpServer;
}

// Set up AgentMail inbox and webhook
async function initAgentMail() {
  try {
    const { inboxId, emailAddress } = await getOrCreateAdaInbox();
    console.log(`Ada's email inbox ready: ${emailAddress}`);
    
    // Always use production URL for webhook so emails work in production
    const webhookUrl = 'https://enriquerubio.ai/api/webhook/agentmail';
    
    // Create or update webhook
    const client = await getAgentMailClient();
    
    // First, try to delete existing webhook to update URL
    try {
      const webhooks = await client.webhooks.list();
      const existingWebhook = (webhooks.webhooks as any[])?.find((w: any) => 
        w.clientId === 'enrique-webhook' || w.url?.includes('agentmail')
      );
      if (existingWebhook && existingWebhook.url !== webhookUrl) {
        await client.webhooks.delete(existingWebhook.webhookId);
        console.log('Deleted old webhook to update URL');
      }
    } catch (e) {
      // Ignore errors when deleting
    }
    
    try {
      await client.webhooks.create({
        url: webhookUrl,
        eventTypes: ['message.received'],
        inboxIds: [inboxId],
        clientId: 'enrique-webhook-prod'
      });
      console.log(`AgentMail webhook registered: ${webhookUrl}`);
    } catch (error: any) {
      if (String(error).toLowerCase().includes('already exists')) {
        console.log('AgentMail webhook already exists for production');
      } else {
        console.error('Failed to create webhook:', error);
      }
    }
  } catch (error: any) {
    console.error('AgentMail initialization failed:', error.message);
  }
}
