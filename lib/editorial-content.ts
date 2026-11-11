export type DiscoveryPage = { title: string; category: string; note: string; url: string };
export type DiscoveryTopic = { title: string; category: string; query: string };

export const editorialFields = {
  home: {
    kicker: { label: "Kicker", max: 100 },
    headline: { label: "Headline", max: 100, multiline: true },
    lead: { label: "Lead", max: 260, multiline: true },
    intro: { label: "Introduction", max: 800, multiline: true },
    contactKicker: { label: "Contact kicker", max: 100 },
    contactHeading: { label: "Contact heading", max: 100 },
  },
  about: {
    standfirst: { label: "Lead", max: 320, multiline: true },
    intro: { label: "Introduction", max: 4000, multiline: true },
    work: { label: "What we do", max: 4000, multiline: true },
    participation: { label: "Working together", max: 4000, multiline: true },
  },
  discovery: {
    heading: { label: "Headline", max: 80 },
    intro: { label: "Introduction", max: 420, multiline: true },
  },
} satisfies Record<string, Record<string, { label: string; max: number; multiline?: boolean }>>;

type Fields<Section extends keyof typeof editorialFields> = {
  [Field in keyof (typeof editorialFields)[Section]]: string;
};

export type EditorialContent = {
  home: Fields<"home">;
  about: Fields<"about">;
  discovery: Fields<"discovery"> & { pages: DiscoveryPage[]; topics: DiscoveryTopic[] };
};

export const maxEntries = 100;
export const maxEditorialBytes = 220_000;
export const discoveryPageFields = {
  title: { label: "Title", max: 140 },
  category: { label: "Category", max: 60 },
  note: { label: "Description", max: 420, multiline: true },
  url: { label: "HTTPS address", max: 700 },
};
export const discoveryTopicFields = {
  title: { label: "Question or topic", max: 180 },
  category: { label: "Category", max: 60 },
  query: { label: "Search terms", max: 240 },
};

function object(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("A content section is missing.");
  return value as Record<string, unknown>;
}

function fields<Key extends string>(value: unknown, schema: Record<Key, { label: string; max: number }>, section: string) {
  const source = object(value);
  const result = {} as Record<Key, string>;
  for (const key of Object.keys(schema) as Key[]) {
    const text = source[key];
    const { label, max } = schema[key];
    if (typeof text !== "string" || !text.trim() || text.trim().length > max) {
      throw new Error(`${section} · ${label} needs 1–${max} characters.`);
    }
    result[key] = text.trim().replace(/\r\n/g, "\n");
  }
  return result;
}

function list(value: unknown, label: string): unknown[] {
  if (!Array.isArray(value) || value.length < 2 || value.length > maxEntries) {
    throw new Error(`${label} needs 2–${maxEntries} entries.`);
  }
  return value;
}

export function validateEditorialContent(value: unknown): EditorialContent {
  const source = object(value);
  const discovery = object(source.discovery);
  const pages = list(discovery.pages, "Filtered pages").map((item, index) => {
    const label = `Web page ${index + 1}`;
    const page = fields(item, discoveryPageFields, label);
    try {
      const url = new URL(page.url);
      if (url.protocol !== "https:" || url.username || url.password || !url.hostname.includes(".")) {
        throw new Error();
      }
      return { ...page, url: url.href };
    } catch {
      throw new Error(`${label} needs a public HTTPS address.`);
    }
  });
  if (new Set(pages.map(({ url }) => url)).size !== pages.length) throw new Error("Filtered pages contain duplicate addresses.");
  const topics = list(discovery.topics, "Filtered topics").map((item, index) =>
    fields(item, discoveryTopicFields, `Topic ${index + 1}`)
  );
  if (new Set(topics.map(({ title }) => title.toLowerCase())).size !== topics.length) throw new Error("Filtered topics contain duplicate titles.");
  return {
    home: fields(source.home, editorialFields.home, "Homepage"),
    about: fields(source.about, editorialFields.about, "About"),
    discovery: { ...fields(discovery, editorialFields.discovery, "Discovery"), pages, topics },
  };
}
