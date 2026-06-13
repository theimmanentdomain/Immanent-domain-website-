import type { Metadata } from "next";
import { keys } from "@/lib/keys";

export const metadata: Metadata = {
  title: "Keys",
  description: "A partial index. The rest must be found.",
};

export default function KeysPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <span className="section-label">The Immanent Domain</span>
          <h1 className="page-title">Keys</h1>
          <p className="page-title__sub">A partial index. The rest must be found.</p>
        </div>

        <div style={{ maxWidth: "700px" }}>
          {keys.map((entry) => (
            <div
              key={entry.term}
              style={{ borderBottom: "1px solid var(--rule)", padding: "var(--space-lg) 0" }}
            >
              <h2
                style={{
                  fontSize: "var(--text-sm)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-sm)",
                  color: "var(--fg)",
                  fontWeight: "normal",
                }}
              >
                {entry.term}
              </h2>
              <ul style={{ listStyle: "none" }}>
                {entry.definitions.map((def, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--fg-dim)",
                      padding: "0.2rem 0",
                      paddingLeft: "var(--space-md)",
                      borderLeft: "1px solid var(--rule-mid)",
                    }}
                  >
                    {def}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
