export interface Project {
  slug: string;
  title: string;
  type: string;
  status: "previous" | "upcoming" | "in-development";
  statusLabel: string;
  shortDescription: string;
  body: string[];
  contactLine?: string;
}

export const projects: Project[] = [
  {
    slug: "your-ulterior-motives",
    title: "Your Ulterior Motives",
    type: "Performance / Public Program",
    status: "previous",
    statusLabel: "Previous",
    shortDescription:
      "A show concerned with hidden reasons, visible behavior, confession, performance, and the social uses of motive.",
    body: [
      "Your Ulterior Motives was an Immanent Domain public program concerned with hidden reasons, visible behavior, confession, and the social uses of motive.",
      "The project took confession as both subject and format, asking what it means to state a motive publicly, to perform sincerity, to make visible the structure of desire that ordinary social life requires us to conceal.",
      "Documentation forthcoming.",
    ],
  },
  {
    slug: "the-moment-is-yours",
    title: "The Moment Is Yours",
    type: "Performance / Hypnosis / Attention Experiment",
    status: "upcoming",
    statusLabel: "Upcoming",
    shortDescription:
      "A performance format concerning attention, timing, hypnosis, presence, and the strange authority of the present tense.",
    body: [
      "The Moment Is Yours is an upcoming Immanent Domain project concerning attention, timing, hypnosis, presence, and the strange authority of the present tense.",
      "The project is organized around a simple premise: the present moment is the only place anything actually happens, and most of contemporary life is organized to prevent access to it.",
      "Details forthcoming.",
    ],
    contactLine: "For inquiries: theimmanentdomain@gmail.com",
  },
  {
    slug: "psychic-spies-for-hire",
    title: "Psychic Spies for Hire",
    type: "Film / Production",
    status: "in-development",
    statusLabel: "In Development",
    shortDescription:
      "A film in which a tarot reader is drawn into the world of psychic espionage.",
    body: [
      "Psychic Spies for Hire is an upcoming Immanent Domain film production.",
      "The story follows a tarot reader who is drawn into the world of psychic espionage, moving from private practice to institutional operation, from intuition to method, from the intimacy of the reading to the cold mechanics of intelligence work.",
      "The central character does not begin as a trained operative. The transition is the story.",
      "Production materials forthcoming.",
    ],
    contactLine: "For production inquiries: theimmanentdomain@gmail.com",
  },
  {
    slug: "the-receipts",
    title: "The Receipts",
    type: "ARG / Institutional Archive",
    status: "in-development",
    statusLabel: "In Development",
    shortDescription:
      "A distributed alternate reality game embedded in Immanent Domain's public materials. Proof of something.",
    body: [
      "The Receipts is an ongoing operation embedded across the Immanent Domain website and its physical publications.",
      "Tokens are distributed across pages. Clues appear in district descriptions, archive entries, and article text. The /receipts page is not listed in the navigation.",
      "The item purchased is not listed. The total is correct.",
    ],
  },
  {
    slug: "nyc-sephiroth-map",
    title: "NYC Sephiroth Map",
    type: "Cartography / Occult Infrastructure",
    status: "in-development",
    statusLabel: "In Development",
    shortDescription:
      "A Kabbalistic mapping of Manhattan and the outer boroughs onto the Tree of Life.",
    body: [
      "The NYC Sephiroth Map assigns each sephirah of the Kabbalistic Tree of Life to a zone of New York City.",
      "Central Park as Keter. The Financial District as Malkuth. Da'ath is the subway: present everywhere, named nowhere on the official routes.",
      "The map is available as a diagram on the /map page. Each district has its own page with full attributes, NYC correspondence, and associated archive material.",
      "The outer boroughs are listed separately. They are not on the Tree. They are adjacent to it.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
