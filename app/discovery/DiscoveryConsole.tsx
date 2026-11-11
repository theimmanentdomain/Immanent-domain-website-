"use client";

import { useRef, useState } from "react";
import { researchUrl, type DiscoveryResult } from "@/lib/discovery";
import type { DiscoveryPage, DiscoveryTopic } from "@/lib/editorial-content";

type Mode = "filtered" | "unfiltered";
type Kind = "page" | "topic";

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function resultKey(result: DiscoveryResult) {
  return result.contextUrl ?? result.url + "\n" + result.title;
}

function DiscoveryCard({ kind, mode, selected }: {
  kind: Kind;
  mode: Mode;
  selected: DiscoveryResult[];
}) {
  const [result, setResult] = useState<DiscoveryResult>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [drawCount, setDrawCount] = useState(0);
  const seen = useRef(new Set<string>());
  const queue = useRef<DiscoveryResult[]>([]);
  const isPage = kind === "page";

  async function draw() {
    if (loading) return;
    setError("");
    let next: DiscoveryResult;
    if (mode === "filtered") {
      let choices = selected.filter((item) => !seen.current.has(resultKey(item)));
      if (!choices.length) {
        seen.current.clear();
        choices = selected.filter((item) => !result || resultKey(item) !== resultKey(result));
      }
      const different = choices.filter(({ source }) => source !== result?.source);
      next = pick(different.length ? different : choices);
    } else {
      if (!queue.current.length) {
        setLoading(true);
        try {
          const response = await fetch(`/api/discovery/?kind=${kind}`, { signal: AbortSignal.timeout(8000) });
          if (!response.ok) throw new Error("Draw unavailable");
          const incoming = (await response.json()) as DiscoveryResult[];
          if (!incoming.length) throw new Error("Empty draw");
          queue.current = incoming.filter((item) => !seen.current.has(resultKey(item)));
          if (!queue.current.length) {
            seen.current.clear();
            queue.current = incoming.filter((item) => !result || resultKey(item) !== resultKey(result));
          }
          if (!queue.current.length) throw new Error("Repeated draw");
        } catch {
          setError("The draw is temporarily unavailable. Try again.");
          return;
        } finally {
          setLoading(false);
        }
      }
      next = queue.current.shift()!;
    }
    seen.current.add(resultKey(next));
    setResult(next);
    setDrawCount(drawCount + 1);
  }

  return (
    <section className="discovery-card">
      <div className="discovery-card__heading">
        <h2>{isPage ? "Web page" : "Research topic"}</h2>
        <span aria-hidden="true">{isPage ? "↗" : "✳"}</span>
      </div>
      <div className="discovery-card__result" aria-live="polite" aria-atomic="true" aria-busy={loading}>
        {result && <div key={drawCount} className="discovery-card__draw">
          <p className="discovery-source">{result.source}</p>
          <h3>{result.title}</h3>
          {result.note && <p className={mode === "unfiltered" && isPage ? "discovery-address" : ""}>{result.note}</p>}
          <div className="discovery-card__links">
            <a href={result.url} target="_blank" rel="noreferrer">{isPage ? "Open page" : "Research topic"} ↗</a>
            {result.contextUrl && <a href={result.contextUrl} target="_blank" rel="noreferrer">Wikipedia ↗</a>}
          </div>
        </div>}
        {!result && !error && <p className="discovery-placeholder">{isPage ? "Land somewhere unexpected." : "Follow a new line of inquiry."}</p>}
        {error && <p className="discovery-error">{error}</p>}
      </div>
      <button type="button" className="discovery-draw" onClick={draw} disabled={loading}>
        {loading ? "Drawing…" : isPage ? "Draw a page" : "Draw a topic"} <span aria-hidden="true">↻</span>
      </button>
    </section>
  );
}

export default function DiscoveryConsole({ pages, topics }: { pages: DiscoveryPage[]; topics: DiscoveryTopic[] }) {
  const [mode, setMode] = useState<Mode>("filtered");
  const selections = {
    page: pages.map(({ title, category, note, url }) => ({ title, source: category, note, url })),
    topic: topics.map(({ title, category, query }) => ({ title, source: category, url: researchUrl(query) })),
  };
  return (
    <>
      <div className="discovery-modes">
        <fieldset>
          <legend className="discovery-sr-only">Draw mode</legend>
          {(["filtered", "unfiltered"] as const).map((choice) => (
            <label key={choice}>
              <input type="radio" name="discovery-mode" value={choice} checked={mode === choice} onChange={() => setMode(choice)} />
              <span>{choice === "filtered" ? "Filtered" : "Unfiltered"}</span>
            </label>
          ))}
        </fieldset>
        <p aria-live="polite">{mode === "filtered" ? "Selected by IMDO." : "Sampled from Common Crawl and Wikipedia."}</p>
      </div>
      {(["filtered", "unfiltered"] as const).map((choice) => (
        <div key={choice} className="discovery-grid" hidden={mode !== choice}>
          <DiscoveryCard kind="page" mode={choice} selected={selections.page} />
          <DiscoveryCard kind="topic" mode={choice} selected={selections.topic} />
        </div>
      ))}
    </>
  );
}
