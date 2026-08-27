import { 
  type User, type InsertUser,
  type Conversation, type InsertConversation,
  type Message, type InsertMessage,
  type UpdateContact,
  users, conversations, messages
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createConversation(conversation: InsertConversation): Promise<Conversation>;
  createAnonymousConversation(source: string): Promise<Conversation>;
  getConversation(id: string): Promise<Conversation | undefined>;
  getConversationByEmail(email: string): Promise<Conversation | undefined>;
  updateConversationEscalation(id: string, reason: string): Promise<void>;
  updateConversationContact(id: string, data: UpdateContact): Promise<void>;
  
  createMessage(message: InsertMessage): Promise<Message>;
  getMessagesByConversation(conversationId: string): Promise<Message[]>;
}

type Database = NonNullable<typeof db>;

export class DatabaseStorage implements IStorage {
  constructor(private database: Database) {}

  async getUser(id: string): Promise<User | undefined> {
    const [user] = await this.database.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await this.database.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await this.database.insert(users).values(insertUser).returning();
    return user;
  }

  async createConversation(conversation: InsertConversation): Promise<Conversation> {
    const [created] = await this.database.insert(conversations).values(conversation).returning();
    return created;
  }

  async createAnonymousConversation(source: string): Promise<Conversation> {
    const [created] = await this.database.insert(conversations).values({ source }).returning();
    return created;
  }

  async getConversation(id: string): Promise<Conversation | undefined> {
    const [conversation] = await this.database.select().from(conversations).where(eq(conversations.id, id));
    return conversation;
  }

  async getConversationByEmail(email: string): Promise<Conversation | undefined> {
    const [conversation] = await this.database
      .select()
      .from(conversations)
      .where(eq(conversations.email, email))
      .orderBy(desc(conversations.createdAt))
      .limit(1);
    return conversation;
  }

  async updateConversationEscalation(id: string, reason: string): Promise<void> {
    await this.database
      .update(conversations)
      .set({ 
        escalated: true, 
        escalatedAt: new Date(),
        escalationReason: reason 
      })
      .where(eq(conversations.id, id));
  }

  async updateConversationContact(id: string, data: UpdateContact): Promise<void> {
    await this.database
      .update(conversations)
      .set(data)
      .where(eq(conversations.id, id));
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const [created] = await this.database.insert(messages).values(message).returning();
    return created;
  }

  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return this.database
      .select()
      .from(messages)
      .where(eq(messages.conversationId, conversationId))
      .orderBy(messages.createdAt);
  }
}

class MemoryStorage implements IStorage {
  private users = new Map<string, User>();
  private conversations = new Map<string, Conversation>();
  private messages = new Map<string, Message>();

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find((user) => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = { id: randomUUID(), ...insertUser };
    this.users.set(user.id, user);
    return user;
  }

  async createConversation(conversation: InsertConversation): Promise<Conversation> {
    const created: Conversation = {
      id: randomUUID(),
      name: conversation.name ?? null,
      email: conversation.email ?? null,
      organization: conversation.organization ?? null,
      eventDate: conversation.eventDate ?? null,
      format: conversation.format ?? null,
      source: conversation.source ?? "form",
      createdAt: new Date(),
      escalated: false,
      escalatedAt: null,
      escalationReason: null,
    };
    this.conversations.set(created.id, created);
    return created;
  }

  async createAnonymousConversation(source: string): Promise<Conversation> {
    return this.createConversation({ source });
  }

  async getConversation(id: string): Promise<Conversation | undefined> {
    return this.conversations.get(id);
  }

  async getConversationByEmail(email: string): Promise<Conversation | undefined> {
    return Array.from(this.conversations.values())
      .filter((conversation) => conversation.email === email)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0];
  }

  async updateConversationEscalation(id: string, reason: string): Promise<void> {
    const conversation = this.conversations.get(id);
    if (!conversation) return;
    this.conversations.set(id, {
      ...conversation,
      escalated: true,
      escalatedAt: new Date(),
      escalationReason: reason,
    });
  }

  async updateConversationContact(id: string, data: UpdateContact): Promise<void> {
    const conversation = this.conversations.get(id);
    if (!conversation) return;
    this.conversations.set(id, {
      ...conversation,
      ...data,
    });
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const created: Message = {
      id: randomUUID(),
      conversationId: message.conversationId,
      role: message.role,
      content: message.content,
      createdAt: new Date(),
    };
    this.messages.set(created.id, created);
    return created;
  }

  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return Array.from(this.messages.values())
      .filter((message) => message.conversationId === conversationId)
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }
}

export const storage: IStorage = db
  ? new DatabaseStorage(db)
  : new MemoryStorage();
