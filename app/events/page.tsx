import { events } from "@/lib/events";

const sections = [
  { status: "upcoming" as const, label: "Upcoming" },
  { status: "in-development" as const, label: "In Development" },
  { status: "previous" as const, label: "Previous" },
];

export default function EventsPage() {
  return (
    <div className="site-wrapper">
    <div className="page-body">
      <h1 className="page-title">Events</h1>

      {sections.map(({ status, label }) => {
        const items = events.filter((e) => e.status === status);
        if (items.length === 0) return null;
        return (
          <div key={status} style={{ marginBottom: "3rem" }}>
            <span className="section-label">{label}</span>
            <ul className="event-list" style={{ borderTop: "1px solid var(--rule)" }}>
              {items.map((event) => (
                <li key={event.slug} className="event-list__item">
                  <div className="event-list__title">{event.title}</div>
                  <div className="event-list__type">{event.type}</div>
                  <p className="event-list__note" style={{ marginBottom: 0 }}>{event.description}</p>
                  {event.note && (
                    <p className="event-list__note" style={{ marginTop: "0.5rem", marginBottom: 0 }}>
                      {event.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
    </div>
  );
}
