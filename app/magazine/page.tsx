import Link from "next/link";
import { issues } from "@/lib/issues";

export default function MagazinePage() {
  return (
    <div className="page-body">
      <h1 className="page-title">Magazine</h1>

      <div style={{ marginBottom: "2.5rem" }}>
        <span className="section-label">Categories</span>
        <p style={{ marginTop: "0.25rem" }}>
          <Link href="/magazine/critique">Critique &rarr;</Link>
        </p>
      </div>

      {issues.map((issue) => (
        <div key={issue.slug} className="issue-block">
          <p className="issue-number">{issue.number}</p>
          <h2 className="issue-title">
            <Link href={`/magazine/${issue.slug}`} style={{ textDecoration: "none" }}>
              {issue.title}
            </Link>
          </h2>
          <p className="issue-description">{issue.description}</p>

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
                <span className="article-list__type">{article.type}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
