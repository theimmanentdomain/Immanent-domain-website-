import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
export const metadata = pageMetadata("Code of Conduct | The Immanent Domain", "Honesty, consent, respect, and responsibility: the working standards of The Immanent Domain arts agency.", "/code-of-conduct");
const principles = [
  ["Right View", "Take other people’s experience seriously. Distinguish what you know from what you assume, and remain willing to correct a mistaken judgment."],
  ["Right Thought", "Approach the work and the people involved in good faith. Do not use collaboration as a means of exploitation or deliberate harm."],
  ["Right Speech", "Speak truthfully. Avoid slander, malicious gossip, and abusive language. Address disagreements with the people concerned and take responsibility for what you say."],
  ["Right Action", "Respect consent, personal boundaries, and property. Coercion, sexual misconduct, theft, deceit, and abusive conduct have no place in our work."],
  ["Right Livelihood", "Make work without fraud or exploitation. Be clear about credit, money, and obligations before asking others to commit."],
  ["Right Effort", "Follow through on your commitments. Agree on what you will contribute and when; communicate promptly when a commitment needs to change."],
  ["Right Mindfulness", "Pay attention to the effects of your conduct. Notice when someone needs space, when consent is absent, or when your actions are making collaboration harder."],
  ["Right Concentration", "Give the work sustained attention. Respect the time and focus of the people working beside you."],
];
export default function CodeOfConduct() {
  return <main className="editorial-page"><header><p className="kicker">Working together</p><h1>Code of<br /><em>Conduct</em></h1><p className="standfirst">Treat others as you would wish to be treated.</p></header><div className="editorial-copy"><p>Our interpersonal code begins with the Golden Rule and the eight principles of the older IMDO Beginner’s Doc. They establish a practical standard for making work together: honesty, consent, responsibility, and respect.</p></div><ol className="conduct-list">{principles.map(([title,body], index) => <li key={title}><span className="kicker">{String(index + 1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{body}</p></div></li>)}</ol><div className="editorial-copy"><p>Each participant is responsible for their conduct and their commitments. Concerns about an IMDO project can be raised at <a className="text-link" href="mailto:immanentdomain@gmail.com">immanentdomain@gmail.com</a>.</p><Link className="text-link" href="/about">← About the agency</Link></div></main>;
}
