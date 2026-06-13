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
  statement: string;
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
    deck: "On persona, conversation, and the city as a haunted operating system.",
    statement: "This issue examines persona as instrument. Conversation as living medium. Downtown as anthropology of performance, rumor, glamour, failure, and territorial fiction.",
    description: "The debut issue. Five pieces on the city as text, theater, and initiatory terrain.",
    date: "2026-06",
    articles: [
      { slug: "the-persona-talks-back", title: "The Persona Talks Back", contributor: "The Editors", category: "Persona" },
      { slug: "dimes-square-was-never-a-neighborhood", title: "Dimes Square Was Never a Neighborhood", contributor: "Staff", category: "Downtown Anthropology" },
      { slug: "the-conversation-is-the-medium", title: "The Conversation Is the Medium", contributor: "Staff", category: "Conversation" },
      { slug: "forget-it-jake-its-a-feedback-loop", title: "Forget It, Jake, It's a Feedback Loop", contributor: "Staff", category: "Noir Documents" },
      { slug: "notes-toward-a-chinatown-of-the-mind", title: "Notes Toward a Chinatown of the Mind", contributor: "Staff", category: "False Neighborhoods" },
      { slug: "i-blame-it-on-downtown", title: "I Blame It on Downtown", contributor: "Staff", category: "Downtown Anthropology" },
    ],
  },
];

export function getIssue(slug: string): Issue | undefined {
  return issues.find((i) => i.slug === slug);
}
