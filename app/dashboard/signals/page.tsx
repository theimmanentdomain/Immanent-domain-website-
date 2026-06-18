import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "Signals" };

export default async function SignalsPage() {
  const supabase = await createClient();
  const { data: signals } = await supabase
    .from("signals")
    .select("id, title, pattern, confidence, related_district, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Signals</h1>
        <p className="dashboard-sub">Recurring patterns observed in the field. Unverified unless marked otherwise.</p>
      </div>
      {!signals?.length ? (
        <p className="dashboard-empty">No signals detected.</p>
      ) : (
        <table className="field-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Title</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Pattern</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Confidence</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>District</th>
            </tr>
          </thead>
          <tbody>
            {signals.map((s) => (
              <tr key={s.id} className="field-row">
                <td className="field-row__value">{s.title}</td>
                <td className="field-row__value" style={{ maxWidth: "240px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.pattern}</td>
                <td className="field-row__value">{s.confidence}</td>
                <td className="field-row__value">{s.related_district || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
