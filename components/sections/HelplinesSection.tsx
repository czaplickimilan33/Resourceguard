import { PhoneCall, Siren } from "lucide-react";
import { helplines } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function HelplinesSection() {
  return (
    <section id="pomoc" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Pomoc teraz"
          title="Nie musisz czekać na aplikację, żeby dostać pomoc."
          description="Te telefony działają już dziś — bezpłatnie i z zachowaniem dyskrecji. Rozmowa z drugim człowiekiem to często najlepszy pierwszy krok."
        />

        {/* 112 — wyróżnione */}
        <Reveal>
          <a
            href="tel:112"
            className="flex flex-col items-start gap-4 rounded-2xl border border-warn/30 bg-warn/8 p-6 transition-colors hover:border-warn/50 sm:flex-row sm:items-center"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warn/15 text-warn">
              <Siren className="h-6 w-6" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-lg font-semibold text-ink">
                112 — numer alarmowy
              </p>
              <p className="mt-1 text-sm leading-relaxed text-mut">
                Przy bezpośrednim zagrożeniu życia lub zdrowia — swojego albo
                kogoś innego. Działa w całej Unii Europejskiej, także bez karty
                SIM.
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-warn/15 px-3 py-1 text-xs font-medium text-warn">
              zawsze w nagłych sytuacjach
            </span>
          </a>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {helplines.filter((line) => line.number !== "112").map((line, i) => (
            <Reveal key={line.number} delay={0.05 + i * 0.06}>
              <a
                href={`tel:${line.tel}`}
                className="group flex h-full flex-col rounded-2xl border border-white/8 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint/30"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-mint/20 bg-mint/10 text-mint transition-transform duration-300 group-hover:scale-110">
                    <PhoneCall className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="rounded-full bg-mint/10 px-2.5 py-1 text-[11px] font-medium text-mint">
                    {line.info}
                  </span>
                </div>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                  {line.number}
                </p>
                <p className="mt-1 text-sm font-medium text-ink">{line.name}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mut">
                  {line.desc}
                </p>
              </a>
            </Reveal>
          ))}

          {/* Karta informacyjna dopełniająca siatkę */}
          <Reveal delay={0.35}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-white/10 bg-card/40 p-6">
              <p className="text-sm font-medium text-ink">
                Nie wiesz, który numer wybrać?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mut">
                Każdy z tych telefonów pomoże Ci znaleźć właściwe wsparcie —
                nie musisz trafić idealnie za pierwszym razem. Zadzwonienie
                „za wcześnie” nie istnieje.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-mut">
            Pełna lista telefonów wraz ze wskazówkami, kiedy zadzwonić:{" "}
            <a
              href="/pomoc-teraz"
              className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-sky-300"
            >
              Pomoc teraz
            </a>
            . Numery i godziny dostępności mogą się zmieniać — aktualne
            informacje znajdziesz na stronach operatorów poszczególnych linii.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
