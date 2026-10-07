import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMediaItem, mediaItems } from "@/lib/content";
export const metadata = pageMetadata("The Moment Is Yours | The Immanent Domain", "An IMDO performance project exploring attention, hypnosis, and artistic agency through consensual public experimentation.", "/work/the-moment-is-yours");
export const dynamicParams = false;
export function generateStaticParams() { return mediaItems.map(({slug}) => ({slug})); }
export default async function WorkDetail({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params;
  const item = getMediaItem(slug);
  if (!item) notFound();
  return <main className="editorial-page"><header><p className="kicker">Project in development</p><h1>{item.title}</h1></header><div className="editorial-copy"><p className="standfirst">What happens when artists take the tools of attention into their own hands?</p><p>The Moment Is Yours examines hypnosis, persuasion, ritual, and influence as material for performance. It asks how techniques usually associated with institutions, advertisers, and specialists can be studied and demystified through artistic practice.</p><p>The event is being developed around consensual public performance and experimentation. Program, participants, date, and venue will be announced as they are confirmed.</p><Link className="button-link" href="mailto:immanentdomain@gmail.com?subject=The%20Moment%20Is%20Yours">Discuss a contribution ↗</Link></div></main>;
}
