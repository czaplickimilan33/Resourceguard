"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, PhoneCall, Signal, Wifi } from "lucide-react";
import clsx from "clsx";
import { safetyModes, type SafetyMode } from "@/lib/safety-modes";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * Scrollytelling: przewijanie przez cztery tryby bezpieczeństwa.
 * Na desktopie przypięty mockup telefonu zmienia interfejs wraz z tym,
 * który krok znajduje się na środku ekranu. Na mobile każdy krok ma
 * własny, kompaktowy podgląd ekranu.
 */

function ModeScreen({ mode, compact = false }: { mode: SafetyMode; compact?: boolean }) {
  const Icon = mode.icon;
  return (
    <div
      className={clsx(
        "flex h-full flex-col rounded-[1.75rem] bg-night-2 text-left",
        compact ? "p-4" : "p-5"
      )}
    >
      {/* Pasek statusu telefonu */}
      <div className="flex items-center justify-between text-[10px] text-mut">
        <span>9:41</span>
        <span className="flex items-center gap-1.5">
          <Signal className="h-3 w-3" aria-hidden />
          <Wifi className="h-3 w-3" aria-hidden />
        </span>
      </div>

      {/* Status trybu */}
      <div
        className={clsx(
          "mt-4 flex items-center gap-3 rounded-2xl border p-3.5",
          mode.color.border,
          mode.color.bg
        )}
      >
        <span
          className={clsx(
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
            mode.color.bg,
            mode.color.text
          )}
        >
          <Icon className="h-[18px] w-[18px]" aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] font-medium uppercase tracking-wider text-mut">
            Tryb {mode.level} z 4
          </p>
          <p className="truncate text-sm font-semibold text-ink">{mode.name}</p>
        </div>
        <span
          className={clsx("ml-auto h-2 w-2 shrink-0 rounded-full", mode.color.solid)}
          aria-hidden
        />
      </div>

      {/* Odpowiedź aplikacji */}
      <p className={clsx("mt-4 text-xs leading-relaxed text-mut", compact && "line-clamp-3")}>
        {mode.appResponse}
      </p>

      {/* Kroki */}
      <ul className="mt-4 space-y-2">
        {mode.actions.slice(0, compact ? 2 : 3).map((action, i) => (
          <li
            key={action}
            className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-card p-3"
          >
            <span
              className={clsx(
                "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold",
                mode.color.bg,
                mode.color.text
              )}
            >
              {i + 1}
            </span>
            <span className="text-xs leading-relaxed text-ink">{action}</span>
          </li>
        ))}
      </ul>

      {/* W trybie pilnym: duży przycisk połączenia */}
      {mode.id === "pilna" ? (
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-mode-urgent py-3.5 text-sm font-semibold text-night">
            <PhoneCall className="h-4 w-4" aria-hidden />
            Zadzwoń: 112
          </div>
        </div>
      ) : (
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-card px-4 py-3">
            <span className="text-[11px] text-mut">Dostępne offline</span>
            <Check className="h-3.5 w-3.5 text-mint" aria-hidden />
          </div>
        </div>
      )}
    </div>
  );
}

export default function SafetyModesSection() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1) setActive(idx);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const activeMode = safetyModes[active];

  return (
    <section id="tryby" className="relative border-y border-white/5 bg-night-2/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Tryby bezpieczeństwa"
          title="Jeden system na każdą sytuację."
          description="Zamiast oceniać, „jak bardzo jest źle”, wybierasz jeden z czterech trybów. Każdy ma nazwę, ikonę i numer — a aplikacja dopasowuje do niego wszystko, co widzisz."
        />

        <div className="lg:grid lg:grid-cols-[1fr_minmax(0,380px)] lg:gap-16">
          {/* Kroki */}
          <div>
            {safetyModes.map((mode, i) => {
              const Icon = mode.icon;
              const isActive = i === active;
              return (
                <div
                  key={mode.id}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="flex min-h-[52vh] flex-col justify-center py-10 lg:min-h-[64vh]"
                >
                  <div
                    className={clsx(
                      "border-l-2 pl-6 transition-colors duration-500 sm:pl-8",
                      isActive ? mode.color.border.replace("/30", "/70") : "border-white/10"
                    )}
                  >
                    <p
                      className={clsx(
                        "font-display text-sm font-semibold tracking-widest transition-colors duration-500",
                        isActive ? mode.color.text : "text-mut/60"
                      )}
                    >
                      TRYB 0{mode.level}
                    </p>
                    <h3 className="mt-3 flex items-center gap-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      <span
                        className={clsx(
                          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-500",
                          isActive
                            ? clsx(mode.color.bg, mode.color.border, mode.color.text)
                            : "border-white/10 bg-white/5 text-mut"
                        )}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      {mode.name}
                    </h3>
                    <p className="mt-3 text-sm font-medium text-ink/80">
                      „{mode.feeling}”
                    </p>
                    <p className="mt-3 max-w-md leading-relaxed text-mut">
                      {mode.description}
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-mut">
                      <span className={clsx("font-medium", mode.color.text)}>
                        Co robi aplikacja:
                      </span>{" "}
                      {mode.appResponse}
                    </p>

                    {/* Kompaktowy podgląd na mobile */}
                    <div className="mt-6 max-w-[300px] lg:hidden">
                      <div className="rounded-[2rem] border border-white/10 bg-card-deep p-1.5 shadow-2xl">
                        <ModeScreen mode={mode} compact />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Przypięty telefon (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div
                className={clsx(
                  "rounded-[2.25rem] border bg-card-deep p-2 shadow-2xl transition-colors duration-700",
                  activeMode.color.border
                )}
              >
                <div className="h-[560px]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeMode.id}
                      className="h-full"
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                      transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
                    >
                      <ModeScreen mode={activeMode} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Wskaźnik postępu */}
              <div
                className="mt-6 flex items-center justify-center gap-2"
                role="img"
                aria-label={`Aktywny tryb: ${activeMode.name} (${active + 1} z 4)`}
              >
                {safetyModes.map((mode, i) => (
                  <span
                    key={mode.id}
                    className={clsx(
                      "h-1.5 rounded-full transition-all duration-500",
                      i === active
                        ? clsx("w-8", mode.color.solid)
                        : "w-1.5 bg-white/15"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
