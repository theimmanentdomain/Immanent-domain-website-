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
      "On influence, atmosphere, and the forces that shape what we make and who we become. Twelve writers on the scenes that formed them — and the ones they could not escape.",
    articles: [
      {
        slug: "the-room-where-it-happened",
        title: "The Room Where It Happened",
        contributor: "A. L. Voss",
        type: "Essay",
        excerpt:
          "Every scene has a founding myth. Ours was a basement in the wrong part of a city that no longer exists in its original form.",
      },
      {
        slug: "borrowed-atmospheres",
        title: "Borrowed Atmospheres",
        contributor: "Cleo Maret",
        type: "Criticism",
        excerpt:
          "What does it mean to be formed by something you arrived at too late? The retrospective scene-joiner is a figure criticism has not yet fully named.",
      },
      {
        slug: "everything-was-underground",
        title: "Everything Was Underground",
        contributor: "D. Farrow",
        type: "Reported",
        excerpt:
          "Three years covering a music scene that refused to be written about, and what that refusal said about the culture it was protecting.",
      },
      {
        slug: "the-aesthetics-of-belonging",
        title: "The Aesthetics of Belonging",
        contributor: "Simone Achebe",
        type: "Essay",
        excerpt:
          "Style is not vanity. For certain communities, the right coat, the right posture, the right silence, constitutes a form of argument.",
      },
    ],
  },
];
