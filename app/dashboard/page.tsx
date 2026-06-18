import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "Briefings" };

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const [
    { count: reportCount },
    { count: taskCount },
    { count: leadCount },
    { count: signalCount },
  ] = await Promise.all([
    supabase.from("field_reports").select("*", { count: "exact", head: true }).eq("created_by", user!.id),
    supabase.from("tasks").select("*", { count: "exact", head: true }).eq("assigned_to", user!.id).neq("status", "completed"),
    supabase.from("leads").select("*", { count: "exact", head: true }),
    supabase.from("signals").select("*", { count: "exact", head: true }),
  ]);

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, clearance_level")
    .eq("user_id", user!.id)
    .single();

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Briefings</h1>
        <p className="dashboard-sub">Current operational state.</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="dashboard-card__label">Field Reports</div>
          <div className="dashboard-card__value">{reportCount ?? 0}</div>
          <div className="dashboard-card__sub">submitted by you</div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card__label">Open Tasks</div>
          <div className="dashboard-card__value">{taskCount ?? 0}</div>
          <div className="dashboard-card__sub">assigned to you</div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card__label">Active Leads</div>
          <div className="dashboard-card__value">{leadCount ?? 0}</div>
          <div className="dashboard-card__sub">in system</div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card__label">Signals</div>
          <div className="dashboard-card__value">{signalCount ?? 0}</div>
          <div className="dashboard-card__sub">patterns detected</div>
        </div>
        <div className="dashboard-card" style={{ gridColumn: "span 2" }}>
          <div className="dashboard-card__label">Clearance</div>
          <div className="dashboard-card__value" style={{ fontSize: "var(--text-base)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{profile?.clearance_level || "public"}</div>
          <div className="dashboard-card__sub">{profile?.role}</div>
        </div>
      </div>
    </div>
  );
}
