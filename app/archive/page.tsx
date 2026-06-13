"use client";

import { useState } from "react";
import { archiveEntries, archiveCategoryLabels, type ArchiveCategory } from "@/lib/archive";
import ArchiveCard from "@/components/ArchiveCard";

const allCategories: ArchiveCategory[] = [
  "document", "fragment", "field-report", "poster", "memo",
  "noir-document", "receipt", "unclassifiable",
];

export default function ArchivePage() {
  const [active, setActive] = useState<ArchiveCategory | null>(null);
  const filtered = active ? archiveEntries.filter((e) => e.category === active) : archiveEntries;

  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <h1 className="page-title">Archive</h1>
          <p className="page-title__sub">
            The archive keeps what the event spends.
          </p>
        </div>

        <div className="category-filter">
          <button
            className={`category-filter__btn${!active ? " category-filter__btn--active" : ""}`}
            onClick={() => setActive(null)}
          >
            All
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`category-filter__btn${active === cat ? " category-filter__btn--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {archiveCategoryLabels[cat]}
            </button>
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {filtered.map((entry) => (
            <ArchiveCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}
