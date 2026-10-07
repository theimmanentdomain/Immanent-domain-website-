import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { editionLabel, getReport, reportIds } from "@/lib/osint";
import { osintSubjects } from "@/lib/osint-schema";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata("OSINT | The Immanent Domain", "Open-source intelligence from IMDO: world conflicts, political shifts, NYC affairs, The State of Downtown, and occult practice and machine intuition.", "/osint");
export default async function OSINTPage() {
  const archive = await reportIds();
  const latest = archive.ids.length ? await getReport(archive.ids[0]) : null;
  return <main className="editorial-page osint-index"><header className="osint-masthead"><p className="kicker">007 / The Immanent Domain / Intelligence</p><h1>OSINT</h1><div className="osint-masthead-bottom"><p className="standfirst">The world in motion.<br />The city at ground level.</p><div><p className="kicker">Five daily editions / New York</p><p className="osint-edition-times">05:55 / 11:11 / 15:33 / 21:21 / 23:23</p><a className="text-link" href="#edition-archive">Explore the editions ↗</a></div></div></header>
    <section className="osint-coverage" aria-labelledby="coverage-heading"><div className="dossier-heading"><h2 id="coverage-heading">Fields of attention</h2><span>01—05 / Open-source intelligence</span></div><ol className="osint-subjects">{osintSubjects.map((name, index) => <li key={name}><span className="kicker">{String(index + 1).padStart(2, "0")} / Field</span><h3>{name}</h3></li>)}</ol></section>
    {latest && <section className="osint-latest"><p className="kicker">Latest edition</p><h2><Link href={`/osint/${latest.id}`}>{latest.title} ↗</Link></h2><p>Published {new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short" }).format(new Date(latest.publishedAt))} · New York</p></section>}
    {!latest && <section className="osint-empty"><p className="kicker">Publication status</p><p>{archive.unavailable ? "The report archive is temporarily unavailable. Please check back shortly." : "The first edition will appear here when published."}</p></section>}
    <section className="osint-archive" id="edition-archive"><div className="dossier-heading"><h2>Edition archive</h2><span>{archive.ids.length ? `${archive.ids.length} editions` : "Awaiting publication"}</span></div>{archive.ids.map(id => <Link key={id} href={`/osint/${id}`}><span>{editionLabel(id)}</span><span aria-hidden="true">↗</span></Link>)}</section>
    <aside className="osint-research"><p className="kicker">Research / 11:30 daily / New York</p><h2>Machine Intuition</h2><p>Original papers, evidence, and practical implications. A distinct research series within the OSINT archive.</p></aside>
  </main>;
}
