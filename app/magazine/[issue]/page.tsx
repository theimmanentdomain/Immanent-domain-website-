import type { Metadata } from "next";
import Link from "next/link";
import { issues, getIssue } from "@/lib/issues";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return issues.map((i) => ({ issue: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ issue: string }> }): Promise<Metadata> {
  const { issue: slug } = await params;
  const issue = getIssue(slug);
  if (!issue) return {};
  return { title: issue.title, description: issue.deck };
}

export default async function IssuePage({ params }: { params: Promise<{ issue: string }> }) {
  const { issue: slug } = await params;
  const issue = getIssue(slug);
  if (!issue) notFound();

  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <span className="section-label">The Scene Made Me Do It / {issue.number}</span>
          <h1 className="page-title" style={{ textTransform: "none", letterSpacing: "0.01em" }}>
            {issue.title}
          </h1>
          <p className="page-title__sub">{issue.deck}</p>
        </div>

        <div className="prose-block" style={{ marginBottom: "var(--space-xl)" }}>
          <p>{issue.statement}</p>
        </div>

        <ul className="article-list">
          {issue.articles.map((article) => (
            <li key={article.slug} className="article-list__item">
              <div>
                <p className="article-list__title">
                  <Link href={`/magazine/${issue.slug}/${article.slug}`}>
                    {article.title}
                  </Link>
                </p>
                <p className="article-list__contributor">{article.contributor}</p>
              </div>
              <span className="article-list__category">{article.category}</span>
            </li>
          ))}
        </ul>

        <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xl) 0" }} />
        <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)", marginBottom: "var(--space-md)" }}>
          <Link href={`/magazine/${issue.slug}/assignment-board`}>Assignment Board &rarr;</Link>
        </p>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)" }}>
          <Link href="/magazine">&larr; The Scene Made Me Do It</Link>
        </p>
      </div>
    </div>
  );
}
