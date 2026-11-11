import { randomInt } from "node:crypto";
import crawl from "@/data/discovery/common-crawl.json";
import topicSnapshot from "@/data/discovery/wikipedia.json";
import { researchUrl, type DiscoveryResult } from "@/lib/discovery";

const wikiApi = "https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnfilterredir=nonredirects&rnlimit=12&format=json";
type WikiPage = { id: number; title: string };

function sample<T>(items: readonly T[], count: number): T[] {
  const pool = [...items];
  const results = [];
  while (results.length < count && pool.length) {
    results.push(pool.splice(randomInt(pool.length), 1)[0]);
  }
  return results;
}

async function wikiDraw(): Promise<DiscoveryResult[]> {
  let pages: WikiPage[];
  let source = "Wikipedia · live draw";
  try {
    const response = await fetch(wikiApi, {
      cache: "no-store",
      headers: { "User-Agent": "IMDO Discovery (https://immanent-domain-website.vercel.app/discovery/)" },
      signal: AbortSignal.timeout(4500),
    });
    if (!response.ok) throw new Error("Wikipedia unavailable");
    const data = await response.json();
    if (!Array.isArray(data.query?.random)) throw new Error("Unexpected Wikipedia response");
    pages = data.query.random.filter((item: WikiPage) =>
      Number.isSafeInteger(item.id) && item.id > 0 && typeof item.title === "string" && item.title.trim()
    );
    if (!pages.length) throw new Error("Empty Wikipedia draw");
  } catch {
    pages = sample(topicSnapshot, 16);
    source = "Wikipedia · backup sample";
  }
  return sample(pages, pages.length).map(({ id, title }) => ({
    title,
    url: researchUrl(title),
    contextUrl: `https://en.wikipedia.org/?curid=${id}`,
    source,
  }));
}

export async function GET(request: Request) {
  const kind = new URL(request.url).searchParams.get("kind");
  const options = { headers: { "Cache-Control": "no-store" } };
  if (kind === "topic") return Response.json(await wikiDraw(), options);
  if (kind === "page") {
    const results = sample(crawl.urls, 20).map((url): DiscoveryResult => {
      const destination = new URL(url);
      return {
        title: destination.hostname,
        note: destination.pathname,
        url,
        source: "Common Crawl",
      };
    });
    return Response.json(results, options);
  }
  return Response.json({ error: "Choose a page or a topic." }, { ...options, status: 400 });
}
