-- Run this once in your Supabase SQL Editor for the NexGen POS SaaS Portal

create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  business_name text not null,
  city text default '',
  contact_number text not null,
  email text default '',
  branch_count integer not null default 1,
  preferred_date text default '',
  notes text default '',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  client_id text not null unique,
  store_name text not null,
  owner_name text default '',
  contact_phone text default '',
  plan text not null default 'starter',
  monthly_fee numeric(10, 2) not null default 0,
  status text not null default 'trial',
  next_billing_date date,
  tailscale_host text default '',
  notes text default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.client_payments (
  id uuid primary key default gen_random_uuid(),
  client_id text not null references public.clients(client_id) on delete cascade,
  amount numeric(10, 2) not null default 0,
  period_covered text default '',
  payment_method text default 'gcash',
  reference_no text default '',
  paid_at timestamptz not null default now()
);

alter table public.demo_requests enable row level security;
alter table public.clients enable row level security;
alter table public.client_payments enable row level security;

-- Public landing page may only submit demo requests; no public reads.
drop policy if exists "Allow public demo insert" on public.demo_requests;
create policy "Allow public demo insert"
  on public.demo_requests
  for insert
  to anon, authenticated
  with check (true);

