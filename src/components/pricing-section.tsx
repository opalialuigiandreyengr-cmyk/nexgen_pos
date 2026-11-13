"use client";

import * as React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = React.useState(false);

  return (
    <section id="pricing" className="scroll-mt-20 py-16 sm:py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
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

          {/* Billing Frequency Switch (Monthly vs Annual) */}
          <div className="pt-3 flex items-center justify-center">
            <div className="inline-flex items-center rounded-full border border-border bg-secondary/80 p-1 shadow-xs">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  !isAnnual
                    ? "bg-background text-foreground shadow-xs border border-border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  isAnnual
                    ? "bg-background text-foreground shadow-xs border border-border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>Annual Billing</span>
                <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 text-[10px] font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
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

              <div className="space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold font-display text-foreground tabular-nums">
                    {isAnnual ? "₱1,199" : "₱1,499"}
                  </span>
                  <span className="text-muted-foreground text-xs font-medium">/ month</span>
                </div>
                {isAnnual ? (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    Billed annually at ₱14,388/yr (Save ₱3,600/year)
                  </p>
                ) : (
                  <p className="text-[11px] text-muted-foreground">
                    Billed monthly, cancel anytime
                  </p>
                )}
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

              <div className="space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold font-display text-sky-600 dark:text-sky-400 tabular-nums">
                    {isAnnual ? "₱1,999" : "₱2,499"}
                  </span>
                  <span className="text-muted-foreground text-xs font-medium">/ month</span>
                </div>
                {isAnnual ? (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    Billed annually at ₱23,988/yr (Save ₱6,000/year)
                  </p>
                ) : (
                  <p className="text-[11px] text-muted-foreground">
                    Billed monthly, cancel anytime
                  </p>
                )}
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

              <div className="space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold font-display text-foreground">Custom</span>
                  <span className="text-muted-foreground text-xs font-medium">volume pricing</span>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  {isAnnual ? "Includes free BIR accreditation support" : "Tailored multi-location SLA"}
                </p>
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
  );
}
