import Link from "next/link";
import AgencyPanels from "@/components/AgencyPanels";
import { pageMetadata } from "@/lib/seo";
import { getPublishedEditorial } from "@/lib/published-editorial";

export const metadata = pageMetadata("The Immanent Domain | New York Arts Agency", "The Immanent Domain (IMDO) is an independent arts agency founded by Edward Pankov. Explore events, projects, and Blame It On Downtown.", "/");

export default async function Home() {
  const home = (await getPublishedEditorial()).home;
  return (
    <main className="agency-home hybrid-home">
      <section className="agency-hero hybrid-hero">
        <div className="hero-cosmogram" aria-hidden="true"><span className="cosmogram-rings" />{Array.from({ length: 10 }, (_, index) => <i key={index} />)}</div>
        <p className="kicker">{home.kicker}</p>
        <h1 style={{ whiteSpace: "pre-line" }}>{home.headline}</h1>
        <div className="agency-intro">
          <p>{home.lead}</p>
          <div>
            <p>{home.intro}</p>
            <div className="agency-intro-links">
              <Link className="text-link" href="/about">About the agency ↗</Link>
              <Link className="text-link" href="/discovery">Discover the web ↗</Link>
            </div>
          </div>
        </div>
      </section>
      <AgencyPanels />
      <section className="hybrid-contact">
        <p className="kicker">{home.contactKicker}</p>
        <h2>{home.contactHeading}</h2>
        <Link className="text-link" href="/contact">Start a conversation ↗</Link>
      </section>
    </main>
  );
}
