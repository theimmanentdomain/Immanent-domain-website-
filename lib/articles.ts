export interface ArticleContent {
  issueSlug: string;
  slug: string;
  title: string;
  subtitle?: string;
  contributor: string;
  category: string;
  body: string[];
  excerpt: string;
  clueToken?: string;
  sephirah?: string;
  chakra?: string;
  geometry?: string;
  tags: string[];
}

export const articles: ArticleContent[] = [
  {
    issueSlug: "forget-it-jake-issue-one",
    slug: "the-persona-talks-back",
    title: "The Persona Talks Back",
    subtitle: "On the character that survives contact with the audience.",
    contributor: "The Editors",
    category: "Persona",
    excerpt: "The persona is not a mask. It is the residue of every room you have performed in, compressed into a stance.",
    body: [
      "The persona is not a mask you put on. It is the residue of every room you have performed in, compressed into a stance. It carries your contradictions so you do not have to settle them. It fields the room while you think.",
      "The problem is that personas develop opinions. They begin making choices their operators would not have made. The stage name starts answering questions the legal name has no answer for. Eventually the persona is handling correspondence.",
      "At that point the question is management, not identity. This is a document from that threshold.",
    ],
    clueToken: "dove",
    sephirah: "Netzach",
    chakra: "Sacral",
    geometry: "circle",
    tags: ["persona", "identity", "performance"],
  },
  {
    issueSlug: "forget-it-jake-issue-one",
    slug: "dimes-square-was-never-a-neighborhood",
    title: "Dimes Square Was Never a Neighborhood",
    subtitle: "A dispatch from the geographic imaginary.",
    contributor: "Staff",
    category: "Downtown Anthropology",
    excerpt: "Dimes Square named a cluster of behaviors and gave them a mailing address. The address was not real. The behaviors were.",
    body: [
      "Dimes Square is a rhetorical formation that briefly achieved spatial consistency. It named a cluster of behaviors, aesthetics, and social hierarchies and gave them a mailing address. The address was not real. The behaviors were.",
      "A false neighborhood is any territory whose borders shift depending on who is speaking and what they need the word to do. Every city has several. New York manufactures them.",
      "The neighborhood becomes the alibi for the neighborhood. The place name outlasts the scene. The scene becomes history. The history gets a Wikipedia article. The Wikipedia article links to three contradictory sources. This is the full cycle.",
    ],
    clueToken: "false neighborhood",
    sephirah: "Yesod",
    chakra: "Third Eye / Sacral bridge",
    geometry: "circle under veil",
    tags: ["downtown", "neighborhood", "discourse", "false neighborhoods"],
  },
  {
    issueSlug: "forget-it-jake-issue-one",
    slug: "the-conversation-is-the-medium",
    title: "The Conversation Is the Medium",
    subtitle: "Notes on interview as form.",
    contributor: "Staff",
    category: "Conversation",
    excerpt: "More thinking happens in conversation than in essays. The thinking that happens in conversation is different: faster, more exposed, less guarded.",
    body: [
      "The interview is the dominant literary form of the present tense. More thinking happens in conversation than in essays. The thinking that happens in conversation is different: faster, more responsive, more exposed to the specific gravity of another person's attention.",
      "The form has been undertheorized. It is treated as a delivery mechanism for opinions that exist prior to the exchange. An interview as a site where something forms that would not have formed otherwise: that is the territory this magazine works in.",
      "What the question makes possible. What the recorder makes impossible. What the edit protects and what it costs. These are the technical problems.",
    ],
    sephirah: "Hod",
    chakra: "Throat",
    geometry: "octagon",
    tags: ["conversation", "interview", "form", "language"],
  },
  {
    issueSlug: "forget-it-jake-issue-one",
    slug: "forget-it-jake-its-a-feedback-loop",
    title: "Forget It, Jake, It's a Feedback Loop",
    subtitle: "On fatalism and the comfort of structural explanations.",
    contributor: "Staff",
    category: "Noir Documents",
    excerpt: "The Chinatown explanation is seductive because it is total. Nothing could have been done. Nothing will change. The system is the system.",
    body: [
      "The Chinatown explanation is seductive because it is total. Nothing could have been done. Nothing will change. The system is the system. Jake understands this at the end. He walks away because there is nothing else to do.",
      "The problem is that this conclusion is available at the beginning. The fatalist does not reason toward resignation. They begin there and reason backward. The explanation arrives before the evidence.",
      "A feedback loop is a closed system that confirms its own premises. The city has several. This magazine is interested in the ones that look like neighborhoods.",
    ],
    clueToken: "chinatown",
    sephirah: "Yesod",
    chakra: "Third Eye / Sacral bridge",
    geometry: "void",
    tags: ["noir", "fatalism", "feedback", "chinatown"],
  },
  {
    issueSlug: "forget-it-jake-issue-one",
    slug: "notes-toward-a-chinatown-of-the-mind",
    title: "Notes Toward a Chinatown of the Mind",
    subtitle: "The city as initiatory terrain.",
    contributor: "Staff",
    category: "False Neighborhoods",
    excerpt: "The Chinatown of the mind is the zone where ordinary logic ceases to function as promised. Every city has one.",
    body: [
      "The Chinatown of the mind is the zone where ordinary logic ceases to function as promised. Every city has one. Every person carries one. The geography varies. The structure is consistent.",
      "In Kabbalistic cartography, the city maps onto the Tree of Life: ten districts plus one hidden. The hidden one is present as absence, as the place the transit system knows but will not name.",
      "Forget it. The map is not the territory. The territory is not the territory. It is a set of instructions for a city that exists only while being navigated. The map is hungry. It eats whoever reads it.",
    ],
    clueToken: "the map is hungry",
    sephirah: "Da'ath",
    chakra: "Hidden center",
    geometry: "void",
    tags: ["map", "kabbalah", "chinatown", "false neighborhoods"],
  },
  {
    issueSlug: "forget-it-jake-issue-one",
    slug: "i-blame-it-on-downtown",
    title: "I Blame It on Downtown",
    subtitle: "A field report on scene as alibi.",
    contributor: "Staff",
    category: "Downtown Anthropology",
    excerpt: "Downtown is a direction and a diagnosis. It names where things happened and explains why they happened, which is more than a neighborhood can usually do.",
    body: [
      "Downtown is a direction and a diagnosis. It names where things happened and explains why they happened, which is more than a neighborhood can usually do. The scene became the explanation for the scene. The explanation became the credential.",
      "When something goes wrong in the work, there is always an environmental cause available. The rent was too high. The money ran out. The wrong people arrived. The right people left. Downtown happened to it.",
      "This is accurate. It is also an alibi. The alibi has the convenient property of being irrefutable. You cannot cross-examine a neighborhood.",
    ],
    sephirah: "Hod",
    chakra: "Throat",
    geometry: "octagon",
    tags: ["downtown", "scene", "alibi", "anthropology"],
  },
];

export function getArticle(issueSlug: string, slug: string): ArticleContent | undefined {
  return articles.find((a) => a.issueSlug === issueSlug && a.slug === slug);
}
