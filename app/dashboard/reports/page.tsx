import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const metadata = { title: "Field Reports" };

export default async function ReportsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: reports } = await supabase
    .from("field_reports")
    .select("id, title, source_type, confidence, review_status, created_at")
    .eq("created_by", user!.id)
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Field Reports</h1>
        <Link href="/dashboard/reports/new" className="btn-primary" style={{ fontSize: "var(--text-sm)" }}>File Report</Link>
      </div>

      {!reports?.length ? (
        <p className="dashboard-empty">No reports on file.</p>
      ) : (
        <table className="field-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Title</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Source</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Confidence</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Status</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => (
              <tr key={r.id} className="field-row">
                <td className="field-row__value">{r.title}</td>
                <td className="field-row__value">{r.source_type}</td>
                <td className="field-row__value">{r.confidence}</td>
                <td className="field-row__value">
                  <span className={`status-badge status-badge--${r.review_status}`}>{r.review_status}</span>
                </td>
                <td className="field-row__value" style={{ color: "var(--fg-dim)" }}>
                  {new Date(r.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
