import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The Immanent Domain is a New York-rooted art collective, cultural production house, and publishing platform.",
};

export default function About() {
  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <h1 className="page-title">About</h1>
        </div>

        <div className="prose-block">
          <p>
            Immanent Domain is a New York-rooted art collective, cultural production house, and publishing platform.
            It operates across magazine publishing, performance, intermedia, social cartography, and documentary practice.
          </p>
          <p>
            The magazine is <em>Forget It, Jake, It&apos;s Chinatown</em>.
            The map is the city. The archive is operational.
          </p>
          <p>
            The institution treats New York as territory, text, theater, and puzzle. Its public work includes the magazine,
            events, field reports, and projects. Its internal work is ongoing.
          </p>
          <p>
            The name comes from the legal doctrine of eminent domain: the state&apos;s power to seize private property
            for public use. Immanent Domain inverts the premise. The force operates from within.
            It cannot be seized because it was never external to begin with.
          </p>
          <p>
            The full statement of intent is in the{" "}
            <a href="/manifesto">Declaration of Intent</a>.
            The map of the territory is at{" "}
            <a href="/map">The Map</a>.
          </p>

          <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xl) 0" }} />

          <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)" }}>
            Contact:{" "}
            <a href="mailto:theimmanentdomain@gmail.com">theimmanentdomain@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
