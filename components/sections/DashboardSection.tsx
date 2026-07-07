"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, Circle, Gauge } from "lucide-react";
import clsx from "clsx";
import {
  dashboardChecklist,
  dashboardStats,
  readinessScore,
  weeklyActivity,
} from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const toneBar: Record<string, string> = {
  accent: "bg-accent",
  mint: "bg-mint",
  lav: "bg-lav",
  warn: "bg-warn",
};

const toneChip: Record<string, string> = {
  accent: "bg-accent/10 text-accent",
  mint: "bg-mint/10 text-mint",
  lav: "bg-lav/10 text-lav",
  warn: "bg-warn/10 text-warn",
};

const days = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];

export default function DashboardSection() {
  const reduceMotion = useReducedMotion();
  const [score, setScore] = useState(0);
  const started = useRef(false);

  function startCounter() {
    if (started.current) return;
    started.current = true;
    if (reduceMotion) {
      setScore(readinessScore);
      return;
    }
    const t0 = performance.now();
    const duration = 1100;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setScore(Math.round(readinessScore * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  return (
    <section id="dashboard" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Dashboard"
          title="Twoja gotowość w jednym miejscu."
          description="Dashboard nie ocenia. Pokazuje, co już masz zabezpieczone — i co warto jeszcze przygotować."
        />

        <Reveal>
          <motion.div
            className="rounded-3xl border border-white/8 bg-card-deep p-5 sm:p-8"
            onViewportEnter={startCounter}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:gap-6">
              {/* Left column */}
              <div className="space-y-4">
                {/* Readiness */}
                <div className="rounded-2xl border border-white/8 bg-card p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Gauge className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">
                          Poziom przygotowania
                        </p>
                        <p className="text-xs text-mut">
                          Aktualizowany po każdej checkliście
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-3xl font-semibold tabular-nums text-ink"
                      aria-label={`Poziom przygotowania: ${readinessScore} procent`}
                    >
                      {score}%
                    </p>
                  </div>
                  <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/8" aria-hidden>
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-mint"
                      initial={
                        reduceMotion
                          ? { width: `${readinessScore}%` }
                          : { width: 0 }
                      }
                      whileInView={{ width: `${readinessScore}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {dashboardStats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/8 bg-card p-5 transition-colors duration-300 hover:border-accent/25"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs text-mut">{stat.label}</p>
                        <span
                          className={clsx(
                            "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium",
                            toneChip[stat.tone]
                          )}
                        >
                          {stat.status}
                        </span>
                      </div>
                      <p className="mt-1 text-lg font-semibold text-ink">
                        {stat.value}
                      </p>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8" aria-hidden>
                        <motion.div
                          className={clsx(
                            "h-full rounded-full",
                            toneBar[stat.tone]
                          )}
                          initial={
                            reduceMotion
                              ? { width: `${stat.percent}%` }
                              : { width: 0 }
                          }
                          whileInView={{ width: `${stat.percent}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: 0.1 + i * 0.08,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-4">
                {/* Weekly activity */}
                <div className="rounded-2xl border border-white/8 bg-card p-5 sm:p-6">
                  <p className="text-sm font-medium text-ink">
                    Aktywność w tym tygodniu
                  </p>
                  <p className="text-xs text-mut">
                    Ćwiczenia, checklisty i przeglądy
                  </p>
                  <div
                    className="mt-5 flex h-28 items-end gap-2"
                    role="img"
                    aria-label="Wykres aktywności w tym tygodniu"
                  >
                    {weeklyActivity.map((value, i) => (
                      <div
                        key={days[i]}
                        className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                      >
                        <motion.div
                          className={clsx(
                            "w-full rounded-md transition-colors",
                            i === 5
                              ? "bg-accent"
                              : "bg-accent/30 hover:bg-accent/50"
                          )}
                          initial={
                            reduceMotion
                              ? { height: `${value}%` }
                              : { height: 0 }
                          }
                          whileInView={{ height: `${value}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.7,
                            delay: 0.15 + i * 0.06,
                            ease: "easeOut",
                          }}
                        />
                        <span className="text-[10px] text-mut">{days[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checklist */}
                <div className="rounded-2xl border border-white/8 bg-card p-5 sm:p-6">
                  <p className="text-sm font-medium text-ink">
                    Najbliższe kroki
                  </p>
                  <ul className="mt-4 space-y-3">
                    {dashboardChecklist.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-center gap-2.5 text-sm"
                      >
                        {item.done ? (
                          <CheckCircle2
                            className="h-4 w-4 shrink-0 text-mint"
                            aria-hidden
                          />
                        ) : (
                          <Circle
                            className="h-4 w-4 shrink-0 text-mut/50"
                            aria-hidden
                          />
                        )}
                        <span className={item.done ? "text-ink" : "text-mut"}>
                          {item.label}
                        </span>
                        {!item.done && (
                          <span className="ml-auto rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-mut">
                            zaplanuj
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-white/5 pt-3 text-xs text-mut">
                    Dashboard nie ocenia. Pokazuje, co warto jeszcze przygotować.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
