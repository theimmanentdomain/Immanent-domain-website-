"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: displayName },
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
    }
  }

  if (success) {
    return (
      <div className="site-wrapper">
        <div className="page-body" style={{ maxWidth: "440px" }}>
          <div className="page-title-block">
            <h1 className="page-title">Check Your Email</h1>
          </div>
          <div className="prose-block">
            <p>A confirmation link has been sent to {email}.</p>
            <p style={{ color: "var(--fg-dim)" }}>
              After confirming, you can <Link href="/apply">submit a membership application</Link>.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "440px" }}>
        <div className="page-title-block">
          <span className="section-label">Access</span>
          <h1 className="page-title">Create Account</h1>
          <p className="page-title__sub">
            Account creation grants access to the application queue. Full access requires membership review.
          </p>
        </div>
        <form onSubmit={handleSignup} className="auth-form">
          {error && <p className="auth-form__error">{error}</p>}
          <div className="auth-form__field">
            <label className="auth-form__label">Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="auth-form__input"
              required
            />
          </div>
          <div className="auth-form__field">
            <label className="auth-form__label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-form__input"
              required
              autoComplete="email"
            />
          </div>
          <div className="auth-form__field">
            <label className="auth-form__label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-form__input"
              required
              minLength={8}
              autoComplete="new-password"
            />
          </div>
          <button type="submit" className="auth-form__submit" disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>
        <div className="auth-form__links">
          <Link href="/login">Already have an account?</Link>
        </div>
      </div>
    </div>
  );
}
