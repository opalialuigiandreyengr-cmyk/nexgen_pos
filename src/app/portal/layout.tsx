import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Activity, Building2, Inbox } from "lucide-react";
import { requireSuperAdmin } from "@/lib/supabase/server";
import { PortalSignOutButton } from "@/components/portal-signout";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireSuperAdmin();
  if (!user) {
    redirect("/portal-login");
  }

  return (
    <div className="min-h-screen flex bg-background text-foreground transition-colors duration-200">
      <aside className="w-60 shrink-0 border-r border-border bg-card flex flex-col justify-between p-4">
        <div className="space-y-6">
          <Link href="/portal" className="flex items-center gap-2.5 font-display font-bold text-sm tracking-tight">
            <div className="relative h-7 w-7 rounded-md overflow-hidden border border-primary/40 bg-secondary shrink-0">
              <Image src="/box_logo.png" alt="NexGen" fill sizes="28px" className="object-contain p-0.5" priority />
            </div>
            <div className="flex flex-col leading-tight">
              <span>NexGen Fleet</span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">SuperAdmin</span>
            </div>
          </Link>
          <nav className="space-y-1 text-xs uppercase font-medium tracking-wider">
            <Link
              href="/portal"
              className="flex items-center gap-2.5 rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Activity className="h-4 w-4 text-primary" />
              <span>Fleet Overview</span>
            </Link>
            <Link
              href="/portal/clients"
              className="flex items-center gap-2.5 rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Building2 className="h-4 w-4 text-sky-400" />
              <span>Client Registry</span>
            </Link>
            <Link
              href="/portal/leads"
              className="flex items-center gap-2.5 rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Inbox className="h-4 w-4 text-indigo-400" />
              <span>Demo Leads</span>
            </Link>
          </nav>
        </div>
        <div className="space-y-3 border-t border-border pt-4">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
          <div className="px-1 text-[11px] font-mono text-muted-foreground truncate" title={user.email || ""}>
            {user.email}
          </div>
          <PortalSignOutButton />
        </div>
      </aside>
      <main className="flex-1 min-w-0 p-6 sm:p-8">{children}</main>
    </div>
  );
}
