"use client";

import Link from "next/link";
import { districts } from "@/lib/districts";

export default function SephirothMap() {
  return (
    <div className="sephiroth-map">
      {districts.map((d) => (
        <Link
          key={d.slug}
          href={`/map/${d.slug}`}
          className="district-node"
          style={{ gridColumn: d.col, gridRow: d.row }}
        >
          <span className="district-node__number">{d.number}</span>
          <span className="district-node__hebrew">{d.hebrew}</span>
          <span className="district-node__name">{d.name}</span>
          <span className="district-node__zone">{d.nycZone}</span>
        </Link>
      ))}
    </div>
  );
}
