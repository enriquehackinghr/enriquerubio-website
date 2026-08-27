const FROM_EMAIL = "enrique@enriquerubio.ai";
const FROM_HEADER = `Enrique Rubio <${FROM_EMAIL}>`;
const NOTIFY_EMAIL = "enrique@hackinghr.io";

export type BookingInquiry = {
  name: string;
  organization: string;
  email: string;
  eventDate: string;
  format: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function notifyEmail() {
  return process.env.NOTIFICATION_EMAIL || NOTIFY_EMAIL;
}

function fromHeader() {
  const raw = process.env.FROM_EMAIL || FROM_EMAIL;
  if (raw.includes("<")) {
    return raw;
  }
  return `Enrique Rubio <${raw}>`;
}

async function sendResendEmail(payload: {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromHeader() || FROM_HEADER,
      to: [payload.to],
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
      reply_to: payload.replyTo || FROM_EMAIL,
    }),
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message =
      (body as { message?: string }).message ||
      `Resend request failed with status ${response.status}`;
    throw new Error(message);
  }

  return body;
}

export async function sendBookingEmails(data: BookingInquiry) {
  const eventDate = data.eventDate || "Not specified";
  const format = data.format || "Not specified";

  await Promise.all([
    sendResendEmail({
      to: data.email,
      subject: "We received your speaking inquiry",
      replyTo: notifyEmail(),
      text: `Hi ${data.name},

Thank you for reaching out about a speaking engagement with Enrique Rubio.

We received your inquiry and will reply within 24 hours.

Enrique Rubio
enriquerubio.ai`,
      html: `<p>Hi ${escapeHtml(data.name)},</p>
<p>Thank you for reaching out about a speaking engagement with Enrique Rubio.</p>
<p>We received your inquiry and will reply within 24 hours.</p>
<p>Enrique Rubio<br/>enriquerubio.ai</p>`,
    }),
    sendResendEmail({
      to: notifyEmail(),
      subject: `New speaking inquiry from ${data.name} at ${data.organization}`,
      replyTo: data.email,
      text: `New speaking inquiry from enriquerubio.ai

Name: ${data.name}
Organization: ${data.organization}
Email: ${data.email}
Event date: ${eventDate}
Format: ${format}

Message:
${data.message}`,
      html: `<p>New speaking inquiry from enriquerubio.ai</p>
<p><strong>Name:</strong> ${escapeHtml(data.name)}<br/>
<strong>Organization:</strong> ${escapeHtml(data.organization)}<br/>
<strong>Email:</strong> ${escapeHtml(data.email)}<br/>
<strong>Event date:</strong> ${escapeHtml(eventDate)}<br/>
<strong>Format:</strong> ${escapeHtml(format)}</p>
<p><strong>Message:</strong><br/>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>`,
    }),
  ]);
}

export async function sendNewsletterEmails(data: { name: string; email: string }) {
  await Promise.all([
    sendResendEmail({
      to: data.email,
      subject: "You're on the book list",
      replyTo: notifyEmail(),
      text: `Hi ${data.name},

Thanks for signing up. We'll send book updates from this address.

Enrique Rubio
enriquerubio.ai`,
      html: `<p>Hi ${escapeHtml(data.name)},</p>
<p>Thanks for signing up. We'll send book updates from this address.</p>
<p>Enrique Rubio<br/>enriquerubio.ai</p>`,
    }),
    sendResendEmail({
      to: notifyEmail(),
      subject: `New book newsletter signup: ${data.name}`,
      replyTo: data.email,
      text: `New book newsletter signup from enriquerubio.ai

Name: ${data.name}
Email: ${data.email}`,
      html: `<p>New book newsletter signup from enriquerubio.ai</p>
<p><strong>Name:</strong> ${escapeHtml(data.name)}<br/>
<strong>Email:</strong> ${escapeHtml(data.email)}</p>`,
    }),
  ]);
}
