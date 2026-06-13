import type { Metadata } from "next";
import Link from "next/link";
import { issues } from "@/lib/issues";

export const metadata: Metadata = {
  title: "The Scene Made Me Do It",
  description: "The magazine of The Immanent Domain. Persona, conversation, and the city as a haunted operating system.",
};

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
        <div className="page-title-block">
          <span className="section-label">The Immanent Domain</span>
          <h1 className="page-title" style={{ textTransform: "none", letterSpacing: "0.01em" }}>
            The Scene Made Me Do It
          </h1>
          <p className="page-title__sub">
            A magazine operating in the frequency between downtown anthropology and occult infrastructure.
            It publishes documents of the city as it lives, schemes, forgets, and returns.
            Every article leaves a receipt.
          </p>
        </div>

        <div style={{ marginBottom: "var(--space-xl)" }}>
          <span className="section-label">Departments</span>
          <div className="tag-list" style={{ marginTop: "var(--space-sm)" }}>
            {categories.map((cat) => (
              <span key={cat} className="tag">{cat}</span>
            ))}
          </div>
        </div>

        <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xl) 0" }} />

        {issue && (
          <div className="issue-block">
            <p className="issue-number">{issue.number}</p>
            <h2 className="issue-title">
              <Link href={`/magazine/${issue.slug}`} style={{ textDecoration: "none" }}>
                {issue.title}
              </Link>
            </h2>
            <p className="issue-deck">{issue.deck}</p>

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

            <div style={{ marginTop: "var(--space-xl)" }}>
              <Link
                href={`/magazine/${issue.slug}/assignment-board`}
                style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)" }}
              >
                Assignment Board &rarr;
              </Link>
            </div>
          </div>
        )}

        <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xl) 0" }} />

        <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)" }}>
          <Link href="/submit">Submit to the magazine &rarr;</Link>
        </p>
      </div>
    </div>
  );
}
