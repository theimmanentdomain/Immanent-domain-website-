"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/magazine", label: "Magazine" },
  { href: "/magazine/critique", label: "Critique" },
  { href: "/projects", label: "Projects" },
  { href: "/videos", label: "Videos" },
  { href: "/creatives", label: "Creatives" },
  { href: "/events", label: "Events" },
  { href: "/submissions", label: "Submissions" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href ? "active" : ""}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
