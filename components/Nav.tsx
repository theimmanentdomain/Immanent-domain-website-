"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/magazine", label: "Magazine" },
  { href: "/map", label: "Map" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/archive", label: "Archive" },
  { href: "/submit", label: "Submit" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="site-nav">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className={pathname === href ? "active" : ""}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
