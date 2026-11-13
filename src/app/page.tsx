import Link from "next/link";
import {
  ArrowRight,
  Check,
  CloudUpload,
  FileCheck2,
  HardDrive,
  Printer,
  ShieldCheck,
  Store,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DemoForm } from "@/components/demo-form";

const FEATURES = [
  {
    icon: HardDrive,
    title: "Offline-First Speed",
    desc: "Runs locally on SQLite WAL mode. Zero lag during rush hours even if store internet drops.",
  },
  {
    icon: FileCheck2,
    title: "BIR-Ready Reports & E-Journal",
    desc: "X/Z-Reading counters, NGRT tracking, Senior/PWD/OTH Sales Books, and RLC export built in.",
  },
  {
    icon: CloudUpload,
    title: "Automated Cloud Backups",
    desc: "Compressed daily snapshots (.db.gz) encrypted in transit with automatic 15-day retention.",
  },
  {
    icon: Printer,
    title: "Multi-Printer Routing",
    desc: "Thermal USB/LAN and dot-matrix kitchen/bar/cashier routing with automatic fallback.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Remote Access",
    desc: "Owners monitor live sales, reports, and Z-readings from anywhere without touching live orders.",
  },
  {
    icon: Store,
    title: "Built for Multi-Branch",
    desc: "Floor plans, table transfers, split bills, recipe inventory, and centralized branch monitoring.",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "₱1,499",
    period: "/month per branch",
    desc: "Everything a single counter or cafe needs to operate offline with cloud safety.",
    features: [
      "1 POS Terminal + Kitchen Printer",
      "BIR Z-Reading & Sales Books",
      "Daily Automated Cloud Backup",
      "Remote Read-Only Owner Access",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "₱2,499",
    period: "/month per branch",
    desc: "For full-service restaurants with tables, split billing, and inventory tracking.",
    features: [
      "Unlimited LAN Crew / Cashier Terminals",
      "Floor Plan, Split Bill & Table Transfer",
      "Recipe Inventory & Daily Cash Report",
      "Cloud Sales Summary Sync + 15-Day Backups",
    ],
    featured: true,
  },
  {
    name: "Multi-Branch",
    price: "Custom",
    period: "3+ branches",
    desc: "Centralized oversight, priority onboarding, and custom BIR/mall RLC integrations.",
    features: [
      "Everything in Pro across all branches",
      "Dedicated Branch Cloud Monitoring",
      "Mall RLC / Custom Export Formats",
      "Priority Remote Support & Setup",
    ],
    featured: false,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="h-6 w-6 rounded-md bg-primary/15 border border-primary/40 flex items-center justify-center text-primary text-xs font-mono">
              NG
            </span>
            <span>NexGen POS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#demo">
              <Button size="sm">
                Book Free Demo <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="default" className="font-mono">
                Offline-First POS · Cloud Synced
              </Badge>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.12]">
                Run your store locally. Monitor every branch from anywhere.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                NexGen POS keeps your counter fast even without internet, automates BIR-compliant
                Z-readings and sales books, and syncs encrypted backups and live daily totals to the
                cloud.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a href="#demo">
                  <Button size="lg">
                    Request Free Demo <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#pricing">
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground pt-2">
                <span>✓ Works 100% offline</span>
                <span>✓ Automatic daily backups</span>
                <span>✓ Local PH support</span>
              </div>
            </div>

            {/* Authentic Product Preview Card */}
            <div className="lg:col-span-5">
              <Card className="bg-card/90 shadow-lg">
                <CardHeader className="border-b border-border pb-3 flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle className="text-sm font-mono">store-sync · live</CardTitle>
                    <CardDescription className="text-xs">
                      Automated snapshot &amp; summary telemetry
                    </CardDescription>
                  </div>
                  <Badge>Healthy</Badge>
                </CardHeader>
                <CardContent className="pt-4 space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-md border border-border bg-background p-3">
                      <div className="text-muted-foreground">TODAY NET SALES</div>
                      <div className="text-lg font-semibold text-foreground tabular-nums mt-1">
                        ₱48,920.50
                      </div>
                    </div>
                    <div className="rounded-md border border-border bg-background p-3">
                      <div className="text-muted-foreground">SETTLED ORDERS</div>
                      <div className="text-lg font-semibold text-foreground tabular-nums mt-1">
                        142
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md border border-border bg-background divide-y divide-border">
                    <div className="px-3 py-2 flex items-center justify-between">
                      <span className="text-muted-foreground">snapshot</span>
                      <span>Savore_pos_latest.db.gz (16.7 MB)</span>
                    </div>
                    <div className="px-3 py-2 flex items-center justify-between">
                      <span className="text-muted-foreground">z-reading</span>
                      <span>Z #179 · NGRT ₱17,413,278.50</span>
                    </div>
                    <div className="px-3 py-2 flex items-center justify-between">
                      <span className="text-muted-foreground">retention</span>
                      <span className="text-emerald-400">15-day auto-prune active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-10">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                Built for real restaurant operations
              </h2>
              <p className="text-sm text-muted-foreground">
                Every workflow—from table transfers to BIR sales books—works without cloud latency.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <Card key={f.title} className="bg-card">
                    <CardHeader className="space-y-2">
                      <div className="h-8 w-8 rounded-md border border-border bg-secondary flex items-center justify-center text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-sm">{f.title}</CardTitle>
                      <CardDescription className="text-xs leading-relaxed">
                        {f.desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-10">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight">Simple, transparent pricing</h2>
              <p className="text-sm text-muted-foreground">
                Start with a free live demo and trial. No hidden per-transaction fees.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PLANS.map((plan) => (
                <Card
                  key={plan.name}
                  className={
                    plan.featured
                      ? "border-primary/60 bg-card shadow-md"
                      : "bg-card"
                  }
                >
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{plan.name}</CardTitle>
                      {plan.featured && <Badge>Popular</Badge>}
                    </div>
                    <div className="pt-1">
                      <span className="text-3xl font-semibold tabular-nums">{plan.price}</span>
                      <span className="text-xs text-muted-foreground ml-1.5">{plan.period}</span>
                    </div>
                    <CardDescription className="text-xs">{plan.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      {plan.features.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#demo" className="block pt-2">
                      <Button
                        variant={plan.featured ? "default" : "outline"}
                        className="w-full"
                        size="sm"
                      >
                        Get Started
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About & Free Demo */}
        <section id="about" className="py-16">
          <div
            id="demo"
            className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                Book a free live demo
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We tailor NexGen POS to your actual menu, thermal/kitchen printers, and BIR
                reporting workflow. Leave your details and we will schedule a 20-minute walkthrough.
              </p>
              <div className="rounded-lg border border-border bg-card p-4 space-y-2 text-xs text-muted-foreground">
                <div className="font-medium text-foreground">What happens next?</div>
                <p>1. We review your branch count and printer setup.</p>
                <p>2. Live walkthrough of POS, Z-Reading, and Remote Monitoring.</p>
                <p>3. Optional on-site or remote trial installation.</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Free Demo Request</CardTitle>
                  <CardDescription className="text-xs">
                    No commitment required. Response within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DemoForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6 text-xs text-muted-foreground">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2">
          <span>© 2026 NexGen POS</span>
          <span>Offline-First POS · Cloud Backup &amp; Multi-Branch Telemetry</span>
        </div>
      </footer>
    </div>
  );
}
