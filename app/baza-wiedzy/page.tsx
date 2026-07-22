import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import clsx from "clsx";
import { articles } from "@/lib/articles";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Baza wiedzy",
  description:
    "Krótkie, rzetelne materiały o wsparciu psychicznym, przygotowaniu na sytuacje kryzysowe i bezpieczeństwie — oparte na oficjalnych źródłach, bez straszenia.",
  alternates: { canonical: "/baza-wiedzy" },
};

const categoryStyles: Record<string, string> = {
  "Wsparcie psychiczne": "bg-lav/10 text-lav border-lav/25",
  Przygotowanie: "bg-mint/10 text-mint border-mint/25",
  Bezpieczeństwo: "bg-accent/10 text-accent border-accent/25",
};

export default function KnowledgeBasePage() {
  return (
    <>
      <PageHero
        eyebrow="Baza wiedzy"
        title="Krótko, konkretnie i na podstawie oficjalnych źródeł."
        description="Żadnych ścian tekstu i klikbajtów. Każdy materiał odpowiada na jedno praktyczne pytanie i wskazuje zweryfikowane źródła, z których korzysta."
      />

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-2">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 2) * 0.08}>
                <Link
                  href={`/baza-wiedzy/${article.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/8 bg-gradient-to-b from-card to-card-deep p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 sm:p-7"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={clsx(
                        "rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
                        categoryStyles[article.category]
                      )}
                    >
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-mut">
                      <Clock className="h-3 w-3" aria-hidden />
                      {article.readingTime} czytania
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">
                    {article.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mut">
                    {article.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 border-t border-white/5 pt-4 text-sm font-medium text-accent">
                    Czytaj
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </Reveal>
            ))}

            {/* Karta zapowiedzi */}
            <Reveal delay={0.16}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-white/10 bg-card/40 p-6 sm:p-7">
                <h2 className="font-display text-lg font-semibold text-ink">
                  Kolejne materiały w przygotowaniu
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-mut">
                  Pracujemy nad kolejnymi tematami — m.in. wspieraniem dziecka po
                  trudnym wydarzeniu i podstawami pierwszej pomocy. Dołącz do
                  listy, a damy Ci znać o nowych publikacjach.
                </p>
                <div className="mt-5">
                  <Button href="/#kontakt" variant="secondary" size="sm">
                    Dołącz do listy
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <p className="mt-10 rounded-2xl border border-warn/20 bg-warn/5 p-5 text-center text-xs leading-relaxed text-mut">
            Materiały w bazie wiedzy mają charakter edukacyjny i nie zastępują
            porady lekarza, psychologa ani służb ratunkowych. W sytuacji
            bezpośredniego zagrożenia zadzwoń pod numer alarmowy 112.
          </p>
        </div>
      </section>
    </>
  );
}
