"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { AlertTriangle, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { crisisScenarios } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function CrisisModeDemo() {
  const [activeId, setActiveId] = useState(crisisScenarios[0].id);
  const reduceMotion = useReducedMotion();

  const active =
    crisisScenarios.find((s) => s.id === activeId) ?? crisisScenarios[0];

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
            aria-orientation="vertical"
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
                  onClick={() => setActiveId(scenario.id)}
                  className={clsx(
                    "flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors duration-200",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                    isActive
                      ? "border-accent/40 bg-accent/10 text-ink"
                      : "border-white/8 bg-card/50 text-mut hover:bg-white/5 hover:text-ink"
                  )}
                >
                  <span
                    className={clsx(
                      "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
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
                      "ml-auto hidden h-4 w-4 shrink-0 lg:block",
                      isActive ? "text-accent" : "text-mut/40"
                    )}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>

          {/* Active panel */}
          <div className="min-h-[420px] rounded-2xl border border-white/8 bg-card-deep p-5 sm:p-7">
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
                <Badge tone="mint">{active.badge}</Badge>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {active.headline}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-mut">
                  {active.message}
                </p>

                <ol className="mt-6 space-y-3">
                  {active.steps.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 rounded-xl border border-white/8 bg-card p-4"
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-semibold text-accent">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-ink">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

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
                    <ChevronRight className="h-4 w-4" aria-hidden />
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
