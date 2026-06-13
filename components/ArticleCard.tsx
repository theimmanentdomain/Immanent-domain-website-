import Link from "next/link";
import type { ArticleContent } from "@/lib/articles";

interface ArticleCardProps {
  article: ArticleContent;
  issueSlug: string;
}

export default function ArticleCard({ article, issueSlug }: ArticleCardProps) {
  return (
    <li className="card">
      <span className="card__label">{article.category}</span>
      <Link href={`/magazine/${issueSlug}/${article.slug}`} style={{ textDecoration: "none" }}>
        <div className="card__title">{article.title}</div>
        {article.subtitle && <div className="card__subtitle">{article.subtitle}</div>}
      </Link>
      <div className="card__meta">{article.contributor}</div>
    </li>
  );
}
