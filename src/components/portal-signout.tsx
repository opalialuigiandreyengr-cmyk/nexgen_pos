"use client";

import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PortalSignOutButton() {
  const router = useRouter();
  async function handleSignOut() {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    await supabase.auth.signOut();
    router.push("/portal-login");
    router.refresh();
  }
  return (
    <Button variant="ghost" size="sm" onClick={handleSignOut} className="w-full justify-start text-muted-foreground">
      <LogOut className="h-3.5 w-3.5" />
      <span>Sign Out</span>
    </Button>
  );
}

