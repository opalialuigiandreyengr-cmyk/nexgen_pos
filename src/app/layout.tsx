import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexGen POS — Built for Philippine Restaurants, Cafes & Retail",
  description:
    "Fast offline-first POS with automated BIR Senior/PWD sales books, 1-click Mall Tenant RLC reports (SM, Ayala, Robinsons), and multi-branch cloud monitoring.",
  keywords: [
    "POS Philippines",
    "offline POS system",
    "BIR compliant POS",
    "restaurant POS Philippines",
    "retail POS system PH",
    "mall tenant sales txt",
    "SM tenant pos",
    "Robinsons RLC POS",
  ],
  metadataBase: new URL("https://nexgenpos.vercel.app"),
  openGraph: {
    title: "NexGen POS — Offline-First & BIR 2024 Ready",
    description:
      "Zero cashier downtime during internet drops. Automated BIR sales books, 1-click Mall Tenant RLC files, and heat-proof kitchen impact printing.",
    url: "https://nexgenpos.vercel.app",
    siteName: "NexGen POS",
    images: [
      {
        url: "/box_logo.png",
        width: 512,
        height: 512,
        alt: "NexGen POS Logo",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "NexGen POS — Offline-First & BIR 2024 Ready",
    description: "Fast offline POS built for Philippine food, beverage, and retail.",
    images: ["/box_logo.png"],
  },
  icons: {
    icon: "/box_logo.png",
    apple: "/box_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/box_logo.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
