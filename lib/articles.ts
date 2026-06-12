export interface ArticleContent {
  issueSlug: string;
  slug: string;
  title: string;
  contributor: string;
  type: string;
  body: string[];
}

export const articles: ArticleContent[] = [
  {
    issueSlug: "issue-one",
    slug: "the-scene-made-me-do-it",
    title: "The Scene Made Me Do It",
    contributor: "Immanent Domain",
    type: "Editorial",
    body: [
      "On scenes, alibis, and the problem of pretending the room had nothing to do with it. Culture has conditions. Those conditions act on people. The record of what happened is incomplete without an account of where it happened, who else was there, and what the atmosphere was asking for.",
      "Full text forthcoming.",
    ],
  },
  {
    issueSlug: "issue-one",
    slug: "no-jake-its-chinatown",
    title: "No Jake, It’s Chinatown",
    contributor: "Staff",
    type: "Essay",
    body: [
      "On fatalism, urban myth, and the pleasure of blaming the structure after the act. The Chinatown explanation is seductive because it is total: nothing could have been done, nothing will change, the system is the system. This essay examines what that explanation costs.",
      "Full text forthcoming.",
    ],
  },
  {
    issueSlug: "issue-one",
    slug: "i-blame-it-on-dowtoj",
    title: "I Blame It on Dowtoj",
    contributor: "Staff",
    type: "Fragment",
    body: [
      "A small record of influence, misdirection, and the names we give to causes after the fact. Dowtoj is a placeholder, a stand-in for the unnamed third force that explains everything once it has already happened.",
      "Full text forthcoming.",
    ],
  },
  {
    issueSlug: "issue-one",
    slug: "the-moment-is-yours",
    title: "The Moment Is Yours",
    contributor: "Immanent Domain",
    type: "Event",
    body: [
      "A performance format concerning attention, hypnosis, timing, and the strange authority of the present tense. The premise is simple: the present moment is the only place anything actually happens, and most of contemporary life is organized to prevent access to it.",
      "Full text forthcoming.",
    ],
  },
  {
    issueSlug: "issue-one",
    slug: "your-ulterior-motives",
    title: "Your Ulterior Motives",
    contributor: "Immanent Domain",
    type: "Dispatch",
    body: [
      "Notes toward an honest public record of hidden reasons and visible behavior. The project takes confession as both subject and format, asking what it means to state a motive publicly, to perform sincerity, to make visible the structure of desire that ordinary social life requires us to conceal.",
      "Full text forthcoming.",
    ],
  },
];

export function getArticle(issueSlug: string, slug: string): ArticleContent | undefined {
  return articles.find((a) => a.issueSlug === issueSlug && a.slug === slug);
}
