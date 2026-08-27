// Google Sheets Integration (via Replit Connector)
import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-sheet',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Google Sheet not connected');
  }
  return accessToken;
}

// Get a fresh Google Sheets client (never cache - tokens expire)
export async function getGoogleSheetsClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.sheets({ version: 'v4', auth: oauth2Client });
}

// Get Google Drive client to create new spreadsheets
export async function getGoogleDriveClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.drive({ version: 'v3', auth: oauth2Client });
}

// Store the spreadsheet ID after creation
let bookingSpreadsheetId: string | null = null;

export async function getOrCreateBookingSheet(): Promise<string> {
  // If we already have the ID, return it
  if (bookingSpreadsheetId) {
    return bookingSpreadsheetId;
  }

  const sheets = await getGoogleSheetsClient();
  const drive = await getGoogleDriveClient();

  // Search for existing "Booking Inquiries" spreadsheet
  const searchResponse = await drive.files.list({
    q: "name='Booking Inquiries' and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false",
    fields: 'files(id, name)',
    spaces: 'drive'
  });

  if (searchResponse.data.files && searchResponse.data.files.length > 0) {
    bookingSpreadsheetId = searchResponse.data.files[0].id!;
    return bookingSpreadsheetId;
  }

  // Create new spreadsheet
  const createResponse = await sheets.spreadsheets.create({
    requestBody: {
      properties: {
        title: 'Booking Inquiries'
      },
      sheets: [{
        properties: {
          title: 'Submissions'
        }
      }]
    }
  });

  bookingSpreadsheetId = createResponse.data.spreadsheetId!;

  // Add header row
  await sheets.spreadsheets.values.update({
    spreadsheetId: bookingSpreadsheetId,
    range: 'Submissions!A1:G1',
    valueInputOption: 'RAW',
    requestBody: {
      values: [['Timestamp', 'Name', 'Organization', 'Email', 'Event Date', 'Format', 'Message']]
    }
  });

  return bookingSpreadsheetId;
}

let newsletterSpreadsheetId: string | null = null;

export async function getOrCreateNewsletterSheet(): Promise<string> {
  if (newsletterSpreadsheetId) return newsletterSpreadsheetId;

  const sheets = await getGoogleSheetsClient();
  const drive = await getGoogleDriveClient();

  const searchResponse = await drive.files.list({
    q: "name='Book Newsletter Subscribers' and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false",
    fields: 'files(id, name)',
    spaces: 'drive'
  });

  if (searchResponse.data.files && searchResponse.data.files.length > 0) {
    newsletterSpreadsheetId = searchResponse.data.files[0].id!;
    return newsletterSpreadsheetId;
  }

  const createResponse = await sheets.spreadsheets.create({
    requestBody: {
      properties: { title: 'Book Newsletter Subscribers' },
      sheets: [{ properties: { title: 'Subscribers' } }]
    }
  });

  newsletterSpreadsheetId = createResponse.data.spreadsheetId!;

  await sheets.spreadsheets.values.update({
    spreadsheetId: newsletterSpreadsheetId,
    range: 'Subscribers!A1:C1',
    valueInputOption: 'RAW',
    requestBody: { values: [['Timestamp', 'Name', 'Email']] }
  });

  return newsletterSpreadsheetId;
}

export async function appendNewsletterSubscriber(data: { name: string; email: string }) {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = await getOrCreateNewsletterSheet();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Subscribers!A:C',
    valueInputOption: 'RAW',
    requestBody: {
      values: [[new Date().toISOString(), data.name, data.email]]
    }
  });

  return { success: true };
}

export async function appendBookingToSheet(data: {
  name: string;
  organization: string;
  email: string;
  eventDate: string;
  format: string;
  message: string;
}) {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = await getOrCreateBookingSheet();

  const timestamp = new Date().toISOString();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Submissions!A:G',
    valueInputOption: 'RAW',
    requestBody: {
      values: [[
        timestamp,
        data.name,
        data.organization,
        data.email,
        data.eventDate || 'Not specified',
        data.format,
        data.message
      ]]
    }
  });

  return { success: true, spreadsheetId };
}