import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { getPublicEvents } from "@/lib/calendar";
import { reportIds } from "@/lib/osint";
export const revalidate = 300;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths = ["/", "/about/", "/contact/", "/code-of-conduct/", "/events/", "/magazine/submissions/", "/archive/", "/work/", "/work/the-moment-is-yours/"];
  const [{events}, archive] = await Promise.all([getPublicEvents(), reportIds()]);
  return [...paths, "/osint/", ...archive.ids.map(id => "/osint/" + id + "/"), ...events.map(event => "/events/" + event.slug + "/")]
    .map(path => ({ url: siteUrl + path }));
}
