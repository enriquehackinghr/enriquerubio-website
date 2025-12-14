// AI Agent for Enrique Rubio's Speaker Website
// Uses Replit AI Integrations for OpenAI access (no API key required, billed to credits)
import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

const SYSTEM_PROMPT = `You are Ada, a helpful AI assistant representing Enrique Rubio, a globally recognized keynote speaker and thought leader on AI and the Future of Work. You are named after Ada Lovelace, the world's first computer programmer. You are warm, professional, and enthusiastic.

ABOUT ENRIQUE RUBIO:
- Founder of Hacking HR, a global community of 500,000+ HR and business leaders
- Expert speaker on AI, Future of Work, HR Technology, and People Analytics
- Has worked with Fortune 500 companies, startups, and organizations worldwide
- Venezuelan-American, passionate about humanizing technology
- Known for making complex AI concepts accessible and actionable
- Also an ultrarunner and nature enthusiast

SPEAKING TOPICS:
1. AI and the Future of Work - How AI is transforming how we work, lead, and collaborate
2. Human-Centered AI - Implementing AI while keeping people at the center
3. HR Technology & People Analytics - Using data to make better people decisions
4. The Workforce of Tomorrow - Preparing organizations for rapid change
5. Leadership in the Age of AI - How leaders must evolve

ENGAGEMENT FORMATS:
- Keynote Speeches (45-90 minutes)
- Workshops & Masterclasses (half-day to full-day)
- Executive Briefings
- Panel Moderation
- Advisory Sessions

YOUR ROLE:
1. Welcome potential clients warmly
2. Answer questions about Enrique's speaking topics, experience, and approach
3. Gather information about their event (date, format, audience, goals)
4. Provide helpful information about how Enrique works with clients
5. Build rapport and demonstrate Enrique's value

ESCALATION TRIGGERS - You MUST escalate to Enrique (set escalate: true) when:
- They want to discuss specific pricing or negotiate rates
- They're ready to confirm a booking or move to contract
- They have highly specific technical questions you can't answer
- They explicitly ask to speak with Enrique directly
- They seem frustrated or the conversation isn't going well
- The conversation has gone beyond 8-10 exchanges without progress

RESPONSE STYLE:
- Be conversational, warm, and professional
- Keep responses concise (2-4 paragraphs max)
- Ask clarifying questions to understand their needs
- Share relevant examples of Enrique's work when appropriate
- Always end with a question or clear next step

Remember: You're helping potential clients learn about Enrique and gathering info to help him prepare for their conversation. Be helpful but know when to hand off to Enrique himself.

RESPONSE FORMAT:
You MUST respond with a valid JSON object with these fields:
- "message": Your response text to the user
- "escalate": true/false - whether to escalate to Enrique
- "escalationReason": (optional) why you're escalating

Example: {"message": "Thank you for your interest! What date are you considering for your event?", "escalate": false}`;

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface AIResponse {
  message: string;
  shouldEscalate: boolean;
  escalationReason?: string;
}

export async function generateResponse(
  conversationHistory: ChatMessage[],
  userMessage: string,
  context: {
    name: string;
    organization: string;
    email: string;
    eventDate?: string;
    format?: string;
  }
): Promise<AIResponse> {
  const contextMessage = `
CURRENT PROSPECT INFO:
- Name: ${context.name}
- Organization: ${context.organization}
- Email: ${context.email}
- Event Date: ${context.eventDate || 'Not specified yet'}
- Preferred Format: ${context.format || 'Not specified yet'}
`;

  const messages: ChatMessage[] = [
    { role: 'system', content: SYSTEM_PROMPT + contextMessage },
    ...conversationHistory,
    { role: 'user', content: userMessage }
  ];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: messages.map(m => ({ role: m.role, content: m.content })),
      max_completion_tokens: 1024,
      response_format: { type: "json_object" }
    });

    const content = response.choices[0]?.message?.content || '';
    
    try {
      const parsed = JSON.parse(content);
      return {
        message: parsed.message || parsed.response || content,
        shouldEscalate: parsed.escalate === true || parsed.shouldEscalate === true,
        escalationReason: parsed.escalationReason || parsed.reason
      };
    } catch {
      return {
        message: content,
        shouldEscalate: false
      };
    }
  } catch (error: any) {
    console.error('AI Agent error:', error);
    throw new Error('Failed to generate AI response');
  }
}

export async function generateWelcomeEmail(context: {
  name: string;
  organization: string;
  message: string;
  eventDate?: string;
  format?: string;
  chatUrl: string;
}): Promise<string> {
  const prompt = `Generate a warm, personalized welcome email from Enrique Rubio's AI assistant to a potential speaking client. 

THEIR INQUIRY:
- Name: ${context.name}
- Organization: ${context.organization}
- Event Date: ${context.eventDate || 'Not specified'}
- Format: ${context.format || 'Not specified'}
- Their message: "${context.message}"

The email should:
1. Thank them warmly for reaching out
2. Acknowledge something specific from their message
3. Express enthusiasm about potentially working with them
4. Mention that they can continue the conversation with Enrique's AI assistant anytime
5. Include the chat link: ${context.chatUrl}
6. Sign off as "Ada, Enrique's AI Assistant" (not as Enrique himself)

Keep it concise (3-4 short paragraphs). Be warm and professional.

Respond with just the email body text, no subject line.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [{ role: 'user', content: prompt }],
      max_completion_tokens: 512
    });

    return response.choices[0]?.message?.content || 'Thank you for reaching out! We will be in touch soon.';
  } catch (error: any) {
    console.error('Welcome email generation error:', error);
    return `Hi ${context.name},

Thank you so much for reaching out about having Enrique speak at ${context.organization}! We're excited to learn more about your event.

You can continue this conversation anytime by visiting: ${context.chatUrl}

Our AI assistant is available 24/7 to answer your questions about Enrique's speaking topics, experience, and how he works with clients. When you're ready to discuss specifics, Enrique will personally follow up with you.

Looking forward to connecting!

Best,
Ada
Enrique's AI Assistant`;
  }
}

export function generateInitialAssistantMessage(context: {
  name: string;
  organization: string;
  message: string;
  eventDate?: string;
  format?: string;
}): string {
  return `Hi ${context.name}! Thanks so much for reaching out about having Enrique speak at ${context.organization}. I'm Ada, Enrique's AI assistant, and I'm here to help answer your questions and learn more about your event.

I saw you mentioned: "${context.message.slice(0, 150)}${context.message.length > 150 ? '...' : ''}"

I'd love to learn more! What kind of audience will be attending, and what's the main outcome you're hoping Enrique's session will achieve?`;
}
