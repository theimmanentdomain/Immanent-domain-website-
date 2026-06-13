import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "The Immanent Domain is an intermedia institution based in New York.",
};

export default function About() {
  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <span className="section-label">The Immanent Domain</span>
          <h1 className="page-title">About</h1>
        </div>

        <div className="prose-block">
          <p>
            The Immanent Domain is an intermedia institution based in New York.
            It operates as a magazine, archive, agency, brokerage, church, map, and gate.
          </p>
          <p>
            The magazine is called <Link href="/magazine">The Scene Made Me Do It</Link>.
            It publishes essays, field reports, conversations, noir documents, posters,
            and forms that do not fit existing categories.
            Issue One is <Link href="/magazine/forget-it-jake-issue-one">Forget It, Jake, It&apos;s Chinatown</Link>.
          </p>
          <p>
            The map is <Link href="/projects/cryptographic-map">The Cryptographic Map Project</Link>:
            a Kabbalistic cartography of Manhattan and the outer boroughs
            that treats New York as initiatory terrain.
          </p>
          <p>
            The archive holds documents, fragments, field reports, and material
            that does not fit the magazine but belongs in the record.
          </p>
          <p>
            The name comes from the legal doctrine of eminent domain: the state&apos;s power
            to seize private property for public use. The Immanent Domain inverts the premise.
            The force operates from within. It cannot be seized because it was never external.
          </p>
          <p>
            The full statement of intent is the{" "}
            <Link href="/manifesto">Declaration of Intent</Link>.
          </p>

          <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xl) 0" }} />

          <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)" }}>
            Contact:{" "}
            <a href={`mailto:${site.contact}`}>{site.contact}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
