"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { AlertTriangle, Check, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { crisisScenarios } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function CrisisModeDemo() {
  const [activeId, setActiveId] = useState(crisisScenarios[0].id);
  const [doneSteps, setDoneSteps] = useState<number[]>([]);
  const reduceMotion = useReducedMotion();

  const active =
    crisisScenarios.find((s) => s.id === activeId) ?? crisisScenarios[0];

  function selectScenario(id: string) {
    if (id === activeId) return;
    setActiveId(id);
    setDoneSteps([]);
  }

  function toggleStep(index: number) {
    setDoneSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  const progress = Math.round((doneSteps.length / active.steps.length) * 100);

  return (
    <section id="crisis-mode" className="border-y border-white/5 bg-night-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Tryb kryzysowy"
          title="Zobacz, jak wygląda pomoc w praktyce."
          description="Wybierz sytuację, a ResourceGuard pokaże krótką, spokojną ścieżkę działania. Bez ściany tekstu — najpierw najważniejszy krok."
        />

        <div className="grid gap-4 rounded-3xl border border-white/8 bg-night/60 p-4 sm:p-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-6 lg:p-8">
          {/* Scenario list */}
          <div
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
            role="tablist"
            aria-label="Scenariusze kryzysowe"
          >
            {crisisScenarios.map((scenario) => {
              const Icon = scenario.icon;
              const isActive = scenario.id === activeId;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  role="tab"
                  id={`tab-${scenario.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${scenario.id}`}
                  onClick={() => selectScenario(scenario.id)}
                  className={clsx(
                    "flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                    isActive
                      ? "border-accent/40 bg-accent/10 text-ink shadow-[0_0_20px_rgba(56,189,248,0.08)]"
                      : "border-white/8 bg-card/50 text-mut hover:border-white/15 hover:bg-white/5 hover:text-ink"
                  )}
                >
                  <span
                    className={clsx(
                      "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                      isActive ? "bg-accent/15 text-accent" : "bg-white/5 text-mut"
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="whitespace-nowrap lg:whitespace-normal">
                    {scenario.label}
                  </span>
                  <ChevronRight
                    className={clsx(
                      "ml-auto hidden h-4 w-4 shrink-0 transition-transform lg:block",
                      isActive ? "translate-x-0.5 text-accent" : "text-mut/40"
                    )}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>

          {/* Active panel */}
          <div className="min-h-[460px] rounded-2xl border border-white/8 bg-card-deep p-5 sm:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="tabpanel"
                id={`panel-${active.id}`}
                aria-labelledby={`tab-${active.id}`}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Badge tone="mint">{active.badge}</Badge>
                  <div className="flex items-center gap-2 text-xs text-mut">
                    <span aria-live="polite">
                      Wykonane: {doneSteps.length}/{active.steps.length}
                    </span>
                    <span className="h-1.5 w-16 overflow-hidden rounded-full bg-white/8">
                      <span
                        className="block h-full rounded-full bg-mint transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {active.headline}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-mut">
                  {active.message}
                </p>

                <ol className="mt-6 space-y-3">
                  {active.steps.map((step, i) => {
                    const done = doneSteps.includes(i);
                    return (
                      <motion.li
                        key={step}
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.08 + i * 0.07 }}
                      >
                        <button
                          type="button"
                          aria-pressed={done}
                          onClick={() => toggleStep(i)}
                          className={clsx(
                            "flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors duration-200",
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                            done
                              ? "border-mint/30 bg-mint/5"
                              : "border-white/8 bg-card hover:border-white/15"
                          )}
                        >
                          <span
                            className={clsx(
                              "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors",
                              done
                                ? "bg-mint/20 text-mint"
                                : "bg-accent/15 text-accent"
                            )}
                          >
                            {done ? (
                              <Check className="h-3.5 w-3.5" aria-hidden />
                            ) : (
                              i + 1
                            )}
                          </span>
                          <span
                            className={clsx(
                              "text-sm leading-relaxed",
                              done ? "text-ink/70" : "text-ink"
                            )}
                          >
                            {step}
                          </span>
                        </button>
                      </motion.li>
                    );
                  })}
                </ol>
                <p className="mt-3 text-xs text-mut">
                  Kliknij krok, żeby oznaczyć go jako wykonany — tak działa to w
                  aplikacji.
                </p>

                <div className="mt-5 flex items-start gap-3 rounded-xl border border-warn/25 bg-warn/8 p-4">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warn" aria-hidden />
                  <p className="text-sm leading-relaxed text-ink/90">
                    {active.reminder}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="#contact">Dołącz do listy</Button>
                  <Button href="#features" variant="ghost">
                    Zobacz wszystkie funkcje
                    <ChevronRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
