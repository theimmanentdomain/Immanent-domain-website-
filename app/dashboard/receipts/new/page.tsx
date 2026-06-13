"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const RECEIPT_TYPES = ["document", "fragment", "extract", "link", "image", "audio", "field_note", "other"];
const CLEARANCE_LEVELS = ["internal", "members", "restricted", "command", "sealed"];

export default function NewReceiptPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    receipt_type: "document",
    source: "",
    description: "",
    text_extract: "",
    link: "",
    related_district: "",
    clearance_level: "internal",
    date_captured: new Date().toISOString().split("T")[0],
  });

  function set(k: string, v: string) { setForm((f) => ({ ...f, [k]: v })); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push("/login"); return; }
    const { error: err } = await supabase.from("private_receipts").insert({
      created_by: user.id,
      title: form.title,
      receipt_type: form.receipt_type,
      source: form.source || null,
      description: form.description || null,
      text_extract: form.text_extract || null,
      link: form.link || null,
      related_district: form.related_district || null,
      clearance_level: form.clearance_level,
      date_captured: form.date_captured,
    });
    if (err) { setError(err.message); setLoading(false); }
    else router.push("/dashboard/receipts");
  }

  return (
    <div className="dashboard-content">
      <div className="dashboard-header"><h1 className="dashboard-title">Log Receipt</h1></div>
      <form onSubmit={handleSubmit} className="auth-form" style={{ maxWidth: "520px" }}>
        {error && <p className="auth-form__error">{error}</p>}
        <div className="auth-form__field">
          <label className="auth-form__label">Title</label>
          <input type="text" value={form.title} onChange={(e) => set("title", e.target.value)} className="auth-form__input" required />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Type</label>
          <select value={form.receipt_type} onChange={(e) => set("receipt_type", e.target.value)} className="auth-form__input auth-form__select">
            {RECEIPT_TYPES.map((t) => <option key={t} value={t}>{t.replace(/_/g, " ")}</option>)}
          </select>
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Clearance level</label>
          <select value={form.clearance_level} onChange={(e) => set("clearance_level", e.target.value)} className="auth-form__input auth-form__select">
            {CLEARANCE_LEVELS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Source</label>
          <input type="text" value={form.source} onChange={(e) => set("source", e.target.value)} className="auth-form__input" />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Description</label>
          <textarea value={form.description} onChange={(e) => set("description", e.target.value)} className="auth-form__input auth-form__textarea" rows={3} />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Text extract</label>
          <textarea value={form.text_extract} onChange={(e) => set("text_extract", e.target.value)} className="auth-form__input auth-form__textarea" rows={5} />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Link (optional)</label>
          <input type="url" value={form.link} onChange={(e) => set("link", e.target.value)} className="auth-form__input" />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Related district</label>
          <input type="text" value={form.related_district} onChange={(e) => set("related_district", e.target.value)} className="auth-form__input" />
        </div>
        <div className="auth-form__field">
          <label className="auth-form__label">Date captured</label>
          <input type="date" value={form.date_captured} onChange={(e) => set("date_captured", e.target.value)} className="auth-form__input" required />
        </div>
        <button type="submit" className="auth-form__submit" disabled={loading}>{loading ? "Saving..." : "Log Receipt"}</button>
      </form>
    </div>
  );
}
