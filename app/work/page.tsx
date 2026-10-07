import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
export const metadata = pageMetadata("Projects | The Immanent Domain", "Publications, performances, and collaborative art projects from The Immanent Domain.", "/work");
export default function WorkPage() {
  return <main className="editorial-page"><header><p className="kicker">Projects</p><h1>Work in the world.</h1></header><div className="editorial-copy"><h2><Link href="/magazine">Blame It On Downtown ↗</Link></h2><p>Our current publication. Submissions close October 23, 2026.</p><h2><Link href="/work/the-moment-is-yours">The Moment Is Yours ↗</Link></h2><p>An event in development exploring attention, perception, and performance.</p><p><Link href="/archive" className="text-link">Explore the archive ↗</Link></p></div></main>;
}
