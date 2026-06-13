import Link from "next/link";
import { issues } from "@/lib/issues";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return issues.map((i) => ({ issue: i.slug }));
}

export default async function IssuePage({
  params,
}: {
  params: Promise<{ issue: string }>;
}) {
  const { issue: issueSlug } = await params;
  const issue = issues.find((i) => i.slug === issueSlug);
  if (!issue) notFound();

  return (
    <div className="site-wrapper">
      <div className="page-body">
        <p className="issue-number">{issue.number}</p>
        <h1 className="page-title" style={{ borderBottom: "none", marginBottom: "0.5rem" }}>
          {issue.title}
        </h1>
        <p className="issue-description" style={{ marginBottom: "3rem" }}>
          {issue.deck}
        </p>

        <hr />

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
              <span className="article-list__type">{article.category}</span>
            </li>
          ))}
        </ul>

        <hr />

        <p style={{ fontSize: "0.8rem", color: "var(--fg-dim)" }}>
          <Link href="/magazine">&larr; All Issues</Link>
        </p>
      </div>
    </div>
  );
}
