import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, business, quantity, city, message } = body;

    if (typeof name !== "string" || !name.trim() || typeof email !== "string" || !email.trim() || typeof phone !== "string" || !phone.trim() || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Name, email, phone and message are required." }, { status: 400 });
    }

    const missing = ["GOOGLE_CLIENT_EMAIL", "GOOGLE_PRIVATE_KEY", "SHEET_ID"].filter((key) => !process.env[key]);
    if (missing.length) {
      console.error(`Contact API misconfiguration: missing ${missing.join(", ")}`);
      return NextResponse.json({ error: "The enquiry form is not configured yet. Please contact Grainbodha directly by phone or email." }, { status: 500 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "Contacts!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, name.trim(), email.trim(), phone.trim(), typeof interest === "string" ? interest : "", typeof business === "string" ? business : "", typeof quantity === "string" ? quantity : "", typeof city === "string" ? city : "", message.trim()]],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "We couldn't send your enquiry. Please try again or contact Grainbodha directly." }, { status: 500 });
  }
}
