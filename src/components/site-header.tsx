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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-white shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shadow-sm flex items-center justify-center">
            <Image
              src="/box_logo.png"
              alt="NexGen POS Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white leading-tight">
              NexGen <span className="text-sky-400">POS</span>
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-amber-400 tracking-wider uppercase">
              Offline-First · BIR Ready
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-slate-200 hover:text-white transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <Link href="/portal-login">
            <Button
              variant="outline"
              size="default"
              className="border-slate-700 bg-slate-800/60 hover:bg-slate-700 text-slate-100 hover:text-white text-sm font-semibold rounded-lg px-4 h-10 transition-colors"
            >
              <ShieldCheck className="h-4 w-4 text-sky-400" />
              Owner Portal
            </Button>
          </Link>

          <a href="#demo">
            <Button
              size="default"
              className="bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm rounded-lg px-5 h-10 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Free Demo
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-10 w-10 border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-[#0f172a] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-800/80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <Link
              href="/portal-login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full h-12 text-base font-semibold border-slate-700 bg-slate-800 text-white hover:bg-slate-700 justify-center"
              >
                <ShieldCheck className="h-5 w-5 text-sky-400 mr-2" />
                Multi-Branch Owner Portal
              </Button>
            </Link>

            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <Button className="w-full h-12 text-base font-semibold bg-sky-600 hover:bg-sky-500 text-white justify-center shadow-md">
                Book Free Live Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
