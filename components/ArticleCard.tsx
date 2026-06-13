import Link from "next/link";
import type { ArticleContent } from "@/lib/articles";

interface ArticleCardProps {
  article: ArticleContent;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="card">
      <span className="card__label">{article.category}</span>
      <Link href={`/magazine/${article.issueSlug}/${article.slug}`} style={{ textDecoration: "none" }}>
        <div className="card__title">{article.title}</div>
      </Link>
      {article.subtitle && <div className="card__subtitle">{article.subtitle}</div>}
      <div className="card__desc">{article.excerpt}</div>
      <div className="card__meta">{article.contributor}</div>
    </div>
  );
}
