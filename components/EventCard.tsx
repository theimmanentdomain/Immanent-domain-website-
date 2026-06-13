import type { Event } from "@/lib/events";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="card">
      <span className="card__label">{event.statusLabel}</span>
      <div className="card__title">{event.title}</div>
      <div className="card__subtitle">{event.type}</div>
      <div className="card__desc">{event.description}</div>
      {event.note && <div className="card__meta">{event.note}</div>}
    </div>
  );
}
