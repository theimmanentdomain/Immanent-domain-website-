import Link from "next/link";
import type { Event } from "@/lib/events";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <li className="card">
      <span className="card__label">{event.statusLabel}</span>
      <Link href={`/events/${event.slug}`} style={{ textDecoration: "none" }}>
        <div className="card__title">{event.title}</div>
      </Link>
      <div className="card__subtitle">{event.type}</div>
      <div className="card__desc">{event.description}</div>
      {event.note && <div className="card__meta">{event.note}</div>}
    </li>
  );
}
