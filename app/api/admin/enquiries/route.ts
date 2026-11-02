import { NextRequest, NextResponse } from "next/server";
import { desc } from "drizzle-orm";
import { enquiries } from "@/db/schema";
import { ensureEnquiriesTable, getDatabase } from "@/db";
import { hasAdminSession } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  if (!hasAdminSession(request)) return NextResponse.json({ error: "Please sign in to view enquiries." }, { status: 401 });
  try {
    await ensureEnquiriesTable();
    const { db } = getDatabase();
    const records = await db.select().from(enquiries).orderBy(desc(enquiries.createdAt)).limit(500);
    return NextResponse.json({ enquiries: records });
  } catch (error) {
    console.error("Admin enquiries API error:", error);
    return NextResponse.json({ error: "Couldn't load enquiries. Check database configuration and try again." }, { status: 503 });
  }
}
