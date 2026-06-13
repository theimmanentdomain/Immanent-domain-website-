import Link from "next/link";
import { notFound } from "next/navigation";
import { getDistrict, districts } from "@/lib/districts";

export function generateStaticParams() {
  return districts.map((d) => ({ district: d.slug }));
}

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ district: string }>;
}) {
  const { district: slug } = await params;
  const district = getDistrict(slug);
  if (!district) notFound();

  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="district-header">
          <div className="district-header__number">Sephirah {district.number}</div>
          <span className="district-header__hebrew">{district.hebrew}</span>
          <h1 className="district-header__name">{district.name}</h1>
          <div className="district-header__zone">{district.nycZone}</div>
          <div className="district-header__attr">{district.attribute}</div>
        </div>

        <div className="prose-block">
          <p>{district.description}</p>
        </div>

        <hr />

        <p style={{ fontSize: "0.8rem", color: "var(--fg-dim)" }}>
          <Link href="/map">&larr; The Territory</Link>
        </p>
      </div>
    </div>
  );
}
