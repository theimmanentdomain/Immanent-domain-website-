import Link from "next/link";
import type { PublicEvent } from "@/lib/content";
import { eventDate } from "@/lib/calendar";
export default function EventListing({event}:{event:PublicEvent}) {
  return <article className="calendar-listing"><div className="calendar-date">{eventDate(event)}</div><div><p className="kicker">{event.kind === "IMDO PRODUCED" ? "IMDO presents" : "Selected event"}</p><h3><Link href={"/events/" + event.slug}>{event.title} ↗</Link></h3>{event.venue && <p>{event.venue}</p>}<p>{event.description}</p></div></article>;
}
