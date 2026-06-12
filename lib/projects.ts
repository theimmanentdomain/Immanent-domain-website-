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
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
