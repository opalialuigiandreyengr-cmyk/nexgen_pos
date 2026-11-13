import { getBackupBucket, getSupabaseAdmin } from "./admin";

export interface CloudBranchSummary {
  client_id: string;
  store_name: string;
  business_date: string;
  synced_at: string;
  synced_at_iso?: string;
  kpis: {
    gross_sales: number;
    net_sales: number;
    vat_amount: number;
    discount_amount: number;
    settled_orders: number;
    pending_orders: number;
    pending_amount: number;
    void_refund_count: number;
    void_refund_amount: number;
  };
  payment_breakdown?: Record<string, { count: number; amount: number }>;
  order_types?: Record<string, { count: number; amount: number }>;
  top_items?: Array<{ name: string; qty: number; revenue: number }>;
  latest_z_reading?: {
    z_counter: number;
    date: string;
    current_ngrt: number;
    timestamp: string;
  } | null;
  recent_orders?: Array<{
    order_no: string;
    invoice_no: string;
    order_type: string;
    status: string;
    total: number;
    payment_method: string;
    time: string;
  }>;
}

export async function listAllSyncedBranches(): Promise<{
  branches: CloudBranchSummary[];
  error?: string;
}> {
  try {
    const supabase = getSupabaseAdmin();
    const bucket = getBackupBucket();

    const { data: entries, error } = await supabase.storage
      .from(bucket)
      .list("_cloud_summaries", {
        limit: 200,
        sortBy: { column: "name", order: "asc" },
      });

    if (error) {
      return { branches: [], error: error.message };
    }

    const clientIds = (entries || [])
      .filter((item) => item.name && item.id === null)
      .map((item) => item.name);

    const results = await Promise.all(
      clientIds.map(async (cid) => {
        const { data: blob } = await supabase.storage
          .from(bucket)
          .download(`_cloud_summaries/${cid}/latest.json`);
        if (!blob) return null;
        try {
          const text = await blob.text();
          return JSON.parse(text) as CloudBranchSummary;
        } catch {
          return null;
        }
      })
    );

    return {
      branches: results.filter((b): b is CloudBranchSummary => b !== null),
    };
  } catch (err) {
    return {
      branches: [],
      error: err instanceof Error ? err.message : "Failed to load Supabase summaries",
    };
  }
}

export async function fetchBranchSummary(
  clientId: string,
  targetDate?: string
): Promise<{
  summary: CloudBranchSummary | null;
  availableDates: string[];
  latestBackups: Array<{ name: string; created_at?: string; size?: number }>;
  error?: string;
}> {
  try {
    const supabase = getSupabaseAdmin();
    const bucket = getBackupBucket();
    const safeId = clientId.replace(/[^A-Za-z0-9_-]/g, "_");

    const [{ data: summaryFiles }, { data: backupFolders }] = await Promise.all([
      supabase.storage.from(bucket).list(`_cloud_summaries/${safeId}`, {
        limit: 90,
        sortBy: { column: "name", order: "desc" },
      }),
      supabase.storage.from(bucket).list(safeId, {
        limit: 10,
        sortBy: { column: "name", order: "desc" },
      }),
    ]);

    const availableDates = (summaryFiles || [])
      .map((f) => f.name)
      .filter((n) => n.endsWith(".json") && n !== "latest.json")
      .map((n) => n.replace(/\.json$/, ""));

    const key = targetDate
      ? `_cloud_summaries/${safeId}/${targetDate}.json`
      : `_cloud_summaries/${safeId}/latest.json`;

    const { data: blob, error } = await supabase.storage.from(bucket).download(key);
    let summary: CloudBranchSummary | null = null;
    if (blob && !error) {
      summary = JSON.parse(await blob.text()) as CloudBranchSummary;
    }

    const latestBackups: Array<{ name: string; created_at?: string; size?: number }> = [];
    const newestDay = (backupFolders || []).find((f) => f.id === null)?.name;
    if (newestDay) {
      const { data: dayFiles } = await supabase.storage
        .from(bucket)
        .list(`${safeId}/${newestDay}`, {
          limit: 5,
          sortBy: { column: "name", order: "desc" },
        });
      for (const f of dayFiles || []) {
        if (f.name) {
          latestBackups.push({
            name: `${newestDay}/${f.name}`,
            created_at: f.created_at ?? undefined,
            size: (f.metadata as { size?: number } | null)?.size,
          });
        }
      }
    }

    return { summary, availableDates, latestBackups };
  } catch (err) {
    return {
      summary: null,
      availableDates: [],
      latestBackups: [],
      error: err instanceof Error ? err.message : "Failed to fetch branch summary",
    };
  }
}

