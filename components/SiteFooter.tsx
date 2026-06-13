import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer-expanded">
      <div className="site-wrapper">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-col__heading">Institution</div>
            <Link href="/about">About</Link>
            <Link href="/manifesto">Declaration of Intent</Link>
            <Link href="/contact">Contact</Link>
            <a href={`mailto:${site.contact}`}>{site.contact}</a>
          </div>
          <div className="footer-col">
            <div className="footer-col__heading">Magazine</div>
            <Link href="/magazine">The Scene Made Me Do It</Link>
            <Link href="/magazine/forget-it-jake-issue-one">Issue One</Link>
            <Link href="/magazine/forget-it-jake-issue-one/assignment-board">Assignment Board</Link>
            <Link href="/submit">Submit</Link>
          </div>
          <div className="footer-col">
            <div className="footer-col__heading">System</div>
            <Link href="/start">Start</Link>
            <Link href="/map">Map</Link>
            <Link href="/gate">Gate</Link>
            <Link href="/oath">Oath</Link>
            <Link href="/keys">Keys</Link>
            <Link href="/field-notes">Field Notes</Link>
          </div>
          <div className="footer-col">
            <div className="footer-col__heading">Archive</div>
            <Link href="/archive">Archive</Link>
            <Link href="/events">Events</Link>
            <Link href="/videos">Videos</Link>
            <Link href="/creatives">Creatives</Link>
            <Link href="/projects">Projects</Link>
          </div>
          <div className="footer-col">
            <div className="footer-col__heading">External</div>
            <a href={site.social.substack} target="_blank" rel="noopener noreferrer">Substack</a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} The Immanent Domain
        </div>
      </div>
    </footer>
  );
}
