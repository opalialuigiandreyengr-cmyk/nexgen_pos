"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "BIR & Malls", href: "#bir-malls" },
  { label: "Hardware", href: "#hardware" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-white shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shadow-sm flex items-center justify-center">
            <Image
              src="/box_logo.png"
              alt="NexGen POS Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white leading-tight">
              NexGen <span className="text-sky-400">POS</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-amber-400 tracking-wider uppercase">
              Offline-First · BIR Ready
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 hover:text-white transition-colors py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Real Switch Toggle for Dark/Day Mode */}
          <ThemeToggle />

          <Link href="/portal-login">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-700 bg-slate-800/60 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold rounded-lg px-3.5 h-8.5 transition-colors"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-sky-400 mr-1.5" />
              Owner Portal
            </Button>
          </Link>

          <a href="#demo">
            <Button
              size="sm"
              className="bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs rounded-lg px-4 h-8.5 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Demo
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex sm:hidden items-center gap-2.5">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-8.5 w-8.5 border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-[#0f172a] px-4 py-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-800/80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <Link
              href="/portal-login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full h-10 text-sm font-semibold border-slate-700 bg-slate-800 text-white hover:bg-slate-700 justify-center"
              >
                <ShieldCheck className="h-4 w-4 text-sky-400 mr-2" />
                Multi-Branch Owner Portal
              </Button>
            </Link>

            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <Button className="w-full h-10 text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white justify-center shadow-md">
                Book Free Live Demo
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
