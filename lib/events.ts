export interface Event {
  slug: string;
  title: string;
  type: string;
  status: "upcoming" | "previous" | "in-development";
  statusLabel: string;
  date?: string;
  venue?: string;
  district?: string;
  description: string;
  note?: string;
  rsvpLink?: string;
}

export const events: Event[] = [
  {
    slug: "the-moment-is-yours",
    title: "The Moment Is Yours",
    type: "Performance / Hypnosis / Time Magic",
    status: "upcoming",
    statusLabel: "Forthcoming",
    description: "An Immanent Domain performance event. Attention, timing, and the strange authority of the present tense.",
    note: "Date and venue to be announced.",
  },
  {
    slug: "your-ulterior-motives",
    title: "Your Ulterior Motives",
    type: "Performance / Public Program",
    status: "previous",
    statusLabel: "Previous",
    description: "An Immanent Domain public program concerned with hidden reasons, visible behavior, confession, and the social uses of motive.",
    note: "Documentation forthcoming.",
  },
  {
    slug: "psychic-spies-screening",
    title: "Psychic Spies for Hire: Work in Progress",
    type: "Film Screening / Q&A",
    status: "in-development",
    statusLabel: "In Development",
    description: "A work-in-progress screening of Psychic Spies for Hire with discussion.",
    note: "Details forthcoming.",
  },
];
