"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  CheckCircle2,
  ChevronRight,
  Circle,
  Siren,
  WifiOff,
  Wind,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const checklist = [
  { label: "Kontakty awaryjne", done: true },
  { label: "Poradniki offline", done: true },
  { label: "Plan domowy", done: false },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  return (
    <section id="start" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <AnimatedBackground />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <motion.div {...fadeUp(0)}>
            <Badge>Projekt wsparcia kryzysowego</Badge>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Spokojna pomoc, gdy sytuacja{" "}
            <span className="bg-gradient-to-r from-accent to-mint bg-clip-text text-transparent">
              przestaje być spokojna.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mut"
          >
            ResourceGuard to cyfrowy system wsparcia kryzysowego, który łączy
            proste instrukcje, pierwszą pomoc, wsparcie psychiczne i tryb
            offline w jednej, przejrzystej aplikacji.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact" size="lg">
              Dołącz do listy
            </Button>
            <Button href="#crisis-mode" variant="secondary" size="lg">
              Zobacz tryb kryzysowy
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Button>
          </motion.div>

          <motion.p {...fadeUp(0.4)} className="mt-5 text-xs text-mut">
            W sytuacji bezpośredniego zagrożenia zawsze kontaktuj się z lokalnym
            numerem alarmowym.
          </motion.p>
        </div>

        {/* App mockup */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Floating breath card */}
          <div className="absolute -left-10 top-16 hidden rounded-xl border border-white/10 bg-card-deep/90 px-4 py-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-mint/15 text-mint">
              <Wind className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-medium text-ink">Oddech 4–6</p>
              <p className="text-[11px] text-mut">Ćwiczenie uspokajające</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-card-deep/80 p-5 shadow-2xl backdrop-blur">
            {/* Status */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/10 px-3 py-1 text-xs font-medium text-mint">
                <span className="dot-pulse h-2 w-2 rounded-full bg-mint" aria-hidden />
                Tryb spokojny aktywny
              </span>
              <span className="text-[11px] text-mut">ResourceGuard</span>
            </div>

            {/* Readiness */}
            <div className="mt-5 rounded-2xl border border-white/8 bg-card p-4">
              <div className="flex items-end justify-between">
                <p className="text-xs text-mut">Poziom przygotowania</p>
                <p className="text-2xl font-semibold text-ink">72%</p>
              </div>
              <div
                className="mt-3 h-2 overflow-hidden rounded-full bg-white/8"
                role="img"
                aria-label="Poziom przygotowania: 72 procent"
              >
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-mint"
                  initial={reduceMotion ? { width: "72%" } : { width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{ duration: 1.1, delay: 0.7, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-3 rounded-2xl border border-white/8 bg-card p-4">
              <p className="text-xs font-medium text-ink">Checklista awaryjna</p>
              <ul className="mt-3 space-y-2.5">
                {checklist.map((item) => (
                  <li key={item.label} className="flex items-center gap-2.5 text-xs">
                    {item.done ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-mint" aria-hidden />
                    ) : (
                      <Circle className="h-4 w-4 shrink-0 text-mut/50" aria-hidden />
                    )}
                    <span className={item.done ? "text-ink" : "text-mut"}>
                      {item.label}
                    </span>
                    {!item.done && (
                      <span className="ml-auto rounded-full bg-warn/10 px-2 py-0.5 text-[10px] text-warn">
                        do uzupełnienia
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Crisis card + offline */}
            <div className="mt-3 grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-accent/20 bg-accent/8 p-4">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Siren className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-ink">Tryb kryzysowy</p>
                  <p className="truncate text-[11px] text-mut">
                    Krótkie kroki na trudny moment
                  </p>
                </div>
                <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-mut" aria-hidden />
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-card p-4">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-mut">
                  <WifiOff className="h-4 w-4" aria-hidden />
                </span>
                <p className="text-xs text-mut">
                  <span className="font-medium text-ink">8 poradników</span>{" "}
                  dostępnych offline
                </p>
                <span className="ml-auto rounded-full bg-mint/10 px-2 py-0.5 text-[10px] text-mint">
                  Gotowe
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
