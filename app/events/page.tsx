import type { Metadata } from "next";
import { events } from "@/lib/events";
import EventCard from "@/components/EventCard";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and archived events from The Immanent Domain.",
};

const sections = [
  { status: "upcoming" as const, label: "Upcoming" },
  { status: "in-development" as const, label: "In Development" },
  { status: "previous" as const, label: "Previous" },
];

export default function EventsPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <h1 className="page-title">Events</h1>
        </div>

        {sections.map(({ status, label }) => {
          const items = events.filter((e) => e.status === status);
          if (items.length === 0) return null;
          return (
            <div key={status} style={{ marginBottom: "var(--space-xxl)" }}>
              <span className="section-label">{label}</span>
              <div style={{ borderTop: "1px solid var(--rule)" }}>
                {items.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
