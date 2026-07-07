import { pillars } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function SolutionSection() {
  return (
    <section className="border-y border-white/5 bg-night-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Rozwiązanie"
          title="Jeden spokojny system na trudne momenty."
          description="ResourceGuard porządkuje wsparcie kryzysowe w krótkie, przygotowane wcześniej ścieżki. W kryzysie człowiek nie potrzebuje długich artykułów — potrzebuje jasnego pierwszego kroku."
        />

        <div className="relative grid gap-4 md:grid-cols-3 md:gap-6">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-[52px] right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-accent/40 via-mint/40 to-lav/40 md:block"
            aria-hidden
          />

          {pillars.map(({ icon: Icon, step, title, text }, i) => (
            <Reveal key={step} delay={i * 0.1}>
              <article className="relative h-full rounded-2xl border border-white/8 bg-card p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-night text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-2xl font-semibold text-white/10">{step}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mut">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
