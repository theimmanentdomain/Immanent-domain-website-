export interface Receipt {
  token: string;
  clueType: string;
  visiblePhrase: string;
  hiddenPhrase: string;
  originPage: string;
  destinationPage: string;
  associatedSephirah: string;
  associatedChakra: string;
  geometry: string;
  sequenceNumber: number;
}

export const receipts: Receipt[] = [
  {
    token: "dove",
    clueType: "recurring-symbol",
    visiblePhrase: "The crown is quiet.",
    hiddenPhrase: "Follow the white mark.",
    originPage: "/",
    destinationPage: "/receipts",
    associatedSephirah: "Keter",
    associatedChakra: "Crown",
    geometry: "point",
    sequenceNumber: 1,
  },
  {
    token: "jurisdiction",
    clueType: "doctrinal-phrase",
    visiblePhrase: "predates jurisdiction",
    hiddenPhrase: "The territory precedes the law.",
    originPage: "/",
    destinationPage: "/receipts",
    associatedSephirah: "Malkuth",
    associatedChakra: "Root",
    geometry: "square",
    sequenceNumber: 2,
  },
  {
    token: "the map is hungry",
    clueType: "koan",
    visiblePhrase: "The map is hungry. It eats whoever reads it.",
    hiddenPhrase: "You are already inside.",
    originPage: "/map",
    destinationPage: "/receipts",
    associatedSephirah: "Da'ath",
    associatedChakra: "Hidden center",
    geometry: "void",
    sequenceNumber: 3,
  },
  {
    token: "chinatown",
    clueType: "place-name",
    visiblePhrase: "Forget it. It knows what it is.",
    hiddenPhrase: "The mask breathes on its own.",
    originPage: "/map",
    destinationPage: "/receipts",
    associatedSephirah: "Yesod",
    associatedChakra: "Third Eye / Sacral bridge",
    geometry: "circle under veil",
    sequenceNumber: 4,
  },
  {
    token: "ask the subway",
    clueType: "instruction",
    visiblePhrase: "Ask the subway. It will not answer directly.",
    hiddenPhrase: "The answer is in the motion.",
    originPage: "/map",
    destinationPage: "/receipts",
    associatedSephirah: "Da'ath",
    associatedChakra: "Hidden center",
    geometry: "void",
    sequenceNumber: 5,
  },
  {
    token: "receipt",
    clueType: "document-title",
    visiblePhrase: "Receipt No. 001",
    hiddenPhrase: "The first exchange is recorded.",
    originPage: "/archive",
    destinationPage: "/receipts",
    associatedSephirah: "Malkuth",
    associatedChakra: "Root",
    geometry: "square",
    sequenceNumber: 6,
  },
  {
    token: "third floor",
    clueType: "location",
    visiblePhrase: "Found in the third-floor files.",
    hiddenPhrase: "The upper room holds the draft.",
    originPage: "/archive",
    destinationPage: "/receipts",
    associatedSephirah: "Binah",
    associatedChakra: "Third Eye",
    geometry: "triangle",
    sequenceNumber: 7,
  },
  {
    token: "false neighborhood",
    clueType: "concept",
    visiblePhrase: "Report: The False Neighborhood",
    hiddenPhrase: "Every map contains what it refuses to name.",
    originPage: "/archive",
    destinationPage: "/receipts",
    associatedSephirah: "Malkuth",
    associatedChakra: "Root",
    geometry: "square",
    sequenceNumber: 8,
  },
];
