import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { segments } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

/**
 * Cztery ścieżki odbiorców z konkretną propozycją wartości.
 * Zamiast zmyślonych opinii — realne przypadki użycia i model współpracy.
 */
export default function SegmentsSection() {
  return (
    <section id="odbiorcy" className="border-y border-white/5 bg-night-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Dla kogo"
          title="Jedno narzędzie, cztery ścieżki."
          description="ResourceGuard budujemy razem z osobami, które będą z niego korzystać — od pojedynczych użytkowników po całe placówki."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {segments.map((segment, i) => {
            const Icon = segment.icon;
            return (
              <Reveal key={segment.id} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-white/8 bg-gradient-to-b from-card to-card-deep p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {segment.title}
                      </h3>
                      <p className="text-xs text-mut">{segment.subtitle}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-mut">{segment.text}</p>

                  <ul className="mt-4 flex-1 space-y-2">
                    {segment.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-ink/85">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint">
                          <Check className="h-3 w-3" aria-hidden />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={segment.cta.href}
                    className="mt-5 inline-flex items-center gap-1.5 border-t border-white/5 pt-4 text-sm font-medium text-accent transition-colors hover:text-sky-300"
                  >
                    {segment.cta.label}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
