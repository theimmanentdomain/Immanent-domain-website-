import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "Submissions Queue" };

export default async function SubmissionsQueuePage() {
  const supabase = await createClient();
  const { data: apps } = await supabase
    .from("membership_applications")
    .select("id, display_name, city, discipline, status, created_at")
    .order("created_at", { ascending: false })
    .limit(100);

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Submissions Queue</h1>
        <p className="dashboard-sub">Membership applications awaiting review.</p>
      </div>
      {!apps?.length ? (
        <p className="dashboard-empty">No applications on file.</p>
      ) : (
        <table className="field-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Name</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>City</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Discipline</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Status</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((a) => (
              <tr key={a.id} className="field-row">
                <td className="field-row__value">{a.display_name}</td>
                <td className="field-row__value">{a.city}</td>
                <td className="field-row__value">{a.discipline}</td>
                <td className="field-row__value">
                  <span className={`status-badge status-badge--${a.status}`}>{a.status}</span>
                </td>
                <td className="field-row__value" style={{ color: "var(--fg-dim)" }}>
                  {new Date(a.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
