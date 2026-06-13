"use client";

import Link from "next/link";
import { useState } from "react";
import { districts, outerBoroughs } from "@/lib/districts";
import SephirothMap from "@/components/SephirothMap";

export default function MapPage() {
  const [view, setView] = useState<"list" | "diagram">("list");

  return (
    <div className="site-wrapper">
      <div className="page-body">
        <h1 className="page-title">The Territory</h1>

        <div className="prose-block" style={{ marginBottom: "2rem" }}>
          <p>
            New York City mapped onto the Kabbalistic Tree of Life. Ten sephiroth
            plus one hidden. The hidden one is not missing. It is present as the
            transit system: everywhere, named nowhere on the official routes.
          </p>
          <p style={{ color: "var(--fg-dim)", fontSize: "0.88rem" }}>
            The map is not the territory. The territory is not the territory either.
            It is a set of instructions for a city that exists only while being navigated.
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
          <ul style={{ listStyle: "none" }}>
            {districts.map((d) => (
              <li key={d.slug} className="card">
                <span className="card__label">{d.number} / {d.nycZone}</span>
                <Link href={`/map/${d.slug}`} style={{ textDecoration: "none" }}>
                  <div className="card__title">{d.hebrew} {d.name}</div>
                </Link>
                <div className="card__subtitle">{d.attribute}</div>
                <div className="card__desc">{d.description}</div>
              </li>
            ))}
          </ul>
        ) : (
          <SephirothMap />
        )}

        <div className="outer-boroughs">
          <span className="section-label">Outer Boroughs</span>
          <p style={{ fontSize: "0.82rem", color: "var(--fg-dim)", marginBottom: "1rem" }}>
            Not on the Tree. Adjacent to it.
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
