import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oath",
  description: "The Immanent Domain oath.",
};

const lines = [
  "I create before I complain.",
  "I facilitate before I possess.",
  "I witness before I judge.",
  "I serve the work.",
  "I protect the artist.",
  "I honor the city as text, temple, and test.",
  "I enter The Immanent Domain by attention, creation, and service.",
];

export default function OathPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "520px" }}>
        <div className="page-title-block">
          <span className="section-label">The Immanent Domain</span>
          <h1 className="page-title">Oath</h1>
        </div>

        <ul style={{ listStyle: "none", borderTop: "1px solid var(--rule)" }}>
          {lines.map((line, i) => (
            <li
              key={i}
              style={{
                borderBottom: "1px solid var(--rule)",
                padding: "var(--space-md) 0",
                fontSize: "var(--text-base)",
                color: i < 3 ? "var(--fg)" : "var(--fg-dim)",
              }}
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
