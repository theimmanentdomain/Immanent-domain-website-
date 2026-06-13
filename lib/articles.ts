export interface ArticleContent {
  issueSlug: string;
  slug: string;
  title: string;
  subtitle?: string;
  contributor: string;
  category: string;
  body: string[];
  clueToken?: string;
}

export const articles: ArticleContent[] = [
  {
    issueSlug: "forget-it-jake-issue-one",
    slug: "the-persona-talks-back",
    title: "The Persona Talks Back",
    subtitle: "On the character that survives contact with the audience.",
    contributor: "The Editors",
    category: "Persona",
    body: [
      "The persona is not a mask you put on. It is the residue of every room you have performed in, compressed into a stance. It carries your contradictions so you do not have to settle them. It fields the room while you think.",
      "The problem is that personas develop opinions. They begin making choices their operators would not have made. The stage name starts answering questions the legal name has no answer for. Eventually the persona is handling correspondence.",
      "At that point the question is not identity. The question is management.",
      "Full text forthcoming.",
    ],
  },
  {
    issueSlug: "forget-it-jake-issue-one",
    slug: "dimes-square-was-never-a-neighborhood",
    title: "Dimes Square Was Never a Neighborhood",
    subtitle: "A dispatch from the geographic imaginary.",
    contributor: "Staff",
    category: "Downtown Anthropology",
    body: [
      "Dimes Square is a rhetorical formation that briefly achieved spatial consistency. It named a cluster of behaviors, aesthetics, and social hierarchies and gave them a mailing address. The address was not real. The behaviors were.",
      "What interests us is the mechanism: how a scene generates a place name, how the name outlasts the scene, how the name then becomes the thing it was only ever describing. The neighborhood becomes the alibi for the neighborhood.",
      "The False Neighborhood is any territory whose borders shift depending on who is speaking and what they need the word to do.",
      "Full text forthcoming.",
    ],
    clueToken: "false neighborhood",
  },
  {
    issueSlug: "forget-it-jake-issue-one",
    slug: "the-conversation-is-the-medium",
    title: "The Conversation Is the Medium",
    subtitle: "Notes on interview as form.",
    contributor: "Staff",
    category: "Conversation",
    body: [
      "The interview is the dominant literary form of the present tense. More thinking happens in conversation than in essays. The thinking that happens in conversation is different: faster, more responsive, more exposed to the specific gravity of another person's attention.",
      "The form has been undertheorized. It is treated as a delivery mechanism for opinions that exist prior to the exchange. The interview as a site where something forms that would not have formed otherwise, that interests us more.",
      "What the question makes possible. What the recorder makes impossible. What the edit protects and what it costs.",
      "Full text forthcoming.",
    ],
  },
  {
    issueSlug: "forget-it-jake-issue-one",
    slug: "forget-it-jake-its-a-feedback-loop",
    title: "Forget It, Jake, It's a Feedback Loop",
    subtitle: "On fatalism and the comfort of structural explanations.",
    contributor: "Staff",
    category: "Noir Documents",
    body: [
      "The Chinatown explanation is seductive because it is total. Nothing could have been done. Nothing will change. The system is the system. Jake understands this at the end. He walks away because there is nothing else to do.",
      "The problem is that this conclusion is available at the beginning. It is available at every point in the story. The fatalist does not reason toward resignation; they begin there and reason backward.",
      "We are interested in the feedback loop: how the structural explanation becomes the structure it explains. How the alibi becomes operational. How noir becomes an operating system.",
      "Full text forthcoming.",
    ],
  },
  {
    issueSlug: "forget-it-jake-issue-one",
    slug: "notes-toward-a-chinatown-of-the-mind",
    title: "Notes Toward a Chinatown of the Mind",
    subtitle: "The city as initiatory terrain.",
    contributor: "Staff",
    category: "False Neighborhoods",
    body: [
      "The Chinatown of the mind is not the neighborhood. It is the zone where ordinary logic ceases to function as promised. Every city has one. Every person carries one. The geography varies. The structure is consistent.",
      "In Kabbalistic cartography, the city maps onto the Tree of Life: ten districts plus one hidden. The hidden one is not missing. It is present as absence, as the place the transit system knows but will not name. Ask the subway.",
      "Forget it. The map is not the territory. The territory is not the territory either. It is a set of instructions for a city that exists only while being navigated.",
      "Full text forthcoming.",
    ],
    clueToken: "the map is hungry",
  },
];

export function getArticle(issueSlug: string, slug: string): ArticleContent | undefined {
  return articles.find((a) => a.issueSlug === issueSlug && a.slug === slug);
}
