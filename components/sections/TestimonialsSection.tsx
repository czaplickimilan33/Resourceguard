import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function TestimonialsSection() {
  return (
    <section className="border-y border-white/5 bg-night-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Opinie"
          title="Głosy z pierwszych rozmów."
          description="Fragmenty rozmów o prototypie z osobami, dla których ResourceGuard powstaje."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/8 bg-card p-6">
                <Quote className="h-6 w-6 text-accent/50" aria-hidden />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/90">
                  „{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-white/5 pt-4 text-xs font-medium tracking-wide text-mut uppercase">
                  {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
