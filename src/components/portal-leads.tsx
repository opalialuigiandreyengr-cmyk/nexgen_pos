"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export interface DemoLeadRow {
  id: string;
  full_name: string;
  business_name: string;
  city: string;
  contact_number: string;
  email: string;
  branch_count: number;
  preferred_date: string;
  notes: string;
  status: string;
  created_at: string;
}

export function PortalLeadsTable({ initialLeads }: { initialLeads: DemoLeadRow[] }) {
  const [leads, setLeads] = React.useState(initialLeads);

  async function onStatusChange(id: string, status: string) {
    const res = await fetch("/api/portal/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) {
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    }
  }

  return (
    <Card>
      <CardHeader className="border-b border-border">
        <CardTitle className="text-sm">Incoming Demo Requests ({leads.length})</CardTitle>
      </CardHeader>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border text-[11px] uppercase text-muted-foreground">
              <th className="py-2.5 px-4 text-left font-medium">Business / Contact</th>
              <th className="py-2.5 px-4 text-left font-medium">Phone / Email</th>
              <th className="py-2.5 px-4 text-left font-medium">City / Branches</th>
              <th className="py-2.5 px-4 text-left font-medium">Preferred</th>
              <th className="py-2.5 px-4 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {leads.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-muted-foreground">
                  No demo requests yet.
                </td>
              </tr>
            ) : (
              leads.map((l) => (
                <tr key={l.id} className="hover:bg-accent/40">
                  <td className="py-3 px-4">
                    <div className="font-medium text-foreground">{l.business_name}</div>
                    <div className="text-muted-foreground">{l.full_name}</div>
                    {l.notes && <div className="text-[11px] text-muted-foreground mt-1">{l.notes}</div>}
                  </td>
                  <td className="py-3 px-4">
                    <div>{l.contact_number}</div>
                    <div className="text-muted-foreground">{l.email || "—"}</div>
                  </td>
                  <td className="py-3 px-4">
                    {l.city || "—"} · {l.branch_count} branch(es)
                  </td>
                  <td className="py-3 px-4 font-mono">{l.preferred_date || "—"}</td>
                  <td className="py-3 px-4">
                    <select
                      value={l.status}
                      onChange={(e) => onStatusChange(l.id, e.target.value)}
                      className="h-7 rounded border border-border bg-background px-2 text-xs"
                    >
                      <option value="new">new</option>
                      <option value="contacted">contacted</option>
                      <option value="scheduled">scheduled</option>
                      <option value="converted">converted</option>
                      <option value="archived">archived</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

