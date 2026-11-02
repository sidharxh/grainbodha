import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const enquiries = pgTable("grainbodha_enquiries", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  interest: text("interest").notNull().default(""),
  business: text("business").notNull().default(""),
  quantity: text("quantity").notNull().default(""),
  city: text("city").notNull().default(""),
  message: text("message").notNull(),
});
