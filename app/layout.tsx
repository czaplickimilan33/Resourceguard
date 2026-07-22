import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceWorkerRegistrar from "@/components/pwa/ServiceWorkerRegistrar";
import { siteDescription, siteName, siteTagline, siteUrl } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — ${siteTagline}`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  manifest: "/manifest.webmanifest",
  keywords: [
    "wsparcie kryzysowe",
    "pierwsza pomoc psychologiczna",
    "plan bezpieczeństwa",
    "tryb offline",
    "wsparcie psychiczne",
    "przygotowanie na kryzys",
    "telefony zaufania",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: `${siteName} — ${siteTagline}`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — ${siteTagline}`,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060d1a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "pl-PL",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-night text-ink">
        <a href="#tresc" className="skip-link">
          Przejdź do treści
        </a>
        <Navbar />
        <main id="tresc">{children}</main>
        <Footer />
        <ServiceWorkerRegistrar />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
