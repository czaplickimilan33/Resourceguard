# ResourceGuard — One Page

Landing page projektu ResourceGuard: cyfrowego systemu wsparcia kryzysowego
(proste instrukcje, pierwsza pomoc, wsparcie psychiczne, tryb offline).

## Uruchomienie

```bash
npm install
npm run dev
```

Strona: http://localhost:3000

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 4
- motion (animacje)
- lucide-react (ikony)

## Struktura

```
app/            layout, page, globals.css
components/
  layout/       Navbar, Footer
  sections/     15 sekcji strony
  ui/           Button, Badge, SectionHeader, FeatureCard, Reveal, AnimatedBackground
lib/data.ts     cała treść strony (PL)
```

Cała treść (funkcje, scenariusze, opinie, wartości) edytowalna w `lib/data.ts`.

Formularz kontaktowy działa w trybie demonstracyjnym (frontend-only, bez wysyłki).
