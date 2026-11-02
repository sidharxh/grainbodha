import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

export function getDatabase() {
  if (!connectionString) throw new Error("DATABASE_URL is not configured.");
  const client = neon(connectionString);
  return { client, db: drizzle(client, { schema }) };
}

export async function ensureEnquiriesTable() {
  const { client } = getDatabase();
  await client`CREATE TABLE IF NOT EXISTS grainbodha_enquiries (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    interest TEXT NOT NULL DEFAULT '',
    business TEXT NOT NULL DEFAULT '',
    quantity TEXT NOT NULL DEFAULT '',
    city TEXT NOT NULL DEFAULT '',
    message TEXT NOT NULL
  )`;
}
