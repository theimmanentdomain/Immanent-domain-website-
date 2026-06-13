import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Da'ath",
  description: "The hidden sephirah. Knowledge without transmission.",
};

export default function DaathPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "560px" }}>
        <div className="page-title-block">
          <span className="section-label">The Gate</span>
          <h1 className="page-title">Da&apos;ath</h1>
          <p className="page-title__sub">
            The hidden sephirah. The one that is not on the Tree.
          </p>
        </div>

        <div className="prose-block">
          <p>
            Da&apos;ath is knowledge that cannot be transmitted, only recognized.
            It sits in the gap between Chokhmah and Binah, between wisdom and understanding,
            in the place the diagram leaves blank.
          </p>
          <p>
            In New York, it is the subway system.
            Present under every district. Moving between every territory.
            Not named on any initiatory map because naming it would misrepresent it.
            It is the infrastructure of connection whose logic is hidden even from frequent users.
          </p>
          <p>
            You are now inside the hidden system.
            The map is available. The field notes are accepting observations.
            The keys are a partial index.
          </p>
        </div>

        <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xl) 0" }} />

        <nav style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          <Link href="/field-notes" style={{ fontSize: "var(--text-sm)" }}>Field Notes &rarr;</Link>
          <Link href="/map" style={{ fontSize: "var(--text-sm)" }}>The Cryptographic Map Project &rarr;</Link>
          <Link href="/keys" style={{ fontSize: "var(--text-sm)" }}>Keys &rarr;</Link>
        </nav>
      </div>
    </div>
  );
}
