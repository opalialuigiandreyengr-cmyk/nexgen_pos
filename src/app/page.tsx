import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building,
  Check,
  ChevronRight,
  Clock,
  CloudCheck,
  CloudUpload,
  Coffee,
  Cpu,
  Database,
  FileCheck,
  FileSpreadsheet,
  FileText,
  HardDrive,
  HelpCircle,
  Laptop,
  Layers,
  Lock,
  Percent,
  Printer,
  Receipt,
  RotateCcw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Store,
  Tablet,
  TrendingUp,
  UtensilsCrossed,
  WifiOff,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DemoForm } from "@/components/demo-form";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "BIR & Malls", href: "#bir-compliance" },
  { label: "Solutions", href: "#solutions" },
  { label: "Hardware", href: "#hardware" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const PHILIPPINE_ADVANTAGES = [
  {
    icon: WifiOff,
    title: "100% Offline Counter Reliability",
    tag: "SQLite WAL Engine",
    desc: "Philippine internet drops shouldn't freeze your cashier during lunch rush. NexGen processes orders, bills, and kitchen tickets locally with zero latency, syncing to the cloud automatically once connection resumes.",
  },
  {
    icon: FileCheck,
    title: "Automated BIR 2024 Tax Compliance",
    tag: "Zero Manual Bookkeeping",
    desc: "Built specifically around Philippine tax law. Automatically computes Senior Citizen & PWD 20% discounts with 12% VAT exemption, generates 7 mandatory sales books, and tracks non-resettable accumulated grand totals (NGRT).",
  },
  {
    icon: Building,
    title: "Mall Tenant RLC File Generator",
    tag: "SM · Ayala · Robinsons · Megaworld",
    desc: "Operating in a mall? Generate daily end-of-day sales TXT files compliant with SM Tenant, Robinsons RLC, Ayala, and Megaworld leasing requirements in one click.",
  },
  {
    icon: Printer,
    title: "Multi-Printer USB & LAN Routing",
    tag: "Kitchen · Bar · Cashier",
    desc: "Route sizzling hot dishes to kitchen impact/dot-matrix printers (resistant to heat and steam), drink tickets to the bar, and official customer receipts to the counter thermal printer simultaneously.",
  },
  {
    icon: Scale,
    title: "Raw Ingredient Food Costing",
    tag: "Inventory & Recipe Engine",
    desc: "Track raw food consumption to the gram. Every time a beef burger or milk tea is sold, buns, patties, pearls, and milk are automatically deducted from stock with low-stock warnings.",
  },
  {
    icon: CloudCheck,
    title: "Remote Monitoring for Owners",
    tag: "Supabase Cloud Fleet",
    desc: "Monitor live gross/net sales, open tables, and Z-reading counters from your phone at home. Automated daily encrypted database snapshots (.db.gz) keep your data safe with 15-day rolling cloud retention.",
  },
];

const BIR_SALES_BOOKS = [
  {
    name: "Senior Citizen Sales Book",
    law: "R.A. 9994",
    desc: "Formula: Deducts 12% VAT first, then applies 20% discount on qualified items. Captures OSCA ID & name.",
  },
  {
    name: "PWD Sales Book",
    law: "R.A. 10754",
    desc: "Automatic VAT exemption plus 20% discount. Records PWD ID number and full audit trail.",
  },
  {
    name: "Solo Parent Sales Book",
    law: "R.A. 11861",
    desc: "Automatic 10% discount on basic necessities and formula items with Solo Parent ID recording.",
  },
  {
    name: "Medal of Valor (MOV) Book",
    law: "R.A. 9049",
    desc: "Official 20% discount book for Medal of Valor awardees and qualified beneficiaries.",
  },
  {
    name: "National Athletes & Coaches",
    law: "R.A. 10699",
    desc: "Dedicated 20% discount tracking for certified athletes and coaches with PSC/ID documentation.",
  },
  {
    name: "Regular & Other (OTH) Books",
    law: "BIR Compliant",
    desc: "Promotional, VIP, employee, and store-level discount tracking formatted for BIR audit inspections.",
  },
];

const SOLUTIONS = [
  {
    icon: UtensilsCrossed,
    title: "Casual Dining & Restobars",
    desc: "Visual interactive floor plan, table transfers, split checks by item or seat, shift accountability, and bar/kitchen tickets.",
    bullets: ["Visual table map & floor plan editor", "Split billing (by item or equal shares)", "Void & refund supervisor approval logs"],
  },
  {
    icon: Coffee,
    title: "Cafes & Milk Tea Shops",
    desc: "High-speed ordering with drink modifiers, sugar levels, add-on sinkers, cup tags, and change fund drawer countdown.",
    bullets: ["Drink modifier tags (Less Ice, 50% Sugar, Extra Shot)", "Fast counter order takers for high foot traffic", "End-of-shift change fund cash reconciliation"],
  },
  {
    icon: Store,
    title: "Bakeries, Cloud Kitchens & Kiosks",
    desc: "Fast barcode scanning, delivery aggregator tracking (Grab/Foodpanda sales tags), and quick receipt printing.",
    bullets: ["Delivery partner sales separation", "Barcode scanner & dual-screen support", "Small-footprint setup on compact touch PCs"],
  },
  {
    icon: Building,
    title: "Multi-Branch Restaurant Groups",
    desc: "Manage multiple branches with isolated client IDs, centralized cloud telemetry, and offsite automated backups.",
    bullets: ["Fleet sales overview on mobile/laptop", "Isolated client encryption keys", "Standardized recipe costing across branches"],
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Offline counter reliability during ISP outages",
    nexgen: "Yes — 100% local SQLite WAL with instant printing",
    traditional: "Yes, but zero cloud sync or reports",
    cloudOnly: "No — counter freezes or becomes read-only",
  },
  {
    feature: "Automated Senior / PWD 20% + VAT Exemption formula",
    nexgen: "Yes — fully automatic according to BIR guidelines",
    traditional: "Manual calculator needed by cashier",
    cloudOnly: "Varies — often requires manual VAT tweaks",
  },
  {
    feature: "7 Mandatory BIR Official Sales Books",
    nexgen: "Yes — instant 1-click Excel & screen export",
    traditional: "Handwritten physical ledger book required",
    cloudOnly: "Limited — usually requires expensive enterprise tier",
  },
  {
    feature: "Mall Tenant Daily Sales File (SM, Ayala, Robinsons)",
    nexgen: "Yes — built-in RLC / EOD TXT generator",
    traditional: "Manual paper submission",
    cloudOnly: "Costly add-on module ($50–$100/mo extra)",
  },
  {
    feature: "Encrypted Cloud Backups with 15-day retention",
    nexgen: "Included via Supabase Storage (.db.gz)",
    traditional: "None — local SD card failure causes total loss",
    cloudOnly: "Yes, but locked behind ongoing expensive subs",
  },
  {
    feature: "Transaction fee or percentage cut on sales",
    nexgen: "0% — Flat monthly fee only",
    traditional: "0%, but expensive proprietary repairs",
    cloudOnly: "Often 1% to 2.5% platform take-rate",
  },
];

const HARDWARE_ITEMS = [
  {
    title: "Thermal Receipt Printers",
    types: "58mm & 80mm ESC/POS",
    desc: "USB, Ethernet LAN, and virtual Windows queue printers. Instant customer receipts with graphic logo printing.",
  },
  {
    title: "Kitchen Impact Printers",
    types: "Epson TM-U220 & Dot-Matrix",
    desc: "Heavy-duty impact ribbons that withstand heat, humidity, and grease in busy restaurant hot lines.",
  },
  {
    title: "Cash Drawers & Triggers",
    types: "Standard RJ11 (12V / 24V)",
    desc: "Automatic electronic kick pulse triggered upon cash settlement, with manual key override support.",
  },
  {
    title: "Barcodes & Dual Displays",
    types: "1D/2D Scanners & Customer Screens",
    desc: "Fast barcode product lookup for retail and dual-screen customer order verification displays.",
  },
];

const PRICING_TIERS = [
  {
    name: "Starter Counter",
    tagline: "Best for Cafes, Kiosks & Quick Counter",
    price: "₱1,499",
    period: "/month per branch",
    desc: "High-speed offline order taking with complete BIR compliance and cloud backups.",
    popular: false,
    features: [
      "1 POS Counter Terminal",
      "Offline-First SQLite WAL Speed",
      "BIR Z-Reading & 7 Tax Sales Books",
      "Senior Citizen & PWD Auto-Computation",
      "Automated Supabase Cloud Backups",
      "Thermal Receipt & Cash Drawer Trigger",
      "Daily Cash & Change Fund Reconciliation",
      "Remote Admin Sales Monitoring",
    ],
  },
  {
    name: "Pro Restaurant",
    tagline: "Full-Service Dining, Bars & Kitchens",
    price: "₱2,499",
    period: "/month per branch",
    desc: "For sit-down dining requiring floor plans, split checks, multi-printer routing, and raw food costing.",
    popular: true,
    features: [
      "Everything in Starter Counter",
      "Unlimited Crew & Cashier Terminals on LAN",
      "Interactive Floor Plan & Table Management",
      "Split Bill by Item, Seat, or Equal Shares",
      "Multi-Printer Kitchen & Bar Routing",
      "Recipe-Level Raw Ingredient Inventory",
      "Mall Tenant Daily RLC Export (SM, Ayala, RLC)",
      "Automated 15-Day Database Pruning",
      "Dedicated Onboarding & Menu Setup",
    ],
  },
  {
    name: "Multi-Branch & Franchise",
    tagline: "3+ Branches & Growing Food Chains",
    price: "Custom",
    period: "tailored pricing",
    desc: "Centralized fleet oversight, custom accounting integrations, and priority SLA support.",
    popular: false,
    features: [
      "Everything in Pro Restaurant",
      "Centralized Multi-Store Mobile Dashboard",
      "Isolated Branch Encryption Keys",
      "Commissary & Inter-Branch Stock Transfers",
      "Priority WhatsApp / Viber On-Call Support",
      "Custom BIR & ERP Accounting Integrations",
      "Hardware Package Financing Assistance",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "What happens when our store internet connection drops?",
    a: "NexGen POS was engineered specifically for Philippine internet conditions. It runs 100% locally on your store PC using a SQLite WAL database. You can take orders, settle bills, print receipts, and send kitchen tickets with zero lag while offline. Once your internet reconnects, the system automatically syncs sales summaries and backups to Supabase without any manual intervention.",
  },
  {
    q: "How does NexGen handle BIR Senior Citizen and PWD discounts?",
    a: "In the Philippines, Republic Acts 9994 and 10754 mandate that a 12% VAT exemption must be removed first before applying the 20% discount on qualified items. NexGen calculates this automatically, recording the Senior/PWD ID, Name, Gross Sales, VAT-Exempt Sales, 12% VAT amount saved, and Net Sales directly into BIR-formatted Excel and screen reports.",
  },
  {
    q: "Can we use our existing Windows PC and receipt printers?",
    a: "Yes. NexGen POS runs on any standard Windows 10 or 11 touch terminal, desktop PC, or laptop. It supports standard thermal printers (Epson, Xprinter, Rongta, Sunmi) and dot-matrix impact kitchen printers (Epson TM-U220) via USB or Ethernet LAN.",
  },
  {
    q: "How can the business owner monitor sales when away from the restaurant?",
    a: "NexGen includes a built-in 'Admin (Remote)' role. Using our automated Supabase cloud telemetry or a secure direct connection (such as Tailscale), you can review live gross sales, open vs settled tables, today's top items, and Z-readings from your phone or laptop anywhere in the world—with live cashiering actions locked out so store operations aren't accidentally disturbed.",
  },
  {
    q: "Can NexGen generate files for SM Supermalls, Ayala Malls, or Robinsons?",
    a: "Yes! Major Philippine malls require tenants to submit daily automated sales TXT files (RLC / daily tenant sales data). NexGen includes a built-in mall export engine that formats your daily gross, net, VAT, and transaction counts exactly according to mall leasing guidelines.",
  },
  {
    q: "Is there any setup fee or contract lock-in?",
    a: "No long-term lock-in. Our software subscriptions are billed on a straightforward monthly basis in Philippine Pesos (PHP). We also offer free live walkthroughs and sample menu onboarding so you can test the system with your actual food items before going live.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      {/* Top Notification / Trust Bar */}
      <div className="border-b border-border/80 bg-primary/10 text-primary px-4 py-1.5 text-xs font-medium text-center flex items-center justify-center gap-2">
        <Sparkles className="h-3.5 w-3.5 shrink-0" />
        <span>Philippine BIR 2024 &amp; Mall Tenant RLC Compliant · 100% Offline-First Speed</span>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight group">
            <div className="relative h-9 w-9 rounded-lg overflow-hidden border border-primary/40 bg-card shadow-xs group-hover:border-primary transition-colors">
              <Image
                src="/box_logo.png"
                alt="NexGen POS Logo"
                fill
                sizes="36px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold tracking-tight text-foreground">NexGen POS</span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Philippines
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase font-medium tracking-wider text-muted-foreground">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Controls & CTAs */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Link
              href="/portal-login"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground px-2.5 py-1.5 rounded-md hover:bg-secondary transition-colors"
            >
              <Lock className="h-3.5 w-3.5" />
              <span>Operator Portal</span>
            </Link>
            <a href="#demo">
              <Button size="sm" className="font-display font-semibold brand-gradient text-white shadow-xs">
                Book Free Demo <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border/80 pt-16 pb-20 lg:pt-24 lg:pb-28">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
                <BadgeCheck className="h-3.5 w-3.5" />
                <span>The Heavy-Duty Restaurant &amp; Retail POS for PH</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.08] text-foreground">
                Run your store <span className="brand-gradient-text">offline.</span>
                <br />
                Monitor every branch <span className="brand-gradient-text">in the cloud.</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Never let PLDT, Globe, or power hiccups freeze your counter. NexGen POS delivers
                sub-second local counter speed, automated BIR 2024 tax books, kitchen impact printer
                routing, and multi-branch cloud telemetry powered by Supabase.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="#demo">
                  <Button size="lg" className="brand-gradient text-white font-display font-bold shadow-md">
                    Book 15-Minute Live Demo <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#pricing">
                  <Button size="lg" variant="outline" className="font-display font-semibold">
                    Explore Plans (PHP)
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-border/70 text-xs">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <WifiOff className="h-4 w-4 text-primary shrink-0" />
                  <span>100% Offline Ready</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <FileText className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>7 BIR Sales Books</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Building className="h-4 w-4 text-sky-500 shrink-0" />
                  <span>Mall RLC Export</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <CloudUpload className="h-4 w-4 text-indigo-500 shrink-0" />
                  <span>Daily Cloud Backup</span>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive POS Telemetry Mockup */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-primary/30 bg-card p-2 shadow-2xl brand-glow">
                {/* Header of Simulated POS Window */}
                <div className="rounded-xl border border-border bg-card p-4 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <div className="flex items-center gap-2">
                      <div className="relative h-6 w-6 rounded-md overflow-hidden border border-primary/40 bg-secondary">
                        <Image src="/box_logo.png" alt="NexGen" fill sizes="24px" className="object-contain p-0.5" />
                      </div>
                      <span className="font-display font-bold text-sm text-foreground">NexGen POS Live Telemetry</span>
                    </div>
                    <Badge variant="default" className="text-[11px] font-mono">
                      ● ONLINE · SYNCED
                    </Badge>
                  </div>

                  {/* Real Philippine Sales Numbers */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="rounded-lg border border-border bg-background p-3">
                      <div className="text-[10px] text-muted-foreground uppercase font-sans">Today Net Sales</div>
                      <div className="text-xl font-bold text-foreground tabular-nums mt-1 font-display">
                        ₱68,450.25
                      </div>
                      <div className="text-[10px] text-emerald-500 mt-0.5">+18% vs last week</div>
                    </div>
                    <div className="rounded-lg border border-border bg-background p-3">
                      <div className="text-[10px] text-muted-foreground uppercase font-sans">Active Dine-In</div>
                      <div className="text-xl font-bold text-foreground tabular-nums mt-1 font-display">
                        14 Tables
                      </div>
                      <div className="text-[10px] text-sky-500 mt-0.5">8 Pending Kitchen Tickets</div>
                    </div>
                  </div>

                  {/* BIR Snapshot Breakdown */}
                  <div className="rounded-lg border border-border bg-background divide-y divide-border text-[11px]">
                    <div className="p-2.5 flex items-center justify-between">
                      <span className="text-muted-foreground">VAT-Exempt Sales (Senior/PWD)</span>
                      <span className="font-semibold tabular-nums">₱12,840.00</span>
                    </div>
                    <div className="p-2.5 flex items-center justify-between">
                      <span className="text-muted-foreground">12% VAT Collected</span>
                      <span className="font-semibold tabular-nums">₱5,958.24</span>
                    </div>
                    <div className="p-2.5 flex items-center justify-between">
                      <span className="text-muted-foreground">Cumulative BIR NGRT (Reset: 0)</span>
                      <span className="font-semibold tabular-nums text-foreground">₱17,481,728.75</span>
                    </div>
                    <div className="p-2.5 flex items-center justify-between">
                      <span className="text-muted-foreground">Last Supabase Snapshot</span>
                      <span className="text-emerald-500 font-semibold">Savore_pos_latest.db.gz</span>
                    </div>
                  </div>

                  <div className="rounded-md border border-primary/20 bg-primary/5 p-2.5 flex items-center justify-between text-[11px]">
                    <span className="text-primary font-medium flex items-center gap-1.5 font-sans">
                      <ShieldCheck className="h-4 w-4" /> 15-Day Rolling Cloud Retention
                    </span>
                    <span className="text-muted-foreground">Auto-prune ON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Philippine Advantages */}
        <section id="features" className="border-b border-border/80 py-20 bg-card/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
            <div className="max-w-2xl space-y-3">
              <Badge variant="default" className="font-mono text-xs">
                Operational Excellence
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Built specifically for real Philippine restaurant challenges
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Most cloud POS systems are engineered in Silicon Valley or Singapore, assuming
                uninterruptible gigabit fiber. NexGen was engineered from day one for Philippine
                local realities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PHILIPPINE_ADVANTAGES.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="bg-card hover:border-primary/50 transition-colors shadow-xs">
                    <CardHeader className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <Badge variant="secondary" className="font-mono text-[10px]">
                          {item.tag}
                        </Badge>
                      </div>
                      <CardTitle className="text-base font-display font-bold pt-1">{item.title}</CardTitle>
                      <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                        {item.desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Deep-Dive BIR & Tax Compliance Center */}
        <section id="bir-compliance" className="border-b border-border/80 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <Badge variant="default" className="font-mono text-xs">
                  BIR RR 16-2018 &amp; R.A. Compliance
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                  Protect your restaurant from BIR audit penalties
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Philippine store owners face heavy fines for manual calculation errors on Senior
                  Citizen discounts or incomplete sales book ledgers. NexGen POS automates the exact
                  BIR legal formulas so your cashiers never make a math mistake.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="rounded-lg border border-border bg-card p-3.5 space-y-1 text-xs">
                    <div className="font-display font-bold text-foreground">
                      The Exact Senior/PWD Formula (RA 9994 &amp; RA 10754):
                    </div>
                    <code className="block rounded bg-secondary p-2 text-primary font-mono text-[11px]">
                      Net of VAT = Gross Amount ÷ 1.12<br />
                      Discounted Price = Net of VAT × 0.80 (20% off)<br />
                      VAT Payable = ₱0.00 (100% VAT Exempt)
                    </code>
                    <p className="text-[11px] text-muted-foreground pt-1">
                      Computed automatically per eligible item with full ID validation audit logging.
                    </p>
                  </div>
                </div>
              </div>

              {/* BIR Sales Book Matrix */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BIR_SALES_BOOKS.map((b) => (
                  <div
                    key={b.name}
                    className="rounded-xl border border-border bg-card p-4 space-y-1.5 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs text-foreground">{b.name}</span>
                      <span className="text-[10px] font-mono text-primary font-semibold">{b.law}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Industry Solutions */}
        <section id="solutions" className="border-b border-border/80 py-20 bg-card/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="default" className="font-mono text-xs">
                Tailored Solutions
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Designed for every food &amp; retail format
              </h2>
              <p className="text-sm text-muted-foreground">
                Whether you run an upscale restobar in BGC, a busy milk tea kiosk in Cebu, or a
                chain of bakeries, NexGen adapts to your specific floor and counter workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {SOLUTIONS.map((s) => {
                const Icon = s.icon;
                return (
                  <Card key={s.title} className="bg-card flex flex-col justify-between">
                    <CardHeader className="space-y-3">
                      <div className="h-10 w-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-base font-display font-bold">{s.title}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                        {s.desc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2 border-t border-border/80 pt-3 text-xs text-muted-foreground">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-1.5">
                            <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: Hardware & Supported Peripherals */}
        <section id="hardware" className="border-b border-border/80 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <Badge variant="default" className="font-mono text-xs">
                  Hardware Flexibility
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                  Bring your own hardware. No proprietary lock-in.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Avoid paying ₱80,000+ for proprietary locked POS machines. NexGen runs smoothly on
                  any Windows 10/11 touch terminal, desktop, or laptop, seamlessly connecting to
                  industry-standard printers, cash drawers, and barcode readers.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Windows 10 / 11</Badge>
                  <Badge variant="secondary">USB &amp; Ethernet LAN</Badge>
                  <Badge variant="secondary">RJ11 12V/24V</Badge>
                  <Badge variant="secondary">Epson ESC/POS</Badge>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {HARDWARE_ITEMS.map((h) => (
                  <Card key={h.title} className="bg-card">
                    <CardHeader className="space-y-1.5 p-5">
                      <div className="text-xs font-mono text-primary font-semibold">{h.types}</div>
                      <CardTitle className="text-sm font-display font-bold">{h.title}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                        {h.desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Benchmarking Comparison Table */}
        <section className="border-b border-border/80 py-20 bg-card/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-10">
            <div className="max-w-2xl space-y-3">
              <Badge variant="default" className="font-mono text-xs">
                How We Compare
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                NexGen POS vs Legacy Registers vs Cloud-Only Tablets
              </h2>
              <p className="text-sm text-muted-foreground">
                See why Philippine restaurateurs choose an offline-first architecture with cloud
                telemetry.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-xs">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-border bg-secondary/50 font-display text-muted-foreground uppercase text-[11px] tracking-wider">
                    <th className="py-3 px-4 font-semibold">Capability</th>
                    <th className="py-3 px-4 font-bold text-primary">NexGen POS</th>
                    <th className="py-3 px-4 font-medium">Legacy Cash Register</th>
                    <th className="py-3 px-4 font-medium">Pure Cloud Tablet POS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="hover:bg-accent/30 transition-colors">
                      <td className="py-3 px-4 font-medium text-foreground">{row.feature}</td>
                      <td className="py-3 px-4 font-semibold text-primary">{row.nexgen}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.traditional}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.cloudOnly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 7: Pricing Section in PHP */}
        <section id="pricing" className="border-b border-border/80 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="default" className="font-mono text-xs">
                Transparent Philippine Pricing
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Simple monthly plans. Zero transaction take-rate.
              </h2>
              <p className="text-sm text-muted-foreground">
                We believe your revenue is yours. We never take 1% or 2% cuts of your hard-earned
                daily sales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {PRICING_TIERS.map((tier) => (
                <Card
                  key={tier.name}
                  className={`flex flex-col justify-between ${
                    tier.popular
                      ? "border-primary shadow-xl brand-glow relative bg-card"
                      : "bg-card border-border"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[11px] font-display font-bold text-primary-foreground uppercase tracking-wider">
                      Most Popular for Restaurants
                    </div>
                  )}

                  <CardHeader className="space-y-3 pt-6">
                    <div>
                      <CardTitle className="text-lg font-display font-bold">{tier.name}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground mt-1">
                        {tier.tagline}
                      </CardDescription>
                    </div>

                    <div className="pt-2">
                      <span className="text-4xl font-display font-bold text-foreground tabular-nums">
                        {tier.price}
                      </span>
                      <span className="text-xs text-muted-foreground ml-1.5">{tier.period}</span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed pt-1">{tier.desc}</p>
                  </CardHeader>

                  <CardContent className="space-y-5 pt-0">
                    <ul className="space-y-2.5 border-t border-border pt-4 text-xs text-muted-foreground">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="#demo" className="block pt-2">
                      <Button
                        size="sm"
                        variant={tier.popular ? "default" : "outline"}
                        className={`w-full font-display font-bold ${
                          tier.popular ? "brand-gradient text-white" : ""
                        }`}
                      >
                        Request Demo for {tier.name}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Frequently Asked Questions */}
        <section id="faq" className="border-b border-border/80 py-20 bg-card/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-10">
            <div className="text-center space-y-3">
              <Badge variant="default" className="font-mono text-xs">
                Common Inquiries
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-muted-foreground">
                Everything you need to know about setting up NexGen POS in the Philippines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FAQ_ITEMS.map((item) => (
                <div key={item.q} className="rounded-xl border border-border bg-card p-5 space-y-2">
                  <h3 className="font-display font-bold text-sm text-foreground flex items-start gap-2">
                    <HelpCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item.q}</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-6">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Free Demo Lead Booking Form */}
        <section id="demo" className="py-20 bg-gradient-to-b from-background to-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
                <Clock className="h-3.5 w-3.5" />
                <span>20-Minute Live Walkthrough</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Ready to elevate your store operations?
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Book a personalized live demonstration with one of our Philippine POS specialists.
                We will walk through your exact menu, kitchen printer routing, and BIR sales book
                requirements.
              </p>

              <div className="rounded-xl border border-border bg-card p-4 space-y-3 text-xs text-muted-foreground">
                <div className="font-display font-bold text-foreground text-sm">
                  What we cover during the demo:
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Interactive table map layout and bill-splitting demo.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Live test of Senior/PWD auto-exempt discounting &amp; sales books.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>How absentee owners monitor sales and backups remotely on mobile.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="border-primary/30 shadow-xl brand-glow">
                <CardHeader>
                  <CardTitle className="text-base font-display font-bold">Schedule Your Free Demo</CardTitle>
                  <CardDescription className="text-xs">
                    Fill in your details below and we will contact you within 24 hours.
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

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 text-xs text-muted-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-display font-bold text-sm text-foreground">
              <div className="relative h-6 w-6 rounded overflow-hidden border border-primary/40 bg-card">
                <Image src="/box_logo.png" alt="NexGen POS" fill sizes="24px" className="object-contain p-0.5" />
              </div>
              <span>NexGen POS Philippines</span>
            </div>
            <p className="text-xs leading-relaxed">
              Heavy-duty offline-first Point of Sale system with automated BIR compliance, kitchen
              printer routing, and multi-branch cloud telemetry.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-display font-bold text-foreground uppercase tracking-wider text-[11px]">
              Features
            </div>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#features" className="hover:text-foreground">Offline SQLite Speed</a></li>
              <li><a href="#bir-compliance" className="hover:text-foreground">7 BIR Sales Books</a></li>
              <li><a href="#bir-compliance" className="hover:text-foreground">Mall RLC File Generator</a></li>
              <li><a href="#hardware" className="hover:text-foreground">Kitchen Impact Routing</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-display font-bold text-foreground uppercase tracking-wider text-[11px]">
              Solutions
            </div>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#solutions" className="hover:text-foreground">Casual Dining &amp; Bars</a></li>
              <li><a href="#solutions" className="hover:text-foreground">Cafes &amp; Milk Tea</a></li>
              <li><a href="#solutions" className="hover:text-foreground">Bakeries &amp; Kiosks</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Transparent Pricing</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-display font-bold text-foreground uppercase tracking-wider text-[11px]">
              SuperAdmin Portal
            </div>
            <p className="text-xs">
              Registered restaurant operators and franchise managers:
            </p>
            <Link
              href="/portal-login"
              className="inline-flex items-center gap-1.5 text-primary hover:underline font-semibold"
            >
              <Lock className="h-3.5 w-3.5" /> Operator Portal Sign In
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 mt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-[11px]">
          <span>© 2026 NexGen POS. All rights reserved. Built for Philippine F&amp;B and Retail.</span>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <a href="#demo" className="hover:text-foreground">Demo Request</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
