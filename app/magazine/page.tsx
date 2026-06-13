import Link from "next/link";
import { issues } from "@/lib/issues";

const categories = [
  "Persona", "Conversation", "Downtown Anthropology", "Artificial Intelligence",
  "Performance", "Intermedia", "Field Reports", "Noir Documents",
  "False Neighborhoods", "Criticism", "Ritual Technologies",
];

export default function MagazinePage() {
  const issue = issues[0];

  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="masthead" style={{ paddingTop: "3rem" }}>
          <span className="section-label">The Magazine</span>
          <h1 className="masthead__title" style={{ fontSize: "clamp(1.4rem, 4vw, 2.4rem)", letterSpacing: "0.02em", textTransform: "none" }}>
            Forget It, Jake, It&apos;s Chinatown
          </h1>
          <div className="masthead__rule" />
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <span className="section-label">Categories</span>
          <div className="tag-list" style={{ marginTop: "0.75rem" }}>
            {categories.map((cat) => (
              <span key={cat} className="tag">{cat}</span>
            ))}
          </div>
        </div>

        <hr />

        {issue && (
          <div className="issue-block">
            <p className="issue-number">{issue.number}</p>
            <h2 className="issue-title">
              <Link href={`/magazine/${issue.slug}`} style={{ textDecoration: "none" }}>
                {issue.title}
              </Link>
            </h2>
            <p className="issue-description">{issue.deck}</p>

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
          </div>
        )}

        <hr />
        <p style={{ fontSize: "0.85rem", color: "var(--fg-dim)" }}>
          <Link href="/submit">Submit to the magazine &rarr;</Link>
        </p>
      </div>
    </div>
  );
}
