export type MemberRole =
  | "public"
  | "applicant"
  | "observer"
  | "spectator"
  | "operator"
  | "performer"
  | "architect"
  | "organizer"
  | "officer"
  | "admin";

export type ClearanceLevel =
  | "public"
  | "members"
  | "internal"
  | "restricted"
  | "command"
  | "sealed";

export type ApplicationStatus =
  | "pending"
  | "under_review"
  | "accepted"
  | "rejected"
  | "deferred"
  | "watchlist";

export type ReviewStatus =
  | "unreviewed"
  | "reviewed"
  | "needs_verification"
  | "sensitive"
  | "archived"
  | "rejected";

export type SourceType =
  | "direct_observation"
  | "conversation"
  | "public_source"
  | "submitted_document"
  | "event_attendance"
  | "editorial_lead"
  | "operational_note"
  | "rumor"
  | "unknown";

export type ConfidenceLevel = "low" | "medium" | "high" | "confirmed";

export type LeadType =
  | "contributor"
  | "venue"
  | "patron"
  | "artist"
  | "editor"
  | "performer"
  | "broker"
  | "institution"
  | "sponsor"
  | "operator"
  | "unknown";

export type RelationshipStatus =
  | "uncontacted"
  | "warm"
  | "active"
  | "paused"
  | "declined"
  | "do_not_contact";

export type TaskStatus = "open" | "in_progress" | "blocked" | "done" | "archived";
export type TaskPriority = "low" | "medium" | "high" | "urgent";

export type DossierSubjectType =
  | "project"
  | "venue"
  | "publication"
  | "institution"
  | "neighborhood"
  | "event"
  | "public_figure"
  | "organization"
  | "internal_operation"
  | "other";

export type ReceiptType =
  | "screenshot"
  | "link"
  | "document"
  | "image"
  | "conversation_note"
  | "flyer"
  | "public_record"
  | "internal_memo"
  | "archive_fragment"
  | "other";

export interface Profile {
  id: string;
  user_id: string;
  display_name: string;
  legal_name?: string;
  email: string;
  role: MemberRole;
  clearance_level: ClearanceLevel;
  district_affinity?: string;
  sephirah_affinity?: string;
  skills?: string[];
  interests?: string[];
  public_bio?: string;
  membership_status: ApplicationStatus;
  covenant_accepted_at?: string;
  created_at: string;
  updated_at: string;
  last_active?: string;
}

export interface MembershipApplication {
  id: string;
  user_id: string;
  name: string;
  email: string;
  why_here: string;
  what_observe: string;
  what_build: string;
  what_protect: string;
  skills: string;
  districts_known: string[];
  writing_sample?: string;
  referral_code?: string;
  invitation_code?: string;
  covenant_accepted: boolean;
  status: ApplicationStatus;
  internal_notes?: string;
  reviewed_by?: string;
  created_at: string;
  updated_at: string;
}

export interface FieldReport {
  id: string;
  title: string;
  summary: string;
  body: string;
  date_observed: string;
  location?: string;
  district?: string;
  sephirah?: string;
  chakra?: string;
  source_type: SourceType;
  confidence: ConfidenceLevel;
  visibility: "public" | "members" | "internal" | "restricted";
  clearance_level: ClearanceLevel;
  people_mentioned?: string[];
  organizations_mentioned?: string[];
  tags?: string[];
  created_by: string;
  reviewed_by?: string;
  review_status: ReviewStatus;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  name: string;
  type: LeadType;
  summary: string;
  contact_info?: string;
  public_links?: string[];
  relationship_status: RelationshipStatus;
  value_potential?: string;
  risk_level?: string;
  district?: string;
  sephirah?: string;
  tags?: string[];
  owner: string;
  next_action?: string;
  last_contacted?: string;
  visibility: ClearanceLevel;
  clearance_level: ClearanceLevel;
  created_at: string;
  updated_at: string;
}

export interface Dossier {
  id: string;
  title: string;
  subject_type: DossierSubjectType;
  summary: string;
  body?: string;
  related_district?: string;
  related_sephirah?: string;
  risk_assessment?: string;
  opportunity_assessment?: string;
  visibility: ClearanceLevel;
  clearance_level: ClearanceLevel;
  created_by: string;
  updated_by?: string;
  created_at: string;
  updated_at: string;
}

export interface PrivateReceipt {
  id: string;
  title: string;
  description?: string;
  receipt_type: ReceiptType;
  source?: string;
  date_captured: string;
  link?: string;
  text_extract?: string;
  related_district?: string;
  hash?: string;
  visibility: ClearanceLevel;
  clearance_level: ClearanceLevel;
  created_by: string;
  created_at: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  assigned_to?: string;
  created_by: string;
  project?: string;
  district?: string;
  status: TaskStatus;
  priority: TaskPriority;
  due_date?: string;
  visibility: ClearanceLevel;
  clearance_level: ClearanceLevel;
  created_at: string;
  updated_at: string;
}

export interface Signal {
  id: string;
  title: string;
  pattern: string;
  evidence?: string;
  interpretation?: string;
  confidence: ConfidenceLevel;
  related_district?: string;
  related_sephirah?: string;
  tags?: string[];
  created_by: string;
  visibility: ClearanceLevel;
  clearance_level: ClearanceLevel;
  created_at: string;
}

export interface AuditLog {
  id: string;
  actor_id: string;
  action: string;
  object_type?: string;
  object_id?: string;
  timestamp: string;
  ip?: string;
  user_agent?: string;
  metadata?: Record<string, unknown>;
}
