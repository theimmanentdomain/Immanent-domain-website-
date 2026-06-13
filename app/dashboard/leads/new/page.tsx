"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const LEAD_TYPES = ["contributor", "venue", "patron", "artist", "editor", "performer", "broker", "institution", "sponsor", "operator", "unknown"];
const STATUSES = ["uncontacted", "contacted", "in_conversation", "committed", "declined", "dormant"];

export default function NewLeadPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    type: "contributor",
    relationship_status: "uncontacted",
    summary: "",
    contact_info: "",
    district: "",
    next_action: "",
    tags: "",
  });

  function set(k: string, v: string) { setForm((f) => ({ ...f, [k]: v })); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push("/login"); return; }
    const { error: err } = await supabase.from("leads").insert({
      owner: user.id,
      name: form.name,
      type: form.type,
      relationship_status: form.relationship_status,
      summary: form.summary,
      contact_info: form.contact_info || null,
      district: form.district || null,
      next_action: form.next_action || null,
      tags: form.tags ? form.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
    });
    if (err) { setError(err.message); setLoading(false); }
    else router.push("/dashboard/leads");
  }

  return (
    <div className="dashboard-content">
      <div className="dashboard-header"><h1 className="dashboard-title">Add Lead</h1></div>
      <form onSubmit={handleSubmit} className="auth-form" style={{ maxWidth: "520px" }}>
        {error && <p className="auth-form__error">{error}</p>}
        <div className="auth-form__field">
          <label className="auth-form__label">Name</label>
          <input type="text" value={form.name} onChange={(e) => set("name", e.target.value)} className="auth-form__input" required />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Type</label>
          <select value={form.type} onChange={(e) => set("type", e.target.value)} className="auth-form__input auth-form__select">
            {LEAD_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Status</label>
          <select value={form.relationship_status} onChange={(e) => set("relationship_status", e.target.value)} className="auth-form__input auth-form__select">
            {STATUSES.map((s) => <option key={s} value={s}>{s.replace(/_/g, " ")}</option>)}
          </select>
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Summary</label>
          <textarea value={form.summary} onChange={(e) => set("summary", e.target.value)} className="auth-form__input auth-form__textarea" rows={4} required />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Contact info (internal only)</label>
          <input type="text" value={form.contact_info} onChange={(e) => set("contact_info", e.target.value)} className="auth-form__input" />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">District</label>
          <input type="text" value={form.district} onChange={(e) => set("district", e.target.value)} className="auth-form__input" />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Next action</label>
          <input type="text" value={form.next_action} onChange={(e) => set("next_action", e.target.value)} className="auth-form__input" />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Tags (comma-separated)</label>
          <input type="text" value={form.tags} onChange={(e) => set("tags", e.target.value)} className="auth-form__input" />
        </div>
        <button type="submit" className="auth-form__submit" disabled={loading}>{loading ? "Saving..." : "Add Lead"}</button>
      </form>
    </div>
  );
}
