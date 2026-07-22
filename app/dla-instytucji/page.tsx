import type { Metadata } from "next";
import {
  Building2,
  Check,
  ClipboardList,
  Home,
  MessagesSquare,
  Rocket,
  School,
  SearchCheck,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Dla rodzin, szkół i organizacji",
  description:
    "ResourceGuard dla rodzin, szkół, fundacji i organizacji: wspólny język reagowania w kryzysie, materiały profilaktyczne i program pilotażowy.",
  alternates: { canonical: "/dla-instytucji" },
};

const paths = [
  {
    icon: Home,
    title: "Rodziny i opiekunowie",
    lead: "Wspólny plan na trudne sytuacje — od rozmowy o emocjach po domową checklistę awaryjną.",
    items: [
      "Domowy plan bezpieczeństwa budowany razem z dzieckiem",
      "Checklisty przygotowania: apteczka, dokumenty, zapasy, kontakty",
      "Materiały o wspieraniu dziecka w kryzysie — bez straszenia",
      "Wspólne kontakty awaryjne całej rodziny",
    ],
    note: "Dla rodzin przygotowujemy pakiet rodzinny w modelu freemium — podstawowe funkcje bezpieczeństwa pozostaną bezpłatne.",
  },
  {
    icon: School,
    title: "Szkoły i fundacje",
    lead: "Wspólny, prosty język reagowania dla całej placówki — uczniów, nauczycieli i rodziców.",
    items: [
      "Scenariusze zajęć profilaktycznych o reagowaniu w kryzysie",
      "System czterech trybów jako wspólny język w placówce",
      "Materiały dla pedagogów oparte na oficjalnych źródłach",
      "Program pilotażowy z realnym wpływem na rozwój produktu",
    ],
    note: "Szukamy placówek do pilotażu. Udział w pilotażu jest bezpłatny i obejmuje wsparcie wdrożeniowe.",
  },
  {
    icon: Building2,
    title: "Organizacje i partnerzy",
    lead: "Standard cyfrowego wsparcia kryzysowego budowany wspólnie z instytucjami pomocowymi.",
    items: [
      "Weryfikacja merytoryczna treści i procedur",
      "Dystrybucja narzędzia wśród podopiecznych organizacji",
      "Wdrożenia i materiały dla zespołów pracujących z ludźmi",
      "Współtworzenie modułów dopasowanych do specyfiki organizacji",
    ],
    note: "Jesteśmy otwarci na partnerstwa merytoryczne, technologiczne i dystrybucyjne.",
  },
];

const processSteps = [
  {
    icon: MessagesSquare,
    step: "1",
    title: "Rozmowa",
    text: "Krótki kontakt przez formularz. Opowiadasz o swojej placówce lub organizacji i potrzebach.",
  },
  {
    icon: SearchCheck,
    step: "2",
    title: "Dopasowanie",
    text: "Wspólnie ustalamy, które elementy ResourceGuard mają sens u Was — bez zobowiązań.",
  },
  {
    icon: ClipboardList,
    step: "3",
    title: "Pilotaż",
    text: "Testujecie materiały i narzędzie w praktyce. Zbieramy feedback i poprawiamy produkt.",
  },
  {
    icon: Rocket,
    step: "4",
    title: "Wdrożenie",
    text: "Placówka dostaje sprawdzony zestaw materiałów i narzędzi oraz wsparcie na start.",
  },
];

export default function InstitutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Współpraca"
        title="Wspólny język na trudne sytuacje — dla domu, szkoły i organizacji."
        description="Kryzys rzadko wybiera moment, w którym wszyscy wiedzą, co robić. ResourceGuard daje rodzinom i instytucjom jeden prosty system reagowania, który rozumie każdy — od ucznia po dyrektora."
      >
        <Button href="#kontakt" size="lg">
          Napisz do nas
        </Button>
        <Button href="/demo" variant="secondary" size="lg">
          Zobacz demo produktu
        </Button>
      </PageHero>

      {/* Trzy ścieżki */}
      <section className="border-y border-white/5 bg-night-2 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Ścieżki współpracy"
            title="Trzy drogi, jeden cel: mniej chaosu w kryzysie."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {paths.map((path, i) => {
              const Icon = path.icon;
              return (
                <Reveal key={path.title} delay={i * 0.08}>
                  <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-gradient-to-b from-card to-card-deep p-6 sm:p-7">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                      {path.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mut">{path.lead}</p>
                    <ul className="mt-4 flex-1 space-y-2.5">
                      {path.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-ink/85">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint">
                            <Check className="h-3 w-3" aria-hidden />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 rounded-xl border border-white/8 bg-night/50 p-4 text-xs leading-relaxed text-mut">
                      {path.note}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jak wygląda współpraca */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Model współpracy"
            title="Od pierwszej rozmowy do wdrożenia."
            description="Bez skomplikowanych umów na start. Zaczynamy od rozmowy i pilotażu — dalsze kroki ustalamy wspólnie."
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.step} delay={i * 0.08} className="h-full">
                  <li className="h-full rounded-2xl border border-white/8 bg-card p-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="font-display text-2xl font-semibold text-white/10">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mut">{step.text}</p>
                  </li>
                </Reveal>
              );
            })}
          </ol>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-warn/20 bg-warn/5 p-6 text-sm leading-relaxed text-ink/85">
              <p className="font-semibold text-ink">Uczciwa informacja o etapie projektu</p>
              <p className="mt-2 text-mut">
                ResourceGuard jest w fazie budowy. Nie pokazujemy wymyślonych
                logotypów partnerów ani zmyślonych statystyk — zamiast tego
                zapraszamy do współtworzenia produktu od wczesnego etapu, z
                realnym wpływem na jego kształt. Pierwsze placówki i organizacje
                partnerskie będą miały szczególne warunki współpracy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Kontakt */}
      <ContactSection defaultType="Szkoła / fundacja" />
    </>
  );
}
