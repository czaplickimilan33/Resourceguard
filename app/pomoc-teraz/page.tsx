import type { Metadata } from "next";
import { HeartHandshake, Info, PhoneCall, Siren, Users } from "lucide-react";
import { helplines } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Pomoc teraz — telefony wsparcia kryzysowego",
  description:
    "Zweryfikowane, bezpłatne i całodobowe telefony wsparcia w Polsce: 112, 116 111 dla dzieci i młodzieży, 116 123 dla dorosłych oraz inne oficjalne linie pomocowe.",
  alternates: { canonical: "/pomoc-teraz" },
};

const whenToCall = [
  {
    icon: Siren,
    title: "Zadzwoń pod 112, gdy…",
    items: [
      "życie lub zdrowie — Twoje albo kogoś innego — jest bezpośrednio zagrożone",
      "dzieje się przestępstwo, wypadek albo pożar",
      "ktoś stracił przytomność lub nie oddycha",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Zadzwoń na telefon wsparcia, gdy…",
    items: [
      "przeżywasz silne emocje, lęk, smutek albo myśli rezygnacyjne",
      "coś trudnego dzieje się w domu, szkole lub związku",
      "martwisz się o kogoś bliskiego i nie wiesz, jak pomóc",
    ],
  },
  {
    icon: Users,
    title: "Pamiętaj, że…",
    items: [
      "rozmowa jest bezpłatna i możesz pozostać anonimowy_a",
      "nie musisz mieć „wystarczająco poważnego” powodu",
      "jeśli numer jest zajęty, spróbuj ponownie albo wybierz inny z listy",
    ],
  },
];

export default function HelpNowPage() {
  return (
    <>
      <PageHero
        eyebrow="Pomoc teraz"
        title="Pomoc jest dostępna. Teraz."
        description="Wszystkie numery na tej stronie są bezpłatne, działają całą dobę i zostały zweryfikowane w oficjalnych źródłach. Nie musisz wiedzieć, „który jest właściwy” — każdy z nich pomoże Ci znaleźć wsparcie."
      />

      {/* 112 */}
      <section className="pb-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <a
              href="tel:112"
              className="flex flex-col items-start gap-5 rounded-3xl border border-mode-urgent/30 bg-mode-urgent/10 p-6 transition-colors hover:border-mode-urgent/50 sm:flex-row sm:items-center sm:p-8"
            >
              <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-mode-urgent/15 text-mode-urgent">
                <Siren className="h-8 w-8" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-3xl font-semibold tracking-tight text-ink">
                  112
                </p>
                <p className="mt-1 font-medium text-ink">
                  Numer alarmowy — zagrożenie życia, zdrowia lub bezpieczeństwa
                </p>
                <p className="mt-1 text-sm leading-relaxed text-mut">
                  Działa w całej Unii Europejskiej, całą dobę, także przy bardzo
                  słabym zasięgu i bez karty SIM.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-mode-urgent px-5 py-3 text-sm font-semibold text-night">
                <PhoneCall className="h-4 w-4" aria-hidden />
                Zadzwoń
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Pozostałe linie */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-ink">
            Całodobowe telefony wsparcia
          </h2>
          <div className="mt-5 space-y-4">
            {helplines
              .filter((line) => line.number !== "112")
              .map((line, i) => (
                <Reveal key={line.number} delay={i * 0.05}>
                  <a
                    href={`tel:${line.tel}`}
                    className="group flex flex-col gap-4 rounded-2xl border border-white/8 bg-card p-6 transition-colors hover:border-mint/30 sm:flex-row sm:items-center"
                  >
                    <div className="flex shrink-0 items-center gap-4 sm:w-56">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-mint/20 bg-mint/10 text-mint transition-transform duration-300 group-hover:scale-110">
                        <PhoneCall className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="font-display text-xl font-semibold tracking-tight text-ink">
                          {line.number}
                        </p>
                        <p className="text-[11px] font-medium text-mint">{line.info}</p>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-ink">{line.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-mut">{line.desc}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* Kiedy dzwonić */}
      <section className="border-y border-white/5 bg-night-2 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-ink">
            Który numer wybrać?
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {whenToCall.map((block) => {
              const Icon = block.icon;
              return (
                <div key={block.title} className="rounded-2xl border border-white/8 bg-card p-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-ink">{block.title}</h3>
                  <ul className="mt-2 space-y-1.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-mut">
                        <span className="mt-2 inline-flex h-1 w-1 shrink-0 rounded-full bg-mut/60" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Źródła */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-card/60 p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
            <div className="text-sm leading-relaxed text-mut">
              <p>
                Numery i godziny dostępności zostały zweryfikowane w oficjalnych
                źródłach (lipiec 2026): strony operatorów linii oraz serwisy
                gov.pl. Aktualne informacje znajdziesz zawsze u operatorów:{" "}
                <a href="https://116111.pl" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-white/20 underline-offset-2 hover:text-accent">116111.pl</a>,{" "}
                <a href="https://116sos.pl" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-white/20 underline-offset-2 hover:text-accent">116sos.pl</a>,{" "}
                <a href="https://brpd.gov.pl" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-white/20 underline-offset-2 hover:text-accent">brpd.gov.pl</a>,{" "}
                <a href="https://liniawsparcia.pl" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-white/20 underline-offset-2 hover:text-accent">liniawsparcia.pl</a>{" "}
                oraz{" "}
                <a href="https://niebieskalinia.info" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-white/20 underline-offset-2 hover:text-accent">niebieskalinia.info</a>.
              </p>
              <p className="mt-3">
                Ta strona jest zapisywana na Twoim urządzeniu i działa także bez
                dostępu do internetu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
