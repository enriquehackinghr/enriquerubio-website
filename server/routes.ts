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

      try {
        await appendBookingToSheet(bookingData);
      } catch (sheetError: any) {
        console.error('Google Sheets save failed:', sheetError.message);
      }

      try {
        await sendBookingNotificationEmail(bookingData);
        console.log('Email notification sent successfully');
      } catch (emailError: any) {
        console.error('Email notification failed:', emailError.message);
      }

      res.json({ 
        success: true, 
        message: 'Booking inquiry submitted successfully'
      });
    } catch (error: any) {
      console.error('Booking submission error:', error);
      res.status(500).json({ 
        success: false, 
        error: error.message || 'Failed to submit booking inquiry' 
      });
    }
  });

  return httpServer;
}
