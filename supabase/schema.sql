-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles table (extends Supabase auth.users)
create table public.profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  display_name text not null,
  legal_name text,
  email text not null,
  role text not null default 'applicant',
  clearance_level text not null default 'public',
  district_affinity text,
  sephirah_affinity text,
  skills text[],
  interests text[],
  public_bio text,
  membership_status text not null default 'pending',
  covenant_accepted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_active timestamptz
);

-- Membership applications
create table public.membership_applications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  name text not null,
  email text not null,
  why_here text not null,
  what_observe text not null,
  what_build text not null,
  what_protect text not null,
  skills text not null,
  districts_known text[] default '{}',
  writing_sample text,
  referral_code text,
  invitation_code text,
  covenant_accepted boolean not null default false,
  status text not null default 'pending',
  internal_notes text,
  reviewed_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Field reports
create table public.field_reports (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  summary text not null,
  body text not null,
  date_observed date not null,
  location text,
  district text,
  sephirah text,
  chakra text,
  source_type text not null default 'direct_observation',
  confidence text not null default 'medium',
  visibility text not null default 'internal',
  clearance_level text not null default 'internal',
  people_mentioned text[] default '{}',
  organizations_mentioned text[] default '{}',
  tags text[] default '{}',
  created_by uuid references auth.users(id) not null,
  reviewed_by uuid references auth.users(id),
  review_status text not null default 'unreviewed',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Leads
create table public.leads (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  type text not null default 'unknown',
  summary text not null,
  contact_info text,
  public_links text[] default '{}',
  relationship_status text not null default 'uncontacted',
  value_potential text,
  risk_level text,
  district text,
  sephirah text,
  tags text[] default '{}',
  owner uuid references auth.users(id) not null,
  next_action text,
  last_contacted date,
  visibility text not null default 'internal',
  clearance_level text not null default 'internal',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Dossiers
create table public.dossiers (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  subject_type text not null default 'other',
  summary text not null,
  body text,
  related_district text,
  related_sephirah text,
  risk_assessment text,
  opportunity_assessment text,
  visibility text not null default 'internal',
  clearance_level text not null default 'internal',
  created_by uuid references auth.users(id) not null,
  updated_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Private receipts
create table public.private_receipts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  receipt_type text not null default 'other',
  source text,
  date_captured date not null default current_date,
  link text,
  text_extract text,
  related_district text,
  hash text,
  visibility text not null default 'internal',
  clearance_level text not null default 'internal',
  created_by uuid references auth.users(id) not null,
  created_at timestamptz not null default now()
);

-- Tasks
create table public.tasks (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  assigned_to uuid references auth.users(id),
  created_by uuid references auth.users(id) not null,
  project text,
  district text,
  status text not null default 'open',
  priority text not null default 'medium',
  due_date date,
  visibility text not null default 'internal',
  clearance_level text not null default 'internal',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Signals
create table public.signals (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  pattern text not null,
  evidence text,
  interpretation text,
  confidence text not null default 'medium',
  related_district text,
  related_sephirah text,
  tags text[] default '{}',
  created_by uuid references auth.users(id) not null,
  visibility text not null default 'internal',
  clearance_level text not null default 'internal',
  created_at timestamptz not null default now()
);

-- Audit log
create table public.audit_logs (
  id uuid primary key default uuid_generate_v4(),
  actor_id uuid references auth.users(id),
  action text not null,
  object_type text,
  object_id text,
  timestamp timestamptz not null default now(),
  ip text,
  user_agent text,
  metadata jsonb
);

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.membership_applications enable row level security;
alter table public.field_reports enable row level security;
alter table public.leads enable row level security;
alter table public.dossiers enable row level security;
alter table public.private_receipts enable row level security;
alter table public.tasks enable row level security;
alter table public.signals enable row level security;
alter table public.audit_logs enable row level security;

-- Profile policies
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = user_id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = user_id);

create policy "Service role can manage all profiles"
  on public.profiles for all
  using (auth.role() = 'service_role');

-- Application policies
create policy "Users can view their own application"
  on public.membership_applications for select
  using (auth.uid() = user_id);

create policy "Users can insert their own application"
  on public.membership_applications for insert
  with check (auth.uid() = user_id);

create policy "Service role can manage all applications"
  on public.membership_applications for all
  using (auth.role() = 'service_role');

-- Field report policies
create policy "Authenticated users can view internal reports"
  on public.field_reports for select
  using (auth.uid() is not null);

create policy "Authenticated users can insert reports"
  on public.field_reports for insert
  with check (auth.uid() is not null and auth.uid() = created_by);

create policy "Authors can update their own reports"
  on public.field_reports for update
  using (auth.uid() = created_by);

create policy "Authenticated users can view leads"
  on public.leads for select
  using (auth.uid() is not null);

create policy "Authenticated users can insert leads"
  on public.leads for insert
  with check (auth.uid() is not null and auth.uid() = owner);

create policy "Authenticated users can view dossiers"
  on public.dossiers for select
  using (auth.uid() is not null);

create policy "Authenticated users can insert dossiers"
  on public.dossiers for insert
  with check (auth.uid() is not null and auth.uid() = created_by);

create policy "Authenticated users can view receipts"
  on public.private_receipts for select
  using (auth.uid() is not null);

create policy "Authenticated users can insert receipts"
  on public.private_receipts for insert
  with check (auth.uid() is not null and auth.uid() = created_by);

create policy "Authenticated users can view tasks"
  on public.tasks for select
  using (auth.uid() is not null);

create policy "Authenticated users can manage tasks"
  on public.tasks for all
  using (auth.uid() is not null);

create policy "Authenticated users can view signals"
  on public.signals for select
  using (auth.uid() is not null);

create policy "Authenticated users can insert signals"
  on public.signals for insert
  with check (auth.uid() is not null and auth.uid() = created_by);

create policy "Service role manages audit log"
  on public.audit_logs for all
  using (auth.role() = 'service_role');

-- Profile creation trigger
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (user_id, display_name, email, role, clearance_level, membership_status)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    new.email,
    'applicant',
    'public',
    'pending'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
