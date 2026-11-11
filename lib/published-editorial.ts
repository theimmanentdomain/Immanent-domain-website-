import "server-only";
import { unstable_cache } from "next/cache";
import { loadStudioContent, seedEditorial, studioStorageReady } from "@/lib/studio-store";

export const editorialCacheTag = "imdo-studio-editorial";
const readCachedEditorial = unstable_cache(async () => {
  const { content } = await loadStudioContent();
  return content;
}, [editorialCacheTag], { tags: [editorialCacheTag], revalidate: 600 });

export async function getPublishedEditorial() {
  if (!studioStorageReady()) return seedEditorial;
  try {
    return await readCachedEditorial();
  } catch {
    return seedEditorial;
  }
}
