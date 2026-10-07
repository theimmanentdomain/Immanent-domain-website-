import { createHash, timingSafeEqual } from "node:crypto";
import { validateReport } from "@/lib/osint-schema";
import { publishReport } from "@/lib/osint";
import { siteUrl } from "@/lib/seo";
export const runtime = "nodejs";
export async function POST(request: Request) {
  const secret = process.env.OSINT_PUBLISH_TOKEN;
  if (!secret || !process.env.OSINT_GITHUB_TOKEN || !process.env.OSINT_GITHUB_BRANCH) return Response.json({ error: "PUBLISHER_NOT_CONFIGURED" }, { status: 503 });
  const supplied = request.headers.get("authorization")?.replace(/^Bearer /, "") || "";
  const hash = (s: string) => createHash("sha256").update(s).digest();
  if (!timingSafeEqual(hash(supplied), hash(secret))) return Response.json({ error: "UNAUTHORIZED" }, { status: 401 });
  if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({ error: "JSON_REQUIRED" }, { status: 415 });
  // Bound streamed input before parsing, including requests without Content-Length.
  const reader = request.body?.getReader(); if (!reader) return Response.json({ error: "REPORT_REQUIRED" }, { status: 400 });
  const chunks: Uint8Array[] = []; let length = 0;
  for (;;) { const chunk = await reader.read(); if (chunk.done) break; length += chunk.value.byteLength; if (length > 150000) { await reader.cancel(); return Response.json({ error: "REPORT_TOO_LARGE" }, { status: 413 }); } chunks.push(chunk.value); }
  let report;
  try { report = validateReport(JSON.parse(Buffer.concat(chunks).toString("utf8")), true); } catch (error) { return Response.json({ error: error instanceof Error ? error.message : "INVALID_REPORT" }, { status: 400 }); }
  try { const result = await publishReport(report); return Response.json({ stored: true, created: result.created, id: report.id, url: `${siteUrl}/osint/${report.id}/`, publishedAt: result.report.publishedAt, updatedAt: result.report.updatedAt, verificationRequired: "Fetch the public report page and verify its edition and sources before claiming website publication." }, { status: result.created ? 201 : 200 }); }
  catch (error) { const code = error instanceof Error ? error.message : "PUBLICATION_FAILED"; return Response.json({ error: code }, { status: code === "CORRECTION_REQUIRED" || code === "PUBLICATION_CONFLICT_RETRY" ? 409 : 502 }); }
}
