import "server-only";

export type ReleaseStatus = "EDITING" | "FORTHCOMING" | "READY FOR RELEASE" | "RELEASED" | "ARCHIVED";
export type MediaType = "FILM" | "DOCUMENTARY" | "INTERVIEW SERIES" | "EVENT COVERAGE" | "PERFORMANCE" | "PUBLICATION" | "PROJECT";
export interface MediaItem { slug: string; title: string; type: MediaType; status: ReleaseStatus; summary: string; collaborators?: string[]; credits?: string[]; productionNotes?: string; thumbnail?: string; mediaUrl?: string; mediaHost?: "youtube" | "vimeo" | "external"; featured?: boolean; series?: string; }
// Internal editorial records. Never pass this collection to a client component.
const editorialMedia: MediaItem[] = [
  { slug: "anni-rossi", title: "Anni Rossi", type: "FILM", status: "EDITING", summary: "Work produced with and involving Anni Rossi.", collaborators: ["Anni Rossi"], productionNotes: "Title, credits, date, thumbnail, and final release URL: TBD.", featured: true },
  { slug: "major-malfunction", title: "Major Malfunction", type: "INTERVIEW SERIES", status: "EDITING", summary: "A recurring Washington Square Park interview series asking people what their ‘major malfunction’ is.", collaborators: ["Mia Manns"], series: "Major Malfunction", productionNotes: "Episode slate, credits, thumbnails, and final release URLs: TBD.", featured: true },
  { slug: "vangeline-france-butoh", title: "Vangeline France / Butoh", type: "DOCUMENTARY", status: "EDITING", summary: "A mini-documentary covering Vangeline France’s butoh program.", collaborators: ["Vangeline France"], productionNotes: "Editorial details, credits, thumbnail, and final release URL: TBD.", featured: true },
  { slug: "casual-encounters-on-the-rag", title: "Casual Encounters / On the Rag", type: "EVENT COVERAGE", status: "FORTHCOMING", summary: "Coverage of the August 2026 performance event.", productionNotes: "Final event details, credits, thumbnail, and approved release URL: TBD.", featured: true },
  { slug: "the-moment-is-yours", title: "The Moment Is Yours", type: "PROJECT", status: "FORTHCOMING", summary: "An active planning project concerning hypnosis, persuasion, attention, psychological operations, ritual, performance, and influence as material for artistic agency and consensual public experiment.", productionNotes: "Date, venue, participants, program, invitation, and documentation: TBD.", featured: true },
];
export function isPlayable(item: MediaItem) { return item.status === "RELEASED" && Boolean(item.mediaUrl?.startsWith("https://")); }
// Unfinished videos have no listing, detail page, preview, or public metadata.
export const mediaItems = editorialMedia.filter(item => item.type === "PROJECT" || isPlayable(item));
export function getMediaItem(slug: string) { return mediaItems.find((item) => item.slug === slug); }
export interface PublicEvent { slug: string; title: string; kind: "IMDO PRODUCED" | "IMDO RECOMMENDED" | "IMDO COVERED"; status: "UPCOMING" | "PAST" | "CANCELLED" | "TBD"; startsAt?: string; endsAt?: string; dateLabel: string; venue?: string; address?: string; participants?: string[]; description: string; externalUrl?: string; }
export const events: PublicEvent[] = [
  { slug: "the-moment-is-yours", title: "The Moment Is Yours", kind: "IMDO PRODUCED", status: "TBD", dateLabel: "DATE / TIME: TBD", venue: "TBD", description: "A developing event and consensual public performance about technologies of attention and perception." },
  { slug: "casual-encounters-on-the-rag-august-2026", title: "Casual Encounters / On the Rag", kind: "IMDO COVERED", status: "PAST", dateLabel: "AUGUST 2026", description: "Performance coverage record. Full event details: TBD." },
];
export interface Deadline { id: string; label: string; date?: string; displayDate: string; status: "OPEN" | "TBD" | "CLOSED" | "UPCOMING"; appliesTo: "SUBMISSION" | "EDITORIAL" | "RELEASE" | "PROJECT" | "EVENT" | "OPEN CALL"; }
export const deadlines: Deadline[] = [
  { id: "blame-it-on-downtown-submissions", label: "Submission deadline", date: "2026-10-23T23:59:00-04:00", displayDate: "October 23, 2026 · 11:59 p.m. New York time", status: "OPEN", appliesTo: "SUBMISSION" },
  { id: "blame-it-on-downtown-release", label: "Issue / release deadline", displayDate: "TBD", status: "TBD", appliesTo: "EDITORIAL" },
  { id: "the-moment-is-yours-production", label: "Production milestone", displayDate: "TBD", status: "TBD", appliesTo: "PROJECT" },
];
export const googleCalendarConfig = { adapter: "google-calendar-public-feed", calendarIdEnv: "GOOGLE_PUBLIC_CALENDAR_ID", apiKeyEnv: "GOOGLE_CALENDAR_API_KEY", privateCalendarsSupported: false, fallback: events } as const;
