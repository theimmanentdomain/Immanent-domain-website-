"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push(redirect);
    }
  }

  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "440px" }}>
        <div className="page-title-block">
          <span className="section-label">Access</span>
          <h1 className="page-title">Sign In</h1>
        </div>
        <form onSubmit={handleLogin} className="auth-form">
          {error && <p className="auth-form__error">{error}</p>}
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
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="auth-form__submit" disabled={loading}>
            {loading ? "Signing in..." : "Enter"}
          </button>
        </form>
        <div className="auth-form__links">
          <Link href="/reset-password">Reset password</Link>
          <span>&bull;</span>
          <Link href="/signup">Create account</Link>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
