export interface Article {
  slug: string;
  title: string;
  contributor: string;
  type: string;
  excerpt: string;
}

export interface Issue {
  number: string;
  slug: string;
  title: string;
  description: string;
  articles: Article[];
}

export const issues: Issue[] = [
  {
    number: "Issue One",
    slug: "issue-one",
    title: "The Scene Made Me Do It",
    description:
      "A first record of scenes, alibis, transmissions, refusals, performances, parties, arguments, rooms, street-level myths, and moments that made people act.",
    articles: [
      {
        slug: "the-scene-made-me-do-it",
        title: "The Scene Made Me Do It",
        contributor: "Immanent Domain",
        type: "Editorial",
        excerpt:
          "A note on scenes, alibis, cultural weather, and the problem of pretending the room had nothing to do with it.",
      },
      {
        slug: "no-jake-its-chinatown",
        title: "No Jake, It’s Chinatown",
        contributor: "Staff",
        type: "Essay",
        excerpt:
          "On fatalism, urban myth, bad explanations, and the pleasure of blaming the structure after the act.",
      },
      {
        slug: "i-blame-it-on-dowtoj",
        title: "I Blame It on Dowtoj",
        contributor: "Staff",
        type: "Fragment",
        excerpt:
          "A small record of influence, misdirection, friendship, atmosphere, and the names we give to causes after the fact.",
      },
      {
        slug: "the-moment-is-yours",
        title: "The Moment Is Yours",
        contributor: "Immanent Domain",
        type: "Event",
        excerpt:
          "A performance format concerning attention, hypnosis, timing, and the strange authority of the present tense.",
      },
      {
        slug: "your-ulterior-motives",
        title: "Your Ulterior Motives",
        contributor: "Immanent Domain",
        type: "Dispatch",
        excerpt:
          "Notes toward an honest public record of hidden reasons, visible behavior, and the social uses of confession.",
      },
    ],
  },
];
