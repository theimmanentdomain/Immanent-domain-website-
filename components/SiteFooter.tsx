import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return <footer className="site-footer-expanded"><div className="site-wrapper"><div className="footer-grid">
    <div className="footer-col"><div className="footer-col__heading">The Immanent Domain</div><span>Independent arts agency · New York</span><a href={"mailto:" + site.contact}>{site.contact}</a></div>
    <div className="footer-col"><div className="footer-col__heading">Explore</div><Link href="/osint">OSINT</Link><Link href="/events">Events</Link><Link href="/magazine">Blame It On Downtown</Link><Link href="/archive">Archive</Link></div>
    <div className="footer-col"><div className="footer-col__heading">Work with us</div><Link href="/magazine/submissions">Open call</Link><Link href="/about">About the agency</Link><Link href="/code-of-conduct">Code of conduct</Link><Link href="/contact">Contact</Link></div>
    </div><div className="footer-bottom">© {new Date().getFullYear()} The Immanent Domain</div></div></footer>;
}
