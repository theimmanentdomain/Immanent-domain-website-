import { maxEditorialBytes, validateEditorialContent } from "@/lib/editorial-content";
import { isStudioOwner, readStudioJson, sameOrigin, studioConfig, studioResponse } from "@/lib/studio-auth";
import { loadStudioContent, revisionPattern, saveStudioContent, StudioConflict } from "@/lib/studio-store";

export async function GET() {
  const config = studioConfig();
  if (!config) return studioResponse({ error: "Studio setup is incomplete." }, 503);
  if (!await isStudioOwner(config.secret)) return studioResponse({ error: "Sign in to Studio." }, 401);
  try {
    return studioResponse(await loadStudioContent(config));
  } catch {
    return studioResponse({ error: "Could not load the current site content from GitHub. Try again." }, 502);
  }
}

export async function PUT(request: Request) {
  if (!sameOrigin(request)) return studioResponse({ error: "Open Studio from the IMDO website." }, 403);
  const config = studioConfig();
  if (!config) return studioResponse({ error: "Studio setup is incomplete." }, 503);
  if (!await isStudioOwner(config.secret)) return studioResponse({ error: "Sign in to Studio." }, 401);

  let revision;
  let content;
  try {
    const data = await readStudioJson(request, maxEditorialBytes) as { revision?: unknown; content?: unknown } | null;
    if (typeof data?.revision !== "string" || !revisionPattern.test(data.revision)) {
      throw new Error("Reload the current site content before publishing.");
    }
    revision = data.revision;
    content = validateEditorialContent(data.content);
  } catch (error) {
    return studioResponse({ error: error instanceof SyntaxError ? "Invalid update." : (error as Error).message }, 400);
  }

  try {
    return studioResponse(await saveStudioContent(config, revision, content));
  } catch (error) {
    if (error instanceof StudioConflict) {
      return studioResponse({ error: "The site content changed. Keep a copy of your edits and reload the latest version before publishing." }, 409);
    }
    return studioResponse({ error: "Publication could not be confirmed. Try publishing again or check the latest version." }, 502);
  }
}
