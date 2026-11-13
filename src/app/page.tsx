import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building,
  CheckCircle2,
  Clock,
  CloudCheck,
  FileCheck,
  HardDrive,
  HelpCircle,
  Laptop,
  Percent,
  Printer,
  Receipt,
  Scale,
  ShieldCheck,
  Store,
  UtensilsCrossed,
  WifiOff,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DemoForm } from "@/components/demo-form";
import { SiteHeader } from "@/components/site-header";

const PILLARS = [
  {
    icon: WifiOff,
    title: "100% Offline-First Speed",
    badge: "SQLite WAL Engine",
    color: "sky",
    desc: "Broadband drops never freeze your counter during peak hours. NexGen punches orders, prints receipts, and updates tables locally in 0.1s, auto-syncing when internet restores.",
  },
  {
    icon: FileCheck,
    title: "Automated BIR 2024 Compliance",
    badge: "Senior & PWD Formula",
    color: "amber",
    desc: "Strictly compliant with BIR rules. Auto-computes 12% VAT exemption followed by 20% discount (R.A. 9994/10754), tracks NGRT grand totals, and generates 7 official audit books.",
  },
  {
    icon: Building,
    title: "Mall Tenant RLC Generator",
    badge: "SM · Ayala · Robinsons · Megaworld",
    color: "sky",
    desc: "Operating in a major shopping mall? Generate compliant daily end-of-day sales TXT files for SM Tenant, Robinsons RLC, Ayala CIRS, and Megaworld in one click.",
  },
  {
    icon: Printer,
    title: "Kitchen Impact & Thermal Routing",
    badge: "Cashier · Bar · Hot Kitchen",
    color: "amber",
    desc: "Route sizzling hot tickets to heat-resistant dot-matrix impact printers (Epson TM-U220) so orders never fade under steam, while issuing thermal receipts at the front counter.",
  },
  {
    icon: Scale,
    title: "Raw Ingredient Food Costing",
    badge: "Gram & Portion Tracking",
    color: "sky",
    desc: "Track ingredient depletion to the exact gram. As dishes sell, buns, meat, cheese, and syrups deduct automatically from inventory with timely low-stock reorder alerts.",
  },
  {
    icon: CloudCheck,
    title: "Multi-Store Owner Cloud Portal",
    badge: "Supabase Telemetry",
    color: "amber",
    desc: "Monitor live gross/net sales, active dine-in tables, and Z-reading counters from your smartphone anytime. Encrypted rolling backups keep all your store data secure.",
  },
];

const COMPARISON = [
  {
    feature: "Zero Freezing During Internet Outages",
    nexgen: "100% Offline Local Engine (0.1s)",
    legacy: "Yes, but slow & no cloud sync",
    cloudOnly: "Freezes or disconnects",
  },
  {
    feature: "BIR Senior / PWD 20% Discount + 12% VAT Exemption",
    nexgen: "Fully Automated (R.A. 9994 & 10754)",
    legacy: "Manual calculator required",
    cloudOnly: "Generic US sales tax template",
  },
  {
    feature: "Mall Tenant Sales TXT (SM, Ayala, Robinsons RLC)",
    nexgen: "Built-in 1-Click File Generator",
    legacy: "Not supported",
    cloudOnly: "Requires custom expensive plugin",
  },
  {
    feature: "Kitchen Impact (Dot-Matrix) Printer Routing",
    nexgen: "Native USB & LAN protocol",
    legacy: "Limited serial cable setup",
    cloudOnly: "Thermal Bluetooth only (fades near heat)",
  },
  {
    feature: "Hardware Freedom & Flexibility",
    nexgen: "Any Windows PC, Laptop, or Touch POS",
    legacy: "Proprietary locked-down registers",
    cloudOnly: "Locked to fragile iPads/Tablets",
  },
  {
    feature: "Multi-Store Owner Cloud Monitoring",
    nexgen: "Centralized Supabase Web Portal",
    legacy: "Must visit store in person",
    cloudOnly: "Standard web dashboard",
  },
];

