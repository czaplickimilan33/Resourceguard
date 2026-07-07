import { ShieldCheck } from "lucide-react";
import { disclaimer, emergencyNote, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night-2">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <p className="flex items-center gap-2 font-semibold text-ink">
              <ShieldCheck className="h-5 w-5 text-accent" aria-hidden />
              ResourceGuard
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mut">
              Mniej chaosu, więcej jasnych kroków. Cyfrowy system wsparcia
              kryzysowego, który pomaga przygotować się wcześniej i działać
              spokojniej w trudnym momencie.
            </p>
          </div>

          <nav aria-label="Nawigacja w stopce">
            <p className="text-sm font-semibold text-ink">Na stronie</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mut transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-ink">Ważne</p>
            <p className="mt-3 text-sm leading-relaxed text-mut">{disclaimer}</p>
            <p className="mt-4 text-sm leading-relaxed text-mut">
              Numer alarmowy: <a href="tel:112" className="font-medium text-ink hover:text-accent">112</a>
              {" · "}Dzieci i młodzież: <a href="tel:116111" className="font-medium text-ink hover:text-accent">116 111</a>
              {" · "}Dorośli w kryzysie: <a href="tel:116123" className="font-medium text-ink hover:text-accent">116 123</a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-mut sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ResourceGuard. Projekt koncepcyjny.</p>
          <p className="text-warn/80">{emergencyNote}</p>
        </div>
      </div>
    </footer>
  );
}
