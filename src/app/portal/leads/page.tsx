import { connection } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { PortalLeadsTable, type DemoLeadRow } from "@/components/portal-leads";

export default async function PortalLeadsPage() {
  await connection();
  const supabase = getSupabaseAdmin();
  const { data } = await supabase
    .from("demo_requests")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Demo Leads</h1>
        <p className="text-xs text-muted-foreground">
          Track free demo requests submitted from the public landing page.
        </p>
      </div>
      <PortalLeadsTable initialLeads={(data || []) as DemoLeadRow[]} />
    </div>
  );
}

