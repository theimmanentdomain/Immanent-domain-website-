export interface Event {
  slug: string;
  title: string;
  type: string;
  status: "upcoming" | "previous" | "in-development";
  statusLabel: string;
  description: string;
  note?: string;
}

export const events: Event[] = [
  {
    slug: "the-moment-is-yours",
    title: "The Moment Is Yours",
    type: "Performance / Attention Experiment",
    status: "upcoming",
    statusLabel: "Upcoming",
    description:
      "An Immanent Domain performance project concerning attention, timing, hypnosis, and the strange authority of the present tense.",
    note: "Details forthcoming.",
  },
  {
    slug: "your-ulterior-motives",
    title: "Your Ulterior Motives",
    type: "Performance / Public Program",
    status: "previous",
    statusLabel: "Previous",
    description:
      "An Immanent Domain public program concerned with hidden reasons, visible behavior, confession, and the social uses of motive.",
    note: "Documentation forthcoming.",
  },
  {
    slug: "psychic-spies-for-hire",
    title: "Psychic Spies for Hire",
    type: "Film / Production",
    status: "in-development",
    statusLabel: "In Development",
    description:
      "An Immanent Domain film production. A tarot reader is drawn into the world of psychic espionage.",
    note: "Production development.",
  },
];
