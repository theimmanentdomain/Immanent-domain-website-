import type { Metadata } from "next";
import { receipts } from "@/lib/receipts";

export const metadata: Metadata = {
  title: "Receipts",
  description: "Internal document. Partial index.",
  robots: { index: false, follow: false },
};

export default function ReceiptsPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="receipts-header">
          <p>IMDO / INTERNAL / CLUE INDEX / PARTIAL</p>
          <p>Distribution: restricted. Classification: pending.</p>
          <p>Cross-reference with public site before drawing conclusions.</p>
        </div>

        <div className="page-title-block" style={{ borderBottom: "none" }}>
          <h1 className="page-title" style={{ fontSize: "var(--text-xl)" }}>Receipts</h1>
          <p className="page-title__sub">Partial Index. Incomplete by design.</p>
        </div>

        <div className="prose-block" style={{ marginBottom: "var(--space-xxl)" }}>
          <p>
            This page is not linked from the navigation. You found it.
            The index below is incomplete. Each entry corresponds to a visible phrase on a public page.
            The connection between them is the work.
          </p>
          <p style={{ color: "var(--fg-dim)" }}>
            A receipt without source remains a rumor.
            Every receipt leaves a trace.
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {receipts.map((r) => (
            <div key={r.token} className="receipt-entry">
              <span className="receipt-entry__seq">
                {String(r.sequenceNumber).padStart(2, "0")} / {r.clueType} / {r.associatedSephirah}
              </span>
              <div className="receipt-entry__token">{r.token}</div>
              <div className="receipt-entry__meta">
                <span>Origin: {r.originPage}</span>
                {" "}&bull;{" "}
                <span className="receipt-entry__phrase">&ldquo;{r.visiblePhrase}&rdquo;</span>
              </div>
            </div>
          ))}
        </div>

        <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xxl) 0 var(--space-lg)" }} />
        <p style={{ fontSize: "var(--text-xs)", color: "var(--fg-muted)", letterSpacing: "0.1em" }}>
          Additional tokens exist on pages not listed here. The system is operational.
        </p>
      </div>
    </div>
  );
}
