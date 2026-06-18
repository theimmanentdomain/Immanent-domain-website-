"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/auth/callback?next=/account`,
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSent(true);
    }
  }

  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "440px" }}>
        <div className="page-title-block">
          <h1 className="page-title">Reset Password</h1>
        </div>
        {sent ? (
          <div className="prose-block">
            <p>A reset link has been sent to {email}.</p>
            <p><Link href="/login">Return to sign in</Link></p>
          </div>
        ) : (
          <form onSubmit={handleReset} className="auth-form">
            {error && <p className="auth-form__error">{error}</p>}
            <div className="auth-form__field">
              <label className="auth-form__label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-form__input"
                required
              />
            </div>
            <button type="submit" className="auth-form__submit" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