const BIR_BOOKS = [
  { name: "Senior Citizen Sales Book", law: "R.A. 9994", note: "Auto-exempts 12% VAT first, then applies 20% discount" },
  { name: "Persons with Disability (PWD)", law: "R.A. 10754", note: "Applies 20% discount + VAT exemption with ID logging" },
  { name: "National Athletes & Coaches", law: "R.A. 10699", note: "Automated discount computation and reporting" },
  { name: "Solo Parents Sales Book", law: "R.A. 11861", note: "Compliant discount recording with child info" },
  { name: "Medal of Valor Sales Book", law: "R.A. 9049", note: "Full statutory benefits with separate audit book" },
  { name: "Cashier Accountability Report", law: "BIR Audit", note: "Shift-by-shift cash reconciliation & variance log" },
  { name: "Consolidated Master Sales Book", law: "BIR RR 11-2004", note: "Daily Z-reading, VAT breakdown & NGRT tracking" },
];

const HARDWARE_ITEMS = [
  {
    title: "Touch POS & Windows PCs",
    desc: "Runs smoothly on all Windows 10/11 touch terminals, all-in-ones, laptops, and desktop computers.",
  },
  {
    title: "Receipt Thermal Printers",
    desc: "Fast 80mm & 58mm thermal printers (Epson, Rongta, Xprinter) via USB, LAN, or Wi-Fi.",
  },
  {
    title: "Kitchen Dot-Matrix Impact Printers",
    desc: "Heat, grease, and steam resistant impact printers (Epson TM-U220) for kitchen cook stations.",
  },
  {
    title: "Cash Drawers & Barcode Scanners",
    desc: "Standard RJ11 auto-kick cash drawers and fast 1D/2D QR handheld barcode scanners.",
  },
];

