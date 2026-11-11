import "server-only";
import { BlobPreconditionFailedError, get, put } from "@vercel/blob";
import seed from "@/data/site-content.json";
import { type EditorialContent, validateEditorialContent } from "@/lib/editorial-content";

const pathname = "studio/published.json";
const seedRevision = "seed";
export const seedEditorial = validateEditorialContent(seed);

export class StudioConflict extends Error {}

export function studioStorageReady() {
  const environment = process.env.VERCEL_ENV;
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN && (!environment || environment === "production"));
}

export async function loadStudioContent(): Promise<{ content: EditorialContent; revision: string }> {
  const blob = await get(pathname, { access: "private", useCache: false, abortSignal: AbortSignal.timeout(8000) });
  if (!blob) return { content: seedEditorial, revision: seedRevision };
  if (blob.statusCode !== 200 || !blob.blob.etag) throw new Error("Studio storage did not return the published content.");
  const content = validateEditorialContent(await new Response(blob.stream).json());
  return { content, revision: blob.blob.etag };
}

export async function saveStudioContent(revision: string, content: EditorialContent) {
  const serialized = JSON.stringify(content);
  const current = await loadStudioContent();
  if (serialized === JSON.stringify(current.content)) return current;
  if (revision !== current.revision) throw new StudioConflict();

  try {
    await put(pathname, serialized, {
      access: "private",
      contentType: "application/json",
      allowOverwrite: revision !== seedRevision,
      ifMatch: revision === seedRevision ? undefined : revision,
      abortSignal: AbortSignal.timeout(12000),
    });
  } catch (error) {
    if (error instanceof BlobPreconditionFailedError) throw new StudioConflict();
    const latest = await loadStudioContent();
    if (serialized === JSON.stringify(latest.content)) return latest;
    if (latest.revision !== revision) throw new StudioConflict();
    throw error;
  }

  const saved = await loadStudioContent();
  if (JSON.stringify(saved.content) !== serialized) throw new StudioConflict();
  return saved;
}
