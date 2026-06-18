import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const metadata = { title: "Tasks" };

export default async function TasksPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: tasks } = await supabase
    .from("tasks")
    .select("id, title, status, priority, due_date, created_at")
    .eq("assigned_to", user!.id)
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Tasks</h1>
      </div>
      {!tasks?.length ? (
        <p className="dashboard-empty">No tasks assigned.</p>
      ) : (
        <table className="field-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Title</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Priority</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Status</th>
              <th className="field-row__label" style={{ textAlign: "left", paddingBottom: "var(--space-sm)" }}>Due</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t.id} className="field-row">
                <td className="field-row__value">{t.title}</td>
                <td className="field-row__value">{t.priority}</td>
                <td className="field-row__value">{t.status}</td>
                <td className="field-row__value" style={{ color: "var(--fg-dim)" }}>{t.due_date ? new Date(t.due_date).toLocaleDateString() : "open"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
