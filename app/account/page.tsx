import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const metadata = { title: "Account" };

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login?redirect=/account");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

  const { data: application } = await supabase
    .from("membership_applications")
    .select("status, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .maybeSingle();

  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "520px" }}>
        <div className="page-title-block">
          <span className="section-label">Account</span>
          <h1 className="page-title">{profile?.display_name || user.email}</h1>
        </div>

        <table className="field-table" style={{ marginBottom: "var(--space-xl)" }}>
          <tbody>
            <tr className="field-row">
              <td className="field-row__label">Email</td>
              <td className="field-row__value">{user.email}</td>
            </tr>
            {profile?.display_name && (
              <tr className="field-row">
                <td className="field-row__label">Name</td>
                <td className="field-row__value">{profile.display_name}</td>
              </tr>
            )}
            <tr className="field-row">
              <td className="field-row__label">Role</td>
              <td className="field-row__value">{profile?.role || "applicant"}</td>
            </tr>
            <tr className="field-row">
              <td className="field-row__label">Clearance</td>
              <td className="field-row__value">{profile?.clearance_level || "public"}</td>
            </tr>
            {application && (
              <tr className="field-row">
                <td className="field-row__label">Application</td>
                <td className="field-row__value">{application.status}</td>
              </tr>
            )}
          </tbody>
        </table>

        <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
          {profile?.role !== "applicant" && profile?.role !== "public" && (
            <Link href="/dashboard" className="btn-primary">Dashboard</Link>
          )}
          {!application && (
            <Link href="/apply" className="btn-secondary">Apply for membership</Link>
          )}
          <form action="/auth/signout" method="POST">
            <button type="submit" className="btn-secondary">Sign out</button>
          </form>
        </div>
      </div>
    </div>
  );
}
