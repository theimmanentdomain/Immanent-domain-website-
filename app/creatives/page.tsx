import { creatives } from "@/lib/creatives";

export default function CreativesPage() {
  return (
    <div className="page-body">
      <h1 className="page-title">Creatives</h1>
      <p className="prose-block" style={{ marginBottom: "2.5rem", color: "var(--fg-dim)" }}>
        Bios and project listings are added as creatives approve public listing.
      </p>

      <ul className="creative-list" style={{ borderTop: "1px solid var(--rule)" }}>
        {creatives.map((creative) => (
          <li key={creative.slug} className="creative-list__item">
            <div className="creative-list__name">{creative.name}</div>
            <div className="creative-list__role">{creative.role}</div>
            <div className="creative-list__bio">{creative.bio}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
