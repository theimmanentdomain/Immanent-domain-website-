import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creatives",
  description: "The agency layer of The Immanent Domain.",
};

const categories = [
  "Writers", "Performers", "Artists", "Hosts", "Readers",
  "Critics", "Editors", "Researchers", "Organizers", "Operators",
];

export default function CreativesPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <span className="section-label">The Immanent Domain</span>
          <h1 className="page-title">Creatives</h1>
        </div>

        <div className="prose-block" style={{ marginBottom: "var(--space-xl)" }}>
          <p>
            The Immanent Domain connects productions, publications, events, patrons,
            institutions, and private commissions with writers, performers, artists,
            hosts, readers, critics, editors, researchers, organizers, and operators.
          </p>
          <p>
            The roster is curated. Inclusion is by invitation or application.
          </p>
        </div>

        <div style={{ marginBottom: "var(--space-xl)" }}>
          <span className="section-label">Roster Categories</span>
          <div className="tag-list" style={{ marginTop: "var(--space-sm)" }}>
            {categories.map((c) => <span key={c} className="tag">{c}</span>)}
          </div>
        </div>

        <div className="prose-block">
          <p>
            Submit creative roster interest through{" "}
            <Link href="/submit">the submission page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
