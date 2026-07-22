import type { Metadata } from "next";
import {
  Accessibility,
  Check,
  Eye,
  HandHeart,
  HeartHandshake,
  Lock,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { values } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Misja i zasady",
  description:
    "Dlaczego powstaje ResourceGuard, komu pomaga i jakich zasad etycznych przestrzega. Jasne granice: czego produkt nie zastępuje i czego nigdy nie będzie udawał.",
  alternates: { canonical: "/misja" },
};

const principles = [
  {
    icon: HandHeart,
    title: "Bezpieczeństwo przed konwersją",
    text: "Żaden cel biznesowy nie usprawiedliwia straszenia użytkownika, dark patterns ani utrudniania dostępu do pomocy. Numer alarmowy i telefony wsparcia są zawsze na wierzchu — także dla osób, które nigdy nie zapłacą za produkt.",
  },
  {
    icon: Scale,
    title: "Jasne granice kompetencji",
    text: "ResourceGuard nie diagnozuje, nie leczy i nie obiecuje terapii. Mówimy wprost, czym aplikacja jest — narzędziem edukacyjnym i porządkującym pierwsze kroki — i czym nie jest.",
  },
  {
    icon: Lock,
    title: "Prywatność jako fundament",
    text: "Dane o kryzysie to jedne z najwrażliwszych danych, jakie istnieją. Dlatego domyślnie zapisujemy je lokalnie na urządzeniu użytkownika, zbieramy absolutne minimum i nie handlujemy żadnymi danymi.",
  },
  {
    icon: Eye,
    title: "Uczciwa komunikacja",
    text: "Nie pokazujemy zmyślonych opinii, wyników ani partnerów. Jeżeli czegoś jeszcze nie ma albo działa w ograniczonym zakresie — piszemy to wprost.",
  },
  {
    icon: Accessibility,
    title: "Dostępność dla każdego",
    text: "Prosty język, czytelny kontrast, obsługa klawiatury i ograniczonego ruchu. Aplikacja ma działać także wtedy, gdy głowa, ręce albo internet nie działają idealnie.",
  },
  {
    icon: Users,
    title: "Budowane z ludźmi, nie dla wskaźników",
    text: "Rozwijamy produkt w rozmowie z młodymi osobami, rodzicami, pedagogami i specjalistami. Ich potrzeby ważą więcej niż metryki zaangażowania.",
  },
];

const boundaries = [
  "Pomocy medycznej i psychoterapii — od tego są lekarze i terapeuci",
  "Interwencji kryzysowej — od tego są telefony wsparcia i ośrodki interwencji",
  "Służb ratunkowych — od tego jest numer alarmowy 112",
  "Porady prawnej — od tego są prawnicy i instytucje pomocowe",
];

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Misja"
        title="Technologia, która ma uspokajać — nie przytłaczać."
        description="ResourceGuard powstaje z prostego założenia: w kryzysie człowiek nie potrzebuje więcej chaosu ani więcej informacji. Potrzebuje spokoju, jednego jasnego kroku i pewności, że pomoc istnieje."
      >
        <Button href="/#kontakt" size="lg">
          Dołącz do projektu
        </Button>
        <Button href="/produkt" variant="secondary" size="lg">
          Zobacz, jak działa produkt
        </Button>
      </PageHero>

      {/* Dlaczego */}
      <section className="border-y border-white/5 bg-night-2 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <Reveal>
              <div className="space-y-5 text-base leading-relaxed text-mut">
                <SectionHeader
                  eyebrow="Po co to robimy"
                  title="Pierwsza minuta kryzysu decyduje o zbyt wielu rzeczach."
                  align="left"
                  className="mb-6"
                />
                <p>
                  Kiedy dzieje się coś trudnego — atak paniki, wypadek, przemoc,
                  utrata poczucia bezpieczeństwa — większość z nas nie wie, od
                  czego zacząć. Informacje istnieją, ale są rozproszone po
                  dziesiątkach stron, napisane językiem urzędów albo ukryte w
                  długich artykułach, których w stresie nikt nie przeczyta.
                </p>
                <p>
                  ResourceGuard porządkuje ten chaos. Cztery proste tryby
                  bezpieczeństwa, krótkie kroki zamiast ścian tekstu, plan
                  przygotowany wcześniej i dostęp do najważniejszych informacji
                  także offline. Dla nastolatka, który nie wie, co się z nim
                  dzieje. Dla rodzica, który chce być gotowy. Dla szkoły, która
                  potrzebuje wspólnego języka reagowania.
                </p>
                <p>
                  Wierzymy, że cyfrowe wsparcie kryzysowe powinno być tak
                  oczywiste jak apteczka w domu — i tak samo dostępne dla
                  każdego, niezależnie od wieku i zasobności portfela.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-card p-6 sm:p-8">
                <ShieldCheck className="h-7 w-7 text-accent" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  Czego ResourceGuard nie zastępuje
                </h3>
                <ul className="mt-4 space-y-3">
                  {boundaries.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-mut">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-warn" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-white/5 pt-4 text-xs leading-relaxed text-mut">
                  W sytuacji bezpośredniego zagrożenia życia lub zdrowia zawsze
                  dzwoń pod numer alarmowy 112.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Zasady */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Zasady etyczne"
            title="Sześć zasad, których się trzymamy."
            description="To nie są hasła z prezentacji. To kryteria, według których podejmujemy każdą decyzję produktową."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, i) => {
              const Icon = principle.icon;
              return (
                <Reveal key={principle.title} delay={(i % 3) * 0.08}>
                  <article className="h-full rounded-2xl border border-white/8 bg-card p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-mint/20 bg-mint/10 text-mint">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-ink">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mut">{principle.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wartości */}
      <section className="border-y border-white/5 bg-night-2 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Wartości"
            title="Co znaczy dla nas „dobrze zaprojektowane”."
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <li
                key={value.title}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-card/60 p-4"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{value.title}</p>
                  <p className="mt-0.5 text-sm text-mut">{value.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 via-night-2 to-mint/8 px-6 py-12 text-center sm:px-12">
              <HeartHandshake className="mx-auto h-8 w-8 text-accent" aria-hidden />
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Jeśli te zasady są Ci bliskie — zbudujmy to razem.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-mut">
                Szukamy osób testujących, placówek pilotażowych i partnerów
                merytorycznych.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button href="/#kontakt" size="lg">
                  Napisz do nas
                </Button>
                <Button href="/dla-instytucji" variant="secondary" size="lg">
                  Współpraca z instytucjami
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
