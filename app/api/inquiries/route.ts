import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data || typeof data !== "object") return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  const { name, phone, email, business, quantity, city, message, variant } = data as Record<string, unknown>;
  if (typeof name !== "string" || !name.trim() || typeof phone !== "string" || !phone.trim() || typeof message !== "string" || !message.trim()) return NextResponse.json({ error: "Please provide your name, phone number and message." }, { status: 400 });
  const recipient = process.env.CONTACT_EMAIL ?? "grainbodhaglobalfood@gmail.com";
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!recipient || !apiKey || !from) return NextResponse.json({ error: "The enquiry service is not configured yet. Please contact Grainbodha directly." }, { status: 503 });
  const resend = new Resend(apiKey);
  const isBulk = variant === "bulk";
  const subject = isBulk ? `Website bulk enquiry from ${name.trim()}` : `Website order enquiry from ${name.trim()}`;
  const lines = [ `Enquiry type: ${isBulk ? "Bulk / business" : "Product / order"}`, `Name: ${name.trim()}`, `Phone: ${phone.trim()}`, `Email: ${typeof email === "string" && email.trim() ? email.trim() : "Not provided"}`, ...(isBulk ? [`Business: ${typeof business === "string" && business.trim() ? business.trim() : "Not provided"}`, `Estimated quantity: ${typeof quantity === "string" && quantity.trim() ? quantity.trim() : "Not provided"}`, `Delivery city: ${typeof city === "string" && city.trim() ? city.trim() : "Not provided"}`] : []), "", "Message:", message.trim() ];
  const result = await resend.emails.send({ from, to: recipient, replyTo: typeof email === "string" && email.includes("@") ? email : undefined, subject, text: lines.join("\n") });
  if (result.error) return NextResponse.json({ error: "We couldn't send your enquiry right now. Please try again shortly." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
