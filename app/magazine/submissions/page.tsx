import { pageMetadata } from "@/lib/seo";
import { submissionCall } from "@/lib/publication";
export const metadata = pageMetadata("Blame It On Downtown — Open Call | The Immanent Domain", "Submit writing, photography, and visual work to Blame It On Downtown by October 23, 2026.", "/magazine/submissions");
export default function Submissions() {
  return <main className="editorial-page publication-page"><header><p className="kicker">Open call for submissions</p><h1>Blame It<br />On <em>Downtown</em></h1><p className="standfirst">The city, its people, and the culture they make. Send us something worth putting into print.</p></header>
    <div className="submission-layout"><aside className="submission-deadline"><p className="kicker">Submission deadline</p><strong>October 23,<br />2026</strong><p>Friday · 11:59 p.m.<br />New York time</p></aside>
    <div className="editorial-copy"><h2>What we’re looking for</h2><p>{submissionCall.forms} Work that pays attention to a place, a person, a scene, or an argument. Proposals for work still taking shape are welcome.</p><h2>How to submit</h2><p>Email your work or a short pitch, your name, and a few lines of context. Attach a readable file or share an accessible link. For visual work, include captions and credits where relevant.</p><p>Use “Blame It On Downtown — Submission” as the subject line.</p><a className="button-link" href={submissionCall.mailto}>Email your submission ↗</a><p className="submission-email"><a href={"mailto:" + submissionCall.email}>{submissionCall.email}</a></p><p className="small-note">Questions about a contribution are welcome at the same address.</p></div></div>
  </main>;
}
