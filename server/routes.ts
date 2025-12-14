import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { appendBookingToSheet } from "./googleSheets";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Booking form submission endpoint
  app.post('/api/booking', async (req, res) => {
    try {
      const { name, organization, email, eventDate, format, message } = req.body;

      // Validate required fields
      if (!name || !organization || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          error: 'Missing required fields' 
        });
      }

      // Append to Google Sheets
      const result = await appendBookingToSheet({
        name,
        organization,
        email,
        eventDate: eventDate || '',
        format: format || 'Not specified',
        message
      });

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

  return httpServer;
}