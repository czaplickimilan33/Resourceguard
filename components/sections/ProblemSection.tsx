import { problems } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Problem"
          title="W kryzysie najtrudniejsza jest pierwsza minuta."
          description="Kiedy dzieje się coś trudnego, większość z nas nie potrzebuje więcej informacji — potrzebuje jednej jasnej wskazówki, co zrobić najpierw."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-white/8 bg-card p-6 transition-colors duration-300 hover:border-warn/25 hover:bg-card/70">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-warn/20 bg-warn/10 text-warn">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mut">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
