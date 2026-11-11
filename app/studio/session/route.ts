import { NextResponse } from "next/server";
import {
  cookieOptions, passwordMatches, readStudioJson, sameOrigin, sessionCookie, studioConfig, studioResponse,
} from "@/lib/studio-auth";

export async function POST(request: Request) {
  if (!sameOrigin(request)) return studioResponse({ error: "Open Studio from the IMDO website." }, 403);
  const config = studioConfig();
  if (!config) return studioResponse({ error: "Studio setup is incomplete." }, 503);
  let data: { password?: unknown } | null;
  try {
    data = await readStudioJson(request, 1024) as typeof data;
  } catch {
    return studioResponse({ error: "Enter the Studio password." }, 400);
  }
  if (typeof data?.password !== "string" || !passwordMatches(data.password, config.secret)) {
    return studioResponse({ error: "That password is incorrect." }, 401);
  }
  const response = NextResponse.json({ signedIn: true }, { headers: { "Cache-Control": "no-store" } });
  response.cookies.set(sessionCookie(config.secret));
  return response;
}

export async function DELETE(request: Request) {
  if (!sameOrigin(request)) return studioResponse({ error: "Open Studio from the IMDO website." }, 403);
  const response = NextResponse.json({ signedIn: false }, { headers: { "Cache-Control": "no-store" } });
  response.cookies.set({ ...cookieOptions, value: "", maxAge: 0 });
  return response;
}
