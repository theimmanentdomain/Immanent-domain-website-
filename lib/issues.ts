export interface IssueArticle {
  slug: string;
  title: string;
  contributor: string;
  category: string;
}

export interface Issue {
  number: string;
  slug: string;
  title: string;
  deck: string;
  description: string;
  articles: IssueArticle[];
  date: string;
  clueToken?: string;
}

export const issues: Issue[] = [
  {
    number: "Issue One",
    slug: "forget-it-jake-issue-one",
    title: "Forget It, Jake, It's Chinatown",
    deck: "On persona, conversation, downtown, intelligence, and the city as a haunted operating system.",
    description:
      "The first issue examines the persona as an instrument, the conversation as a medium, and downtown New York as a living anthropology of performance, rumor, glamour, failure, and synthetic intelligence. The city does not explain itself. Neither does this issue.",
    articles: [
      {
        slug: "the-persona-talks-back",
        title: "The Persona Talks Back",
        contributor: "The Editors",
        category: "Persona",
      },
      {
        slug: "dimes-square-was-never-a-neighborhood",
        title: "Dimes Square Was Never a Neighborhood",
        contributor: "Staff",
        category: "Downtown Anthropology",
      },
      {
        slug: "the-conversation-is-the-medium",
        title: "The Conversation Is the Medium",
        contributor: "Staff",
        category: "Conversation",
      },
      {
        slug: "forget-it-jake-its-a-feedback-loop",
        title: "Forget It, Jake, It's a Feedback Loop",
        contributor: "Staff",
        category: "Noir Documents",
      },
      {
        slug: "notes-toward-a-chinatown-of-the-mind",
        title: "Notes Toward a Chinatown of the Mind",
        contributor: "Staff",
        category: "False Neighborhoods",
      },
    ],
    date: "2026-06",
  },
];

export function getIssue(slug: string): Issue | undefined {
  return issues.find((i) => i.slug === slug);
}
