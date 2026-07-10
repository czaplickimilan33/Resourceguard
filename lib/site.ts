/**
 * Bazowy adres strony.
 * Po podpięciu własnej domeny ustaw w Vercel zmienną środowiskową
 * NEXT_PUBLIC_SITE_URL (np. https://resourceguard.pl) — nic więcej
 * nie trzeba zmieniać w kodzie.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://resourceguard.vercel.app";
