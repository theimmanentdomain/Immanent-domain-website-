export interface Creative {
  slug: string;
  name: string;
  role: string;
  bio: string;
  relatedProjects: string[];
  contactVisible: boolean;
}

export const creatives: Creative[] = [
  {
    slug: "immanent-domain",
    name: "Immanent Domain",
    role: "Editorial and Production",
    bio: "Immanent Domain is an intermedia institution based in New York. It publishes the magazine The Scene Made Me Do It and produces performances, films, and public programs. Writing, image, sound, performance, design, publication, and atmosphere enter into one living corpus.",
    relatedProjects: [
      "your-ulterior-motives",
      "the-moment-is-yours",
      "psychic-spies-for-hire",
    ],
    contactVisible: true,
  },
  {
    slug: "contributor-forthcoming-1",
    name: "Contributor",
    role: "Forthcoming",
    bio: "Bios will be added as creatives approve public listing.",
    relatedProjects: [],
    contactVisible: false,
  },
  {
    slug: "performer-forthcoming",
    name: "Performer",
    role: "Forthcoming",
    bio: "Bios will be added as creatives approve public listing.",
    relatedProjects: [],
    contactVisible: false,
  },
  {
    slug: "critic-forthcoming",
    name: "Critic",
    role: "Forthcoming",
    bio: "Bios will be added as creatives approve public listing.",
    relatedProjects: [],
    contactVisible: false,
  },
  {
    slug: "filmmaker-forthcoming",
    name: "Filmmaker",
    role: "Forthcoming",
    bio: "Bios will be added as creatives approve public listing.",
    relatedProjects: [],
    contactVisible: false,
  },
];
