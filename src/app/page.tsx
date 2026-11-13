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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DemoForm } from "@/components/demo-form";
import { SiteHeader } from "@/components/site-header";

const PILLARS = [
  {
    icon: WifiOff,
    title: "100% Offline-First Speed",
    badge: "SQLite WAL Engine",
    color: "sky",
    desc: "Philippine internet drops should never freeze your counter during lunch rush. NexGen processes orders, bills, and tickets locally in under 0.1 seconds, syncing to cloud storage automatically once connection returns.",
  },
  {
    icon: FileCheck,
    title: "Automated BIR 2024 Compliance",
    badge: "Senior & PWD Formula",
    color: "amber",
    desc: "Built strictly for Philippine tax regulations. Automatically calculates 12% VAT exemption followed by 20% Senior/PWD discount, tracks Non-Resettable Grand Totals (NGRT), and outputs all 7 official BIR sales books.",
  },
  {
    icon: Building,
    title: "Mall Tenant RLC Generator",
    badge: "SM · Ayala · Robinsons · Megaworld",
    color: "sky",
    desc: "Leasing inside a major Philippine shopping mall? Generate compliant daily end-of-day sales TXT files for SM Tenant, Robinsons RLC, Ayala, and Megaworld in one click with zero manual data entry.",
  },
  {
    icon: Printer,
    title: "Kitchen Impact & Thermal Routing",
    badge: "Cashier · Bar · Hot Kitchen",
    color: "amber",
    desc: "Route kitchen tickets to heat-resistant dot-matrix impact printers (Epson TM-U220) so orders never fade under kitchen steam, while simultaneously issuing customer receipts at the front counter.",
  },
  {
    icon: Scale,
    title: "Raw Ingredient Food Costing",
    badge: "Live Gram & Portion Tracking",
    color: "sky",
    desc: "Track exact ingredient consumption down to the gram. When a burger or milk tea is punched, buns, beef patties, pearls, and syrup are auto-deducted with low-stock alerts before you run out.",
  },
  {
    icon: CloudCheck,
    title: "Multi-Store Owner Cloud Portal",
    badge: "Supabase Telemetry",
    color: "amber",
    desc: "Check live gross and net sales, active dine-in tables, and Z-reading counters from your smartphone anytime. Encrypted rolling cloud snapshots protect your business data against hardware loss.",
  },
];

