"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const SOURCE_TYPES = [
  "direct_observation", "conversation", "public_source", "submitted_document",
  "event_attendance", "editorial_lead", "operational_note", "rumor", "unknown",
];
const CONFIDENCE_LEVELS = ["low", "medium", "high", "confirmed"];

export default function NewReportPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    summary: "",
    body: "",
    date_observed: new Date().toISOString().split("T")[0],
    source_type: "direct_observation",
    confidence: "medium",
    location: "",
    district: "",
    tags: "",
  });

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push("/login"); return; }

    const { error: err } = await supabase.from("field_reports").insert({
      created_by: user.id,
      title: form.title,
      summary: form.summary,
      body: form.body,
      date_observed: form.date_observed,
      source_type: form.source_type,
      confidence: form.confidence,
      location: form.location || null,
      district: form.district || null,
      tags: form.tags ? form.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
      review_status: "unreviewed",
    });

    if (err) { setError(err.message); setLoading(false); }
    else router.push("/dashboard/reports");
  }

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">File Report</h1>
        <p className="dashboard-sub">Reports are internal. Do not include personal identifiers of third parties without their consent.</p>
      </div>
      <form onSubmit={handleSubmit} className="auth-form" style={{ maxWidth: "600px" }}>
        {error && <p className="auth-form__error">{error}</p>}
        <div className="auth-form__field">
          <label className="auth-form__label">Title</label>
          <input type="text" value={form.title} onChange={(e) => set("title", e.target.value)} className="auth-form__input" required />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Summary (one paragraph)</label>
          <textarea value={form.summary} onChange={(e) => set("summary", e.target.value)} className="auth-form__input auth-form__textarea" rows={3} required />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Full report</label>
          <textarea value={form.body} onChange={(e) => set("body", e.target.value)} className="auth-form__input auth-form__textarea" rows={10} required />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Date observed</label>
          <input type="date" value={form.date_observed} onChange={(e) => set("date_observed", e.target.value)} className="auth-form__input" required />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Source type</label>
          <select value={form.source_type} onChange={(e) => set("source_type", e.target.value)} className="auth-form__input auth-form__select">
            {SOURCE_TYPES.map((s) => <option key={s} value={s}>{s.replace(/_/g, " ")}</option>)}
          </select>
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Confidence</label>
          <select value={form.confidence} onChange={(e) => set("confidence", e.target.value)} className="auth-form__input auth-form__select">
            {CONFIDENCE_LEVELS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Location (optional)</label>
          <input type="text" value={form.location} onChange={(e) => set("location", e.target.value)} className="auth-form__input" />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Tags (comma-separated)</label>
          <input type="text" value={form.tags} onChange={(e) => set("tags", e.target.value)} className="auth-form__input" placeholder="downtown, performance, lead" />
        </div>
        <button type="submit" className="auth-form__submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
}
