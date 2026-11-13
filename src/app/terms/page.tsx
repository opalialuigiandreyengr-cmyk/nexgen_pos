import NextLink from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Terms and Conditions — NexGen POS",
  description: "Terms of service, subscription billing, BIR fiscal compliance responsibilities, and offline data privacy policies for NexGen POS.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <SiteHeader />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Back link */}
          <div>
            <NextLink
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </NextLink>
          </div>

          {/* Header */}
          <div className="space-y-3 border-b border-border pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold">
              <FileText className="h-3.5 w-3.5" />
              <span>Commercial Software Terms &amp; Compliance Policy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-foreground">
              Terms and Conditions
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: November 2026 · Governing Law: Republic of the Philippines
            </p>
          </div>

          {/* Document Content */}
          <div className="space-y-8 text-sm leading-relaxed text-foreground">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-foreground">
                1. Acceptance of Terms &amp; Scope of Service
              </h2>
              <p className="text-muted-foreground">
                By purchasing a subscription, downloading, installing, or operating the NexGen Point of Sale (POS) software, terminal launchers, or cloud telemetry portals, you (“Subscriber”, “Merchant”, or “User”) agree to be bound by these Terms and Conditions. NexGen POS provides an offline-first point-of-sale system, multi-printer impact routing, recipe food costing, and multi-branch cloud telemetry services for food service, retail, and hospitality establishments in the Philippines.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-foreground">
                2. Offline-First Architecture &amp; Data Ownership
              </h2>
              <p className="text-muted-foreground">
                NexGen POS operates primarily via a high-performance local SQLite database engine configured with Write-Ahead Logging (WAL). 
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li>
                  <strong>Local Resilience:</strong> All transactions, kitchen tickets, table states, and cashier shifts execute locally on the counter hardware regardless of broadband availability.
                </li>
                <li>
                  <strong>Data Ownership:</strong> All merchant sales data, item catalogs, and audit logs remain the sole property of the Merchant.
                </li>
                <li>
                  <strong>Cloud Synchronization:</strong> When internet access is active, rolling encrypted database snapshots and daily sales summaries sync automatically to designated Supabase cloud storage buckets.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-foreground">
                3. Bureau of Internal Revenue (BIR) Tax Compliance
              </h2>
              <p className="text-muted-foreground">
                NexGen POS is engineered strictly in accordance with Philippine tax statutes, including Republic Act No. 9994 (Expanded Senior Citizens Act), Republic Act No. 10754 (Persons with Disability), Republic Act No. 11861 (Solo Parents Welfare Act), and BIR Revenue Regulations governing Point of Sale machines.
              </p>
              <div className="rounded-lg border border-border bg-secondary/50 p-4 space-y-2">
                <p className="font-semibold text-foreground">Statutory Formula Enforcement:</p>
                <p className="text-xs font-mono text-muted-foreground">
                  Qualified item prices are first divided by 1.12 to strip the 12% Value Added Tax (VAT), followed by the statutory 20% discount on the net amount.
                </p>
                <p className="text-xs text-muted-foreground">
                  The Merchant is responsible for verifying valid government-issued OSCA / PWD IDs prior to applying statutory discounts.
                </p>
              </div>
              <p className="text-muted-foreground">
                NexGen maintains non-resettable accumulated grand totals (NGRT) and generates the mandatory 7 BIR sales books. The Merchant remains responsible for securing BIR POS Accreditation, Permit to Use (PTU), and submitting official monthly/quarterly tax filings.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-foreground">
                4. Shopping Mall Tenant Compliance (SM, Ayala, Robinsons, Megaworld)
              </h2>
              <p className="text-muted-foreground">
                NexGen includes automated daily sales report generators compliant with major Philippine commercial mall leasing specifications (SM Tenant TXT format, Robinsons RLC format, Ayala CIRS, Megaworld). The Merchant is responsible for inputting accurate tenant IDs and lease contract codes provided by mall administration.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-foreground">
                5. Subscription Plans, Billing &amp; Payment Terms
              </h2>
              <p className="text-muted-foreground">
                NexGen POS is licensed as a Software-as-a-Service (SaaS) subscription priced in Philippine Pesos (PHP):
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li>
                  <strong>Monthly Plans:</strong> Billed on a recurring 30-day basis. Merchants may cancel at any time with service remaining active through the end of the paid billing cycle.
                </li>
                <li>
                  <strong>Annual Plans:</strong> Billed upfront for a 12-month period at a discounted rate (2 months free / 20% discount). Annual subscriptions are non-refundable once activated and deployed on counter hardware.
                </li>
                <li>
                  <strong>Hardware Agnosticism:</strong> NexGen runs on standard Windows-compatible POS terminals, laptops, and PCs. Hardware procurement, printer paper rolls, and physical maintenance are the responsibility of the Merchant.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-foreground">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by Philippine law, NexGen POS shall not be liable for indirect, incidental, or consequential damages resulting from local hardware failures, accidental power loss without an uninterruptible power supply (UPS), third-party printer mechanical jams, or telecommunications provider outages.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-foreground">
                7. Technical Support &amp; Contact Information
              </h2>
              <p className="text-muted-foreground">
                For questions regarding these Terms, technical support on kitchen impact printer routing, or multi-branch fleet onboarding:
              </p>
              <div className="rounded-lg border border-border bg-card p-4 text-xs space-y-1 text-muted-foreground">
                <p><strong className="text-foreground">NexGen POS Technical Operations</strong></p>
                <p>Email: <span className="text-sky-500">support@nexgenpos.com</span></p>
                <p>Support Hours: 8:00 AM – 10:00 PM PHT (Monday to Sunday)</p>
                <p>Enterprise Multi-Branch Hotline: Available 24/7 for active dining rush outages</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#0f172a] text-slate-400 py-8 text-xs text-center">
        <p>© 2026 NexGen POS. All rights reserved. Registered in the Philippines.</p>
      </footer>
    </div>
  );
}
