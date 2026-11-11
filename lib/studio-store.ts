import "server-only";
import { createHash } from "node:crypto";
import { type EditorialContent, validateEditorialContent } from "@/lib/editorial-content";
import { publishedEditorial } from "@/lib/published-editorial";

const endpoint = "https://api.github.com/repos/theimmanentdomain/Immanent-domain-website-/contents/data/site-content.json";
type StoreConfig = { githubToken: string; branch: string };
type StoreResponse = { content: EditorialContent; revision: string; live: boolean };

export const revisionPattern = /^[a-f0-9]{40}$/;
export class StudioConflict extends Error {}

function digest(content: EditorialContent) {
  return createHash("sha256").update(JSON.stringify(content)).digest("hex");
}

const deployedDigest = digest(publishedEditorial);

function response(content: EditorialContent, revision: string): StoreResponse {
  return { content, revision, live: digest(content) === deployedDigest };
}

function githubHeaders(config: StoreConfig) {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${config.githubToken}`,
    "Content-Type": "application/json",
    "User-Agent": "IMDO Studio",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

export async function loadStudioContent(config: StoreConfig): Promise<StoreResponse> {
  const query = new URLSearchParams({ ref: config.branch });
  const result = await fetch(`${endpoint}?${query}`, {
    headers: githubHeaders(config), cache: "no-store", signal: AbortSignal.timeout(8000),
  });
  if (!result.ok) throw new Error("GitHub did not return the current site content.");
  const file = await result.json();
  if (!revisionPattern.test(file.sha) || file.encoding !== "base64" || typeof file.content !== "string") {
    throw new Error("GitHub returned an unexpected file format.");
  }
  const content = validateEditorialContent(JSON.parse(Buffer.from(file.content, "base64").toString("utf8")));
  return response(content, file.sha);
}

export async function saveStudioContent(config: StoreConfig, revision: string, content: EditorialContent): Promise<StoreResponse> {
  const current = await loadStudioContent(config);
  if (digest(content) === digest(current.content)) return current;
  if (revision !== current.revision) throw new StudioConflict();

  const result = await fetch(endpoint, {
    method: "PUT",
    headers: githubHeaders(config),
    body: JSON.stringify({
      branch: config.branch,
      sha: revision,
      message: "Publish IMDO Studio content",
      content: Buffer.from(JSON.stringify(content, null, 2) + "\n").toString("base64"),
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (result.status === 409 || result.status === 422) throw new StudioConflict();
  if (!result.ok) throw new Error("GitHub rejected the site update.");

  return loadStudioContent(config).then((saved) => {
    if (digest(saved.content) !== digest(content)) throw new StudioConflict();
    return saved;
  });
}
