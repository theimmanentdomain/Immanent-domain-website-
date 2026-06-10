import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, articles } from "@/lib/articles";
import { issues } from "@/lib/issues";

export function generateStaticParams() {
  return articles
    .filter((a) => a.issueSlug === "issue-one")
    .map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle("issue-one", slug);
  if (!article) notFound();

  const issue = issues.find((i) => i.slug === "issue-one");

  return (
    <div className="page-body">
      <div className="article-header">
        <p className="article-header__issue">
          <Link href="/magazine/issue-one" style={{ textDecoration: "none" }}>
            {issue?.number} &mdash; {issue?.title}
          </Link>
        </p>
        <h1 className="article-header__title">{article.title}</h1>
        <div className="article-header__meta">
          <span>{article.contributor}</span>
          <span>{article.type}</span>
        </div>
      </div>

      <div className="article-body">
        {article.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <hr />

      <p style={{ fontSize: "0.8rem", color: "var(--fg-dim)" }}>
        <Link href="/magazine/issue-one">&larr; Back to Issue One</Link>
      </p>
    </div>
  );
}
