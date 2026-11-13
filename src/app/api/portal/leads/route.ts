import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { requireSuperAdmin } from "@/lib/supabase/server";

const ALLOWED = new Set(["new", "contacted", "scheduled", "converted", "archived"]);

export async function PATCH(req: Request) {
  const user = await requireSuperAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const id = String(body.id || "");
  const status = String(body.status || "");
  if (!id || !ALLOWED.has(status)) {
    return NextResponse.json({ error: "Invalid lead update" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("demo_requests")
    .update({ status })
    .eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ success: true });
}

