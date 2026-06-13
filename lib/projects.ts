export interface Project {
  slug: string;
  title: string;
  type: string;
  status: "previous" | "upcoming" | "in-development";
  statusLabel: string;
  shortDescription: string;
  body: string[];
  sephirah?: string;
  tags: string[];
  contactLine?: string;
}

export const projects: Project[] = [
  {
    slug: "the-moment-is-yours",
    title: "The Moment Is Yours",
    type: "Performance / Attention Experiment",
    status: "upcoming",
    statusLabel: "Upcoming",
    shortDescription: "A performance format concerning attention, timing, hypnosis, and the strange authority of the present tense.",
    body: [
      "The Moment Is Yours is an Immanent Domain performance project.",
      "The premise: the present moment is the only place anything actually happens. Contemporary life is organized around access to everything except that.",
      "Details forthcoming.",
    ],
    sephirah: "Tiferet",
    tags: ["performance", "hypnosis", "presence", "attention"],
    contactLine: "Inquiries: theimmanentdomain@gmail.com",
  },
  {
    slug: "psychic-spies-for-hire",
    title: "Psychic Spies for Hire",
    type: "Film / Production",
    status: "in-development",
    statusLabel: "In Development",
    shortDescription: "A film in which a tarot reader is drawn into the world of psychic espionage.",
    body: [
      "Psychic Spies for Hire is an Immanent Domain film production.",
      "The story follows a tarot reader drawn into the world of psychic espionage. The transition from private practice to institutional operation is the story.",
      "Production materials forthcoming.",
    ],
    sephirah: "Da'ath",
    tags: ["film", "espionage", "occult", "tarot"],
    contactLine: "Production inquiries: theimmanentdomain@gmail.com",
  },
  {
    slug: "forget-it-jake-magazine",
    title: "Forget It, Jake, It's Chinatown",
    type: "Magazine / Publication",
    status: "in-development",
    statusLabel: "In Development",
    shortDescription: "The magazine of The Immanent Domain. On persona, conversation, and the city as a haunted operating system.",
    body: [
      "The magazine publishes essays, field reports, conversations, noir documents, posters, and forms that do not fit existing categories.",
      "Issue One is forthcoming.",
    ],
    sephirah: "Hod",
    tags: ["magazine", "publication", "downtown", "culture"],
  },
  {
    slug: "the-receipts",
    title: "The Receipts",
    type: "ARG / Institutional Archive",
    status: "in-development",
    statusLabel: "In Development",
    shortDescription: "A distributed alternate reality game embedded in Immanent Domain's public materials.",
    body: [
      "The Receipts is an ongoing operation embedded across the Immanent Domain website and physical publications.",
      "Tokens are distributed. Receipts accumulate. The item purchased is not listed. The total is correct.",
    ],
    sephirah: "Yesod",
    tags: ["ARG", "archive", "puzzle", "institutional"],
  },
  {
    slug: "nyc-sephiroth-map",
    title: "NYC Sephiroth Map",
    type: "Cartography / Occult Infrastructure",
    status: "in-development",
    statusLabel: "In Development",
    shortDescription: "A Kabbalistic mapping of Manhattan and the outer boroughs onto the Tree of Life.",
    body: [
      "The NYC Sephiroth Map assigns each sephirah of the Tree of Life to a zone of New York City.",
      "Da'ath is the subway. Present everywhere. Named nowhere on the official routes.",
    ],
    sephirah: "Keter",
    tags: ["map", "kabbalah", "cartography", "NYC"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
