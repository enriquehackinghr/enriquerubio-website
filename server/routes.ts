import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { appendBookingToSheet } from "./googleSheets";
import { sendBookingNotificationEmail, sendEmailToAddress } from "./gmail";
import { generateResponse, generateWelcomeEmail, generateInitialAssistantMessage, type ChatMessage } from "./aiAgent";

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
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

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
        name: conversation.name,
        organization: conversation.organization,
        email: conversation.email,
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
            name: conversation.name,
            organization: conversation.organization,
            email: conversation.email,
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

  return httpServer;
}
