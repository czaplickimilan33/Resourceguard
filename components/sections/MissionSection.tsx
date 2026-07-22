import { AlertTriangle, Check } from "lucide-react";
import { disclaimer, values } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function MissionSection() {
  return (
    <section id="misja" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Misja"
          title="Technologia, która ma uspokajać — nie przytłaczać."
          align="left"
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-mut">
              <p>
                ResourceGuard powstaje z prostego założenia: w kryzysie człowiek
                nie potrzebuje chaosu. Potrzebuje prostych kroków, spokoju
                i dostępu do najważniejszych informacji.
              </p>
              <p>
                Dlatego projektujemy każdy ekran tak, żeby był zrozumiały wtedy,
                kiedy głowa nie działa idealnie. Krótkie instrukcje zamiast
                długich artykułów. Jeden krok na raz zamiast wszystkiego naraz.
                Informacje dostępne offline, bo sieć potrafi zawieść w
                najmniej odpowiednim momencie.
              </p>
              <p>
                Równie ważne są granice. ResourceGuard pomaga się przygotować
                i uporządkować pierwsze kroki — ale nie diagnozuje, nie leczy
                i nie zastępuje specjalistów. To narzędzie edukacyjne
                i wspierające, nie służba ratunkowa.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/misja" variant="secondary">
                  Poznaj misję i zasady projektu
                </Button>
                <Button href="/#kontakt" variant="ghost">
                  Napisz w sprawie współpracy
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex items-start gap-4 rounded-2xl border border-warn/25 bg-warn/6 p-6">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warn/15 text-warn">
                <AlertTriangle className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-ink">Ważne</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/85">
                  {disclaimer}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
        </Reveal>
      </div>
    </section>
  );
}
