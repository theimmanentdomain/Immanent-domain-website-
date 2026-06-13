import { createClient } from "@/lib/supabase/server";
import { districts } from "@/lib/districts";

export const metadata = { title: "Map Intelligence" };

export default async function DashboardMapPage() {
  const supabase = await createClient();
  const { data: reports } = await supabase
    .from("field_reports")
    .select("id, title, location, created_at")
    .not("location", "is", null)
    .order("created_at", { ascending: false })
    .limit(30);

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Map Intelligence</h1>
        <p className="dashboard-sub">Field activity indexed by district.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "var(--space-md)", marginBottom: "var(--space-xl)" }}>
        {districts.map((d) => {
          const districtReports = reports?.filter((r) => r.location?.toLowerCase().includes(d.nycZone.toLowerCase())) || [];
          return (
            <div key={d.slug} className="dashboard-card">
              <div className="dashboard-card__label">{d.name}</div>
              <div className="dashboard-card__sub">{d.nycZone}</div>
              <div className="dashboard-card__value" style={{ fontSize: "var(--text-base)" }}>{districtReports.length} reports</div>
            </div>
          );
        })}
      </div>

      {reports && reports.length > 0 && (
        <>
          <h2 style={{ fontSize: "var(--text-sm)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "var(--space-md)" }}>Recent Located Reports</h2>
          <table className="field-table" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Title</th>
                <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Location</th>
                <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r) => (
                <tr key={r.id} className="field-row">
                  <td className="field-row__value">{r.title}</td>
                  <td className="field-row__value">{r.location}</td>
                  <td className="field-row__value" style={{ color: "var(--fg-dim)" }}>{new Date(r.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
