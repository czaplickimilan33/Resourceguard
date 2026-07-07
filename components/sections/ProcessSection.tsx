import { processSteps } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function ProcessSection() {
  return (
    <section className="border-y border-white/5 bg-night-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Jak to działa"
          title="Jak ResourceGuard pomaga w praktyce?"
          description="Nie wszystko trzeba wiedzieć w stresie. Część rzeczy można przygotować wcześniej."
        />

        {/* Mobile: vertical timeline / Desktop: horizontal cards */}
        <ol className="relative space-y-6 border-l border-white/10 pl-6 md:grid md:grid-cols-4 md:gap-5 md:space-y-0 md:border-l-0 md:pl-0">
          {processSteps.map((step, i) => (
            <li key={step.step} className="relative">
              {/* Timeline dot (mobile) */}
              <span
                className="absolute top-1 -left-[31px] h-2.5 w-2.5 rounded-full border-2 border-night-2 bg-accent md:hidden"
                aria-hidden
              />
              <Reveal delay={i * 0.1} className="h-full">
                <div className="h-full rounded-2xl border border-white/8 bg-card p-6">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-sm font-semibold text-accent">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mut">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
