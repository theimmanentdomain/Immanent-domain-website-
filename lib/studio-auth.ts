import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { studioStorageReady } from "@/lib/studio-store";

export const sessionName = "imdo_studio";
const sessionLifetime = 8 * 60 * 60;

export function studioConfig() {
  const secret = process.env.IMDO_EDITOR_SECRET;
  if (!secret || secret.length < 32 || secret.length > 128 || /\s/.test(secret) || !studioStorageReady()) return null;
  return { secret };
}

function hash(value: string) {
  return createHash("sha256").update(value).digest();
}

export function passwordMatches(password: string, secret: string) {
  return timingSafeEqual(hash(password), hash(secret));
}

function sign(expiration: string, secret: string) {
  return createHmac("sha256", secret).update(`imdo-studio-v1:${expiration}`).digest("base64url");
}

export function sessionCookie(secret: string) {
  const expiration = String(Math.floor(Date.now() / 1000) + sessionLifetime);
  return { value: `${expiration}.${sign(expiration, secret)}`, ...cookieOptions, maxAge: sessionLifetime };
}

export const cookieOptions = {
  name: sessionName,
  path: "/studio/",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
};

export async function isStudioOwner(secret: string) {
  const value = (await cookies()).get(sessionName)?.value;
  const match = /^(\d{10,12})\.([\w-]{43})$/.exec(value ?? "");
  if (!match) return false;
  const [, expiration, signature] = match;
  return Number(expiration) > Date.now() / 1000 && timingSafeEqual(hash(signature), hash(sign(expiration, secret)));
}

export function studioResponse(value: object, status = 200) {
  return Response.json(value, { status, headers: { "Cache-Control": "no-store" } });
}

export function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return false;
  try {
    const url = new URL(origin);
    return url.host === host && (url.protocol === "https:" || (!process.env.VERCEL_ENV && url.protocol === "http:"));
  } catch {
    return false;
  }
}

export async function readStudioJson(request: Request, maxBytes: number): Promise<unknown> {
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    throw new Error("JSON is required.");
  }
  const reader = request.body?.getReader();
  if (!reader) throw new Error("A request body is required.");
  const chunks: Uint8Array[] = [];
  let bytes = 0;
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > maxBytes) {
      await reader.cancel();
      throw new Error("This update exceeds the size limit.");
    }
    chunks.push(value);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}
