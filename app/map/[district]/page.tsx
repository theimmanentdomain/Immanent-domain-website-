import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDistrict, districts } from "@/lib/districts";

export function generateStaticParams() {
  return districts.map((d) => ({ district: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ district: string }> }): Promise<Metadata> {
  const { district: slug } = await params;
  const d = getDistrict(slug);
  if (!d) return {};
  return { title: `${d.name} / ${d.nycZone}`, description: d.description };
}

export default async function DistrictPage({ params }: { params: Promise<{ district: string }> }) {
  const { district: slug } = await params;
  const d = getDistrict(slug);
  if (!d) notFound();

  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="district-header">
          <div className="district-header__number">Sephirah {d.number}</div>
          <span className="district-header__hebrew">{d.hebrew}</span>
          <h1 className="district-header__name">{d.name}</h1>
          <div className="district-header__zone">{d.nycZone}</div>
          <div className="district-header__keyword">{d.keyword}</div>
        </div>

        <div className="prose-block" style={{ marginBottom: "var(--space-xl)" }}>
          <p>{d.description}</p>
        </div>

        <div className="field-table">
          <div className="field-row">
            <span className="field-row__key">Attribute</span>
            <span className="field-row__value">{d.attribute}</span>
          </div>
          <div className="field-row">
            <span className="field-row__key">Chakra</span>
            <span className="field-row__value">{d.chakra}</span>
          </div>
          <div className="field-row">
            <span className="field-row__key">Vajrayana Mode</span>
            <span className="field-row__value">{d.vajrayanaMode}</span>
          </div>
          <div className="field-row">
            <span className="field-row__key">Zen Instruction</span>
            <span className="field-row__value">{d.zenInstruction}</span>
          </div>
          <div className="field-row">
            <span className="field-row__key">Geometry</span>
            <span className="field-row__value">{d.geometry}</span>
          </div>
        </div>

        <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xl) 0" }} />
        <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)" }}>
          <Link href="/map">&larr; The Territory</Link>
        </p>
      </div>
    </div>
  );
}
