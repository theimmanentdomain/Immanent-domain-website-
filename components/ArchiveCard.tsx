import type { ArchiveEntry } from "@/lib/archive";
import TagList from "./TagList";

interface ArchiveCardProps {
  entry: ArchiveEntry;
}

export default function ArchiveCard({ entry }: ArchiveCardProps) {
  return (
    <div className="card">
      <span className="card__label">{entry.category.replace(/-/g, " ")}</span>
      <div className="card__title">{entry.title}</div>
      <div className="card__desc">{entry.description}</div>
      <div className="card__meta">{entry.date}</div>
      <TagList tags={entry.tags} />
    </div>
  );
}
