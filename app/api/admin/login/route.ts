import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, createAdminSession, credentialsConfigured, credentialsMatch } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  if (!credentialsConfigured()) return NextResponse.json({ error: "Admin login is not configured. Set the admin environment variables in Vercel." }, { status: 503 });
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || !credentialsMatch(body.username, body.password)) return NextResponse.json({ error: "The username or password is incorrect." }, { status: 401 });
  const session = createAdminSession();
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE, session.value, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: session.maxAge });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 0 });
  return response;
}