const FAQS = [
  {
    q: "What happens if our branch loses internet or Wi-Fi disconnects?",
    a: "NexGen is built 100% offline-first. Cashiers continue punching orders, sending kitchen tickets, and printing receipts without delay. Once internet connection returns, data syncs automatically to your cloud portal.",
  },
  {
    q: "How does NexGen calculate Senior Citizen and PWD discounts?",
    a: "NexGen applies the official BIR statutory formula: the item price is divided by 1.12 to remove the 12% VAT, and then a 20% discount is applied to the net amount. Customer details and OSCA/PWD ID numbers are recorded automatically.",
  },
  {
    q: "Do I need to buy expensive proprietary hardware?",
    a: "No. NexGen runs on standard Windows PCs, laptops, and touch screen POS terminals. You can reuse existing thermal printers, cash drawers, and barcode scanners without buying locked hardware.",
  },
  {
    q: "Can NexGen generate daily sales files for shopping malls?",
    a: "Yes. NexGen includes a built-in Mall Tenant Sales Generator supporting SM Tenant TXT, Robinsons RLC format, Ayala Malls CIRS, and Megaworld end-of-day sales submission formats.",
  },
  {
    q: "How can business owners monitor multiple store locations?",
    a: "Owners access the cloud fleet portal from any phone, tablet, or browser to view live net sales, open table orders, and Z-reading counts across all active branches.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Sticky POS-Branded Header with Real Switch Toggle */}
      <SiteHeader />

      <main className="flex-1">
        {/* ==============================================================
            HERO SECTION
            ============================================================== */}
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-border">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-72 bg-gradient-to-b from-sky-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
              {/* Hero Left: Value Proposition */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                {/* Official Compliance Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold shadow-xs">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Philippine Offline Engine · BIR 2024 Ready</span>
                </div>

                {/* Main Heading - Moderated size */}
                <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold font-display tracking-tight text-foreground leading-[1.18]">
                  The Ultra-Reliable POS for <span className="text-sky-600 dark:text-sky-400">Philippine Food</span> &amp;{" "}
                  <span className="text-amber-600 dark:text-amber-400">Retail</span>.
                </h1>

                {/* Clear, Non-wordy Subtitle */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Zero cashier downtime during internet drops. Automated BIR Senior &amp; PWD discounts, 1-click Mall Tenant RLC reports, and heat-resistant kitchen impact printing.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                  <a href="#demo" className="w-full sm:w-auto">
                    <Button
                      size="default"
                      className="w-full sm:w-auto h-10 px-6 text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-lg shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Book Free Live Demo
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Button>
                  </a>
                  <a href="#features" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="default"
                      className="w-full sm:w-auto h-10 px-5 text-sm font-semibold rounded-lg border-border bg-card hover:bg-accent text-foreground"
                    >
                      Explore Capabilities
                    </Button>
                  </a>
                </div>

                {/* Key Bullet Highlights */}
                <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left border-t border-border/80">
                  <div>
                    <div className="text-sm font-bold text-foreground font-display">100% Offline</div>
                    <div className="text-xs text-muted-foreground">Runs during PLDT/Globe drops</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground font-display">BIR Formula</div>
                    <div className="text-xs text-muted-foreground">RA 9994 / RA 10754 compliant</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="text-sm font-bold text-foreground font-display">Mall Tenant RLC</div>
                    <div className="text-xs text-muted-foreground">SM, Ayala, Robinsons TXT</div>
                  </div>
                </div>
              </div>

              {/* Hero Right: Live Interactive Terminal Card */}
              <div className="lg:col-span-5">
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-lg space-y-4 relative overflow-hidden">
                  {/* Decorative Header Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="text-[11px] font-mono text-muted-foreground ml-1.5">
                        savore-terminal-01.local
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                      ● SQLite WAL Active
                    </span>
                  </div>

                  {/* Terminal Stats Box */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border/70 bg-secondary/50 p-3.5">
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-0.5">
                        Today&apos;s Net Sales
                      </span>
                      <span className="text-xl sm:text-2xl font-bold font-display text-sky-600 dark:text-sky-400 tabular-nums">
                        ₱48,920.00
                      </span>
                      <span className="text-[11px] text-muted-foreground block mt-0.5">
                        142 Settled Orders
                      </span>
                    </div>

                    <div className="rounded-lg border border-border/70 bg-secondary/50 p-3.5">
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-0.5">
                        Non-Resettable (NGRT)
                      </span>
                      <span className="text-lg sm:text-xl font-bold font-display text-amber-600 dark:text-amber-400 tabular-nums">
                        ₱17,413,278
                      </span>
                      <span className="text-[11px] text-muted-foreground block mt-0.5">
                        Z-Reading #179
                      </span>
                    </div>
                  </div>

                  {/* Operational Status Preview */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs p-2.5 rounded-md border border-border bg-background">
                      <span className="font-medium text-foreground flex items-center gap-2">
                        <Printer className="h-3.5 w-3.5 text-sky-500" />
                        Kitchen Impact Printer (LAN)
                      </span>
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                        ONLINE · 0.08s
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2.5 rounded-md border border-border bg-background">
                      <span className="font-medium text-foreground flex items-center gap-2">
                        <Receipt className="h-3.5 w-3.5 text-amber-500" />
                        Cashier Thermal 80mm (USB)
                      </span>
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                        ONLINE · READY
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2.5 rounded-md border border-border bg-background">
                      <span className="font-medium text-foreground flex items-center gap-2">
                        <Building className="h-3.5 w-3.5 text-slate-400" />
                        Robinsons Mall RLC Export
                      </span>
                      <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400">
                        AUTO-GENERATED
                      </span>
                    </div>
                  </div>

                  {/* Footnote */}
                  <div className="text-center text-[11px] text-muted-foreground">
                    Zero latency during brownouts &amp; broadband drops.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION 1: CORE PH PILLARS
            ============================================================== */}
        <section id="features" className="py-16 sm:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Engineered for Philippine Operations
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground">
                Everything You Need to Run Seamlessly.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Built from real kitchen rushes, Philippine mall requirements, and BIR audit standards.
              </p>
            </div>

            {/* Grid of 6 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PILLARS.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <Card
                    key={idx}
                    className="p-6 sm:p-7 rounded-xl border border-border bg-card hover:border-sky-500/40 transition-all shadow-xs hover:shadow-sm flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                            p.color === "sky"
                              ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20"
                              : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                          {p.badge}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-display text-foreground leading-snug">
                        {p.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION 2: BENCHMARK COMPARISON MATRIX
            ============================================================== */}
        <section className="py-16 sm:py-20 bg-secondary/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Philippine POS Benchmark
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground">
                How NexGen Compares Against Alternatives.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                See why Philippine merchants choose NexGen over legacy cash registers and cloud-only tablet systems.
              </p>
            </div>

            {/* Accessible Responsive Table Container */}
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[650px]">
                  <thead>
                    <tr className="border-b border-border bg-muted/60">
                      <th className="py-3.5 px-5 text-sm font-bold text-foreground font-display w-2/5">
                        Operational Capability
                      </th>
                      <th className="py-3.5 px-5 text-sm font-bold text-sky-600 dark:text-sky-400 font-display w-1/4 bg-sky-500/5 border-x border-border">
                        NexGen POS
                      </th>
                      <th className="py-3.5 px-5 text-xs font-semibold text-muted-foreground font-display w-1/6">
                        Legacy Cash Registers
                      </th>
                      <th className="py-3.5 px-5 text-xs font-semibold text-muted-foreground font-display w-1/6">
                        Cloud-Only Tablet POS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {COMPARISON.map((row, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="py-3.5 px-5 font-medium text-sm text-foreground">
                          {row.feature}
                        </td>
                        <td className="py-3.5 px-5 text-sm font-bold text-sky-600 dark:text-sky-400 bg-sky-500/5 border-x border-border">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                            <span>{row.nexgen}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-5 text-xs text-muted-foreground">
                          {row.legacy}
                        </td>
                        <td className="py-3.5 px-5 text-xs text-muted-foreground">
                          {row.cloudOnly}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION 3: BIR COMPLIANCE & MALL TENANT MODULE
            ============================================================== */}
        <section id="bir-malls" className="py-16 sm:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Statutory Formula Explanation */}
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Zero BIR Audit Headaches
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground">
                  The Official BIR 2024 Discount Formula, Automated.
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Avoid heavy BIR non-compliance penalties. NexGen enforces the exact statutory calculation mandated by the Bureau of Internal Revenue:
                </p>

                {/* Mathematical Formula Card */}
                <div className="rounded-xl border border-border bg-secondary/50 p-5 space-y-2 font-mono">
                  <div className="text-[11px] uppercase text-muted-foreground font-semibold">
                    BIR Official Senior &amp; PWD Calculation
                  </div>
                  <div className="text-sm sm:text-base text-foreground font-bold">
                    Net Price = (Gross Item Price ÷ 1.12) × 0.80
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    12% VAT is automatically removed before applying the 20% discount. No manual math errors by cashiers.
                  </div>
                </div>

                <div className="space-y-2.5 pt-1">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground font-medium">
                      Logs OSCA / PWD ID numbers directly onto receipts and audit books.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground font-medium">
                      Maintains non-resettable accumulated grand totals (NGRT) across all Z-readings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: 7 Official Sales Books */}
              <div className="lg:col-span-6 space-y-3">
                <h3 className="text-base font-bold font-display text-foreground mb-3">
                  7 BIR-Mandated Sales Books Included:
                </h3>
                <div className="space-y-2.5">
                  {BIR_BOOKS.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg border border-border bg-card flex items-center justify-between gap-3 shadow-xs"
                    >
                      <div>
                        <div className="font-bold text-sm text-foreground">{b.name}</div>
                        <div className="text-xs text-muted-foreground">{b.note}</div>
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-secondary text-foreground shrink-0 border border-border">
                        {b.law}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION 4: HARDWARE COMPATIBILITY
            ============================================================== */}
        <section id="hardware" className="py-16 sm:py-20 bg-secondary/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Hardware Agnostic &amp; Flexible
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground">
                Plug &amp; Play With Your Existing Equipment.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                No expensive proprietary lock-in. Use standard Windows hardware and standard industry peripherals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HARDWARE_ITEMS.map((item, i) => (
                <Card key={i} className="p-5 sm:p-6 rounded-xl border border-border bg-card shadow-xs space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center">
                    <Laptop className="h-5 w-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION 5: PHILIPPINE PESO PRICING
            ============================================================== */}
        <section id="pricing" className="py-16 sm:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Transparent Philippine Pricing
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground">
                Affordable Plans With No Hidden Fees.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Transparent subscriptions in Philippine Pesos (PHP). All plans include our 100% offline engine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Plan 1: Retail / Starter */}
              <div className="rounded-xl border border-border bg-card p-6 sm:p-7 flex flex-col justify-between shadow-xs space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-foreground">Starter Counter</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      For retail kiosks, boutiques, bakeries, and quick counters.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-bold font-display text-foreground">₱1,499</span>
                    <span className="text-muted-foreground text-xs font-medium">/ month</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-foreground">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>100% Offline SQLite engine</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>7 BIR-compliant sales books</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Thermal receipt printing (USB)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Daily cloud database backup</span>
                    </li>
                  </ul>
                </div>
                <a href="#demo">
                  <Button variant="outline" className="w-full h-9.5 text-xs sm:text-sm font-semibold rounded-lg">
                    Get Started
                  </Button>
                </a>
              </div>

              {/* Plan 2: Pro Restaurant (Featured) */}
              <div className="rounded-xl border-2 border-sky-500 bg-card p-6 sm:p-7 flex flex-col justify-between shadow-lg space-y-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  Most Popular For Dining
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-foreground">Pro Restaurant</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      For cafes, dine-in restaurants, bars, and food park tenants.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-bold font-display text-sky-600 dark:text-sky-400">₱2,499</span>
                    <span className="text-muted-foreground text-xs font-medium">/ month</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-foreground">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Everything in Starter plan</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Table layout &amp; bill split management</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Kitchen dot-matrix impact routing</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Mall Tenant RLC (SM, Robinsons, Ayala)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Raw ingredient recipe inventory</span>
                    </li>
                  </ul>
                </div>
                <a href="#demo">
                  <Button className="w-full h-9.5 text-xs sm:text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-lg shadow-md">
                    Book Free Demo
                  </Button>
                </a>
              </div>

              {/* Plan 3: Multi-Branch Fleet */}
              <div className="rounded-xl border border-border bg-card p-6 sm:p-7 flex flex-col justify-between shadow-xs space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-foreground">Multi-Branch Fleet</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      For restaurant chains, franchise operators, and retail fleets.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-bold font-display text-foreground">Custom</span>
                    <span className="text-muted-foreground text-xs font-medium">volume pricing</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-foreground">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Multi-store Owner Cloud Portal</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Centralized menu &amp; price sync</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Consolidated executive reporting</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Dedicated technical onboarding</span>
                    </li>
                  </ul>
                </div>
                <a href="#demo">
                  <Button variant="outline" className="w-full h-9.5 text-xs sm:text-sm font-semibold rounded-lg">
                    Contact Sales
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION 6: FAQ
            ============================================================== */}
        <section id="faq" className="py-16 sm:py-20 bg-secondary/30 border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground">
                Frequently Asked Questions.
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-card p-5 sm:p-6 space-y-2.5 shadow-xs"
                >
                  <h3 className="text-base sm:text-lg font-bold font-display text-foreground flex items-center gap-2.5">
                    <HelpCircle className="h-4 w-4 text-sky-500 shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6.5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION 7: INTERACTIVE DEMO BOOKING FORM
            ============================================================== */}
        <section id="demo" className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Experience NexGen In Action
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground">
                Schedule a Free Live Demo.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Our Philippine technical team will demonstrate live offline transactions, BIR reports, and mall file exports tailored to your store.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-md">
              <DemoForm />
            </div>
          </div>
        </section>
      </main>

      {/* ==============================================================
          FOOTER
          ============================================================== */}
      <footer className="border-t border-slate-800 bg-[#0f172a] text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 flex items-center justify-center">
                  <Image src="/box_logo.png" alt="NexGen POS" width={32} height={32} />
                </div>
                <span className="font-display font-bold text-xl text-white">
                  NexGen <span className="text-sky-400">POS</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
                The offline-first Point of Sale system engineered specifically for Philippine restaurants, food stalls, cafes, and retail chains.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white text-sm mb-2.5 font-display">Navigation</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#bir-malls" className="hover:text-white transition-colors">BIR &amp; Malls</a></li>
                <li><a href="#hardware" className="hover:text-white transition-colors">Hardware</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white text-sm mb-2.5 font-display">Owner Access</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link href="/portal-login" className="text-sky-400 hover:text-sky-300 font-medium">
                    Owner Fleet Portal →
                  </Link>
                </li>
                <li><span className="text-xs text-slate-500">Live multi-branch sales monitoring</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© 2026 NexGen POS. All rights reserved.</p>
            <p>Designed strictly under Republic Acts 9994, 10754, and BIR Revenue Regulations.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
