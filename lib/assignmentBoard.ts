export interface AssignmentClass {
  letter: string;
  name: string;
  purpose: string;
  types: string[];
  status: string;
}

export interface MagazineSection {
  name: string;
  function: string;
  neededPieces: string;
  lengthRange: string;
  status: string;
}

export interface AssignmentLevel {
  title: string;
  description: string;
  criteria: string;
}

export const assignmentClasses: AssignmentClass[] = [
  { letter: "A", name: "Core Editorial", purpose: "Flagship essays and critical arguments", types: ["Essays", "Arguments", "Frameworks", "Position pieces"], status: "Open" },
  { letter: "B", name: "Field", purpose: "Observation from specific geographic or social locations", types: ["Field reports", "Dispatches", "Location pieces", "Scene documents"], status: "Open" },
  { letter: "C", name: "Document", purpose: "Archival, found, and constructed documents", types: ["Found texts", "Invented documents", "Transcripts", "Institutional forms"], status: "Open" },
  { letter: "D", name: "Persona", purpose: "Work that operates through constructed identity", types: ["Monologues", "Character essays", "Persona criticism", "Role documents"], status: "Open" },
  { letter: "E", name: "Conversation", purpose: "Interview and dialogue forms", types: ["Interviews", "Dialogues", "Transcribed exchanges", "Annotated conversations"], status: "Open" },
  { letter: "F", name: "Poetry", purpose: "Lyric and conceptual verse", types: ["Poems", "Sequences", "Conceptual texts", "Language experiments"], status: "Open" },
  { letter: "G", name: "Visual", purpose: "Image-based and intermedia work", types: ["Photography", "Design documents", "Illustrated texts", "Visual essays"], status: "Limited" },
  { letter: "H", name: "Research", purpose: "Investigation and documentation", types: ["Research pieces", "Case studies", "Investigations", "Evidence documents"], status: "Open" },
  { letter: "I", name: "Design", purpose: "Structural and typographic work", types: ["Layouts", "Information design", "Structural experiments", "Format proposals"], status: "Limited" },
  { letter: "J", name: "Event", purpose: "Documentation and records of live events", types: ["Event records", "Performance documents", "Program texts", "Post-event essays"], status: "Open" },
];

export const magazineSections: MagazineSection[] = [
  { name: "Persona", function: "Examines how identity is constructed, performed, and managed", neededPieces: "1-2 essays or persona documents", lengthRange: "800-2500 words", status: "Open" },
  { name: "Conversation", function: "Interview and dialogue as primary form", neededPieces: "1 interview", lengthRange: "1500-4000 words", status: "Open" },
  { name: "Downtown Anthropology", function: "Observation and analysis of scenes, neighborhoods, social formations", neededPieces: "1-2 field reports or essays", lengthRange: "600-2000 words", status: "Open" },
  { name: "Noir Documents", function: "Work in the tradition of noir: fatalism, system, the fix", neededPieces: "1 document", lengthRange: "400-1500 words", status: "Open" },
  { name: "False Neighborhoods", function: "Geographic imaginary, invented territories, rhetorical places", neededPieces: "1 essay or map", lengthRange: "600-2000 words", status: "Open" },
  { name: "Field Reports", function: "Direct observation from specific locations", neededPieces: "1-2 reports", lengthRange: "300-1200 words", status: "Open" },
  { name: "Artificial Intelligence", function: "AI as subject, tool, and text", neededPieces: "1 essay or document", lengthRange: "800-3000 words", status: "Open" },
  { name: "Performance", function: "Performance as form and as subject", neededPieces: "1 piece", lengthRange: "400-2000 words", status: "Open" },
  { name: "Ritual Technologies", function: "Occult, esoteric, and initiatory systems as analytical frameworks", neededPieces: "1 essay or document", lengthRange: "800-2500 words", status: "Open" },
  { name: "Criticism", function: "Traditional and experimental critical writing", neededPieces: "1-2 pieces", lengthRange: "600-2500 words", status: "Open" },
];

export const firstAssignmentPool: string[] = [
  "Write the essay your scene does not want written.",
  "Document a conversation that happened in a specific place. Name the place. Name nothing else.",
  "Construct a persona that can say what you cannot say. Give it a byline.",
  "Write a field report from somewhere you have been in the last thirty days.",
  "Translate a personal experience into institutional language. Submit the translation only.",
  "Write the manifesto of an organization that does not exist and should.",
  "Document the moment when a neighborhood stopped being itself.",
  "Interview someone about something they are not an expert in.",
  "Write the critique of a work that deserves better critics.",
  "Construct the document that proves an event happened that no one recorded.",
  "Write the speech no one gave at the ceremony that should not have happened.",
  "Map the social hierarchy of a room you have been in. Name no one.",
  "Write the noir version of something that happened to you this year.",
  "Document the feedback loop you are inside. Name the inputs and outputs.",
  "Write the false neighborhood you carry. Give it a geography.",
];

export const submissionRequirements: string[] = [
  "Name",
  "Email",
  "Assignment class (A through J)",
  "Magazine section",
  "Title",
  "Short description (one paragraph)",
  "Full text or link",
  "Bio (two sentences maximum)",
  "Publication history if relevant",
];

export const assignmentLevels: AssignmentLevel[] = [
  {
    title: "Observer",
    description: "First submission. No previous publication in the magazine.",
    criteria: "Submit any Class A-J piece. Response within two weeks.",
  },
  {
    title: "Field Correspondent",
    description: "One accepted piece. Eligible for assignment on request.",
    criteria: "Request specific assignments. Priority response.",
  },
  {
    title: "Contributor",
    description: "Three accepted pieces across two or more classes.",
    criteria: "Eligible for standing section contributions and collaborative projects.",
  },
  {
    title: "Staff",
    description: "Ongoing editorial relationship with the magazine.",
    criteria: "By invitation.",
  },
];
