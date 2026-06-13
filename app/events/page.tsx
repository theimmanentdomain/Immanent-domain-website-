import type { Metadata } from "next";
import { events } from "@/lib/events";
import EventCard from "@/components/EventCard";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and previous events from The Immanent Domain.",
};

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const previous = events.filter((e) => e.status === "previous");

  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <span className="section-label">The Immanent Domain</span>
          <h1 className="page-title">Events</h1>
        </div>

        {upcoming.length > 0 && (
          <section style={{ marginBottom: "var(--space-xxl)" }}>
            <span className="section-label">Upcoming</span>
            <div style={{ borderTop: "1px solid var(--rule)" }}>
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {previous.length > 0 && (
          <section>
            <span className="section-label">Previous</span>
            <div style={{ borderTop: "1px solid var(--rule)" }}>
              {previous.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {upcoming.length === 0 && previous.length === 0 && (
          <div className="prose-block">
            <p>Event announcements through the mailing list and magazine.</p>
            <p>Inquiries: <a href="mailto:theimmanentdomain@gmail.com">theimmanentdomain@gmail.com</a></p>
          </div>
        )}
      </div>
    </div>
  );
}
