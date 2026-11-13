"use client";

import * as React from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";

export function DemoForm() {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      full_name: String(fd.get("full_name") || ""),
      business_name: String(fd.get("business_name") || ""),
      city: String(fd.get("city") || ""),
      contact_number: String(fd.get("contact_number") || ""),
      email: String(fd.get("email") || ""),
      branch_count: Number(fd.get("branch_count") || 1),
      preferred_date: String(fd.get("preferred_date") || ""),
      notes: String(fd.get("notes") || ""),
    };

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        setError(json.message || "Unable to submit request.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-6 text-center space-y-2">
        <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto" />
        <h3 className="text-base font-semibold">Demo Request Scheduled</h3>
        <p className="text-sm text-muted-foreground">
          Thanks! Our team will reach out via phone or email to set up your free live walkthrough.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => setSubmitted(false)}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="full_name">Your Name</Label>
          <Input id="full_name" name="full_name" placeholder="Juan Dela Cruz" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="business_name">Restaurant / Business Name</Label>
          <Input id="business_name" name="business_name" placeholder="Savore Kitchen" required />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="contact_number">Mobile / Viber</Label>
          <Input id="contact_number" name="contact_number" placeholder="0917 123 4567" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email (Optional)</Label>
          <Input id="email" name="email" type="email" placeholder="owner@savore.ph" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="city">City / Province</Label>
          <Input id="city" name="city" placeholder="Tacloban / Manila" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="branch_count">Branches</Label>
          <Input id="branch_count" name="branch_count" type="number" min={1} defaultValue={1} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="preferred_date">Preferred Date</Label>
          <Input id="preferred_date" name="preferred_date" type="date" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="notes">Notes / Printer Setup</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Tell us about your counter/kitchen printers, kiosk needs, or current setup..."
        />
      </div>

      {error && (
        <p className="text-xs text-red-400 border border-red-500/30 bg-red-500/10 rounded-md px-3 py-2">
          {error}
        </p>
      )}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        Request Free Live Demo
      </Button>
    </form>
  );
}

