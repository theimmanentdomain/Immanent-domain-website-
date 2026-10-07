import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublicEvents, eventDate } from "@/lib/calendar";
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: { params: Promise<{slug: string}> }): Promise<Metadata> {
  const { slug } = await params;
  const event = (await getPublicEvents()).events.find(item => item.slug === slug);
  return event ? pageMetadata(event.title + " | The Immanent Domain", event.description, "/events/" + slug) : { robots: { index: false } };
}
export default async function EventDetail({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params;
  const event = (await getPublicEvents()).events.find(item => item.slug === slug);
  if (!event) notFound();
  return <main className="editorial-page"><header><p className="kicker">{event.kind === "IMDO PRODUCED" ? "An IMDO event" : "Selected event"}</p><h1>{event.title}</h1><p className="standfirst">{event.description}</p></header><dl className="event-details"><div><dt>When</dt><dd>{eventDate(event)}</dd></div>{event.venue && <div><dt>Where</dt><dd>{event.venue}</dd></div>}{event.address && <div><dt>Address</dt><dd>{event.address}</dd></div>}</dl>{event.externalUrl && <a className="button-link" href={event.externalUrl} target="_blank" rel="noopener noreferrer">Event information ↗</a>}<p><Link className="text-link" href="/events">← All events</Link></p></main>;
}
