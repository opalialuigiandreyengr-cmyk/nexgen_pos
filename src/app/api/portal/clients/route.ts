import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { requireSuperAdmin } from "@/lib/supabase/server";

const createClientSchema = z.object({
  client_id: z.string().trim().min(2).max(64).regex(/^[A-Za-z0-9_-]+$/),
  store_name: z.string().trim().min(2).max(160),
  owner_name: z.string().trim().max(120).optional().default(""),
  contact_phone: z.string().trim().max(40).optional().default(""),
  plan: z.enum(["starter", "pro", "multi_branch"]).default("pro"),
  monthly_fee: z.coerce.number().min(0).default(2499),
  status: z.enum(["trial", "active", "past_due", "suspended"]).default("trial"),
  tailscale_host: z.string().trim().max(120).optional().default(""),
  notes: z.string().trim().max(500).optional().default(""),
});

export async function POST(req: Request) {
  const user = await requireSuperAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = createClientSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Invalid client data" },
      { status: 400 }
    );
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("clients")
    .insert(parsed.data)
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json({ client: data });
}

export async function PATCH(req: Request) {
  const user = await requireSuperAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const id = String(body.id || "");
  const status = String(body.status || "");
  if (!id || !["trial", "active", "past_due", "suspended"].includes(status)) {
    return NextResponse.json({ error: "Invalid update" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("clients")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ success: true });
}

