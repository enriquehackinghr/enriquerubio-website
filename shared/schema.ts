import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const conversations = pgTable("conversations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name"),
  email: text("email"),
  organization: text("organization"),
  eventDate: text("event_date"),
  format: text("format"),
  source: text("source").default("form"), // 'form' or 'widget'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  escalated: boolean("escalated").default(false).notNull(),
  escalatedAt: timestamp("escalated_at"),
  escalationReason: text("escalation_reason"),
});

export const messages = pgTable("messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  conversationId: varchar("conversation_id").notNull().references(() => conversations.id),
  role: text("role").notNull(), // 'user' or 'assistant'
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertConversationSchema = createInsertSchema(conversations).omit({
  id: true,
  createdAt: true,
  escalated: true,
  escalatedAt: true,
  escalationReason: true,
});

export const insertMessageSchema = createInsertSchema(messages).omit({
  id: true,
  createdAt: true,
});

export type InsertConversation = z.infer<typeof insertConversationSchema>;
export type Conversation = typeof conversations.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;

// Validation schemas for API routes
export const createAnonymousConversationSchema = z.object({
  source: z.enum(['widget', 'form']).optional().default('widget'),
});

export const updateContactSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  email: z.string().email().optional(),
  organization: z.string().min(1).max(200).optional(),
}).refine(data => data.name || data.email || data.organization, {
  message: "At least one contact field must be provided"
});

export const sendMessageSchema = z.object({
  message: z.string().min(1, "Message cannot be empty").max(10000, "Message too long"),
});

export type CreateAnonymousConversation = z.infer<typeof createAnonymousConversationSchema>;
export type UpdateContact = z.infer<typeof updateContactSchema>;
export type SendMessage = z.infer<typeof sendMessageSchema>;
