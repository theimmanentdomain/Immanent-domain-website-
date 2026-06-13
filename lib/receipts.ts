export interface Receipt {
  token: string;
  page: string;
  visiblePhrase: string;
  pointsTo: string;
}

export const receipts: Receipt[] = [
  {
    token: "jurisdiction",
    page: "/",
    visiblePhrase: "predates jurisdiction",
    pointsTo: "/receipts",
  },
  {
    token: "dove",
    page: "/map",
    visiblePhrase: "Netzach district description",
    pointsTo: "/receipts",
  },
  {
    token: "the map is hungry",
    page: "/map",
    visiblePhrase: "map page intro text",
    pointsTo: "/receipts",
  },
  {
    token: "chinatown",
    page: "/map",
    visiblePhrase: "Yesod district description",
    pointsTo: "/receipts",
  },
  {
    token: "ask the subway",
    page: "/map",
    visiblePhrase: "Da'ath district description",
    pointsTo: "/receipts",
  },
  {
    token: "receipt",
    page: "/archive",
    visiblePhrase: "Receipt No. 001",
    pointsTo: "/receipts",
  },
  {
    token: "third floor",
    page: "/archive",
    visiblePhrase: "Fragment: found in the third-floor files",
    pointsTo: "/receipts",
  },
  {
    token: "false neighborhood",
    page: "/archive",
    visiblePhrase: "Report: The False Neighborhood",
    pointsTo: "/receipts",
  },
];
