import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest } from "next/server";

export const ADMIN_COOKIE = "grainbodha_admin_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

function signature(expiresAt: string) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not configured.");
  return createHmac("sha256", secret).update(expiresAt).digest("base64url");
}

export function credentialsConfigured() {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET);
}

export function credentialsMatch(username: unknown, password: unknown) {
  if (!credentialsConfigured() || typeof username !== "string" || typeof password !== "string") return false;
  const expectedUser = Buffer.from(process.env.ADMIN_USERNAME!);
  const submittedUser = Buffer.from(username);
  const expectedPassword = Buffer.from(process.env.ADMIN_PASSWORD!);
  const submittedPassword = Buffer.from(password);
  return expectedUser.length === submittedUser.length && expectedPassword.length === submittedPassword.length && timingSafeEqual(expectedUser, submittedUser) && timingSafeEqual(expectedPassword, submittedPassword);
}

export function createAdminSession() {
  const expiresAt = String(Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS);
  return { value: `${expiresAt}.${signature(expiresAt)}`, maxAge: SESSION_DURATION_SECONDS };
}

export function hasAdminSession(request: NextRequest) {
  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  if (!token || !process.env.ADMIN_SESSION_SECRET) return false;
  const [expiresAt, receivedSignature] = token.split(".");
  if (!expiresAt || !receivedSignature || Number(expiresAt) <= Math.floor(Date.now() / 1000)) return false;
  const expectedSignature = Buffer.from(signature(expiresAt));
  const actualSignature = Buffer.from(receivedSignature);
  return expectedSignature.length === actualSignature.length && timingSafeEqual(expectedSignature, actualSignature);
}
