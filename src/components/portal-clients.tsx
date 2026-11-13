"use client";

import * as React from "react";
import Link from "next/link";
import { Check, Copy, Loader2, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input, Label } from "@/components/ui/input";
import { formatPeso } from "@/lib/utils";

export interface ClientRow {
  id: string;
  client_id: string;
  store_name: string;
  owner_name: string;
  contact_phone: string;
  plan: string;
  monthly_fee: number;
  status: string;
  tailscale_host: string;
  notes: string;
}

export function PortalClientsManager({
  initialClients,
  supabaseUrl,
  bucketName,
}: {
  initialClients: ClientRow[];
  supabaseUrl: string;
  bucketName: string;
}) {
  const [clients, setClients] = React.useState(initialClients);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState("");
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  async function onAddClient(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      client_id: String(fd.get("client_id") || ""),
      store_name: String(fd.get("store_name") || ""),
      owner_name: String(fd.get("owner_name") || ""),
      contact_phone: String(fd.get("contact_phone") || ""),
      plan: String(fd.get("plan") || "pro"),
      monthly_fee: Number(fd.get("monthly_fee") || 2499),
      status: String(fd.get("status") || "trial"),
      tailscale_host: String(fd.get("tailscale_host") || ""),
    };

    try {
      const res = await fetch("/api/portal/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Failed to add client");
      } else {
        setClients((prev) => [json.client, ...prev]);
        form.reset();
      }
    } finally {
      setSaving(false);
    }
  }

  async function onStatusChange(id: string, status: string) {
    const res = await fetch("/api/portal/clients", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) {
      setClients((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
    }
  }

  function copyEnvSnippet(clientId: string) {
    const snippet = [
      `CLIENT_ID=${clientId}`,
      `SUPABASE_URL=${supabaseUrl}`,
      `SUPABASE_BACKUP_BUCKET=${bucketName}`,
      `SUPABASE_SERVICE_ROLE_KEY=<PASTE_SERVICE_ROLE_KEY>`,
    ].join("\n");
    navigator.clipboard.writeText(snippet);
    setCopiedId(clientId);
    setTimeout(() => setCopiedId(null), 1800);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <Plus className="h-4 w-4 text-primary" /> Register New POS Client
          </CardTitle>
          <CardDescription className="text-xs">
            `CLIENT_ID` must match the `CLIENT_ID` in the store&apos;s `.env` file.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onAddClient} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="space-y-1">
              <Label htmlFor="client_id">Client ID</Label>
              <Input id="client_id" name="client_id" placeholder="Savore" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="store_name">Store Name</Label>
              <Input id="store_name" name="store_name" placeholder="Savore Kitchen Corp." required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="owner_name">Owner</Label>
              <Input id="owner_name" name="owner_name" placeholder="Owner Name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="contact_phone">Phone</Label>
              <Input id="contact_phone" name="contact_phone" placeholder="0917..." />
            </div>
            <div className="space-y-1">
              <Label htmlFor="plan">Plan</Label>
              <select
                id="plan"
                name="plan"
                defaultValue="pro"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="starter">Starter</option>
                <option value="pro">Pro</option>
                <option value="multi_branch">Multi-Branch</option>
              </select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="monthly_fee">Monthly Fee (PHP)</Label>
              <Input id="monthly_fee" name="monthly_fee" type="number" defaultValue={2499} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="tailscale_host">Tailscale Host / IP</Label>
              <Input id="tailscale_host" name="tailscale_host" placeholder="100.x.x.x" />
            </div>
            <div className="flex items-end">
              <Button type="submit" className="w-full" disabled={saving}>
                {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                Add Client
              </Button>
            </div>
          </form>
          {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="border-b border-border">
          <CardTitle className="text-sm">Registered Clients ({clients.length})</CardTitle>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border text-[11px] uppercase text-muted-foreground">
                <th className="py-2.5 px-4 text-left font-medium">Client</th>
                <th className="py-2.5 px-4 text-left font-medium">Owner / Contact</th>
                <th className="py-2.5 px-4 text-left font-medium">Plan</th>
                <th className="py-2.5 px-4 text-right font-medium">Fee</th>
                <th className="py-2.5 px-4 text-left font-medium">Status</th>
                <th className="py-2.5 px-4 text-right font-medium">Onboarding</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {clients.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-muted-foreground">
                    No clients registered yet.
                  </td>
                </tr>
              ) : (
                clients.map((c) => (
                  <tr key={c.id} className="hover:bg-accent/40">
                    <td className="py-3 px-4">
                      <Link
                        href={`/portal/clients/${encodeURIComponent(c.client_id)}`}
                        className="font-medium text-foreground hover:text-primary"
                      >
                        {c.store_name}
                      </Link>
                      <div className="font-mono text-[11px] text-muted-foreground">{c.client_id}</div>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      <div>{c.owner_name || "—"}</div>
                      <div>{c.contact_phone || ""}</div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="secondary">{c.plan}</Badge>
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums">{formatPeso(c.monthly_fee)}</td>
                    <td className="py-3 px-4">
                      <select
                        value={c.status}
                        onChange={(e) => onStatusChange(c.id, e.target.value)}
                        className="h-7 rounded border border-border bg-background px-2 text-xs"
                      >
                        <option value="trial">trial</option>
                        <option value="active">active</option>
                        <option value="past_due">past_due</option>
                        <option value="suspended">suspended</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => copyEnvSnippet(c.client_id)}
                      >
                        {copiedId === c.client_id ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied .env
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" /> Copy .env
                          </>
                        )}
                      </Button>
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

