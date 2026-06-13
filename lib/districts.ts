export interface District {
  slug: string;
  name: string;
  hebrew: string;
  number: number;
  attribute: string;
  nycZone: string;
  description: string;
  col: number;
  row: number;
  clueToken?: string;
  outerBorough?: boolean;
}

export const districts: District[] = [
  {
    slug: "keter",
    name: "Keter",
    hebrew: "כֶּתֶר",
    number: 1,
    attribute: "Crown, source, void, undifferentiated will",
    nycZone: "Central Park",
    description:
      "The crown of the island. No address, no entrance fee at the gate, no transaction required. The park holds the city without being the city. Terrain that predates jurisdiction.",
    col: 3,
    row: 1,
    clueToken: "jurisdiction",
  },
  {
    slug: "chokhmah",
    name: "Chokhmah",
    hebrew: "חָכְמָה",
    number: 2,
    attribute: "Transmission, flash of insight, original intelligence",
    nycZone: "Upper West Side",
    description:
      "Old money and old memory. The buildings remember when the city believed in permanence. Libraries and concert halls hold transmissions no algorithm has indexed.",
    col: 4,
    row: 2,
  },
  {
    slug: "binah",
    name: "Binah",
    hebrew: "בִּינָה",
    number: 3,
    attribute: "Understanding, containment, institution, inheritance",
    nycZone: "Upper East Side",
    description:
      "The museum district. Forms that survived long enough to be called culture. Inheritance administered, beauty preserved under glass.",
    col: 2,
    row: 2,
  },
  {
    slug: "chesed",
    name: "Chesed",
    hebrew: "חֶסֶד",
    number: 4,
    attribute: "Patronage, expansion, hospitality, theater",
    nycZone: "Midtown West / Theater District",
    description:
      "The machinery of spectacle funded by invisible patrons. The velvet rope is a mercy. Everyone wants to be inside. Some earn it.",
    col: 4,
    row: 4,
  },
  {
    slug: "gevurah",
    name: "Gevurah",
    hebrew: "גְּבוּרָה",
    number: 5,
    attribute: "Law, force, finance, command",
    nycZone: "Midtown East",
    description:
      "Glass towers occupied by the managers of force. Contracts signed here bind people who will never meet. Power without body.",
    col: 2,
    row: 4,
  },
  {
    slug: "tiferet",
    name: "Tiferet",
    hebrew: "תִּפְאֶרֶת",
    number: 6,
    attribute: "Beauty, balance, solar theater, the false center",
    nycZone: "Times Square",
    description:
      "The solar plexus of the island. Too bright to look at directly. The center holds because it refuses to mean anything. Beauty as pure advertisement.",
    col: 3,
    row: 5,
  },
  {
    slug: "netzach",
    name: "Netzach",
    hebrew: "נֶצַח",
    number: 7,
    attribute: "Desire, art markets, beauty, stamina",
    nycZone: "Chelsea",
    description:
      "Galleries with white walls and no prices visible. Desire dressed as taste. The art market speaks in whispers that carry across the room.",
    col: 4,
    row: 6,
    clueToken: "dove",
  },
  {
    slug: "hod",
    name: "Hod",
    hebrew: "הוֹד",
    number: 8,
    attribute: "Language, wit, criticism, nervous systems",
    nycZone: "East Village",
    description:
      "The nervous system of downtown. Bars that double as editorial boards. The scene made the criticism before the critics arrived.",
    col: 2,
    row: 6,
  },
  {
    slug: "yesod",
    name: "Yesod",
    hebrew: "יְסוֹד",
    number: 9,
    attribute: "Dream logic, masks, understructure, ghosts",
    nycZone: "Chinatown",
    description:
      "The city's understructure. Older than its current name. Masks for every occasion, sold by the pound. Forget it. It knows what it is.",
    col: 3,
    row: 7,
    clueToken: "chinatown",
  },
  {
    slug: "malkuth",
    name: "Malkuth",
    hebrew: "מַלְכוּת",
    number: 10,
    attribute: "Manifestation, money, contracts, the ground",
    nycZone: "Financial District",
    description:
      "Where the invisible becomes a signed document. The ground floor of everything. Money is matter. Here, matter rules.",
    col: 3,
    row: 8,
    clueToken: "receipt",
  },
  {
    slug: "daath",
    name: "Da'ath",
    hebrew: "דַּעַת",
    number: 11,
    attribute: "Hidden knowledge, the abyss, transit, disorientation",
    nycZone: "The Subway",
    description:
      "Not on the official map. Connects everything that cannot otherwise be connected. Ask the subway. It will not answer directly.",
    col: 3,
    row: 3,
    clueToken: "ask the subway",
  },
];

export const outerBoroughs = [
  {
    slug: "brooklyn",
    name: "Brooklyn",
    attribute: "Workshop, myth factory, exile, return",
    description:
      "Where the work gets done after the scene has moved on. Every neighborhood a draft of the one before it.",
    clueToken: "third floor",
  },
  {
    slug: "queens",
    name: "Queens",
    attribute: "Multiplicity, language, airport logic, world-interface",
    description:
      "More languages per square mile than any territory on earth. The city's real syntax. Every accent is a document.",
  },
  {
    slug: "the-bronx",
    name: "The Bronx",
    attribute: "Memory, force, origin, rhythm",
    description:
      "The origin point of more than one form. Memory stored in sound. Force that the rest of the city borrowed and forgot to return.",
  },
  {
    slug: "staten-island",
    name: "Staten Island",
    attribute: "Margin, ferry, threshold, discarded kingdom",
    description:
      "The threshold crossed to prove something. The ferry runs whether or not you need it to. Every margin contains what the center discarded.",
    clueToken: "false neighborhood",
  },
];

export function getDistrict(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}
