/**
 * Bazowy adres strony.
 * Po podpięciu własnej domeny ustaw w Vercel zmienną środowiskową
 * NEXT_PUBLIC_SITE_URL (np. https://resourceguard.pl) — nic więcej
 * nie trzeba zmieniać w kodzie.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://resourceguard.vercel.app";

export const siteName = "ResourceGuard";

export const siteTagline = "Spokojna pomoc, gdy sytuacja przestaje być spokojna";

export const siteDescription =
  "ResourceGuard łączy pierwszą pomoc psychologiczną, proste procedury kryzysowe, plan bezpieczeństwa i tryb offline w jednym, przejrzystym systemie wsparcia — dla młodych osób, rodzin, szkół i organizacji.";
