"use client";

import { useState } from "react";
import Link from "next/link";

const clues = [
  "Keter is at the top.",
  "Chokhmah is wisdom.",
  "Binah is understanding.",
  "Chesed is mercy.",
  "Gevurah is severity.",
  "Tiferet is beauty, at the center.",
  "Netzach is victory.",
  "Hod is splendor.",
  "Yesod is the foundation.",
  "Malkuth is the kingdom, at the bottom.",
  "One is missing from the diagram. Present everywhere. Named nowhere on the official routes.",
];

const accepted = ["daath", "da'ath", "daat", "da'at", "subway", "tunnel", "transfer", "knowledge"];

export default function GatePage() {
  const [answer, setAnswer] = useState("");
  const [passed, setPassed] = useState(false);
  const [failed, setFailed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const normalized = answer.trim().toLowerCase();
    if (accepted.includes(normalized)) {
      setPassed(true);
      setFailed(false);
    } else {
      setFailed(true);
    }
  }

  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "560px" }}>
        <div className="page-title-block">
          <span className="section-label">The Immanent Domain</span>
          <h1 className="page-title">The Gate</h1>
          <p className="page-title__sub">Ten sephiroth on the Tree. One is missing from the diagram.</p>
        </div>

        <ul style={{ listStyle: "none", borderTop: "1px solid var(--rule)", marginBottom: "var(--space-xl)" }}>
          {clues.map((clue, i) => (
            <li
              key={i}
              style={{
                borderBottom: "1px solid var(--rule)",
                padding: "var(--space-sm) 0",
                fontSize: "var(--text-sm)",
                color: i === clues.length - 1 ? "var(--fg)" : "var(--fg-dim)",
              }}
            >
              {clue}
            </li>
          ))}
        </ul>

        {!passed ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            <label
              htmlFor="gate-answer"
              style={{ fontSize: "var(--text-xs)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-dim)" }}
            >
              Name the missing sephirah
            </label>
            <input
              id="gate-answer"
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              autoComplete="off"
              style={{
                background: "transparent",
                border: "1px solid var(--rule-mid)",
                color: "var(--fg)",
                padding: "var(--space-sm) var(--space-md)",
                fontSize: "var(--text-sm)",
                fontFamily: "inherit",
                outline: "none",
              }}
            />
            {failed && (
              <p style={{ fontSize: "var(--text-xs)", color: "var(--fg-muted)", letterSpacing: "0.1em" }}>
                That is not the answer. Look again at what is present everywhere and named nowhere.
              </p>
            )}
            <button
              type="submit"
              style={{
                background: "var(--fg)",
                color: "var(--bg)",
                border: "none",
                padding: "var(--space-sm) var(--space-lg)",
                fontSize: "var(--text-sm)",
                fontFamily: "inherit",
                cursor: "pointer",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                alignSelf: "flex-start",
              }}
            >
              Enter
            </button>
          </form>
        ) : (
          <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "var(--space-xl)" }}>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)", marginBottom: "var(--space-lg)" }}>
              Correct. The gate is open.
            </p>
            <p style={{ fontSize: "var(--text-sm)" }}>
              <Link href="/gate/daath">Proceed &rarr;</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
