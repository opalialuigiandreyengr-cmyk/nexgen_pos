import Link from "next/link";
import { connection } from "next/server";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { listAllSyncedBranches } from "@/lib/supabase/cloud-monitor";
import { formatPeso } from "@/lib/utils";

export default async function PortalOverviewPage() {
  await connection();
  const [{ branches, error: storageErr }, supabase] = await Promise.all([
    listAllSyncedBranches(),
    Promise.resolve(getSupabaseAdmin()),
  ]);

  const [{ count: clientCount }, { count: newLeadsCount }] = await Promise.all([
    supabase.from("clients").select("*", { count: "exact", head: true }),
    supabase
      .from("demo_requests")
      .select("*", { count: "exact", head: true })
      .eq("status", "new"),
  ]);

  const totalNetSales = branches.reduce(
    (sum, b) => sum + Number(b.kpis?.net_sales || 0),
    0
  );
  const totalOrders = branches.reduce(
    (sum, b) => sum + Number(b.kpis?.settled_orders || 0),
    0
  );
  const totalPending = branches.reduce(
    (sum, b) => sum + Number(b.kpis?.pending_orders || 0),
    0
  );

  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Fleet Overview</h1>
        <p className="text-xs text-muted-foreground">
          Live sales &amp; backup telemetry synced from all deployed POS clients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-xs uppercase">Synced Branches</CardDescription>
            <CardTitle className="text-2xl tabular-nums">{branches.length}</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            {clientCount ?? 0} registered in registry
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-xs uppercase">Combined Net Sales</CardDescription>
            <CardTitle className="text-2xl tabular-nums">{formatPeso(totalNetSales)}</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Latest synced business day
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-xs uppercase">Orders (Settled / Open)</CardDescription>
            <CardTitle className="text-2xl tabular-nums">
              {totalOrders} / {totalPending}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">Across active branches</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-xs uppercase">New Demo Leads</CardDescription>
            <CardTitle className="text-2xl tabular-nums">{newLeadsCount ?? 0}</CardTitle>
          </CardHeader>
          <CardContent className="text-xs">
            <Link href="/portal/leads" className="text-primary hover:underline">
              Review pipeline →
            </Link>
          </CardContent>
        </Card>
      </div>

      {storageErr && (
        <div className="rounded-md border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-xs text-amber-300">
          Supabase Storage note: {storageErr}
        </div>
      )}

      <Card>
        <CardHeader className="border-b border-border flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-sm">Synced Client Branches</CardTitle>
            <CardDescription className="text-xs">
              Click a branch to inspect full sales breakdown, Z-reading, and .db.gz backups.
            </CardDescription>
          </div>
          <Link href="/portal/clients" className="text-xs text-primary hover:underline">
            Manage Registry
          </Link>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-[11px] uppercase text-muted-foreground">
                <th className="py-2.5 px-4 text-left font-medium">Store / Client ID</th>
                <th className="py-2.5 px-4 text-left font-medium">Date</th>
                <th className="py-2.5 px-4 text-right font-medium">Net Sales</th>
                <th className="py-2.5 px-4 text-right font-medium">Settled / Open</th>
                <th className="py-2.5 px-4 text-left font-medium">Latest Z</th>
                <th className="py-2.5 px-4 text-left font-medium">Last Synced</th>
                <th className="py-2.5 px-4 text-right font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs">
              {branches.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-muted-foreground">
                    No branches have pushed `_cloud_summaries/` to Supabase yet.
                  </td>
                </tr>
              ) : (
                branches.map((b) => (
                  <tr key={b.client_id} className="hover:bg-accent/40 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-medium text-foreground">{b.store_name || b.client_id}</div>
                      <div className="font-mono text-[11px] text-muted-foreground">{b.client_id}</div>
                    </td>
                    <td className="py-3 px-4 font-mono">{b.business_date}</td>
                    <td className="py-3 px-4 text-right font-semibold tabular-nums">
                      {formatPeso(b.kpis?.net_sales)}
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums">
                      {b.kpis?.settled_orders ?? 0} / {b.kpis?.pending_orders ?? 0}
                    </td>
                    <td className="py-3 px-4 font-mono">
                      {b.latest_z_reading ? (
                        <Badge variant="secondary">Z #{b.latest_z_reading.z_counter}</Badge>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{b.synced_at}</td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        href={`/portal/clients/${encodeURIComponent(b.client_id)}`}
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        Inspect <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

