export type DiscoveryResult = {
  title: string;
  url: string;
  source: string;
  note?: string;
  contextUrl?: string;
};

export function researchUrl(query: string) {
  return `https://duckduckgo.com/?${new URLSearchParams({ q: query })}`;
}
