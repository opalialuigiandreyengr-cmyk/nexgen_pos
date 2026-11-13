import { connection } from "next/server";
import { getBackupBucket, getSupabaseAdmin } from "@/lib/supabase/admin";
import { PortalClientsManager, type ClientRow } from "@/components/portal-clients";

export default async function PortalClientsPage() {
  await connection();
  const supabase = getSupabaseAdmin();
  const { data } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Client Registry</h1>
        <p className="text-xs text-muted-foreground">
          Manage deployed POS stores, billing tiers, and `.env` onboarding configs.
        </p>
      </div>
      <PortalClientsManager
        initialClients={(data || []) as ClientRow[]}
        supabaseUrl={process.env.NEXT_PUBLIC_SUPABASE_URL || ""}
        bucketName={getBackupBucket()}
      />
    </div>
  );
}

