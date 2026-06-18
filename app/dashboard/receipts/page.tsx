import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const metadata = { title: "Receipts (Private)" };

export default async function PrivateReceiptsPage() {
  const supabase = await createClient();
  const { data: receipts } = await supabase
    .from("private_receipts")
    .select("id, title, receipt_type, source, clearance_level, created_at")
    .order("created_at", { ascending: false })
    .limit(100);

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Receipts</h1>
        <Link href="/dashboard/receipts/new" className="btn-primary" style={{ fontSize: "var(--text-sm)" }}>Log Receipt</Link>
      </div>
      <p className="dashboard-sub" style={{ marginBottom: "var(--space-lg)" }}>Captured materials. Source documents, fragments, extracts.</p>
      {!receipts?.length ? (
        <p className="dashboard-empty">No receipts logged.</p>
      ) : (
        <table className="field-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Title</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Type</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Source</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Clearance</th>
            </tr>
          </thead>
          <tbody>
            {receipts.map((r) => (
              <tr key={r.id} className="field-row">
                <td className="field-row__value">{r.title}</td>
                <td className="field-row__value">{r.receipt_type}</td>
                <td className="field-row__value">{r.source || "—"}</td>
                <td className="field-row__value">{r.clearance_level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
