import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
export const metadata = pageMetadata("About | The Immanent Domain", "The Immanent Domain (IMDO) is an independent arts agency founded by Edward Pankov in New York.", "/about");
export default function About() {
  return <main className="editorial-page"><header><p className="kicker">The agency</p><h1>About<br /><em>The Immanent Domain</em></h1><p className="standfirst">An independent arts agency in New York, founded by Edward Pankov.</p></header>
    <div className="editorial-copy"><p>IMDO brings artists, writers, performers, and producers together to make work and put it into circulation. Its forms include publications, performances, events, and collaborations shaped around the people involved.</p><p>The agency represents the capacity of a group. Edward is its founder and a working participant; the people who join a project bring their own practices, ideas, and judgment.</p>
    <h2>What we do</h2><p>We develop projects, assemble collaborators, produce events, and publish writing and art. Blame It On Downtown is our current publication. Our events calendar follows performances, readings, exhibitions, and gatherings across the city.</p>
    <h2>Working together</h2><p>Proposals, submissions, and introductions are welcome. A working role carries responsibility: a clear contribution, an agreed scope, and a commitment to finish. Participation develops through the work and how we treat one another.</p>
    <p><Link className="text-link" href="/code-of-conduct">Read our code of conduct ↗</Link></p><p><Link className="button-link" href="/contact">Work with IMDO ↗</Link></p></div>
  </main>;
}
