export interface District {
  slug: string;
  name: string;
  hebrew: string;
  number: number;
  sephirah: string;
  nycZone: string;
  chakra: string;
  vajrayanaMode: string;
  zenInstruction: string;
  geometry: string;
  keyword: string;
  attribute: string;
  description: string;
  col: number;
  row: number;
  clueToken?: string;
  relatedPaths?: string[];
}

export interface OuterBorough {
  slug: string;
  name: string;
  attribute: string;
  description: string;
  clueToken?: string;
}

export const districts: District[] = [
  {
    slug: "keter",
    name: "Keter",
    hebrew: "כֶּתֶר",
    number: 1,
    sephirah: "Keter",
    nycZone: "Central Park",
    chakra: "Crown",
    vajrayanaMode: "open sky",
    zenInstruction: "remain still",
    geometry: "point",
    keyword: "crown",
    attribute: "Crown, source, void, undifferentiated will",
    description: "The crown of the island. No entrance fee. No transaction required. The park holds the city without being the city. Terrain that predates jurisdiction.",
    col: 3,
    row: 1,
    clueToken: "dove",
  },
  {
    slug: "chokhmah",
    name: "Chokhmah",
    hebrew: "חָכְמָה",
    number: 2,
    sephirah: "Chokhmah",
    nycZone: "Upper West Side",
    chakra: "Third Eye",
    vajrayanaMode: "flash of transmission",
    zenInstruction: "receive without grasping",
    geometry: "line",
    keyword: "transmission",
    attribute: "Transmission, flash of insight, original intelligence",
    description: "Old money and old memory. The buildings remember when the city believed in permanence. Libraries and concert halls hold transmissions no algorithm has indexed.",
    col: 4,
    row: 2,
  },
  {
    slug: "binah",
    name: "Binah",
    hebrew: "בִּינָה",
    number: 3,
    sephirah: "Binah",
    nycZone: "Upper East Side",
    chakra: "Third Eye",
    vajrayanaMode: "vessel of form",
    zenInstruction: "hold without clinging",
    geometry: "triangle",
    keyword: "containment",
    attribute: "Understanding, containment, institution, inheritance",
    description: "The museum district. Forms that survived long enough to be called culture. Inheritance administered, beauty preserved under glass.",
    col: 2,
    row: 2,
  },
  {
    slug: "chesed",
    name: "Chesed",
    hebrew: "חֶסֶד",
    number: 4,
    sephirah: "Chesed",
    nycZone: "Midtown West",
    chakra: "Heart",
    vajrayanaMode: "compassion mandala",
    zenInstruction: "give without record",
    geometry: "circle",
    keyword: "hospitality",
    attribute: "Patronage, expansion, hospitality, theater",
    description: "The machinery of spectacle funded by invisible patrons. The velvet rope is a mercy. Everyone wants to be inside. Some earn it.",
    col: 4,
    row: 4,
  },
  {
    slug: "gevurah",
    name: "Gevurah",
    hebrew: "גְּבוּרָה",
    number: 5,
    sephirah: "Gevurah",
    nycZone: "Midtown East",
    chakra: "Solar Plexus",
    vajrayanaMode: "wrathful clarity",
    zenInstruction: "cut cleanly",
    geometry: "square",
    keyword: "force",
    attribute: "Law, force, finance, command",
    description: "Glass towers occupied by the managers of force. Contracts signed here bind people who will never meet. Power without body.",
    col: 2,
    row: 4,
  },
  {
    slug: "tiferet",
    name: "Tiferet",
    hebrew: "תִּפְאֶרֶת",
    number: 6,
    sephirah: "Tiferet",
    nycZone: "Times Square",
    chakra: "Heart center",
    vajrayanaMode: "solar mandala",
    zenInstruction: "see through the center",
    geometry: "hexagon",
    keyword: "beauty",
    attribute: "Beauty, balance, solar theater, the false center",
    description: "The solar plexus of the island. Too bright to look at directly. The center holds because it refuses to mean anything. Beauty as pure advertisement.",
    col: 3,
    row: 5,
  },
  {
    slug: "netzach",
    name: "Netzach",
    hebrew: "נֶצַח",
    number: 7,
    sephirah: "Netzach",
    nycZone: "Chelsea",
    chakra: "Sacral",
    vajrayanaMode: "dakini field",
    zenInstruction: "desire without attachment",
    geometry: "seven-point",
    keyword: "desire",
    attribute: "Desire, art markets, beauty, stamina",
    description: "Galleries with white walls and no prices visible. Desire dressed as taste. The art market speaks in whispers that carry across the room.",
    col: 4,
    row: 6,
  },
  {
    slug: "hod",
    name: "Hod",
    hebrew: "הוֹד",
    number: 8,
    sephirah: "Hod",
    nycZone: "East Village",
    chakra: "Throat",
    vajrayanaMode: "speech mandala",
    zenInstruction: "speak once, precisely",
    geometry: "octagon",
    keyword: "language",
    attribute: "Language, wit, criticism, nervous systems",
    description: "The nervous system of downtown. Bars that double as editorial boards. The scene made the criticism before the critics arrived.",
    col: 2,
    row: 6,
  },
  {
    slug: "yesod",
    name: "Yesod",
    hebrew: "יְסוֹד",
    number: 9,
    sephirah: "Yesod",
    nycZone: "Chinatown",
    chakra: "Third Eye / Sacral bridge",
    vajrayanaMode: "bardo theater",
    zenInstruction: "watch the mask breathe",
    geometry: "circle under veil",
    keyword: "dream",
    attribute: "Dream logic, masks, understructure, ghosts",
    description: "The city's understructure. Older than its current name. Masks for every occasion, sold by the pound. Forget it. It knows what it is.",
    col: 3,
    row: 7,
    clueToken: "chinatown",
  },
  {
    slug: "malkuth",
    name: "Malkuth",
    hebrew: "מַלְכוּת",
    number: 10,
    sephirah: "Malkuth",
    nycZone: "Financial District",
    chakra: "Root",
    vajrayanaMode: "ground seal",
    zenInstruction: "count the receipt",
    geometry: "square",
    keyword: "contract",
    attribute: "Manifestation, money, contracts, the ground",
    description: "Where the invisible becomes a signed document. The ground floor of everything. Money is matter. Here, matter rules.",
    col: 3,
    row: 8,
    clueToken: "jurisdiction",
  },
  {
    slug: "daath",
    name: "Da'ath",
    hebrew: "דַּעַת",
    number: 11,
    sephirah: "Da'ath",
    nycZone: "The Subway",
    chakra: "Hidden center",
    vajrayanaMode: "bardo passage",
    zenInstruction: "ask without expecting an answer",
    geometry: "void",
    keyword: "passage",
    attribute: "Hidden knowledge, the abyss, transit, disorientation",
    description: "Not on the official map. Connects everything that cannot otherwise be connected. Ask the subway. It will not answer directly.",
    col: 3,
    row: 3,
    clueToken: "ask the subway",
  },
];

export const outerBoroughs: OuterBorough[] = [
  {
    slug: "brooklyn",
    name: "Brooklyn",
    attribute: "Workshop, myth factory, exile, return",
    description: "Where the work gets done after the scene has moved on. Every neighborhood a draft of the one before it.",
    clueToken: "third floor",
  },
  {
    slug: "queens",
    name: "Queens",
    attribute: "Multiplicity, language, airport logic, world-interface",
    description: "More languages per square mile than any territory on earth. The city's real syntax. Every accent is a document.",
  },
  {
    slug: "the-bronx",
    name: "The Bronx",
    attribute: "Memory, force, origin, rhythm",
    description: "The origin point of more than one form. Memory stored in sound. Force that the rest of the city borrowed and forgot to return.",
  },
  {
    slug: "staten-island",
    name: "Staten Island",
    attribute: "Margin, ferry, threshold, discarded kingdom",
    description: "The threshold crossed to prove something. The ferry runs whether or not you need it to. Every margin contains what the center discarded.",
    clueToken: "false neighborhood",
  },
];

export function getDistrict(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}
