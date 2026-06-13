import { receipts } from "@/lib/receipts";

export default function ReceiptsPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="receipts-header">
          <p>IMDO / INTERNAL / CLUE INDEX / PARTIAL</p>
          <p>Distribution: restricted. Classification: pending.</p>
        </div>

        <h1 className="page-title" style={{ fontSize: "1.2rem" }}>Receipts</h1>

        <div className="prose-block" style={{ marginBottom: "3rem" }}>
          <p>
            The following tokens have been distributed across the public-facing materials of
            Immanent Domain. Each token corresponds to a visible phrase. The visible phrase
            can be located by navigating to the page listed.
          </p>
          <p style={{ color: "var(--fg-dim)", fontSize: "0.88rem" }}>
            This page is not linked from the navigation. You found it.
          </p>
        </div>

        <div>
          {receipts.map((r) => (
            <div key={r.token} className="receipt-entry">
              <div className="receipt-entry__token">{r.token}</div>
              <div className="receipt-entry__meta">
                Page: {r.page} / Phrase: &ldquo;{r.visiblePhrase}&rdquo;
              </div>
            </div>
          ))}
        </div>

        <hr />

        <p style={{ fontSize: "0.78rem", color: "var(--fg-dim)" }}>
          Additional tokens are not listed here. The index is incomplete by design.
        </p>
      </div>
    </div>
  );
}
