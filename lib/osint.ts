import "server-only";
import { cache } from "react";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { reportIdPattern, validateReport, type IntelReport } from "./osint-schema";

const repository = "theimmanentdomain/Immanent-domain-website-";
const directory = "data/osint/reports";
const api = `https://api.github.com/repos/${repository}`;
const readHeaders = { Accept: "application/vnd.github+json", "User-Agent": "IMDO-OSINT", "X-GitHub-Api-Version": "2022-11-28" };
async function publicFetch(url: string) { return fetch(url, { headers: readHeaders, next: { revalidate: 60 }, signal: AbortSignal.timeout(10000) }); }
const branch = cache(async () => {
  if (process.env.OSINT_GITHUB_BRANCH) return process.env.OSINT_GITHUB_BRANCH;
  const res = await publicFetch(api); if (!res.ok) throw new Error("Report source unavailable.");
  return (await res.json()).default_branch as string;
});
export const reportIds = cache(async (): Promise<{ ids: string[]; unavailable: boolean }> => {
  try {
    const res = await publicFetch(`${api}/git/trees/${encodeURIComponent(await branch())}?recursive=1`);
    if (!res.ok) throw new Error("Report archive unavailable.");
    const tree = await res.json(); if (tree.truncated) throw new Error("Incomplete report archive.");
    const ids = tree.tree.filter((item: {path: string; type: string}) => item.type === "blob" && item.path.startsWith(directory + "/") && item.path.endsWith(".json"))
      .map((item: {path: string}) => item.path.slice(directory.length + 1, -5)).filter((id: string) => reportIdPattern.test(id)).sort().reverse();
    return { ids, unavailable: false };
  } catch {
    try { const files = await readdir(path.join(process.cwd(), directory)); return { ids: files.filter(f => f.endsWith(".json") && reportIdPattern.test(f.slice(0, -5))).map(f => f.slice(0, -5)).sort().reverse(), unavailable: true }; }
    catch { return { ids: [], unavailable: true }; }
  }
});
export const getReport = cache(async (id: string): Promise<IntelReport | null> => {
  if (!reportIdPattern.test(id)) return null;
  try {
    const res = await publicFetch(`https://raw.githubusercontent.com/${repository}/${encodeURIComponent(await branch())}/${directory}/${id}.json`);
    if (res.ok) return validateReport(await res.json());
  } catch { /* Use an already-published bundled report when remote reads fail. */ }
  try { return validateReport(JSON.parse(await readFile(path.join(process.cwd(), directory, id + ".json"), "utf8"))); } catch { return null; }
});
export function editionLabel(id: string) {
  return `${id.slice(0, 10)} · ${id.slice(11, 13)}:${id.slice(13, 15)} New York · ${id.endsWith("research") ? "Machine Intuition" : "OSINT"}`;
}
export async function publishReport(report: IntelReport): Promise<{ created: boolean; report: IntelReport }> {
  const token = process.env.OSINT_GITHUB_TOKEN;
  const targetBranch = process.env.OSINT_GITHUB_BRANCH;
  if (!token || !targetBranch) throw new Error("PUBLISHER_NOT_CONFIGURED");
  const headers = { ...readHeaders, Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
  const endpoint = `${api}/contents/${directory}/${report.id}.json`;
  const existing = await fetch(`${endpoint}?ref=${encodeURIComponent(targetBranch)}`, { headers, cache: "no-store", signal: AbortSignal.timeout(10000) });
  let sha: string | undefined;
  if (existing.ok) {
    const file = await existing.json(); sha = file.sha;
    const previous = validateReport(JSON.parse(Buffer.from(file.content, "base64").toString("utf8")));
    const content = (r: IntelReport) => JSON.stringify({ ...r, publishedAt: "", updatedAt: undefined });
    if (content(previous) === content(report)) return { created: false, report: previous };
    if (!report.correction) throw new Error("CORRECTION_REQUIRED");
    report.publishedAt = previous.publishedAt; report.updatedAt = new Date().toISOString();
  } else if (existing.status !== 404) throw new Error("PUBLISHER_ACCESS_FAILED");
  else report.publishedAt = new Date().toISOString();
  const saved = await fetch(endpoint, { method: "PUT", headers, body: JSON.stringify({ message: `${sha ? "Correct" : "Publish"} IMDO OSINT ${report.id}`, branch: targetBranch, sha, content: Buffer.from(JSON.stringify(report, null, 2) + "\n").toString("base64") }), signal: AbortSignal.timeout(15000) });
  if (saved.status === 409 || saved.status === 422) throw new Error("PUBLICATION_CONFLICT_RETRY");
  if (!saved.ok) throw new Error("PUBLICATION_FAILED");
  // Read back the durable file before confirming storage. Public rendering is verified by the producer separately.
  const check = await fetch(`${endpoint}?ref=${encodeURIComponent(targetBranch)}`, { headers, cache: "no-store", signal: AbortSignal.timeout(10000) });
  if (!check.ok) throw new Error("PUBLICATION_READBACK_FAILED");
  const stored = await check.json();
  if (Buffer.from(stored.content, "base64").toString("utf8").trim() !== JSON.stringify(report, null, 2)) throw new Error("PUBLICATION_READBACK_FAILED");
  return { created: !sha, report };
}
