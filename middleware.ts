import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Runs on all routes to refresh Supabase auth cookies.
// Auth redirect only applies to /dashboard, /apply, /account.
// All public routes (/, /magazine, /map, /projects, /events, /archive, /submit, /about, etc.)
// are accessible without authentication.
export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
