import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start Here",
  description: "Entry points for The Immanent Domain.",
};

const links = [
  { href: "/magazine", label: "The Scene Made Me Do It", note: "The magazine" },
  { href: "/magazine/forget-it-jake-issue-one", label: "Issue One: Forget It, Jake, It's Chinatown", note: "Now available" },
  { href: "/magazine/forget-it-jake-issue-one/assignment-board", label: "Assignment Board", note: "How to contribute" },
  { href: "/map", label: "The Cryptographic Map Project", note: "New York as Kabbalistic terrain" },
  { href: "/projects", label: "Projects", note: "Films, performances, public programs" },
  { href: "/gate", label: "The Gate", note: "An initiation" },
  { href: "/archive", label: "Archive", note: "Documents, fragments, field reports" },
  { href: "/events", label: "Events", note: "Upcoming and previous" },
  { href: "/submit", label: "Submit", note: "Send work to the magazine" },
  { href: "/about", label: "About", note: "What this institution is" },
];

export default function StartPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "560px" }}>
        <div className="page-title-block">
          <h1 className="page-title">The Immanent Domain</h1>
          <p className="page-title__sub">{site.institutionalLine}</p>
        </div>

        <ul style={{ listStyle: "none", borderTop: "1px solid var(--rule)" }}>
          {links.map(({ href, label, note }) => (
            <li key={href} style={{ borderBottom: "1px solid var(--rule)", padding: "var(--space-md) 0" }}>
              <Link href={href} style={{ textDecoration: "none" }}>
                <div style={{ fontSize: "var(--text-sm)", color: "var(--fg)", marginBottom: "0.25rem" }}>{label}</div>
                <div style={{ fontSize: "var(--text-xs)", color: "var(--fg-muted)", letterSpacing: "0.1em" }}>{note}</div>
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "var(--space-xl)", fontSize: "var(--text-xs)", color: "var(--fg-muted)" }}>
          <a href={`mailto:${site.contact}`}>{site.contact}</a>
          {" "}&bull;{" "}
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          {" "}&bull;{" "}
          <a href={site.social.substack} target="_blank" rel="noopener noreferrer">Substack</a>
        </div>
      </div>
    </div>
  );
}
