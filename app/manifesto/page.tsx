import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Declaration of Intent",
  description: "The institutional position of The Immanent Domain.",
};

export default function ManifestoPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "640px" }}>
        <div className="page-title-block">
          <span className="section-label">The Immanent Domain</span>
          <h1 className="page-title">Declaration of Intent</h1>
        </div>

        <div className="doctrine-block" style={{ marginBottom: "var(--space-xxl)" }}>
          {site.doctrine.map((line) => (
            <p key={line} className="doctrine-line" style={{ fontSize: "var(--text-base)" }}>{line}</p>
          ))}
        </div>

        <div className="prose-block">
          <p>
            The Immanent Domain is a magazine, archive, agency, brokerage, church, map, and gate.
            It operates in New York. It maintains correspondence elsewhere.
          </p>
          <p>
            It was founded to produce work that takes the city seriously as initiatory terrain:
            a place where identity is formed under pressure, where scenes become systems,
            and where ordinary logic ceases to function as promised in specific geographic zones.
          </p>
          <p>
            The institution does not compete with existing publications.
            It operates in the frequency those publications cannot reach.
          </p>
          <p>
            The magazine is called The Scene Made Me Do It.
            The map is The Cryptographic Map Project.
            The gate is a riddle. The archive holds evidence.
            The brokerage connects work with commissions.
            The church has no doctrine except these five lines.
          </p>
          <p>
            The Immanent Domain is interested in artists who take their work seriously enough
            to treat it as an institution, a practice, and a record.
            It is interested in cities as texts that require skilled reading.
            It is interested in the space between performance and document,
            between persona and person, between the scene and the thing the scene was doing.
          </p>
        </div>

        <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xl) 0" }} />
        <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)" }}>
          <Link href="/about">About</Link>
          {" "}&bull;{" "}
          <Link href="/magazine">Magazine</Link>
          {" "}&bull;{" "}
          <Link href="/map">Map</Link>
        </p>
      </div>
    </div>
  );
}
