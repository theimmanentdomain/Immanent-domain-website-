import { pageMetadata } from "@/lib/seo";
import EventListing from "@/components/EventListing";
import { getPublicEvents, splitEvents } from "@/lib/calendar";
export const metadata = pageMetadata("Events | The Immanent Domain", "Readings, performances, exhibitions, and gatherings selected by The Immanent Domain arts agency.", "/events");
export const dynamic = "force-dynamic";
export default async function EventsPage() {
  const result = await getPublicEvents();
  const { upcoming, past } = splitEvents(result.events);
  return <main className="editorial-page events-page"><header><p className="kicker">In our orbit</p><h1>Events</h1><p className="standfirst">Readings, performances, exhibitions, and gatherings selected by The Immanent Domain.</p></header>
    {result.state === "unavailable" && <p role="status">Calendar updates are temporarily unavailable. Showing our saved listings.</p>}
    <section aria-labelledby="upcoming"><div className="event-section-heading"><h2 id="upcoming">Upcoming</h2><span>All times New York</span></div>{upcoming.length ? upcoming.map(event => <EventListing key={event.slug} event={event}/>) : <p>New dates will be announced here.</p>}</section>
    {past.length > 0 && <section className="past-events"><h2>Past events</h2>{past.map(event => <EventListing key={event.slug} event={event}/>)}</section>}
    <p className="event-contact">Have an event we should know about? <a className="text-link" href="mailto:immanentdomain@gmail.com?subject=Event%20for%20IMDO">Send us the details ↗</a></p>
  </main>;
}
