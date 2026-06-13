"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";
import { districts, outerBoroughs } from "@/lib/districts";
import SephirothMap from "@/components/SephirothMap";

export default function MapPage() {
  const [view, setView] = useState<"list" | "diagram">("list");

  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <span className="section-label">Territory</span>
          <h1 className="page-title">The Map</h1>
          <p className="page-title__sub">
            New York City as initiatory terrain. Ten sephiroth plus the hidden path.
            The outer boroughs are adjacent, not subordinate.
          </p>
        </div>

        <div className="prose-block" style={{ marginBottom: "var(--space-xl)" }}>
          <p>
            The map is not decorative. It is jurisdiction.
            Each district carries a sephirah, a chakra, a Vajrayana mode, a Zen instruction, and a geometry.
            The map breathes through Chinatown. The crown is quiet. Ask the subway where the path bends.
          </p>
        </div>

        <div className="view-toggle">
          <button
            className={`view-toggle__btn${view === "list" ? " view-toggle__btn--active" : ""}`}
            onClick={() => setView("list")}
          >
            List
          </button>
          <button
            className={`view-toggle__btn${view === "diagram" ? " view-toggle__btn--active" : ""}`}
            onClick={() => setView("diagram")}
          >
            Diagram
          </button>
        </div>

        {view === "list" ? (
          <div>
            {districts.map((d) => (
              <div key={d.slug} className="card">
                <span className="card__label">{d.number} &mdash; {d.nycZone}</span>
                <Link href={`/map/${d.slug}`} style={{ textDecoration: "none" }}>
                  <div className="card__title">{d.hebrew} &nbsp; {d.name}</div>
                </Link>
                <div className="card__subtitle">{d.attribute}</div>
                <div className="card__desc">{d.description}</div>
                <div className="card__meta" style={{ marginTop: "var(--space-sm)" }}>
                  {d.chakra} &bull; {d.geometry} &bull; {d.keyword}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <SephirothMap />
        )}

        <div className="outer-boroughs">
          <span className="section-label">Outer Boroughs</span>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)", margin: "var(--space-xs) 0 var(--space-md)" }}>
            Adjacent to the Tree. Structurally distinct.
          </p>
          <ul className="outer-borough-list">
            {outerBoroughs.map((b) => (
              <li key={b.slug} className="outer-borough-item">
                <div className="outer-borough-item__name">{b.name}</div>
                <div className="outer-borough-item__attr">{b.attribute}</div>
                <div className="outer-borough-item__desc">{b.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
