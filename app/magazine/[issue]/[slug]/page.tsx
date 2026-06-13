import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, articles } from "@/lib/articles";
import { issues } from "@/lib/issues";

export function generateStaticParams() {
  return articles.map((a) => ({ issue: a.issueSlug, slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ issue: string; slug: string }>;
}) {
  const { issue: issueSlug, slug } = await params;
  const article = getArticle(issueSlug, slug);
  if (!article) notFound();

  const issue = issues.find((i) => i.slug === issueSlug);

  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="article-header">
          <p className="article-header__issue">
            <Link href={`/magazine/${issueSlug}`} style={{ textDecoration: "none" }}>
              {issue?.number} / {issue?.title}
            </Link>
          </p>
          <h1 className="article-header__title">{article.title}</h1>
          {article.subtitle && (
            <p style={{ fontSize: "1rem", color: "var(--fg-dim)", marginBottom: "1rem", fontStyle: "italic" }}>
              {article.subtitle}
            </p>
          )}
          <div className="article-header__meta">
            <span>{article.contributor}</span>
            <span>{article.category}</span>
          </div>
        </div>

        <div className="article-body">
          {article.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <hr />

        <p style={{ fontSize: "0.8rem", color: "var(--fg-dim)" }}>
          <Link href={`/magazine/${issueSlug}`}>&larr; Back to {issue?.title}</Link>
        </p>
      </div>
    </div>
  );
}
