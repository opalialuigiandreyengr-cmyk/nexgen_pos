import Link from "next/link";
import { connection } from "next/server";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchBranchSummary } from "@/lib/supabase/cloud-monitor";
import { formatPeso } from "@/lib/utils";

export default async function BranchDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ date?: string }>;
}) {
  await connection();
  const { id } = await params;
  const { date } = await searchParams;
  const clientId = decodeURIComponent(id);
  const { summary, availableDates, latestBackups, error } = await fetchBranchSummary(
    clientId,
    date
  );

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <Link
            href="/portal"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Overview
          </Link>
          <h1 className="text-xl font-semibold tracking-tight">
            {summary?.store_name || clientId}{" "}
            <span className="font-mono text-sm text-muted-foreground">({clientId})</span>
          </h1>
          <p className="text-xs text-muted-foreground">
            {summary
              ? `Business Date: ${summary.business_date} · Last Synced: ${summary.synced_at}`
              : "No cloud summary available yet."}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {availableDates.slice(0, 7).map((d) => (
            <Link
              key={d}
              href={`/portal/clients/${encodeURIComponent(clientId)}?date=${encodeURIComponent(d)}`}
            >
              <Badge variant={date === d || (!date && d === summary?.business_date) ? "default" : "secondary"}>
                {d}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {error && (
        <div className="rounded-md border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
          {error}
        </div>
      )}

      {summary && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              ["Net Sales", formatPeso(summary.kpis.net_sales)],
              ["Gross Sales", formatPeso(summary.kpis.gross_sales)],
              ["VAT", formatPeso(summary.kpis.vat_amount)],
              ["Discounts", formatPeso(summary.kpis.discount_amount)],
              ["Settled / Open", `${summary.kpis.settled_orders} / ${summary.kpis.pending_orders}`],
              ["Voids / Refunds", `${summary.kpis.void_refund_count} (${formatPeso(summary.kpis.void_refund_amount)})`],
            ].map(([label, val]) => (
              <Card key={label}>
                <CardHeader className="p-4">
                  <CardDescription className="text-[11px] uppercase">{label}</CardDescription>
                  <CardTitle className="text-base tabular-nums">{val}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="border-b border-border py-3">
                <CardTitle className="text-sm">Payment Methods &amp; Top Items</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-xs">
                <div className="space-y-1.5">
                  {Object.entries(summary.payment_breakdown || {}).map(([pm, info]) => (
                    <div key={pm} className="flex justify-between">
                      <span className="uppercase text-muted-foreground">{pm}</span>
                      <span className="tabular-nums font-medium">
                        {info.count} orders · {formatPeso(info.amount)}
                      </span>
                    </div>
                  ))}
                  {Object.keys(summary.payment_breakdown || {}).length === 0 && (
                    <div className="text-muted-foreground">No settled payments for this date.</div>
                  )}
                </div>
                <div className="border-t border-border pt-3 space-y-1.5">
                  <div className="font-medium text-muted-foreground uppercase text-[11px]">
                    Top Selling Items
                  </div>
                  {(summary.top_items || []).map((item) => (
                    <div key={item.name} className="flex justify-between">
                      <span>
                        {item.name} <span className="text-muted-foreground">×{item.qty}</span>
                      </span>
                      <span className="tabular-nums">{formatPeso(item.revenue)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="border-b border-border py-3">
                <CardTitle className="text-sm">Latest Supabase .db.gz Backups</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-2 text-xs font-mono">
                {latestBackups.length === 0 ? (
                  <div className="text-muted-foreground">No `.db.gz` backup objects found yet.</div>
                ) : (
                  latestBackups.map((b) => (
                    <div key={b.name} className="flex items-center justify-between border-b border-border pb-2 last:border-0">
                      <span className="truncate pr-2">{b.name}</span>
                      <Badge variant="secondary">
                        {b.size ? `${(b.size / (1024 * 1024)).toFixed(2)} MB` : "saved"}
                      </Badge>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}

