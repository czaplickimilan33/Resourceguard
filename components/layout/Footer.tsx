import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { disclaimer, emergencyNote, footerNav } from "@/lib/data";

const columns = [
  { title: "Produkt", links: footerNav.produkt },
  { title: "Projekt", links: footerNav.projekt },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night-2">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="flex items-center gap-2 font-display font-semibold text-ink">
              <ShieldCheck className="h-5 w-5 text-accent" aria-hidden />
              ResourceGuard
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mut">
              Spokojna pomoc, gdy sytuacja przestaje być spokojna. Cyfrowy
              system wsparcia kryzysowego, który pomaga przygotować się
              wcześniej i działać spokojniej w trudnym momencie.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={`Stopka — ${col.title}`}>
              <p className="text-sm font-semibold text-ink">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mut transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="text-sm font-semibold text-ink">Ważne</p>
            <p className="mt-3 text-sm leading-relaxed text-mut">{disclaimer}</p>
            <p className="mt-4 text-sm leading-relaxed text-mut">
              Numer alarmowy:{" "}
              <a href="tel:112" className="font-medium text-ink hover:text-accent">
                112
              </a>
              {" · "}Dzieci i młodzież:{" "}
              <a href="tel:116111" className="font-medium text-ink hover:text-accent">
                116 111
              </a>
              {" · "}
              <Link href="/pomoc-teraz" className="font-medium text-ink underline decoration-white/20 underline-offset-2 hover:text-accent">
                Wszystkie telefony wsparcia
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-mut sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ResourceGuard. Projekt w fazie rozwoju.
            {footerNav.prawne.map((link) => (
              <span key={link.href}>
                {" · "}
                <Link href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
          <p className="text-warn/80">{emergencyNote}</p>
        </div>
      </div>
    </footer>
  );
}
