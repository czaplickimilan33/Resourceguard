import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResourceGuard — cyfrowe wsparcie w sytuacjach kryzysowych",
  description:
    "ResourceGuard to projekt aplikacji łączącej wsparcie kryzysowe, pierwszą pomoc, survival, tryb offline i proste instrukcje działania w trudnych sytuacjach.",
  keywords: [
    "wsparcie kryzysowe",
    "pierwsza pomoc",
    "bezpieczeństwo",
    "tryb offline",
    "wsparcie psychiczne",
    "przygotowanie na kryzys",
  ],
  openGraph: {
    title: "ResourceGuard — cyfrowe wsparcie w sytuacjach kryzysowych",
    description:
      "Proste instrukcje, pierwsza pomoc, wsparcie psychiczne i tryb offline w jednej, przejrzystej aplikacji.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-night text-ink">{children}</body>
    </html>
  );
}
