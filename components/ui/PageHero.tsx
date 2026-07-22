import type { ReactNode } from "react";
import Badge from "@/components/ui/Badge";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Dodatkowa zawartość pod opisem, np. przyciski CTA. */
  children?: ReactNode;
}

/** Wspólny nagłówek podstron — spójny odstęp od przyklejonej nawigacji. */
export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-40 pb-14 sm:pt-48 sm:pb-16">
      <AnimatedBackground />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mut">
              {description}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
