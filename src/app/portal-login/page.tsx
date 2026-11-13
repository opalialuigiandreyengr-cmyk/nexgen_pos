"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input, Label } from "@/components/ui/input";

export default function PortalLoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      const { error: authErr } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (authErr) {
        setError(authErr.message);
        return;
      }
      router.push("/portal");
      router.refresh();
    } catch {
      setError("Authentication failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <div className="h-8 w-8 rounded-md border border-border bg-secondary flex items-center justify-center text-primary mb-2">
            <Lock className="h-4 w-4" />
          </div>
          <CardTitle className="text-lg">SuperAdmin Portal</CardTitle>
          <CardDescription className="text-xs">
            Sign in with your Supabase operator credentials.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-3.5">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <p className="text-xs text-red-400 border border-red-500/30 bg-red-500/10 rounded-md px-3 py-2">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

