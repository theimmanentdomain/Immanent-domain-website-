import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login?redirect=/dashboard");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, clearance_level, display_name")
    .eq("user_id", user.id)
    .single();

  const role = profile?.role || "applicant";
  const restricted = ["public", "applicant"];
  if (restricted.includes(role)) redirect("/apply");

  const nav = [
    { href: "/dashboard", label: "Briefings" },
    { href: "/dashboard/reports", label: "Field Reports" },
    { href: "/dashboard/leads", label: "Leads" },
    { href: "/dashboard/dossiers", label: "Dossiers" },
    { href: "/dashboard/map", label: "Map Intelligence" },
    { href: "/dashboard/receipts", label: "Receipts" },
    { href: "/dashboard/tasks", label: "Tasks" },
    { href: "/dashboard/signals", label: "Signals" },
    { href: "/dashboard/submissions", label: "Submissions Queue" },
  ];

  return (
    <div className="dashboard-shell">
      <aside className="dashboard-nav">
        <div className="dashboard-nav__header">
          <span className="dashboard-nav__label">IMDO Internal</span>
          <span className="dashboard-nav__role">{profile?.display_name || user.email}</span>
          <span className="dashboard-nav__clearance">{profile?.clearance_level || "public"}</span>
        </div>
        <nav>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="dashboard-nav__item">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="dashboard-nav__footer">
          <Link href="/account" className="dashboard-nav__item">Account</Link>
          <Link href="/" className="dashboard-nav__item">Public site</Link>
        </div>
      </aside>
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
}
