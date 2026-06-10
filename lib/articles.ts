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
      "A note on scenes, alibis, cultural weather, and the problem of pretending the room had nothing to do with it.",
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
      "On fatalism, urban myth, bad explanations, and the pleasure of blaming the structure after the act.",
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
      "A small record of influence, misdirection, friendship, atmosphere, and the names we give to causes after the fact.",
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
      "A performance format concerning attention, hypnosis, timing, and the strange authority of the present tense.",
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
      "Notes toward an honest public record of hidden reasons, visible behavior, and the social uses of confession.",
      "Full text forthcoming.",
    ],
  },
];

export function getArticle(issueSlug: string, slug: string): ArticleContent | undefined {
  return articles.find((a) => a.issueSlug === issueSlug && a.slug === slug);
}
