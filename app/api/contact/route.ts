import { NextResponse } from "next/server";
import { enquiries } from "@/db/schema";
import { ensureEnquiriesTable, getDatabase } from "@/db";

const clean = (value: unknown, maxLength = 2000) => typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid enquiry submission." }, { status: 400 });
    const name = clean(body.name, 120);
    const email = clean(body.email, 254);
    const phone = clean(body.phone, 40);
    const message = clean(body.message, 4000);
    if (!name || !email || !phone || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid name, email, phone number and message." }, { status: 400 });
    }
    const interest = clean(body.interest, 160);
    const business = clean(body.business, 160);
    const quantity = clean(body.quantity, 100);
    const city = clean(body.city, 120);

    await ensureEnquiriesTable();
    const { db } = getDatabase();
    await db.insert(enquiries).values({ name, email, phone, interest, business, quantity, city, message });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact API error:", error);
    const message = error instanceof Error && error.message === "DATABASE_URL is not configured."
      ? "The enquiry form is not configured yet. Please contact Grainbodha directly."
      : "We couldn't send your enquiry. Please try again or contact Grainbodha directly.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
