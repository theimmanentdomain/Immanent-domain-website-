import type { Event } from "@/lib/events";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="card">
      <span className="card__label">{event.type}</span>
      <div className="card__title">{event.title}</div>
      {event.subtitle && <div className="card__subtitle">{event.subtitle}</div>}
      <div className="card__desc">{event.description}</div>
      <div className="card__meta">
        {event.dateLabel || "Date forthcoming"}
        {event.venue ? ` / ${event.venue}` : ""}
        {event.project ? ` / ${event.project}` : ""}
      </div>
      {event.inquiryEmail && (
        <div style={{ marginTop: "var(--space-sm)", fontSize: "var(--text-xs)", color: "var(--fg-dim)" }}>
          Inquiries: <a href={`mailto:${event.inquiryEmail}`}>{event.inquiryEmail}</a>
        </div>
      )}
    </div>
  );
}
