// Gmail Integration (via Replit Connector)
import { google } from 'googleapis';

let connectionSettings: any;

async function getConnectionSettings() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings;
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
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-mail',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Gmail not connected');
  }
  return connectionSettings;
}

async function getAccessToken() {
  const settings = await getConnectionSettings();
  return settings?.settings?.access_token || settings.settings?.oauth?.credentials?.access_token;
}

export async function getConnectedEmail(): Promise<string | null> {
  // First check environment variable
  if (process.env.NOTIFICATION_EMAIL) {
    return process.env.NOTIFICATION_EMAIL;
  }
  
  try {
    const settings = await getConnectionSettings();
    console.log('Gmail connection settings keys:', Object.keys(settings?.settings || {}));
    return settings?.settings?.email || settings?.settings?.oauth?.email || settings?.settings?.user_email || null;
  } catch {
    return null;
  }
}

async function getGmailClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.gmail({ version: 'v1', auth: oauth2Client });
}

export async function sendBookingNotificationEmail(data: {
  name: string;
  organization: string;
  email: string;
  eventDate: string;
  format: string;
  message: string;
}) {
  const gmail = await getGmailClient();

  const emailContent = `
New Booking Inquiry Received!

Name: ${data.name}
Organization: ${data.organization}
Email: ${data.email}
Event Date: ${data.eventDate || 'Not specified'}
Format: ${data.format}

Message:
${data.message}

---
This notification was sent from your speaker website contact form.
Reply directly to ${data.email} to respond to this inquiry.
  `.trim();

  const subject = `New Speaking Inquiry from ${data.name} at ${data.organization}`;
  
  // Get the authenticated user's email address from connection settings
  const myEmail = await getConnectedEmail();
  if (!myEmail) {
    throw new Error('Could not determine recipient email address. Please set NOTIFICATION_EMAIL environment variable.');
  }

  const rawMessage = [
    'Content-Type: text/plain; charset="UTF-8"',
    'MIME-Version: 1.0',
    `To: ${myEmail}`,
    `Subject: ${subject}`,
    `Reply-To: ${data.email}`,
    '',
    emailContent
  ].join('\r\n');

  const encodedMessage = Buffer.from(rawMessage)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage
    }
  });

  return { success: true };
}

export async function sendEmailToAddress(
  toEmail: string,
  subject: string,
  body: string
) {
  const gmail = await getGmailClient();

  const rawMessage = [
    'Content-Type: text/plain; charset="UTF-8"',
    'MIME-Version: 1.0',
    `To: ${toEmail}`,
    `Subject: ${subject}`,
    '',
    body
  ].join('\r\n');

  const encodedMessage = Buffer.from(rawMessage)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage
    }
  });

  return { success: true };
}
