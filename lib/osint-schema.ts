export const osintSubjects = ["Wars and Armed Conflicts", "Sociopolitical Shifts", "NYC Affairs", "The State of Downtown", "Occult Practice & Machine Intuition"] as const;
export const osintEditions = ["05:55", "11:11", "15:33", "21:21", "23:23"] as const;
export type IntelEntry = { title: string; sourceUrl: string; sourceDate: string; eventDate?: string; development: string; significance: string; implications?: string; uncertainty?: string };
export type IntelSection = { title: string; entries: IntelEntry[]; shortfall?: string };
export type IntelReport = { id: string; series: "osint" | "research"; scheduledAt: string; publishedAt: string; title: string; sections: IntelSection[]; nextMoves: string[]; correction?: string; updatedAt?: string };
export const reportIdPattern = /^\d{4}-\d{2}-\d{2}-(0555|1111|1533|2121|2323)-osint$|^\d{4}-\d{2}-\d{2}-1130-research$/;

function text(value: unknown, max = 8000): value is string { return typeof value === "string" && value.trim().length > 0 && value.length <= max; }
export function publicUrl(value: unknown): value is string {
  if (!text(value, 2048)) return false;
  try { const url = new URL(value); return url.protocol === "https:" && !url.username && !url.password && !/^(localhost|127\.|\[|0\.)/.test(url.hostname); } catch { return false; }
}
export function validateReport(value: unknown, draft = false): IntelReport {
  if (!value || typeof value !== "object") throw new Error("A report object is required.");
  const r = value as IntelReport;
  if (!draft && (!text(r.publishedAt, 40) || !Number.isFinite(Date.parse(r.publishedAt)))) throw new Error("Published reports require their actual publication timestamp.");
  if (r.updatedAt !== undefined && (!text(r.updatedAt, 40) || !Number.isFinite(Date.parse(r.updatedAt)))) throw new Error("Invalid update timestamp.");
  if (!reportIdPattern.test(r.id) || !["osint", "research"].includes(r.series) || !r.id.endsWith("-" + r.series)) throw new Error("Invalid edition ID or series.");
  if (!text(r.title, 240) || !text(r.scheduledAt, 40) || !Number.isFinite(Date.parse(r.scheduledAt)) || !/[Zz]|[+-]\d{2}:\d{2}$/.test(r.scheduledAt)) throw new Error("Title and a timestamp with timezone are required.");
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date(r.scheduledAt));
  const part = (name: string) => parts.find(p => p.type === name)?.value;
  if (r.id !== `${part("year")}-${part("month")}-${part("day")}-${part("hour")}${part("minute")}-${r.series}`) throw new Error("Edition ID must match its New York schedule.");
  if (!Array.isArray(r.sections) || r.sections.length !== (r.series === "osint" ? 5 : 1)) throw new Error("OSINT requires five sections; research requires one.");
  const seen = new Set<string>();
  r.sections.forEach((section, index) => {
    if (!text(section.title, 100) || (r.series === "osint" && section.title !== osintSubjects[index])) throw new Error("Incorrect section names or order.");
    if (!Array.isArray(section.entries) || section.entries.length > 5 || (section.entries.length < (r.series === "osint" ? 5 : 3) && !text(section.shortfall, 2000))) throw new Error("Explain any article shortfall; maximum five per section.");
    for (const entry of section.entries) {
      if (!text(entry.title, 300) || !publicUrl(entry.sourceUrl) || !text(entry.sourceDate, 100) || !text(entry.development) || !text(entry.significance)) throw new Error("Every entry needs a title, public HTTPS source, date, development and significance.");
      if (seen.has(entry.sourceUrl)) throw new Error("Duplicate source entry.");
      seen.add(entry.sourceUrl);
      for (const optional of [entry.eventDate, entry.implications, entry.uncertainty]) if (optional !== undefined && !text(optional)) throw new Error("Invalid optional entry field.");
    }
    if (section.shortfall !== undefined && !text(section.shortfall, 2000)) throw new Error("Invalid shortfall explanation.");
  });
  if (!Array.isArray(r.nextMoves) || r.nextMoves.length > 3 || r.nextMoves.some(move => !text(move, 2000))) throw new Error("Provide up to three next moves.");
  if (r.correction !== undefined && !text(r.correction, 4000)) throw new Error("Invalid correction note.");
  // Copy only the published schema; do not store extra producer metadata or credentials.
  return { id: r.id, series: r.series, title: r.title.trim(), scheduledAt: r.scheduledAt, publishedAt: r.publishedAt, sections: r.sections.map(s => ({ title: s.title, shortfall: s.shortfall, entries: s.entries.map(e => ({ title: e.title, sourceUrl: e.sourceUrl, sourceDate: e.sourceDate, eventDate: e.eventDate, development: e.development, significance: e.significance, implications: e.implications, uncertainty: e.uncertainty })) })), nextMoves: r.nextMoves, correction: r.correction, updatedAt: r.updatedAt };
}
