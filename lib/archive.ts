export type ArchiveCategory =
  | "document"
  | "fragment"
  | "field-report"
  | "poster"
  | "memo"
  | "noir-document"
  | "receipt"
  | "unclassifiable";

export interface ArchiveEntry {
  slug: string;
  title: string;
  category: ArchiveCategory;
  date: string;
  description: string;
  tags: string[];
  district?: string;
  clueToken?: string;
  ritualFunction?: string;
  geometry?: string;
  visibility?: "public" | "restricted" | "hidden";
}

export const archiveEntries: ArchiveEntry[] = [
  {
    slug: "field-report-001",
    title: "Field Report: East Village, October",
    category: "field-report",
    date: "2025-10",
    district: "hod",
    description: "Notes on three consecutive evenings, two bars, one reading series, and the particular quality of attention in a room that knows it is being watched.",
    tags: ["East Village", "field report", "performance"],
  },
  {
    slug: "memo-on-jurisdiction",
    title: "Internal Memo: On Jurisdiction",
    category: "memo",
    date: "2025-09",
    clueToken: "jurisdiction",
    description: "A working definition of territory for institutional purposes. What the Domain controls and what it merely observes.",
    tags: ["doctrine", "jurisdiction", "institutional"],
  },
  {
    slug: "chinatown-transcript",
    title: "Partial Transcript: Chinatown, Late",
    category: "noir-document",
    date: "2025-08",
    district: "yesod",
    description: "A conversation that began as an interview and became something else. The recording stopped. The transcript continued from memory.",
    tags: ["Chinatown", "conversation", "persona"],
  },
  {
    slug: "fragment-on-masks",
    title: "Fragment: Masks and Their Operators",
    category: "fragment",
    date: "2025-11",
    clueToken: "third floor",
    description: "Incomplete. Found in the third-floor files. Author unknown or withheld.",
    tags: ["persona", "masks", "fragment"],
  },
  {
    slug: "poster-the-moment",
    title: "Poster: The Moment Is Yours",
    category: "poster",
    date: "2026-01",
    description: "Original event poster, first printing. Black on cream. Typography only.",
    tags: ["The Moment Is Yours", "poster", "performance"],
  },
  {
    slug: "receipt-001",
    title: "Receipt No. 001",
    category: "receipt",
    date: "2026-03",
    clueToken: "receipt",
    description: "The first receipt. Proof of something. The item purchased is not listed. The total is correct.",
    tags: ["receipt", "ARG", "institutional"],
  },
  {
    slug: "false-neighborhood-report",
    title: "Report: The False Neighborhood",
    category: "document",
    date: "2025-12",
    clueToken: "false neighborhood",
    description: "An analysis of a neighborhood that exists in discourse but not in geography. Its borders shift depending on who is speaking.",
    tags: ["false neighborhood", "downtown anthropology", "cartography"],
  },
  {
    slug: "unclassified-001",
    title: "Unclassified Object No. 001",
    category: "unclassifiable",
    date: "2026-02",
    description: "Received without context. Filed under its own category. Awaiting classification that may never come.",
    tags: ["unclassifiable"],
    visibility: "restricted",
  },
];

export const archiveCategoryLabels: Record<ArchiveCategory, string> = {
  document: "Documents",
  fragment: "Fragments",
  "field-report": "Field Reports",
  poster: "Posters",
  memo: "Memos",
  "noir-document": "Noir Documents",
  receipt: "Receipts",
  unclassifiable: "Unclassifiable",
};
