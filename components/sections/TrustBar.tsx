import { trustIndicators } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function TrustBar() {
  return (
    <section aria-label="Najważniejsze wartości" className="pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {trustIndicators.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-card/60 px-4 py-3.5"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-sm text-ink">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
