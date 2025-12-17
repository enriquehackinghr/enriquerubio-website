// AgentMail integration for Ada email auto-replies
// Uses Replit AgentMail connector for authentication
import { AgentMailClient } from 'agentmail';

let connectionSettings: any;

async function getCredentials() {
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
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=agentmail',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || !connectionSettings.settings.api_key) {
    throw new Error('AgentMail not connected');
  }
  return { apiKey: connectionSettings.settings.api_key };
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
export async function getAgentMailClient() {
  const { apiKey } = await getCredentials();
  return new AgentMailClient({
    apiKey: apiKey
  });
}

// Store inbox info so we can reference it
let adaInboxId: string | null = null;

export async function getOrCreateAdaInbox(): Promise<{ inboxId: string; emailAddress: string }> {
  const INBOX_USERNAME = "ada-enrique";
  const EMAIL_ADDRESS = `${INBOX_USERNAME}@agentmail.to`;
  
  if (adaInboxId) {
    return { inboxId: adaInboxId, emailAddress: EMAIL_ADDRESS };
  }

  const client = await getAgentMailClient();
  
  try {
    // Try to create inbox with a unique client_id to make it idempotent
    const inbox = await client.inboxes.create({
      username: INBOX_USERNAME,
      displayName: "Ada - Enrique Rubio's AI Assistant",
      clientId: "ada-enrique-inbox"
    });
    
    adaInboxId = inbox.inboxId;
    console.log(`AgentMail inbox created: ${EMAIL_ADDRESS} (ID: ${inbox.inboxId})`);
    return { inboxId: inbox.inboxId, emailAddress: EMAIL_ADDRESS };
  } catch (error: any) {
    // If inbox already exists, list inboxes and find ada's
    if (String(error).toLowerCase().includes('already exists')) {
      console.log('Inbox already exists, retrieving...');
      const inboxes = await client.inboxes.list();
      const adaInbox = (inboxes.inboxes as any[])?.find((i: any) => 
        i.displayName?.includes('Ada') || i.clientId === 'ada-enrique-inbox'
      );
      
      if (adaInbox) {
        adaInboxId = adaInbox.inboxId;
        console.log(`Found existing AgentMail inbox: ${EMAIL_ADDRESS}`);
        return { inboxId: adaInbox.inboxId, emailAddress: EMAIL_ADDRESS };
      }
    }
    
    throw error;
  }
}

export async function sendEmailReply(
  inboxId: string,
  messageId: string,
  replyText: string,
  replyHtml?: string
): Promise<void> {
  const client = await getAgentMailClient();
  
  await client.inboxes.messages.reply(inboxId, messageId, {
    text: replyText,
    html: replyHtml || `<p>${replyText.replace(/\n/g, '</p><p>')}</p>`
  });
  
  console.log(`Sent reply to message ${messageId}`);
}

export async function getThreadMessages(inboxId: string, threadId: string) {
  const client = await getAgentMailClient();
  const thread = await client.inboxes.threads.get(inboxId, threadId);
  return thread;
}

export { adaInboxId };
