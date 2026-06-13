"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const SUBJECT_TYPES = ["person", "venue", "organization", "project", "event", "concept", "territory", "other"];
const CLEARANCE_LEVELS = ["public", "members", "internal", "restricted", "command", "sealed"];

export default function NewDossierPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    subject_type: "person",
    clearance_level: "internal",
    summary: "",
    body: "",
    related_district: "",
  });

  function set(k: string, v: string) { setForm((f) => ({ ...f, [k]: v })); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push("/login"); return; }
    const { error: err } = await supabase.from("dossiers").insert({
      created_by: user.id,
      title: form.title,
      subject_type: form.subject_type,
      clearance_level: form.clearance_level,
      summary: form.summary,
      body: form.body || null,
      related_district: form.related_district || null,
    });
    if (err) { setError(err.message); setLoading(false); }
    else router.push("/dashboard/dossiers");
  }

  return (
    <div className="dashboard-content">
      <div className="dashboard-header"><h1 className="dashboard-title">New Dossier</h1></div>
      <form onSubmit={handleSubmit} className="auth-form" style={{ maxWidth: "520px" }}>
        {error && <p className="auth-form__error">{error}</p>}
        <div className="auth-form__field">
          <label className="auth-form__label">Title</label>
          <input type="text" value={form.title} onChange={(e) => set("title", e.target.value)} className="auth-form__input" required />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Subject type</label>
          <select value={form.subject_type} onChange={(e) => set("subject_type", e.target.value)} className="auth-form__input auth-form__select">
            {SUBJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Clearance level</label>
          <select value={form.clearance_level} onChange={(e) => set("clearance_level", e.target.value)} className="auth-form__input auth-form__select">
            {CLEARANCE_LEVELS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Summary</label>
          <textarea value={form.summary} onChange={(e) => set("summary", e.target.value)} className="auth-form__input auth-form__textarea" rows={4} required />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Full body (optional)</label>
          <textarea value={form.body} onChange={(e) => set("body", e.target.value)} className="auth-form__input auth-form__textarea" rows={8} />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Related district (optional)</label>
          <input type="text" value={form.related_district} onChange={(e) => set("related_district", e.target.value)} className="auth-form__input" />
        </div>
        <button type="submit" className="auth-form__submit" disabled={loading}>{loading ? "Saving..." : "Create Dossier"}</button>
      </form>
    </div>
  );
}
