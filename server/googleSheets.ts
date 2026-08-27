import { google } from "googleapis";
import type { BookingInquiry } from "./email";

const BOOKING_SHEET_ID =
  process.env.GOOGLE_SHEET_ID ||
  "1b5yhcH4ROHG3iKRsF2jhxbwPz5lxeY74fEYGaoYK7KU";

const BOOKING_TAB = "Submissions";
const NEWSLETTER_TAB = "Newsletter";
const BOOKING_HEADERS = [
  "Timestamp",
  "Name",
  "Organization",
  "Email",
  "Event Date",
  "Format",
  "Message",
];
const NEWSLETTER_HEADERS = ["Timestamp", "Name", "Email"];

type ServiceAccount = {
  client_email: string;
  private_key: string;
};

export function isGoogleSheetsConfigured() {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON ||
      process.env.GOOGLE_SHEETS_WEBHOOK_URL,
  );
}

function spreadsheetId() {
  return process.env.GOOGLE_SHEET_ID || BOOKING_SHEET_ID;
}

function parseServiceAccount(): ServiceAccount | null {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    return null;
  }

  const parsed = JSON.parse(raw) as ServiceAccount;
  return {
    client_email: parsed.client_email,
    private_key: parsed.private_key.replace(/\\n/g, "\n"),
  };
}

async function appendViaWebhook(payload: Record<string, unknown>) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("GOOGLE_SHEETS_WEBHOOK_URL is not set");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    redirect: "follow",
  });

  const text = await response.text();
  let body: { ok?: boolean; error?: string } = {};
  try {
    body = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(
      "Google Sheet webhook did not return JSON. Confirm the Apps Script is deployed as a web app with access set to Anyone.",
    );
  }

  if (!response.ok || !body.ok) {
    throw new Error(body.error || `Google Sheet webhook failed (${response.status})`);
  }
}

async function getSheetsClient() {
  const credentials = parseServiceAccount();
  if (!credentials) {
    return null;
  }

  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

async function ensureTab(
  sheets: ReturnType<typeof google.sheets>,
  title: string,
  headers: string[],
) {
  const id = spreadsheetId();
  const meta = await sheets.spreadsheets.get({ spreadsheetId: id });
  const exists = meta.data.sheets?.some(
    (sheet) => sheet.properties?.title === title,
  );

  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: id,
      requestBody: {
        requests: [{ addSheet: { properties: { title } } }],
      },
    });
  }

  const headerResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: id,
    range: `${title}!1:1`,
  });

  if (!headerResponse.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: id,
      range: `${title}!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [headers] },
    });
  }
}

async function appendViaServiceAccount(tab: string, headers: string[], row: string[]) {
  const sheets = await getSheetsClient();
  if (!sheets) {
    throw new Error("Google service account is not configured");
  }

  await ensureTab(sheets, tab, headers);
  await sheets.spreadsheets.values.append({
    spreadsheetId: spreadsheetId(),
    range: `${tab}!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}

async function appendRow(
  kind: "booking" | "newsletter",
  tab: string,
  headers: string[],
  row: string[],
  extra: Record<string, unknown>,
) {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    await appendViaServiceAccount(tab, headers, row);
    return;
  }

  if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    await appendViaWebhook({
      type: kind,
      spreadsheetId: spreadsheetId(),
      tab,
      headers,
      row,
      ...extra,
    });
    return;
  }

  throw new Error(
    "Google Sheets is not configured. Set GOOGLE_SHEETS_WEBHOOK_URL or GOOGLE_SERVICE_ACCOUNT_JSON.",
  );
}

export async function appendBookingToSheet(data: BookingInquiry) {
  const timestamp = new Date().toISOString();
  await appendRow(
    "booking",
    BOOKING_TAB,
    BOOKING_HEADERS,
    [
      timestamp,
      data.name,
      data.organization,
      data.email,
      data.eventDate || "Not specified",
      data.format,
      data.message,
    ],
    { ...data, timestamp },
  );

  return { success: true, spreadsheetId: spreadsheetId() };
}

export async function appendNewsletterSubscriber(data: {
  name: string;
  email: string;
}) {
  const timestamp = new Date().toISOString();
  await appendRow(
    "newsletter",
    NEWSLETTER_TAB,
    NEWSLETTER_HEADERS,
    [timestamp, data.name, data.email],
    { ...data, timestamp },
  );

  return { success: true, spreadsheetId: spreadsheetId() };
}
