export interface Event {
  id: string;
  title: string;
  subtitle?: string;
  type: string;
  status: "upcoming" | "previous";
  dateLabel?: string;
  venue?: string;
  project?: string;
  description: string;
  inquiryEmail?: string;
}

export const events: Event[] = [
  {
    id: "the-moment-is-yours-001",
    title: "The Moment Is Yours",
    type: "Performance / Attention Experiment",
    status: "upcoming",
    dateLabel: "Date forthcoming",
    project: "The Moment Is Yours",
    description: "A structured encounter with the present moment. No phones. No recording. No documentation of what occurs inside. Participants and performers inside the same room for the duration.",
    inquiryEmail: "theimmanentdomain@gmail.com",
  },
  {
    id: "your-ulterior-motives-001",
    title: "Your Ulterior Motives",
    subtitle: "A program on hidden reasons and visible behavior.",
    type: "Public Program",
    status: "upcoming",
    dateLabel: "Date forthcoming",
    description: "A public program concerned with hidden reasons, visible behavior, confession, and the social uses of motive. Format and venue to be announced.",
    inquiryEmail: "theimmanentdomain@gmail.com",
  },
  {
    id: "psychic-spies-wip-001",
    title: "Psychic Spies for Hire: Work in Progress",
    type: "Film / Work in Progress Screening",
    status: "upcoming",
    dateLabel: "Date forthcoming",
    project: "Psychic Spies for Hire",
    description: "A work-in-progress screening and conversation for Psychic Spies for Hire.",
    inquiryEmail: "theimmanentdomain@gmail.com",
  },
];
