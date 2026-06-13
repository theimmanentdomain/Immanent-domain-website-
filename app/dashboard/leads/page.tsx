import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const metadata = { title: "Leads" };

export default async function LeadsPage() {
  const supabase = await createClient();
  const { data: leads } = await supabase
    .from("leads")
    .select("id, name, type, relationship_status, district, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Leads</h1>
        <Link href="/dashboard/leads/new" className="btn-primary" style={{ fontSize: "var(--text-sm)" }}>Add Lead</Link>
      </div>
      {!leads?.length ? (
        <p className="dashboard-empty">No leads on file.</p>
      ) : (
        <table className="field-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Name</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Type</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Status</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>District</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr key={l.id} className="field-row">
                <td className="field-row__value">{l.name}</td>
                <td className="field-row__value">{l.type}</td>
                <td className="field-row__value">{l.relationship_status}</td>
                <td className="field-row__value">{l.district || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
