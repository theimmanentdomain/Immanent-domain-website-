import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { publishedEditorial } from "@/lib/published-editorial";

export const metadata = pageMetadata("About | The Immanent Domain", "The Immanent Domain (IMDO) is an independent arts agency founded by Edward Pankov in New York.", "/about");

function paragraphs(text: string) {
  return text.split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>);
}

export default function About() {
  const { standfirst, intro, work, participation } = publishedEditorial.about;
  return (
    <main className="editorial-page">
      <header>
        <p className="kicker">The agency</p>
        <h1>About<br /><em>The Immanent Domain</em></h1>
        <p className="standfirst">{standfirst}</p>
      </header>
      <div className="editorial-copy">
        {paragraphs(intro)}
        <h2>What we do</h2>
        {paragraphs(work)}
        <h2>Working together</h2>
        {paragraphs(participation)}
        <p><Link className="text-link" href="/code-of-conduct">Read our code of conduct ↗</Link></p>
        <p><Link className="button-link" href="/contact">Work with IMDO ↗</Link></p>
      </div>
    </main>
  );
}
