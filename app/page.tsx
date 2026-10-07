import Link from "next/link";
import AgencyPanels from "@/components/AgencyPanels";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("The Immanent Domain | New York Arts Agency", "The Immanent Domain (IMDO) is an independent arts agency founded by Edward Pankov. Explore events, projects, and Blame It On Downtown.", "/");

export default function Home() {
  return (
    <main className="agency-home hybrid-home">
      <section className="agency-hero hybrid-hero">
        <div className="hero-cosmogram" aria-hidden="true"><span className="cosmogram-rings" />{Array.from({ length: 10 }, (_, index) => <i key={index} />)}</div>
        <p className="kicker">Independent arts agency · New York</p>
        <h1>THE<br />IMMANENT<br />DOMAIN</h1>
        <div className="agency-intro">
          <p>Artists, ideas, and the work of bringing them into the world.</p>
          <div><p>Founded by Edward Pankov, IMDO brings artists, writers, performers, and producers together around publications, live events, and collaborative projects.</p><Link className="text-link" href="/about">About the agency ↗</Link></div>
        </div>
      </section>
      <AgencyPanels />
      <section className="hybrid-contact">
        <p className="kicker">Proposals / Collaborations / Correspondence</p>
        <h2>ENGAGE THE DOMAIN.</h2>
        <Link className="text-link" href="/contact">Start a conversation ↗</Link>
      </section>
    </main>
  );
}
