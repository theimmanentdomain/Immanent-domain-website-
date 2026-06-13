import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const metadata = { title: "Dossiers" };

export default async function DossiersPage() {
  const supabase = await createClient();
  const { data: dossiers } = await supabase
    .from("dossiers")
    .select("id, title, subject_type, clearance_level, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dossiers</h1>
        <Link href="/dashboard/dossiers/new" className="btn-primary" style={{ fontSize: "var(--text-sm)" }}>New Dossier</Link>
      </div>
      {!dossiers?.length ? (
        <p className="dashboard-empty">No dossiers on file.</p>
      ) : (
        <table className="field-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Title</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Subject Type</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Clearance</th>
            </tr>
          </thead>
          <tbody>
            {dossiers.map((d) => (
              <tr key={d.id} className="field-row">
                <td className="field-row__value">{d.title}</td>
                <td className="field-row__value">{d.subject_type}</td>
                <td className="field-row__value">{d.clearance_level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
