import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  HeartHandshake,
  LayoutDashboard,
  Map,
  PhoneCall,
  Siren,
  WifiOff,
} from "lucide-react";
import clsx from "clsx";
import { faq } from "@/lib/data";
import { safetyModes } from "@/lib/safety-modes";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Produkt — jak działa ResourceGuard",
  description:
    "Cztery tryby bezpieczeństwa, plan bezpieczeństwa, ćwiczenia uspokajające, pierwsza pomoc i tryb offline — zobacz, jak ResourceGuard porządkuje wsparcie w trudnych sytuacjach.",
  alternates: { canonical: "/produkt" },
};

interface FeatureDetail {
  icon: typeof Siren;
  title: string;
  lead: string;
  points: string[];
}

const featureDetails: FeatureDetail[] = [
  {
    icon: Siren,
    title: "Tryb kryzysowy dopasowany do sytuacji",
    lead: "Zamiast jednej ogólnej instrukcji — krótkie ścieżki działania dla konkretnych sytuacji: paniki, zagrożenia, braku internetu czy potrzeby pierwszej pomocy.",
    points: [
      "Jedno działanie na raz, w logicznej kolejności",
      "Kroki można odhaczać, żeby nie zgubić się w stresie",
      "Zawsze widoczne przypomnienie o numerze alarmowym 112",
    ],
  },
  {
    icon: Map,
    title: "Plan bezpieczeństwa przygotowany wcześniej",
    lead: "Twoje bezpieczne miejsca, zaufane osoby, rzeczy które pomagają i sygnały ostrzegawcze — spisane w spokojnym momencie, dostępne w trudnym.",
    points: [
      "Prosty kreator planu krok po kroku",
      "Dane zapisywane lokalnie na Twoim urządzeniu",
      "Plan dostępny także offline",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Ćwiczenia uspokajające i pierwsza pomoc emocjonalna",
    lead: "Sprawdzone techniki samoregulacji opisane prostym językiem: oddech 4–6, uziemienie 5-4-3-2-1, zasady wspierającej rozmowy.",
    points: [
      "Interaktywne ćwiczenie oddechu z prowadzeniem na ekranie",
      "Krótkie instrukcje zamiast wykładu o neurobiologii",
      "Wskazówki, jak wspierać drugą osobę bez oceniania",
    ],
  },
  {
    icon: WifiOff,
    title: "Tryb offline, który naprawdę działa",
    lead: "Najważniejsze procedury i telefony wsparcia są zapisywane na urządzeniu. Gdy internet zawodzi, kluczowe informacje nadal są pod ręką.",
    points: [
      "Telefony wsparcia i procedury dostępne bez sieci",
      "Jasna informacja, co jest zapisane, a co wymaga połączenia",
      "Czytelny wskaźnik stanu połączenia",
    ],
  },
  {
    icon: PhoneCall,
    title: "Kontakty awaryjne w jednym miejscu",
    lead: "Zweryfikowane, całodobowe telefony wsparcia oraz Twoje własne zaufane osoby — bez szukania po notatkach i zakładkach.",
    points: [
      "Numery zweryfikowane w oficjalnych źródłach",
      "Własna lista zaufanych osób zapisana lokalnie",
      "Połączenie jednym dotknięciem",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard gotowości bez presji",
    lead: "Spokojny podgląd tego, co już masz przygotowane: kontakty, checklisty, materiały offline. Bez punktów, rankingów i straszenia.",
    points: [
      "Poziom przygotowania w czytelnej skali",
      "Podpowiedź, co warto uzupełnić w następnej kolejności",
      "Zero oceniania — dashboard informuje, nie rozlicza",
    ],
  },
];

const notList = [
  "Nie diagnozuje i nie ocenia Twojego stanu zdrowia",
  "Nie zastępuje psychologa, lekarza ani terapii",
  "Nie zastępuje służb ratunkowych — od tego jest 112",
  "Nie monitoruje Cię i nie wysyła automatycznych zgłoszeń",
  "Nie sprzedaje Twoich danych i nie pokazuje reklam",
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Produkt"
        title="System, który porządkuje pomoc w trudnych chwilach."
        description="ResourceGuard nie jest kolejną encyklopedią o zdrowiu psychicznym. To narzędzie, które w stresie podaje jeden jasny krok — a w spokojne dni pomaga się przygotować."
      >
        <Button href="/demo" size="lg">
          Wypróbuj interaktywne demo
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Button>
        <Button href="/#kontakt" variant="secondary" size="lg">
          Dołącz do listy
        </Button>
      </PageHero>

      {/* Tryby bezpieczeństwa */}
      <section className="border-y border-white/5 bg-night-2 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Fundament"
            title="Wszystko zaczyna się od czterech trybów."
            description="Jeden system na każdą sytuację: nazywasz swój stan, a aplikacja dopasowuje treść, ton i tempo. Każdy tryb ma nazwę, numer i ikonę — kolor nigdy nie jest jedynym oznaczeniem."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {safetyModes.map((mode, i) => {
              const Icon = mode.icon;
              return (
                <Reveal key={mode.id} delay={i * 0.08}>
                  <article
                    className={clsx(
                      "flex h-full flex-col rounded-2xl border bg-card p-6 transition-transform duration-300 hover:-translate-y-1",
                      mode.color.border
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={clsx(
                          "inline-flex h-11 w-11 items-center justify-center rounded-xl",
                          mode.color.bg,
                          mode.color.text
                        )}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="font-display text-2xl font-semibold text-white/10">
                        0{mode.level}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-ink">
                      {mode.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-mut">„{mode.feeling}”</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-mut">
                      {mode.appResponse}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-10 text-center">
              <Link
                href="/#tryby"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-sky-300"
              >
                Zobacz tryby w interaktywnej prezentacji
                <span aria-hidden>→</span>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Funkcje w detalach */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Możliwości"
            title="Co dokładnie dostajesz."
            description="Każda funkcja przechodzi ten sam test: czy zadziała, gdy ktoś korzysta z niej pierwszy raz, w stresie, o trzeciej w nocy?"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {featureDetails.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={(i % 2) * 0.08}>
                  <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-gradient-to-b from-card to-card-deep p-6 sm:p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mut">{feature.lead}</p>
                    <ul className="mt-4 space-y-2">
                      {feature.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-ink/85">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint">
                            <Check className="h-3 w-3" aria-hidden />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Granice produktu */}
      <section className="border-y border-white/5 bg-night-2 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeader
                  eyebrow="Granice"
                  title="Równie ważne jest to, czym ResourceGuard nie jest."
                  description="Zaufanie buduje się na jasnych granicach. Dlatego mówimy wprost, czego ta aplikacja nie robi — i nigdy nie będzie udawać, że robi."
                  align="left"
                  className="mb-8"
                />
                <ul className="space-y-3">
                  {notList.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl border border-white/8 bg-card/60 p-4 text-sm text-ink/90">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-warn/15 text-warn text-xs font-bold" aria-hidden>
                        ✕
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-mint/20 bg-mint/5 p-6 sm:p-8">
                <BookOpen className="h-6 w-6 text-mint" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  A co, jeśli potrzebujesz więcej?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mut">
                  ResourceGuard zawsze wskazuje drogę do prawdziwej pomocy:
                  całodobowych telefonów wsparcia, numeru alarmowego 112 i
                  oficjalnych materiałów. Aplikacja jest pierwszym krokiem —
                  nie ostatnim.
                </p>
                <div className="mt-5">
                  <Button href="/pomoc-teraz" variant="secondary" size="sm">
                    Zobacz telefony wsparcia
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="FAQ"
            title="Najczęstsze pytania."
          />
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/8 bg-card open:border-accent/25"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-mut transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-mut">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/12 via-night-2 to-mint/8 px-6 py-14 text-center sm:px-12">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Najlepiej po prostu to poczuć.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-mut">
                Demo działa w przeglądarce, niczego nie instalujesz i nie
                podajesz żadnych danych.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/demo" size="lg">
                  Uruchom demo
                </Button>
                <Button href="/#kontakt" variant="secondary" size="lg">
                  Dołącz do listy
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
