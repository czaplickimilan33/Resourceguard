"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Pause, Play, RotateCcw } from "lucide-react";
import clsx from "clsx";

const INHALE_MS = 4000;
const EXHALE_MS = 6000;
const TOTAL_CYCLES = 6;

type Phase = "idle" | "inhale" | "exhale" | "done";

/**
 * Interaktywne ćwiczenie oddechu 4–6: sześć cykli (ok. minuta).
 * Przy prefers-reduced-motion koło nie skaluje się — prowadzenie
 * odbywa się tekstem i licznikiem.
 */
export default function BreathingExercise({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [cycle, setCycle] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();

  const running = phase === "inhale" || phase === "exhale";

  useEffect(() => {
    if (!running) return;

    if (phase === "inhale") {
      timerRef.current = setTimeout(() => setPhase("exhale"), INHALE_MS);
    } else if (phase === "exhale") {
      timerRef.current = setTimeout(() => {
        setCycle((c) => {
          const next = c + 1;
          if (next >= TOTAL_CYCLES) {
            setPhase("done");
            onComplete?.();
            return next;
          }
          setPhase("inhale");
          return next;
        });
      }, EXHALE_MS);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phase, running, onComplete]);

  function start() {
    setCycle(0);
    setPhase("inhale");
  }

  function stop() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setPhase("idle");
    setCycle(0);
  }

  const label =
    phase === "inhale"
      ? "Wdech… licz do 4"
      : phase === "exhale"
        ? "Wydech… licz do 6"
        : phase === "done"
          ? "Dobra robota. Możesz powtórzyć w każdej chwili."
          : "Usiądź wygodnie i naciśnij start.";

  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/8 bg-card p-6 sm:p-8">
      <div className="relative flex h-48 w-48 items-center justify-center">
        {/* Zewnętrzny pierścień */}
        <div className="absolute inset-0 rounded-full border border-lav/20" aria-hidden />
        {/* Oddychające koło */}
        <div
          aria-hidden
          className={clsx(
            "absolute inset-4 rounded-full bg-gradient-to-br from-lav/30 to-accent/20",
            !reduceMotion && "transition-transform ease-in-out"
          )}
          style={
            reduceMotion
              ? undefined
              : {
                  transform:
                    phase === "inhale"
                      ? "scale(1)"
                      : phase === "exhale"
                        ? "scale(0.68)"
                        : "scale(0.8)",
                  transitionDuration:
                    phase === "inhale"
                      ? `${INHALE_MS}ms`
                      : phase === "exhale"
                        ? `${EXHALE_MS}ms`
                        : "400ms",
                }
          }
        />
        <p
          className="relative z-10 max-w-[10rem] text-center text-sm font-medium text-ink"
          aria-live="polite"
        >
          {label}
        </p>
      </div>

      <p className="mt-4 text-xs text-mut" aria-live="polite">
        {phase === "done"
          ? `Ukończono ${TOTAL_CYCLES} cykli`
          : running
            ? `Cykl ${cycle + 1} z ${TOTAL_CYCLES}`
            : "6 cykli · około minuty"}
      </p>

      <div className="mt-5 flex gap-3">
        {!running ? (
          <button
            type="button"
            onClick={start}
            className="inline-flex items-center gap-2 rounded-xl bg-lav px-5 py-2.5 text-sm font-semibold text-night transition hover:bg-violet-300 active:scale-[0.98]"
          >
            {phase === "done" ? (
              <>
                <RotateCcw className="h-4 w-4" aria-hidden />
                Jeszcze raz
              </>
            ) : (
              <>
                <Play className="h-4 w-4" aria-hidden />
                Start
              </>
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={stop}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-white/10 active:scale-[0.98]"
          >
            <Pause className="h-4 w-4" aria-hidden />
            Zatrzymaj
          </button>
        )}
      </div>
    </div>
  );
}
