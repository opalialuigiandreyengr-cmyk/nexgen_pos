import Link from "next/link";
import { connection } from "next/server";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock,
  Layers,
  Receipt,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
      {/* Top Header with Live Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-border">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold font-display tracking-tight text-foreground">Fleet Telemetry</h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Fleet Active
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Real-time branch sales, cashier shifts, and rolling encrypted SQLite database snapshots.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/portal/clients">
            <Button variant="outline" size="sm" className="h-8.5 text-xs font-semibold">
              <Building2 className="h-3.5 w-3.5 mr-1.5 text-sky-500" />
              Client Registry
            </Button>
          </Link>
          <Link href="/portal/leads">
            <Button variant="outline" size="sm" className="h-8.5 text-xs font-semibold">
              Demo Leads ({newLeadsCount ?? 0})
            </Button>
          </Link>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Synced Branches */}
        <Card className="border-border bg-card shadow-xs">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription className="text-[11px] font-semibold uppercase tracking-wider">
                Active Branches
              </CardDescription>
              <div className="w-7 h-7 rounded-md bg-sky-500/10 text-sky-500 flex items-center justify-center">
                <Building2 className="h-4 w-4" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold font-display tabular-nums mt-1 text-foreground">
              {branches.length}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            {clientCount ?? 0} registered in database
          </CardContent>
        </Card>

        {/* Card 2: Combined Net Sales */}
        <Card className="border-border bg-card shadow-xs">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription className="text-[11px] font-semibold uppercase tracking-wider">
                Fleet Net Sales
              </CardDescription>
              <div className="w-7 h-7 rounded-md bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold font-display tabular-nums mt-1 text-sky-600 dark:text-sky-400">
              {formatPeso(totalNetSales)}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Latest synced business day
          </CardContent>
        </Card>

        {/* Card 3: Orders Breakdown */}
        <Card className="border-border bg-card shadow-xs">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription className="text-[11px] font-semibold uppercase tracking-wider">
                Orders (Settled / Open)
              </CardDescription>
              <div className="w-7 h-7 rounded-md bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Receipt className="h-4 w-4" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold font-display tabular-nums mt-1 text-foreground">
              {totalOrders}{" "}
              <span className="text-xs font-normal text-muted-foreground">settled</span> /{" "}
              <span className="text-amber-500">{totalPending}</span>{" "}
              <span className="text-xs font-normal text-muted-foreground">open</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Across all active counters
          </CardContent>
        </Card>

        {/* Card 4: New Demo Inquiries */}
        <Card className="border-border bg-card shadow-xs">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription className="text-[11px] font-semibold uppercase tracking-wider">
                New Demo Inquiries
              </CardDescription>
              <div className="w-7 h-7 rounded-md bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <Layers className="h-4 w-4" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold font-display tabular-nums mt-1 text-foreground">
              {newLeadsCount ?? 0}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs">
            <Link href="/portal/leads" className="text-sky-500 hover:underline font-medium">
              Review lead pipeline →
            </Link>
          </CardContent>
        </Card>
      </div>

      {storageErr && (
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-xs text-amber-300">
          Supabase Storage notice: {storageErr}
        </div>
      )}

      {/* Fleet Branches Table */}
      <Card className="border-border bg-card shadow-xs overflow-hidden">
        <CardHeader className="border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5">
          <div>
            <CardTitle className="text-base font-bold font-display text-foreground">
              Active Client Branches &amp; Daily Snapshots
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground mt-0.5">
              Live gross/net sales, active dine-in orders, latest Z-Reading counters, and encrypted `.db.gz` archives.
            </CardDescription>
          </div>
          <Link href="/portal/clients">
            <Button variant="outline" size="sm" className="h-8 text-xs font-semibold">
              Manage Client Keys
            </Button>
          </Link>
        </CardHeader>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[750px]">
            <thead>
              <tr className="border-b border-border bg-secondary/40 text-[11px] uppercase font-semibold text-muted-foreground">
                <th className="py-3 px-4 font-semibold">Branch / Store Name</th>
                <th className="py-3 px-4 font-semibold">Business Date</th>
                <th className="py-3 px-4 text-right font-semibold">Today&apos;s Net Sales</th>
                <th className="py-3 px-4 text-right font-semibold">Settled / Pending</th>
                <th className="py-3 px-4 text-center font-semibold">Latest Z-Reading</th>
                <th className="py-3 px-4 text-left font-semibold">Last Cloud Sync</th>
                <th className="py-3 px-4 text-right font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs">
              {branches.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-muted-foreground space-y-2">
                    <Building2 className="h-8 w-8 text-muted-foreground/50 mx-auto" />
                    <p className="text-sm font-medium">No branch sync summaries detected yet.</p>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                      Once a counter runs with cloud sync enabled, its daily telemetry and Z-readings will appear here automatically.
                    </p>
                  </td>
                </tr>
              ) : (
                branches.map((b) => (
                  <tr key={b.client_id} className="hover:bg-secondary/30 transition-colors">
                    {/* Store Name & Client ID */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" title="Online" />
                        <div>
                          <div className="font-bold text-sm text-foreground">{b.store_name || b.client_id}</div>
                          <div className="font-mono text-[11px] text-muted-foreground">{b.client_id}</div>
                        </div>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-3.5 px-4 font-mono text-muted-foreground">
                      {b.business_date}
                    </td>

                    {/* Net Sales */}
                    <td className="py-3.5 px-4 text-right font-bold text-sm text-sky-600 dark:text-sky-400 tabular-nums">
                      {formatPeso(b.kpis?.net_sales)}
                    </td>

                    {/* Settled vs Pending */}
                    <td className="py-3.5 px-4 text-right tabular-nums font-medium">
                      <span className="text-foreground">{b.kpis?.settled_orders ?? 0}</span>
                      <span className="text-muted-foreground mx-1">/</span>
                      <span className={(b.kpis?.pending_orders ?? 0) > 0 ? "text-amber-500 font-bold" : "text-muted-foreground"}>
                        {b.kpis?.pending_orders ?? 0}
                      </span>
                    </td>

                    {/* Latest Z-reading */}
                    <td className="py-3.5 px-4 text-center font-mono">
                      {b.latest_z_reading ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-secondary border border-border text-foreground">
                          Z #{b.latest_z_reading.z_counter}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>

                    {/* Last Sync */}
                    <td className="py-3.5 px-4 text-muted-foreground font-mono text-[11px]">
                      {b.synced_at || "Recent"}
                    </td>

                    {/* Action */}
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/portal/clients/${encodeURIComponent(b.client_id)}`}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 px-2.5 text-xs font-semibold hover:border-sky-500 hover:text-sky-500"
                        >
                          Inspect <ArrowUpRight className="h-3 w-3 ml-1" />
                        </Button>
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
