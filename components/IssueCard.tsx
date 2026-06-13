import Link from "next/link";
import type { Issue } from "@/lib/issues";

interface IssueCardProps {
  issue: Issue;
}

export default function IssueCard({ issue }: IssueCardProps) {
  return (
    <div className="card">
      <span className="card__label">{issue.number}</span>
      <Link href={`/magazine/${issue.slug}`} style={{ textDecoration: "none" }}>
        <div className="card__title">{issue.title}</div>
      </Link>
      <div className="card__subtitle">{issue.deck}</div>
      <div className="card__meta">{issue.date}</div>
    </div>
  );
}
