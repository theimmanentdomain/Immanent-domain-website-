import "server-only";
import type { PublicEvent } from "./content";

// Public event facts from the user's Events coordination chat, Sept. 2026.
// Personal attendance, conflicts, private notes, and guessed end times are excluded.
export const savedEvents: PublicEvent[] = [
  { slug: "harvestmoon-humabaloo", title: "Harvestmoon Humabaloo", kind: "IMDO RECOMMENDED", status: "UPCOMING", startsAt: "2026-09-26T16:00:00-04:00", endsAt: "2026-09-26T23:00:00-04:00", dateLabel: "September 26, 2026", venue: "The Peristyle, Prospect Park", address: "Brooklyn, New York", description: "An afternoon and evening gathering in Prospect Park." },
  { slug: "singing-the-alan-lomax-archive", title: "Singing the Alan Lomax Archive", kind: "IMDO RECOMMENDED", status: "UPCOMING", startsAt: "2026-11-05T19:00:00-05:00", endsAt: "2026-11-05T23:00:00-05:00", dateLabel: "November 5, 2026", venue: "St. Ann & the Holy Trinity Church", address: "Brooklyn, New York", description: "A benefit for the Association for Cultural Equity, including the New York premiere of Alan Lomax’s 1961 film Ballads, Blues, and Bluegrass." },
];
interface GoogleEvent {
  id?: string; summary?: string; description?: string; location?: string; htmlLink?: string;
  status?: string; visibility?: string;
  start?: { dateTime?: string; date?: string };
  end?: { dateTime?: string; date?: string };
}
export function normalizeGoogleEvent(raw: GoogleEvent): PublicEvent | null {
  if (!raw.id || !raw.summary || raw.status === "cancelled" || ["private", "confidential"].includes(raw.visibility ?? "")) return null;
  const startsAt = raw.start?.dateTime ?? raw.start?.date;
  if (!startsAt || Number.isNaN(Date.parse(startsAt))) return null;
  const endsAt = raw.end?.dateTime ?? raw.end?.date;
  return {
    slug: "calendar-" + raw.id.replace(/[^a-zA-Z0-9_-]/g, ""),
    title: raw.summary,
    description: (raw.description ?? "").replace(/<[^>]*>/g, "").slice(0, 4000),
    startsAt, endsAt, dateLabel: startsAt, venue: raw.location,
    kind: "IMDO RECOMMENDED", status: "UPCOMING",
    externalUrl: raw.htmlLink?.startsWith("https://www.google.com/calendar/") || raw.htmlLink?.startsWith("https://calendar.google.com/") ? raw.htmlLink : undefined,
  };
}
export function eventDate(event: PublicEvent): string {
  if (!event.startsAt) return event.dateLabel;
  const allDay = /^\d{4}-\d{2}-\d{2}$/.test(event.startsAt);
  const date = new Date(allDay ? event.startsAt + "T12:00:00Z" : event.startsAt);
  const day = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", month: "short", day: "numeric", year: "numeric" }).format(date);
  if (allDay) return day + " · Time to be announced";
  const time = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "numeric", minute: "2-digit" }).format(date);
  return day + " · " + time;
}
export function splitEvents(events: PublicEvent[], now = new Date()) {
  const day = new Intl.DateTimeFormat("en-CA", {timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit"}).format(now);
  const hasEnded = (event: PublicEvent) => {
    if (event.status === "PAST") return true;
    const end = event.endsAt ?? event.startsAt;
    if (!end) return false;
    if (/^\d{4}-\d{2}-\d{2}$/.test(end)) return event.endsAt ? end <= day : end < day;
    return Date.parse(end) < now.getTime();
  };
  const visible = events.filter(e => e.status !== "CANCELLED");
  return {
    upcoming: visible.filter(e => !hasEnded(e)).sort((a,b) => (a.startsAt ?? "").localeCompare(b.startsAt ?? "")),
    past: visible.filter(hasEnded).sort((a,b) => (b.startsAt ?? "").localeCompare(a.startsAt ?? "")),
  };
}
export async function getPublicEvents(): Promise<{events:PublicEvent[];state:"live"|"saved"|"unavailable"}> {
  const id = process.env.GOOGLE_PUBLIC_CALENDAR_ID;
  const key = process.env.GOOGLE_CALENDAR_API_KEY;
  // Opt in only after choosing a dedicated public calendar. No account/default discovery.
  if (!id || id === "primary" || !key || process.env.IMDO_CALENDAR_PUBLISH_APPROVED !== "true") return {events:savedEvents,state:"saved"};
  try {
    const result: PublicEvent[] = [];
    let pageToken: string | undefined;
    for (let page = 0; page < 10; page++) {
      const url = new URL("https://www.googleapis.com/calendar/v3/calendars/" + encodeURIComponent(id) + "/events");
      url.searchParams.set("key", key);
      url.searchParams.set("singleEvents", "true");
      url.searchParams.set("orderBy", "startTime");
      url.searchParams.set("maxResults", "2500");
      if (pageToken) url.searchParams.set("pageToken", pageToken);
      const response = await fetch(url, { next: { revalidate: 300 }, signal: AbortSignal.timeout(8000) });
      if (!response.ok) throw new Error("Calendar unavailable");
      const data = await response.json() as {items?:GoogleEvent[];nextPageToken?:string};
      for (const raw of data.items ?? []) { const event = normalizeGoogleEvent(raw); if (event) result.push(event); }
      pageToken = data.nextPageToken;
      if (!pageToken) return {events:result,state:"live"};
    }
    throw new Error("Calendar pagination exceeded");
  } catch {
    return {events:savedEvents,state:"unavailable"};
  }
}