const COMPARISON = [
  {
    feature: "Zero Cashier Freeze During Internet Drops",
    nexgen: "100% Offline Local Engine (0.1s latency)",
    legacy: "Yes, but slow & no cloud sync",
    cloudOnly: "Freezes or slows to a crawl",
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
    cloudOnly: "Requires expensive custom plugin",
  },
  {
    feature: "Kitchen Impact (Dot-Matrix) Printer Routing",
    nexgen: "Native USB & Network Protocol",
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
  { name: "Persons with Disability (PWD)", law: "R.A. 10754", note: "Applies 20% discount + VAT exemption with ID capture" },
  { name: "National Athletes & Coaches", law: "R.A. 10699", note: "Automated discount computation and reporting" },
  { name: "Solo Parents Sales Book", law: "R.A. 11861", note: "Compliant discount recording with child info" },
  { name: "Medal of Valor Sales Book", law: "R.A. 9049", note: "Full statutory benefits with separate audit book" },
  { name: "Cashier Accountability Report", law: "BIR POS Audit", note: "Shift-by-shift cash reconciliation & variance log" },
  { name: "Consolidated Master Sales Book", law: "BIR RR 11-2004", note: "Daily Z-reading, VAT breakdown & NGRT tracking" },
];

const HARDWARE_ITEMS = [
  {
    title: "Touch POS Terminals & PCs",
    desc: "Runs smoothly on all Windows 10/11 all-in-one touch terminals, counter laptops, and desktop computers.",
  },
  {
    title: "Receipt Thermal Printers",
    desc: "High-speed 80mm & 58mm thermal printers (Epson, Rongta, Xprinter) via USB, LAN, or Wi-Fi.",
  },
  {
    title: "Kitchen Dot-Matrix Impact Printers",
    desc: "Heat, grease, and moisture resistant impact printers (Epson TM-U220) for kitchen prep stations.",
  },
  {
    title: "Cash Drawers & Barcode Scanners",
    desc: "Standard RJ11 auto-kick cash drawers and fast 1D/2D QR handheld or omnidirectional barcode scanners.",
  },
];

const FAQS = [
  {
    q: "What happens if our branch loses internet or PLDT / Globe disconnects?",
    a: "NexGen is built 100% offline-first. Your cashiers continue punching orders, sending kitchen tickets, and printing receipts without any disruption. As soon as internet connectivity returns, sales summaries and backups sync seamlessly to your cloud portal.",
  },
  {
    q: "How does NexGen handle Senior Citizen and PWD discounts under BIR rules?",
    a: "NexGen calculates discounts using the official Philippine statutory formula: the item amount is first divided by 1.12 to strip the 12% VAT, and then a 20% discount is applied to the net amount. The customer name and ID number are logged automatically in the BIR Senior / PWD sales books.",
  },
  {
    q: "Do I need to buy expensive proprietary hardware?",
    a: "No. NexGen runs on standard Windows PCs, laptops, and touch screen POS terminals. You can reuse existing thermal receipt printers, cash drawers, and barcode scanners without buying locked hardware.",
  },
  {
    q: "Can NexGen generate daily sales files for shopping malls like SM or Robinsons?",
    a: "Yes. NexGen includes a built-in Mall Tenant Sales Generator supporting SM Tenant TXT, Robinsons RLC format, Ayala Malls CIRS, and Megaworld end-of-day sales submission requirements.",
  },
  {
    q: "How can business owners monitor multiple store locations?",
    a: "Owners receive access to the cloud fleet portal. From any phone, tablet, or browser, you can inspect live net sales, open table orders, and Z-reading counts across all your branches.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Sticky POS-Branded Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* ==============================================================
            HERO SECTION
            ============================================================== */}
        <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32 border-b border-border">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Hero Left: Value Proposition */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Official Compliance Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-sm font-semibold shadow-xs">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Philippine Offline-First Engine · BIR 2024 Ready</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-foreground leading-[1.15]">
                  The Ultra-Reliable POS for <span className="text-sky-600 dark:text-sky-400">Philippine Food</span> &amp;{" "}
                  <span className="text-amber-600 dark:text-amber-400">Retail</span>.
                </h1>

                {/* Clear, Non-wordy Subtitle */}
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Zero cashier downtime during internet drops. Automated BIR Senior &amp; PWD discounts, 1-click Mall Tenant RLC reports, and heat-proof kitchen impact printing.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <a href="#demo" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto h-13 px-8 text-base font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Book Free Live Demo
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </a>
                  <a href="#features" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto h-13 px-7 text-base font-semibold rounded-xl border-border bg-card hover:bg-accent text-foreground"
                    >
                      Explore Capabilities
                    </Button>
                  </a>
                </div>

                {/* Key Bullet Highlights */}
                <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left border-t border-border/80">
                  <div>
                    <div className="text-lg font-bold text-foreground font-display">100% Offline</div>
                    <div className="text-sm text-muted-foreground">Runs during PLDT/Globe drops</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground font-display">BIR Formula</div>
                    <div className="text-sm text-muted-foreground">RA 9994 / RA 10754 compliant</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="text-lg font-bold text-foreground font-display">Mall Tenant RLC</div>
                    <div className="text-sm text-muted-foreground">SM, Ayala, Robinsons TXT</div>
                  </div>
                </div>
              </div>

              {/* Hero Right: Live Interactive Terminal Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xl space-y-5 relative overflow-hidden">
                  {/* Decorative Header Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-xs font-mono font-medium text-muted-foreground ml-2">
                        terminal-01.savore.local
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                      ● SQLite WAL Active
                    </span>
                  </div>

                  {/* Terminal Stats Box */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border/70 bg-secondary/50 p-4">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                        Today&apos;s Net Sales
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold font-display text-sky-600 dark:text-sky-400 tabular-nums">
                        ₱48,920.00
                      </span>
                      <span className="text-xs text-muted-foreground block mt-1">
                        142 Settled Orders
                      </span>
                    </div>

                    <div className="rounded-xl border border-border/70 bg-secondary/50 p-4">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                        Non-Resettable (NGRT)
                      </span>
                      <span className="text-xl sm:text-2xl font-bold font-display text-amber-600 dark:text-amber-400 tabular-nums">
                        ₱17,413,278
                      </span>
                      <span className="text-xs text-muted-foreground block mt-1">
                        Z-Reading #179
                      </span>
                    </div>
                  </div>

                  {/* Operational Status Preview */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm p-3 rounded-lg border border-border bg-background">
                      <span className="font-medium text-foreground flex items-center gap-2">
                        <Printer className="h-4 w-4 text-sky-500" />
                        Kitchen Impact Printer (LAN)
                      </span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        ONLINE · 0.08s
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm p-3 rounded-lg border border-border bg-background">
                      <span className="font-medium text-foreground flex items-center gap-2">
                        <Receipt className="h-4 w-4 text-amber-500" />
                        Cashier Thermal 80mm (USB)
                      </span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        ONLINE · READY
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm p-3 rounded-lg border border-border bg-background">
                      <span className="font-medium text-foreground flex items-center gap-2">
                        <Building className="h-4 w-4 text-slate-400" />
                        Robinsons Mall RLC Export
                      </span>
                      <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
                        AUTO-GENERATED
                      </span>
                    </div>
                  </div>

                  {/* Footnote */}
                  <div className="pt-2 text-center text-xs text-muted-foreground">
                    100% resilient during brownouts &amp; broadband drops.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION 1: CORE PH PILLARS
            ============================================================== */}
        <section id="features" className="py-24 sm:py-32 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Engineered for Philippine Operations
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-foreground">
                Everything You Need to Run Seamlessly.
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Built from real kitchen rushes, Philippine mall requirements, and BIR audit standards.
              </p>
            </div>

            {/* Grid of 6 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PILLARS.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <Card
                    key={idx}
                    className="p-8 sm:p-9 rounded-2xl border border-border bg-card hover:border-sky-500/40 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                            p.color === "sky"
                              ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20"
                              : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                          }`}
                        >
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border">
                          {p.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground leading-snug">
                        {p.title}
                      </h3>

                      <p className="text-base text-muted-foreground leading-relaxed">
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
        <section className="py-24 sm:py-32 bg-secondary/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Philippine POS Benchmark
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-foreground">
                How NexGen Compares Against Alternatives.
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                See why Philippine merchants choose NexGen over legacy cash registers and cloud-only tablet systems.
              </p>
            </div>

            {/* Accessible Responsive Table Container */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-border bg-muted/60">
                      <th className="py-5 px-6 text-base font-bold text-foreground font-display w-2/5">
                        Operational Capability
                      </th>
                      <th className="py-5 px-6 text-base font-bold text-sky-600 dark:text-sky-400 font-display w-1/4 bg-sky-500/5 border-x border-border">
                        NexGen POS
                      </th>
                      <th className="py-5 px-6 text-base font-semibold text-muted-foreground font-display w-1/6">
                        Legacy Cash Registers
                      </th>
                      <th className="py-5 px-6 text-base font-semibold text-muted-foreground font-display w-1/6">
                        Cloud-Only Tablet POS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {COMPARISON.map((row, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="py-5 px-6 font-semibold text-base text-foreground">
                          {row.feature}
                        </td>
                        <td className="py-5 px-6 text-base font-bold text-sky-600 dark:text-sky-400 bg-sky-500/5 border-x border-border">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                            <span>{row.nexgen}</span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-base text-muted-foreground">
                          {row.legacy}
                        </td>
                        <td className="py-5 px-6 text-base text-muted-foreground">
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
        <section id="bir-malls" className="py-24 sm:py-32 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Statutory Formula Explanation */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Zero BIR Audit Headaches
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-foreground">
                  The Exact BIR 2024 Discount Formula, Automated.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Avoid heavy BIR non-compliance penalties. NexGen enforces the exact statutory calculation mandated by the Bureau of Internal Revenue:
                </p>

                {/* Mathematical Formula Card */}
                <div className="rounded-xl border border-border bg-secondary/50 p-6 space-y-3 font-mono">
                  <div className="text-xs uppercase text-muted-foreground font-semibold">
                    BIR Official Senior &amp; PWD Calculation
                  </div>
                  <div className="text-base sm:text-lg text-foreground font-bold">
                    Net Price = (Gross Item Price ÷ 1.12) × 0.80
                  </div>
                  <div className="text-xs text-muted-foreground">
                    12% VAT is automatically removed before applying the 20% discount. No manual math by cashiers.
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 shrink-0" />
                    <p className="text-base text-foreground font-medium">
                      Logs OSCA / PWD ID numbers directly onto receipts and audit books.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 shrink-0" />
                    <p className="text-base text-foreground font-medium">
                      Maintains non-resettable accumulated grand totals (NGRT) across all Z-readings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: 7 Official Sales Books */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl font-bold font-display text-foreground mb-4">
                  7 BIR-Mandated Sales Books Included:
                </h3>
                <div className="space-y-3">
                  {BIR_BOOKS.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-border bg-card flex items-center justify-between gap-4 shadow-xs"
                    >
                      <div>
                        <div className="font-bold text-base text-foreground">{b.name}</div>
                        <div className="text-sm text-muted-foreground">{b.note}</div>
                      </div>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-secondary text-foreground shrink-0 border border-border">
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
        <section id="hardware" className="py-24 sm:py-32 bg-secondary/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Hardware Agnostic &amp; Flexible
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-foreground">
                Plug &amp; Play With Your Existing Equipment.
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                No expensive proprietary lock-in. Use standard Windows hardware and standard industry peripherals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {HARDWARE_ITEMS.map((item, i) => (
                <Card key={i} className="p-7 rounded-2xl border border-border bg-card shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
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
        <section id="pricing" className="py-24 sm:py-32 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Transparent Philippine Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-foreground">
                Affordable Plans With No Hidden Fees.
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Transparent subscriptions in Philippine Pesos (PHP). All plans include our 100% offline engine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Plan 1: Retail / Starter */}
              <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 flex flex-col justify-between shadow-sm space-y-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-foreground">Starter Counter</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      For retail kiosks, boutiques, bakeries, and quick counters.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-display text-foreground">₱1,499</span>
                    <span className="text-muted-foreground text-sm font-medium">/ month</span>
                  </div>
                  <ul className="space-y-3.5 text-base text-foreground">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>100% Offline SQLite engine</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>7 BIR-compliant sales books</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>Thermal receipt printing (USB)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>Daily cloud database backup</span>
                    </li>
                  </ul>
                </div>
                <a href="#demo">
                  <Button variant="outline" className="w-full h-12 text-base font-semibold rounded-xl">
                    Get Started
                  </Button>
                </a>
              </div>

              {/* Plan 2: Pro Restaurant (Featured) */}
              <div className="rounded-2xl border-2 border-sky-500 bg-card p-8 sm:p-10 flex flex-col justify-between shadow-xl space-y-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                  Most Popular For Dining
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-foreground">Pro Restaurant</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      For cafes, dine-in restaurants, bars, and food park tenants.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-display text-sky-600 dark:text-sky-400">₱2,499</span>
                    <span className="text-muted-foreground text-sm font-medium">/ month</span>
                  </div>
                  <ul className="space-y-3.5 text-base text-foreground">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>Everything in Starter plan</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>Table layout &amp; bill split management</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>Kitchen dot-matrix impact routing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>Mall Tenant RLC (SM, Robinsons, Ayala)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>Raw ingredient recipe inventory</span>
                    </li>
                  </ul>
                </div>
                <a href="#demo">
                  <Button className="w-full h-12 text-base font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-xl shadow-md">
                    Book Free Demo
                  </Button>
                </a>
              </div>

              {/* Plan 3: Multi-Branch Fleet */}
              <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 flex flex-col justify-between shadow-sm space-y-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-foreground">Multi-Branch Fleet</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      For restaurant chains, franchise operators, and mall retail fleets.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-display text-foreground">Custom</span>
                    <span className="text-muted-foreground text-sm font-medium">volume pricing</span>
                  </div>
                  <ul className="space-y-3.5 text-base text-foreground">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>Multi-store Owner Cloud Portal</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>Centralized menu &amp; price sync</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>Consolidated executive reporting</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>Dedicated technical onboarding</span>
                    </li>
                  </ul>
                </div>
                <a href="#demo">
                  <Button variant="outline" className="w-full h-12 text-base font-semibold rounded-xl">
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
        <section id="faq" className="py-24 sm:py-32 bg-secondary/30 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <span className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-foreground">
                Frequently Asked Questions.
              </h2>
            </div>

            <div className="space-y-6">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-3 shadow-xs"
                >
                  <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-sky-500 shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed pl-8">
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
        <section id="demo" className="py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-4">
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Experience NexGen In Action
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-foreground">
                Schedule a Free Live Demo.
              </h2>
              <p className="text-lg text-muted-foreground">
                Our Philippine technical team will demonstrate live offline transactions, BIR reports, and mall file exports tailored to your store.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-lg">
              <DemoForm />
            </div>
          </div>
        </section>
      </main>

      {/* ==============================================================
          FOOTER
          ============================================================== */}
      <footer className="border-t border-slate-800 bg-[#0f172a] text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 flex items-center justify-center">
                  <Image src="/box_logo.png" alt="NexGen POS" width={40} height={40} />
                </div>
                <span className="font-display font-bold text-2xl text-white">
                  NexGen <span className="text-sky-400">POS</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                The offline-first Point of Sale system engineered specifically for Philippine restaurants, food stalls, cafes, and retail chains.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white text-base mb-3 font-display">Navigation</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#bir-malls" className="hover:text-white transition-colors">BIR &amp; Malls</a></li>
                <li><a href="#hardware" className="hover:text-white transition-colors">Hardware</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white text-base mb-3 font-display">Owner Access</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="/portal-login" className="text-sky-400 hover:text-sky-300 font-medium">
                    Owner Fleet Portal →
                  </Link>
                </li>
                <li><span className="text-xs text-slate-500">Live multi-branch sales monitoring</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 NexGen POS. All rights reserved.</p>
            <p>Designed strictly under Republic Acts 9994, 10754, and BIR Revenue Regulations.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
