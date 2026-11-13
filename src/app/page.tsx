import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building,
  CheckCircle2,
  CloudCheck,
  FileCheck,
  HelpCircle,
  Laptop,
  Printer,
  Scale,
  ShieldCheck,
  WifiOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DemoForm } from "@/components/demo-form";
import { PricingSection } from "@/components/pricing-section";
import { SiteHeader } from "@/components/site-header";

const PILLARS = [
  {
    icon: WifiOff,
    title: "100% Offline-First Speed",
    badge: "SQLite WAL Engine",
    desc: "Broadband drops never freeze your counter during peak hours. NexGen punches orders, prints receipts, and updates tables locally in 0.1s, auto-syncing when internet restores.",
  },
  {
    icon: FileCheck,
    title: "Automated BIR 2024 Compliance",
    badge: "Senior & PWD Formula",
    desc: "Strictly compliant with BIR rules. Auto-computes 12% VAT exemption followed by 20% discount (R.A. 9994/10754), tracks NGRT grand totals, and generates 7 official audit books.",
  },
  {
    icon: Building,
    title: "Mall Tenant RLC Generator",
    badge: "SM · Ayala · Robinsons · Megaworld",
    desc: "Operating in a major shopping mall? Generate compliant daily end-of-day sales TXT files for SM Tenant, Robinsons RLC, Ayala CIRS, and Megaworld in one click.",
  },
  {
    icon: Printer,
    title: "Kitchen Impact & Thermal Routing",
    badge: "Cashier · Bar · Hot Kitchen",
    desc: "Route sizzling hot tickets to heat-resistant dot-matrix impact printers (Epson TM-U220) so orders never fade under steam, while issuing thermal receipts at the front counter.",
  },
  {
    icon: Scale,
    title: "Raw Ingredient Food Costing",
    badge: "Gram & Portion Tracking",
    desc: "Track ingredient depletion to the exact gram. As dishes sell, buns, meat, cheese, and syrups deduct automatically from inventory with timely low-stock reorder alerts.",
  },
  {
    icon: CloudCheck,
    title: "Multi-Store Owner Cloud Portal",
    badge: "Supabase Telemetry",
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
            HERO SECTION — full-bleed background image with built-in fade
            ============================================================== */}
        <section className="relative overflow-hidden border-b border-border bg-background flex flex-col lg:block lg:min-h-[520px]">
          {/* Background photo: anchored to the right, fade covers left data while preserving hardware */}
          <div className="relative order-2 lg:order-none h-60 sm:h-80 lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-[75%] pointer-events-none select-none">
            <Image
              src="/images/hero.png"
              alt="NexGen POS touch terminal showing table management beside a receipt printer on a cafe counter"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-cover object-right dark:brightness-90"
            />
            {/* Desktop: fade image into page background just enough to cover left data (stops at 40% before printer) */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-background from-0% via-background/90 via-22% to-transparent to-40%" />
            {/* Mobile: fade image into the text block above it */}
            <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 order-1 lg:order-none max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-6 sm:pt-8 lg:py-12 lg:min-h-[520px] flex items-center">
            <div className="w-full lg:max-w-[34rem] space-y-4 text-center lg:text-left">
              {/* Badge with PH flag — dark amber in light mode for clear contrast */}
              <div className="inline-flex items-center gap-2.5 pl-2 pr-4 py-1 rounded-full border border-amber-500/35 bg-amber-500/15 text-amber-950 dark:text-amber-200 text-xs sm:text-sm font-bold shadow-xs">
                <Image
                  src="/images/flag.png"
                  alt="Philippine flag"
                  width={22}
                  height={22}
                  className="h-5.5 w-5.5 rounded-full object-cover shadow-xs"
                />
                <span>Modern POS for Philippine Businesses</span>
              </div>

              {/* Headline — navbar navy in light mode matching header */}
              <h1 className="font-extrabold font-display tracking-tight leading-[1.12] text-3xl sm:text-5xl lg:text-[3rem] text-[#0f172a] dark:text-white">
                <span className="block text-[#0f172a] dark:text-white">A Smarter,</span>
                <span className="block text-[#0f172a] dark:text-sky-400">BIR-Ready POS</span>
                <span className="relative inline-block text-[#0f172a] dark:text-white">
                  for Growing Businesses
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-amber-500"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M1,8 Q50,0 99,8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed max-w-md mx-auto lg:mx-0">
                Run your sales, tables, orders, and reports with confidence. Built for Philippine businesses — with BIR discount support, mall reporting, and offline reliability.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-0.5">
                <a href="#demo" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-11 px-7 text-sm sm:text-base font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-lg shadow-md"
                  >
                    Request a Demo
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
                <a href="#pricing" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto h-11 px-7 text-sm sm:text-base font-semibold rounded-lg border-border bg-background/80 backdrop-blur-sm hover:bg-accent text-foreground"
                  >
                    View Pricing
                  </Button>
                </a>
              </div>

              {/* Proof points — subtitle is black in light mode */}
              <ul className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-0 sm:divide-x sm:divide-border pt-1.5 text-left w-full">
                {[
                  { icon: ShieldCheck, title: "BIR Discount Ready", sub: "RA 9994 / RA 10754" },
                  { icon: WifiOff, title: "Works Offline", sub: "No Internet? No Problem" },
                  { icon: BarChart3, title: "Mall Reporting", sub: "Concessionaire Ready" },
                ].map(({ icon: Icon, title, sub }) => (
                  <li key={title} className="flex items-center gap-2.5 sm:flex-1 min-w-0 sm:px-3 first:sm:pl-0 last:sm:pr-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-600/70 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white shadow-sm">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-xs sm:text-sm font-bold text-foreground">{title}</span>
                      <span className="block text-[11px] text-zinc-950 dark:text-zinc-300 font-semibold">{sub}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION 1: CORE PH PILLARS
            ============================================================== */}
        <section id="features" className="scroll-mt-20 py-16 sm:py-20 border-b border-border">
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
                    className="p-6 sm:p-7 rounded-xl border border-border bg-card hover:border-slate-400/40 dark:hover:border-slate-700 transition-all shadow-xs hover:shadow-sm flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-lg bg-secondary/80 border border-border text-foreground flex items-center justify-center">
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
        <section id="bir-malls" className="scroll-mt-20 py-16 sm:py-20 border-b border-border">
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

            {/* Visual BIR 80mm Official Receipt Mockup */}
            <div className="pt-8 border-t border-border/80">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="rounded-xl border border-dashed border-border bg-card p-5 font-mono text-xs space-y-2 shadow-sm max-w-sm mx-auto lg:mx-0">
                    <div className="text-center pb-2.5 border-b border-dashed border-border space-y-0.5">
                      <div className="font-bold text-foreground text-sm">SAVORE BISTRO &amp; CAFE</div>
                      <div className="text-[10px] text-muted-foreground">TIN: 432-891-002-000 · MIN: 240819283</div>
                      <div className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">OFFICIAL BIR CASH INVOICE</div>
                    </div>
                    <div className="py-2 border-b border-dashed border-border space-y-1 text-foreground">
                      <div className="flex justify-between">
                        <span>1x Angus Beef Burger</span>
                        <span className="tabular-nums font-semibold">₱280.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1x Brewed Iced Tea</span>
                        <span className="tabular-nums font-semibold">₱95.00</span>
                      </div>
                    </div>
                    <div className="py-1 space-y-1 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Gross Sales:</span>
                        <span className="tabular-nums">₱375.00</span>
                      </div>
                      <div className="flex justify-between text-amber-600 dark:text-amber-400">
                        <span>Less 12% VAT Exemption:</span>
                        <span className="tabular-nums font-medium">-₱40.18</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Net VAT-Exempt Amount:</span>
                        <span className="tabular-nums">₱334.82</span>
                      </div>
                      <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                        <span>Less 20% SC/PWD Discount:</span>
                        <span className="tabular-nums font-medium">-₱66.96</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-dashed border-border flex justify-between font-bold text-foreground text-sm">
                      <span>TOTAL AMOUNT DUE:</span>
                      <span className="text-sky-600 dark:text-sky-400 tabular-nums text-base">₱267.86</span>
                    </div>
                    <div className="pt-2 text-[10px] text-muted-foreground space-y-0.5 border-t border-dashed border-border">
                      <div>OSCA/PWD ID: 2026-TAC-8912 (J. DELA CRUZ)</div>
                      <div className="text-[9px] text-slate-500 font-mono">NGRT: ₱17,413,278.50 · Z-READING #179</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    Audit-Proof Receipt Output
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground">
                    Zero Math Errors for Your Cashiers.
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Under BIR Revenue Regulations, applying the 20% discount directly on a VAT-inclusive amount is a punishable violation that leads to audit penalties. NexGen automates the exact statutory reduction: stripping the 12% VAT first, then applying the 20% statutory discount.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Both physical customer receipts and electronic journals (eJournal) preserve the Non-Resettable Grand Total (NGRT) and sequential Z-reading counter automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION 4: HARDWARE COMPATIBILITY
            ============================================================== */}
        <section id="hardware" className="scroll-mt-20 py-16 sm:py-20 bg-secondary/30 border-b border-border">
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
                  <div className="w-10 h-10 rounded-lg bg-secondary/80 border border-border text-foreground flex items-center justify-center">
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

            {/* Hardware Showcase Banner with Real Photo */}
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
              <div className="relative h-60 md:h-full md:col-span-5 min-h-[240px]">
                <Image
                  src="/images/hardware-counter.jpg"
                  alt="Point of sale hardware setup with receipt printer and touch screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6 sm:p-8 md:col-span-7 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  No Proprietary Lock-In
                </span>
                <h3 className="text-xl font-bold font-display text-foreground">
                  Works With the Equipment You Already Own.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Unlike cloud tablet POS systems that force you to buy expensive proprietary docks, NexGen works seamlessly on standard Windows laptops, all-in-one touch terminals, USB thermal printers, and electronic RJ11 cash drawers.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-xs text-foreground font-medium">
                  <span className="px-2.5 py-1 rounded bg-secondary border border-border">Epson TM-T82 / TM-T20</span>
                  <span className="px-2.5 py-1 rounded bg-secondary border border-border">Xprinter / Rongta 80mm</span>
                  <span className="px-2.5 py-1 rounded bg-secondary border border-border">Epson TM-U220 Dot Matrix</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            MULTI-STORE OWNER TELEMETRY SHOWCASE
            ============================================================== */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="p-8 sm:p-10 lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold">
                  <Building className="h-3.5 w-3.5" />
                  <span>Centralized Multi-Location Control</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-foreground">
                  Check Your Store Sales From Your Phone.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Whether you manage one flagship branch or ten mall kiosks, NexGen automatically pushes compact daily sales summaries and encrypted database archives to your private Supabase cloud portal.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg border border-border bg-secondary/50">
                    <div className="font-bold text-sm text-foreground">Live Shift Totals</div>
                    <div className="text-xs text-muted-foreground">Settled cash, card &amp; e-wallets</div>
                  </div>
                  <div className="p-3 rounded-lg border border-border bg-secondary/50">
                    <div className="font-bold text-sm text-foreground">15-Day Cloud Roll</div>
                    <div className="text-xs text-muted-foreground">Automated database backups</div>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="/portal-login">
                    <Button className="h-10 text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-lg shadow-sm">
                      Explore Owner Fleet Portal
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative h-72 sm:h-96 lg:h-full lg:min-h-[380px] lg:col-span-5 bg-slate-900 overflow-hidden">
                <Image
                  src="/images/owner-mobile-app.jpg"
                  alt="Multi-Store Owner Monitoring Sales on Mobile"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-white">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-300">Fleet Combined Net Sales</span>
                    <span className="text-emerald-400 font-bold">● Live Sync</span>
                  </div>
                  <div className="text-xl font-bold font-display text-sky-400 tabular-nums">₱174,850.00</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">3 Branches Active · 100% Data Protection</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION 5: PHILIPPINE PESO PRICING (WITH ANNUAL TOGGLE)
            ============================================================== */}
        <PricingSection />

        {/* ==============================================================
            SECTION 6: FAQ
            ============================================================== */}
        <section id="faq" className="scroll-mt-20 py-16 sm:py-20 bg-secondary/30 border-b border-border">
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
        <section id="demo" className="scroll-mt-20 py-16 sm:py-20">
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
              <h4 className="font-semibold text-white text-sm mb-2.5 font-display">Owner &amp; Legal</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link href="/portal-login" className="text-sky-400 hover:text-sky-300 font-medium">
                    Owner Fleet Portal →
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li><span className="text-xs text-slate-500">R.A. 9994 / 10754 Compliant</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© 2026 NexGen POS. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors underline">
                Terms &amp; Conditions
              </Link>
              <span>·</span>
              <p>Designed strictly under Republic Acts 9994, 10754, and BIR Revenue Regulations.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
