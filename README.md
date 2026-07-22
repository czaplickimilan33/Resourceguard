# ResourceGuard

**Spokojna pomoc, gdy sytuacja przestaje być spokojna.**

ResourceGuard to cyfrowy system wsparcia kryzysowego: pierwsza pomoc
psychologiczna, proste procedury bezpieczeństwa, plan bezpieczeństwa,
zweryfikowane telefony wsparcia i tryb offline — dla młodych osób, rodzin,
szkół i organizacji.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona: http://localhost:3000

## Skrypty

| Skrypt              | Opis                                              |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Serwer deweloperski                               |
| `npm run build`     | Build produkcyjny                                 |
| `npm run start`     | Serwer produkcyjny (po buildzie)                  |
| `npm run lint`      | ESLint                                            |
| `npm run typecheck` | TypeScript bez emisji                             |
| `npm run test:e2e`  | Testy end-to-end (Playwright, wymaga builda)      |

Regeneracja ikon PWA z `app/icon.svg`:

```bash
node scripts/generate-icons.mjs
```

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS 4
- motion (animacje, pełna obsługa `prefers-reduced-motion`)
- lucide-react (ikony)
- Playwright (testy e2e)

## Struktura

```
app/                  routing (App Router), każda podstrona z własną metadata
  page.tsx            strona główna (scrollytelling trybów bezpieczeństwa)
  produkt/            szczegóły produktu + FAQ (JSON-LD)
  demo/               interaktywne demo (stan w localStorage)
  dla-instytucji/     ścieżki współpracy: rodziny, szkoły, organizacje
  misja/              misja i zasady etyczne
  baza-wiedzy/        artykuły oparte na oficjalnych źródłach
  pomoc-teraz/        zweryfikowane telefony wsparcia (działa offline)
  offline/            fallback offline (service worker)
  polityka-prywatnosci/, zasady-korzystania/
components/
  layout/             Navbar, Footer, EmergencyRibbon (stały pasek 112)
  sections/           sekcje strony głównej
  demo/               aplikacyjne demo (DemoApp, BreathingExercise, useDemoState)
  pwa/                rejestracja SW, wskaźnik online/offline
  ui/                 design system: Button, Badge, PageHero, Reveal…
lib/
  data.ts             cała treść strony (PL) — nawigacja, sekcje, telefony
  safety-modes.ts     system 4 trybów bezpieczeństwa
  articles.ts         treści bazy wiedzy ze źródłami
  site.ts             konfiguracja adresu i opisów
public/
  sw.js               service worker (offline: /, /pomoc-teraz, /demo, /offline)
  icons/              ikony PWA (generowane skryptem)
tests/                testy e2e Playwright
```

## Zmienne środowiskowe

Skopiuj `.env.example` do `.env.local` i uzupełnij:

- `NEXT_PUBLIC_WEB3FORMS_KEY` — klucz [Web3Forms](https://web3forms.com) do
  wysyłki formularza kontaktowego. **Bez klucza formularz działa w jawnie
  oznaczonym trybie demonstracyjnym** (dane nie są nigdzie wysyłane).
- `NEXT_PUBLIC_SITE_URL` — publiczny adres strony (np. `https://resourceguard.pl`);
  używany w canonical, sitemap i Open Graph. Domyślnie
  `https://resourceguard.vercel.app`.

## Wdrożenie na Vercel

1. Podłącz repozytorium w panelu Vercel (framework: Next.js — wykrywany
   automatycznie, zero dodatkowej konfiguracji).
2. Ustaw zmienne środowiskowe `NEXT_PUBLIC_WEB3FORMS_KEY` i
   `NEXT_PUBLIC_SITE_URL` w Project Settings → Environment Variables.
3. Deploy. Vercel Analytics (cookieless) aktywuje się automatycznie po
   włączeniu w panelu projektu.

## Zasady projektu

- Treści kryzysowe (numery telefonów, procedury) wyłącznie z oficjalnych
  źródeł — każdy artykuł bazy wiedzy wskazuje swoje źródła.
- Dane użytkownika w demo zapisują się tylko lokalnie (localStorage) i można
  je usunąć jednym przyciskiem.
- Brak fikcyjnych opinii, partnerów i statystyk.
- Pełna obsługa `prefers-reduced-motion`, nawigacji klawiaturą i czytników
  ekranu.
