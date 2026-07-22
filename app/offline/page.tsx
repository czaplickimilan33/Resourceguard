import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall, WifiOff } from "lucide-react";
import { helplines } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jesteś offline",
  description:
    "Brak połączenia z internetem. Najważniejsze telefony wsparcia i wskazówki działają także offline.",
  robots: { index: false },
};

export default function OfflinePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-36 pb-20 sm:px-6 sm:pt-44">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-warn/25 bg-warn/10 text-warn">
        <WifiOff className="h-7 w-7" aria-hidden />
      </span>
      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Brak internetu — ale nie jesteś bez wsparcia.
      </h1>
      <p className="mt-4 leading-relaxed text-mut">
        Ta strona działa offline. Połączenia telefoniczne zwykle działają nawet
        wtedy, gdy internet zawodzi — a SMS-y często dochodzą przy bardzo słabym
        zasięgu.
      </p>

      <h2 className="mt-10 font-display text-lg font-semibold text-ink">
        Telefony, które działają bez internetu
      </h2>
      <ul className="mt-4 space-y-2.5">
        {helplines.slice(0, 4).map((line) => (
          <li key={line.number}>
            <a
              href={`tel:${line.tel}`}
              className="flex items-center gap-4 rounded-2xl border border-white/8 bg-card p-5 transition-colors hover:border-mint/30"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint/10 text-mint">
                <PhoneCall className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold text-ink">
                  {line.number}
                </p>
                <p className="truncate text-sm text-mut">{line.name}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-2xl border border-white/8 bg-card/60 p-5 text-sm leading-relaxed text-mut">
        <p className="font-medium text-ink">Trzy rzeczy, które możesz zrobić teraz:</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Spróbuj wysłać SMS — przechodzi łatwiej niż połączenie.</li>
          <li>Oszczędzaj baterię: obniż jasność, zamknij zbędne aplikacje.</li>
          <li>Zmień miejsce o kilka–kilkanaście metrów, najlepiej wyżej lub bliżej okna.</li>
        </ol>
      </div>

      <p className="mt-8 text-sm text-mut">
        Gdy połączenie wróci:{" "}
        <Link href="/" className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:text-sky-300">
          wróć na stronę główną
        </Link>
        .
      </p>
    </div>
  );
}
