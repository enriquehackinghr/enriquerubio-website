import { 
  type User, type InsertUser,
  type Conversation, type InsertConversation,
  type Message, type InsertMessage,
  type UpdateContact,
  users, conversations, messages
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

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

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createConversation(conversation: InsertConversation): Promise<Conversation> {
    const [created] = await db.insert(conversations).values(conversation).returning();
    return created;
  }

  async createAnonymousConversation(source: string): Promise<Conversation> {
    const [created] = await db.insert(conversations).values({ source }).returning();
    return created;
  }

  async getConversation(id: string): Promise<Conversation | undefined> {
    const [conversation] = await db.select().from(conversations).where(eq(conversations.id, id));
    return conversation;
  }

  async getConversationByEmail(email: string): Promise<Conversation | undefined> {
    const [conversation] = await db
      .select()
      .from(conversations)
      .where(eq(conversations.email, email))
      .orderBy(desc(conversations.createdAt))
      .limit(1);
    return conversation;
  }

  async updateConversationEscalation(id: string, reason: string): Promise<void> {
    await db
      .update(conversations)
      .set({ 
        escalated: true, 
        escalatedAt: new Date(),
        escalationReason: reason 
      })
      .where(eq(conversations.id, id));
  }

  async updateConversationContact(id: string, data: UpdateContact): Promise<void> {
    await db
      .update(conversations)
      .set(data)
      .where(eq(conversations.id, id));
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const [created] = await db.insert(messages).values(message).returning();
    return created;
  }

  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return db
      .select()
      .from(messages)
      .where(eq(messages.conversationId, conversationId))
      .orderBy(messages.createdAt);
  }
}

export const storage = new DatabaseStorage();
