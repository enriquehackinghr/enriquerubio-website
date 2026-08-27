import type { Express } from "express";
import { type Server } from "http";
import { appendBookingToSheet, appendNewsletterSubscriber } from "./googleSheets";
import { sendBookingNotificationEmail } from "./gmail";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post('/api/newsletter/book', async (req, res) => {
    try {
      const { name, email } = req.body;
      if (!name || !email) {
        return res.status(400).json({ success: false, error: 'Name and email are required' });
      }
      await appendNewsletterSubscriber({ name, email });
      return res.json({ success: true });
    } catch (error: any) {
      console.error('Newsletter sign-up error:', error);
      return res.status(500).json({ success: false, error: 'Failed to save subscriber' });
    }
  });

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

      const result = await appendBookingToSheet(bookingData);

      try {
        await sendBookingNotificationEmail(bookingData);
        console.log('Email notification sent successfully');
      } catch (emailError: any) {
        console.error('Email notification failed:', emailError.message);
      }

      res.json({ 
        success: true, 
        message: 'Booking inquiry submitted successfully',
        spreadsheetId: result.spreadsheetId
      });
    } catch (error: any) {
      console.error('Booking submission error:', error);
      res.status(500).json({ 
        success: false, 
        error: error.message || 'Failed to submit booking inquiry' 
      });
    }
  });

  // Ada is deactivated. Acknowledge leftover AgentMail webhooks without auto-replying.
  app.post('/api/webhook/agentmail', (_req, res) => {
    res.status(200).send('OK');
  });

  return httpServer;
}
