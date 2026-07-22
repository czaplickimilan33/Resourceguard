import type { Metadata } from "next";
import { FlaskConical, Lock, WifiOff } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import DemoApp from "@/components/demo/DemoApp";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Interaktywne demo",
  description:
    "Wypróbuj ResourceGuard w przeglądarce: wybierz tryb bezpieczeństwa, przygotuj plan bezpieczeństwa, dodaj kontakty i wykonaj ćwiczenie oddechu. Dane zostają na Twoim urządzeniu.",
  alternates: { canonical: "/demo" },
};

const demoFacts = [
  {
    icon: FlaskConical,
    title: "To jest demo",
    text: "Pokazuje planowane działanie aplikacji. Nie monitoruje Twojego stanu i nie wysyła żadnych zgłoszeń.",
  },
  {
    icon: Lock,
    title: "Dane zostają u Ciebie",
    text: "Plan, kontakty i postęp zapisują się wyłącznie w Twojej przeglądarce. Usuniesz je jednym przyciskiem.",
  },
  {
    icon: WifiOff,
    title: "Działa offline",
    text: "Po pierwszej wizycie demo i telefony wsparcia są dostępne także bez internetu.",
  },
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Interaktywne demo"
        title="Poczuj, jak działa spokojna pomoc."
        description="Prawdziwe interakcje, prawdziwy stan, zero rejestracji. Wybierz tryb bezpieczeństwa i zobacz, jak aplikacja dopasowuje się do sytuacji."
      />

      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {demoFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.title}
                  className="rounded-2xl border border-white/8 bg-card/60 p-4"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="mt-2.5 text-sm font-semibold text-ink">{fact.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-mut">{fact.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <DemoApp />
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 via-night-2 to-mint/8 px-6 py-12 text-center sm:px-12">
              <h2 className="mx-auto max-w-2xl font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Podoba Ci się ten kierunek?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-mut">
                Dołącz do listy wczesnego dostępu — osoby z listy jako pierwsze
                testują nowe funkcje i mają realny wpływ na produkt.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button href="/#kontakt" size="lg">
                  Dołącz do listy
                </Button>
                <Button href="/produkt" variant="secondary" size="lg">
                  Poznaj wszystkie funkcje
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
