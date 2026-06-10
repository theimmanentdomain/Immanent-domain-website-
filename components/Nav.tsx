"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/magazine", label: "Magazine" },
  { href: "/submissions", label: "Submissions" },
  { href: "/about", label: "About" },
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
