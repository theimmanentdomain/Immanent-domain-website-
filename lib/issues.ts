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
    description: "Issue One of The Scene Made Me Do It. Seven pieces on the city, cinema, performance, and the uses of style.",
    date: "2026-06",
    articles: [
      { slug: "the-persona-talks-back", title: "The Persona Talks Back", contributor: "The Editors", category: "Persona" },
      { slug: "dimes-square-was-never-a-neighborhood", title: "Dimes Square Was Never a Neighborhood", contributor: "Staff", category: "Downtown Anthropology" },
      { slug: "the-conversation-is-the-medium", title: "The Conversation Is the Medium", contributor: "Staff", category: "Conversation" },
      { slug: "forget-it-jake-its-a-feedback-loop", title: "Forget It, Jake, It's a Feedback Loop", contributor: "Staff", category: "Noir Documents" },
      { slug: "notes-toward-a-chinatown-of-the-mind", title: "Notes Toward a Chinatown of the Mind", contributor: "Staff", category: "False Neighborhoods" },
      { slug: "i-blame-it-on-downtown", title: "I Blame It on Downtown", contributor: "Staff", category: "Downtown Anthropology" },
      { slug: "100-most-pretentious-films-of-the-last-10-years", title: "The 100 Most Pretentious Films of the Last 10 Years", contributor: "Edward Pankov", category: "Cinema" },
    ],
  },
];

export function getIssue(slug: string): Issue | undefined {
  return issues.find((i) => i.slug === slug);
}
