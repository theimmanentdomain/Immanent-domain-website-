export interface Video {
  slug: string;
  title: string;
  type: string;
  status: string;
  description: string;
  relatedProject?: string;
}

export const videos: Video[] = [
  {
    slug: "the-moment-is-yours-teaser",
    title: "The Moment Is Yours",
    type: "Teaser",
    status: "Forthcoming",
    description:
      "Teaser for the upcoming Immanent Domain performance project concerning attention, hypnosis, and the present tense.",
    relatedProject: "the-moment-is-yours",
  },
  {
    slug: "psychic-spies-for-hire-production",
    title: "Psychic Spies for Hire",
    type: "Production Materials",
    status: "Forthcoming",
    description:
      "Production materials for the Immanent Domain film in which a tarot reader is drawn into the world of psychic espionage.",
    relatedProject: "psychic-spies-for-hire",
  },
  {
    slug: "immanent-domain-documentation",
    title: "Immanent Domain Documentation",
    type: "Archive",
    status: "Forthcoming",
    description:
      "An ongoing archive of Immanent Domain events, performances, and public programs.",
    relatedProject: undefined,
  },
];
