"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { districts } from "@/lib/districts";

export default function ApplyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    why_here: "",
    what_observe: "",
    what_build: "",
    what_protect: "",
    skills: "",
    writing_sample: "",
    districts_known: [] as string[],
  });

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function toggleDistrict(slug: string) {
    setForm((f) => ({
      ...f,
      districts_known: f.districts_known.includes(slug)
        ? f.districts_known.filter((d) => d !== slug)
        : [...f.districts_known, slug],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) {
      setError("You must agree to the Data Covenant before submitting.");
      return;
    }
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login?redirect=/apply");
      return;
    }
    const { error: insertError } = await supabase.from("membership_applications").insert({
      user_id: user.id,
      name: form.name,
      email: form.email || user.email,
      why_here: form.why_here,
      what_observe: form.what_observe,
      what_build: form.what_build,
      what_protect: form.what_protect,
      skills: form.skills,
      writing_sample: form.writing_sample || null,
      districts_known: form.districts_known,
      covenant_accepted: true,
      status: "pending",
    });
    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/apply/submitted");
    }
  }

  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "640px" }}>
        <div className="page-title-block">
          <span className="section-label">Membership</span>
          <h1 className="page-title">Apply</h1>
          <p className="page-sub">Membership is by application. Review is selective and ongoing. There is no published timeline.</p>
        </div>

        <div className="prose-block" style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--text-sm)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "var(--space-sm)" }}>Data Covenant</h2>
          <p>The information you submit is held by the Immanent Domain. It is used for membership review and internal coordination. It is not sold, shared with third parties, or published. Your presence in the membership roster is not disclosed without your consent. You may request deletion of your record at any time. Membership in the organization does not constitute public disclosure of that membership. Internal operations are confidential. The organization may dissolve any membership at its discretion. By submitting this application, you acknowledge these terms.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && <p className="auth-form__error">{error}</p>}

          <div className="auth-form__field">
            <label className="auth-form__label">Name or handle</label>
            <input type="text" value={form.name} onChange={(e) => set("name", e.target.value)} className="auth-form__input" required />
          </div>

          <div className="auth-form__field">
            <label className="auth-form__label">Email</label>
            <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="auth-form__input" required />
          </div>

          <div className="auth-form__field">
            <label className="auth-form__label">Why are you here</label>
            <textarea value={form.why_here} onChange={(e) => set("why_here", e.target.value)} className="auth-form__input auth-form__textarea" required rows={4} placeholder="What brings you to this." />
          </div>

          <div className="auth-form__field">
            <label className="auth-form__label">What do you observe</label>
            <textarea value={form.what_observe} onChange={(e) => set("what_observe", e.target.value)} className="auth-form__input auth-form__textarea" required rows={4} placeholder="What you pay attention to. What you notice that others miss." />
          </div>

          <div className="auth-form__field">
            <label className="auth-form__label">What do you build</label>
            <textarea value={form.what_build} onChange={(e) => set("what_build", e.target.value)} className="auth-form__input auth-form__textarea" required rows={4} placeholder="Work, practice, projects. What you make." />
          </div>

          <div className="auth-form__field">
            <label className="auth-form__label">What do you protect</label>
            <textarea value={form.what_protect} onChange={(e) => set("what_protect", e.target.value)} className="auth-form__input auth-form__textarea" required rows={3} placeholder="What you will not compromise. What you defend." />
          </div>

          <div className="auth-form__field">
            <label className="auth-form__label">Skills and disciplines</label>
            <input type="text" value={form.skills} onChange={(e) => set("skills", e.target.value)} className="auth-form__input" required placeholder="writing, performance, organizing, etc." />
          </div>

          <div className="auth-form__field">
            <label className="auth-form__label">Writing sample (optional)</label>
            <textarea value={form.writing_sample} onChange={(e) => set("writing_sample", e.target.value)} className="auth-form__input auth-form__textarea" rows={5} placeholder="A paragraph or excerpt from something you have written." />
          </div>

          <div className="auth-form__field">
            <label className="auth-form__label">Districts you know (select all that apply)</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-xs)", marginTop: "var(--space-xs)" }}>
              {districts.map((d) => (
                <button
                  key={d.slug}
                  type="button"
                  onClick={() => toggleDistrict(d.slug)}
                  style={{
                    padding: "var(--space-xs) var(--space-sm)",
                    fontSize: "var(--text-xs)",
                    letterSpacing: "0.08em",
                    border: "1px solid var(--rule)",
                    background: form.districts_known.includes(d.slug) ? "var(--fg)" : "transparent",
                    color: form.districts_known.includes(d.slug) ? "var(--bg)" : "var(--fg-dim)",
                    cursor: "pointer",
                  }}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          <div className="auth-form__field" style={{ flexDirection: "row", alignItems: "flex-start", gap: "var(--space-sm)" }}>
            <input type="checkbox" id="covenant" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ marginTop: "3px", accentColor: "var(--fg)" }} />
            <label htmlFor="covenant" className="auth-form__label" style={{ cursor: "pointer" }}>I have read and agree to the Data Covenant above.</label>
          </div>

          <button type="submit" className="auth-form__submit" disabled={loading || !agreed}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
