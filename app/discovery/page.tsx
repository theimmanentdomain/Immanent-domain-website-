import { pageMetadata } from "@/lib/seo";
import { publishedEditorial } from "@/lib/published-editorial";
import crawl from "@/data/discovery/common-crawl.json";
import DiscoveryConsole from "./DiscoveryConsole";
import "./discovery.css";

export const metadata = pageMetadata(
  "Discovery | The Immanent Domain",
  "Find a random page on the open web or a topic to research. Draw from IMDO's selections or an unfiltered index sample.",
  "/discovery",
);

export default function Discovery() {
  const { heading, intro, pages, topics } = publishedEditorial.discovery;
  return (
    <main className="discovery">
      <header className="discovery-hero">
        <p className="kicker">Discovery</p>
        <h1>{heading}</h1>
        <p>{intro}</p>
      </header>
      <DiscoveryConsole pages={pages} topics={topics} />
      <details className="discovery-sources">
        <summary>Where the draws come from</summary>
        <p><strong>Filtered.</strong> IMDO selects the web pages and writes the research prompts. Draws alternate between categories when possible.</p>
        <p><strong>Unfiltered.</strong> Web draws come from a sample of {crawl.urls.length.toLocaleString("en-US")} distinct hostnames in the <a href="https://commoncrawl.org/cc-index/table/cc-main/warc/" target="_blank" rel="noreferrer">Common Crawl</a> October 2026 index. The sample contains HTTPS HTML captures without query strings. Pages may have changed since they were crawled. Research topics come from random English Wikipedia articles, with a backup sample if Wikipedia is unavailable.</p>
        <p>Discovery draws use no account, browsing history, or engagement ranking.</p>
      </details>
    </main>
  );
}
