import Link from "next/link";
import { redirect } from "next/navigation";
import { Activity, Building2, Inbox } from "lucide-react";
import { requireSuperAdmin } from "@/lib/supabase/server";
import { PortalSignOutButton } from "@/components/portal-signout";

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
    <div className="min-h-screen flex bg-background text-foreground">
      <aside className="w-56 shrink-0 border-r border-border bg-card/60 flex flex-col justify-between p-4">
        <div className="space-y-6">
          <Link href="/portal" className="flex items-center gap-2 font-semibold text-sm">
            <span className="h-6 w-6 rounded-md bg-primary/15 border border-primary/40 flex items-center justify-center text-primary text-xs font-mono">
              NG
            </span>
            <span>SuperAdmin</span>
          </Link>
          <nav className="space-y-1 text-sm">
            <Link
              href="/portal"
              className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Activity className="h-4 w-4" />
              <span>Overview</span>
            </Link>
            <Link
              href="/portal/clients"
              className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Building2 className="h-4 w-4" />
              <span>Clients</span>
            </Link>
            <Link
              href="/portal/leads"
              className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Inbox className="h-4 w-4" />
              <span>Demo Leads</span>
            </Link>
          </nav>
        </div>
        <div className="space-y-2 border-t border-border pt-3">
          <div className="px-2 text-[11px] text-muted-foreground truncate" title={user.email || ""}>
            {user.email}
          </div>
          <PortalSignOutButton />
        </div>
      </aside>
      <main className="flex-1 min-w-0 p-6 sm:p-8">{children}</main>
    </div>
  );
}

