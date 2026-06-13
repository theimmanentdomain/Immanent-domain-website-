export interface Project {
  slug: string;
  title: string;
  type: string;
  status: "previous" | "upcoming" | "in-development" | "active";
  statusLabel: string;
  shortDescription: string;
  body: string[];
  sephirah?: string;
  tags: string[];
  contactLine?: string;
}

export const projects: Project[] = [
  {
    slug: "the-scene-made-me-do-it",
    title: "The Scene Made Me Do It",
    type: "Magazine / Publication",
    status: "active",
    statusLabel: "Active",
    shortDescription: "The magazine of The Immanent Domain. On persona, conversation, and the city as a haunted operating system.",
    body: [
      "The Scene Made Me Do It is the magazine of The Immanent Domain.",
      "It publishes essays, field reports, conversations, noir documents, posters, and forms that do not fit existing categories.",
      "Issue One: Forget It, Jake, It's Chinatown.",
    ],
    sephirah: "Hod",
    tags: ["magazine", "publication", "downtown", "culture"],
  },
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
    slug: "cryptographic-map",
    title: "The Cryptographic Map Project",
    type: "Cartography / Occult Infrastructure",
    status: "in-development",
    statusLabel: "In Development",
    shortDescription: "A Kabbalistic mapping of Manhattan and the outer boroughs onto the Tree of Life.",
    body: [
      "The Cryptographic Map Project assigns each sephirah of the Tree of Life to a zone of New York City.",
      "Da'ath is the subway. Present everywhere. Named nowhere on the official routes.",
      "The map is a proposition about how power, memory, and territory organize themselves in a city that refuses to be fully legible.",
    ],
    sephirah: "Keter",
    tags: ["map", "kabbalah", "cartography", "NYC"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
