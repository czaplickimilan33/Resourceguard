"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Check,
  ClipboardList,
  LayoutDashboard,
  PhoneCall,
  Plus,
  Trash2,
  Users,
  Wind,
} from "lucide-react";
import clsx from "clsx";
import { helplines } from "@/lib/data";
import { getSafetyMode, safetyModes, type SafetyModeId } from "@/lib/safety-modes";
import { useDemoState, type DemoContact } from "@/components/demo/useDemoState";
import BreathingExercise from "@/components/demo/BreathingExercise";
import OnlineStatusBadge from "@/components/pwa/OnlineStatusBadge";

type TabId = "start" | "plan" | "kontakty" | "oddech";

const tabs: { id: TabId; label: string; icon: typeof Wind }[] = [
  { id: "start", label: "Start", icon: LayoutDashboard },
  { id: "plan", label: "Plan bezpieczeństwa", icon: ClipboardList },
  { id: "kontakty", label: "Kontakty", icon: Users },
  { id: "oddech", label: "Oddech", icon: Wind },
];

const PHONE_RE = /^[+\d][\d\s-]{6,15}$/;

const planFields = [
  {
    key: "signals" as const,
    label: "Moje sygnały ostrzegawcze",
    hint: "Po czym poznaję, że robi się trudno? (myśli, emocje, zachowania)",
    placeholder: "Np. przestaję odpisywać znajomym, gorzej śpię, wszystko mnie drażni…",
  },
  {
    key: "helps" as const,
    label: "Co mi pomaga",
    hint: "Sprawdzone sposoby na obniżenie napięcia.",
    placeholder: "Np. spacer, muzyka, oddech 4–6, rozmowa z siostrą, zimna woda na twarz…",
  },
  {
    key: "places" as const,
    label: "Moje bezpieczne miejsca",
    hint: "Gdzie mogę pójść, żeby poczuć się bezpieczniej?",
    placeholder: "Np. pokój babci, biblioteka, park za blokiem, dom przyjaciela…",
  },
];

export default function DemoApp() {
  const { state, setState, hydrated, clearAll, readiness } = useDemoState();
  const [tab, setTab] = useState<TabId>("start");
  const [confirmClear, setConfirmClear] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const reduceMotion = useReducedMotion();

  if (!hydrated) {
    return (
      <div
        className="mx-auto min-h-[480px] max-w-4xl animate-pulse rounded-3xl border border-white/8 bg-card-deep"
        aria-hidden
      />
    );
  }

  const mode = state.mode ? getSafetyMode(state.mode) : null;

  function selectMode(id: SafetyModeId) {
    setState((s) => ({ ...s, mode: id }));
    setTab("start");
  }

  function toggleStep(modeId: SafetyModeId, index: number) {
    setState((s) => {
      const current = s.checkedSteps[modeId] ?? [];
      const next = current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index];
      return { ...s, checkedSteps: { ...s.checkedSteps, [modeId]: next } };
    });
  }

  function updatePlan(key: keyof typeof state.plan, value: string) {
    setState((s) => ({ ...s, plan: { ...s.plan, [key]: value } }));
  }

  function addContact() {
    const name = nameRef.current?.value.trim() ?? "";
    const phone = phoneRef.current?.value.trim() ?? "";
    if (name.length < 2) {
      setContactError("Podaj imię osoby lub nazwę instytucji.");
      return;
    }
    if (!PHONE_RE.test(phone)) {
      setContactError("Podaj poprawny numer telefonu (min. 7 cyfr).");
      return;
    }
    if (state.contacts.length >= 5) {
      setContactError("W demo można zapisać maksymalnie 5 kontaktów.");
      return;
    }
    setContactError(null);
    const contact: DemoContact = {
      id: `${Date.now()}`,
      name,
      phone,
    };
    setState((s) => ({ ...s, contacts: [...s.contacts, contact] }));
    if (nameRef.current) nameRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
    nameRef.current?.focus();
  }

  function removeContact(id: string) {
    setState((s) => ({ ...s, contacts: s.contacts.filter((c) => c.id !== id) }));
  }

  /* ------------------------------- Onboarding ------------------------------- */

  if (!mode) {
    return (
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/8 bg-card-deep p-6 sm:p-10">
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Jak się teraz czujesz?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mut">
            Wybierz tryb, który najlepiej opisuje Twoją sytuację. Nie ma złych
            odpowiedzi — tryb można zmienić w każdej chwili.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {safetyModes.map((m) => {
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => selectMode(m.id)}
                className={clsx(
                  "flex items-start gap-4 rounded-2xl border bg-card p-5 text-left transition-all duration-200 hover:-translate-y-0.5",
                  m.color.border,
                  "hover:bg-white/5"
                )}
              >
                <span
                  className={clsx(
                    "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                    m.color.bg,
                    m.color.text
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="flex items-center gap-2">
                    <span className={clsx("text-[10px] font-semibold tracking-widest", m.color.text)}>
                      TRYB 0{m.level}
                    </span>
                  </span>
                  <span className="mt-0.5 block font-display text-base font-semibold text-ink">
                    {m.name}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-mut">
                    {m.feeling}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-mut">
          W realnym zagrożeniu życia nie korzystaj z demo — zadzwoń pod{" "}
          <a href="tel:112" className="font-semibold text-ink hover:text-accent">
            112
          </a>
          .
        </p>
      </div>
    );
  }

  /* ------------------------------- Aplikacja ------------------------------- */

  const ModeIcon = mode.icon;
  const checkedForMode = state.checkedSteps[mode.id] ?? [];

  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/8 bg-card-deep">
      {/* Pasek stanu aplikacji */}
      <div className="flex flex-wrap items-center gap-3 border-b border-white/5 bg-night-2/60 px-5 py-4 sm:px-7">
        <span
          className={clsx(
            "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium",
            mode.color.border,
            mode.color.bg,
            "text-ink"
          )}
        >
          <ModeIcon className={clsx("h-3.5 w-3.5", mode.color.text)} aria-hidden />
          Tryb 0{mode.level}: {mode.name}
        </span>
        <OnlineStatusBadge />
        <div className="ml-auto flex items-center gap-2">
          {confirmClear ? (
            <>
              <button
                type="button"
                onClick={() => {
                  clearAll();
                  setConfirmClear(false);
                  setTab("start");
                }}
                className="rounded-lg border border-mode-urgent/40 bg-mode-urgent/10 px-3 py-1.5 text-xs font-semibold text-mode-urgent transition-colors hover:bg-mode-urgent/20"
              >
                Tak, usuń wszystko
              </button>
              <button
                type="button"
                onClick={() => setConfirmClear(false)}
                className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-mut transition-colors hover:text-ink"
              >
                Anuluj
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmClear(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-mut transition-colors hover:border-mode-urgent/40 hover:text-ink"
            >
              <Trash2 className="h-3 w-3" aria-hidden />
              Wyczyść dane demo
            </button>
          )}
        </div>
      </div>

      {/* Tryb pilny: telefony na samej górze */}
      {mode.id === "pilna" && (
        <div className="border-b border-mode-urgent/20 bg-mode-urgent/10 px-5 py-4 sm:px-7">
          <p className="text-sm font-semibold text-ink">
            W bezpośrednim zagrożeniu nie działaj w aplikacji — zadzwoń:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href="tel:112"
              className="inline-flex items-center gap-2 rounded-xl bg-mode-urgent px-4 py-2.5 text-sm font-semibold text-night transition hover:bg-red-300"
            >
              <PhoneCall className="h-4 w-4" aria-hidden />
              112 — numer alarmowy
            </a>
            <a
              href="tel:116111"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-white/10"
            >
              116 111 — dzieci i młodzież
            </a>
            <a
              href="tel:116123"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-white/10"
            >
              116 123 — dorośli
            </a>
          </div>
        </div>
      )}

      {/* Zakładki */}
      <div
        role="tablist"
        aria-label="Sekcje demo"
        className="flex gap-1 overflow-x-auto border-b border-white/5 px-3 pt-3 sm:px-5"
      >
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = tab === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`demo-tab-${id}`}
              aria-selected={isActive}
              aria-controls={`demo-panel-${id}`}
              onClick={() => setTab(id)}
              className={clsx(
                "inline-flex shrink-0 items-center gap-2 rounded-t-xl border-b-2 px-4 py-2.5 text-sm transition-colors",
                isActive
                  ? "border-accent font-medium text-ink"
                  : "border-transparent text-mut hover:text-ink"
              )}
            >
              <Icon className="h-4 w-4" aria-hidden />
              {label}
            </button>
          );
        })}
      </div>

      {/* Panele */}
      <div className="p-5 sm:p-7">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            role="tabpanel"
            id={`demo-panel-${tab}`}
            aria-labelledby={`demo-tab-${tab}`}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
          >
            {tab === "start" && (
              <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {mode.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mut">
                    {mode.description}
                  </p>

                  <p className="mt-5 text-sm font-medium text-ink">
                    Twoje kroki na teraz:
                  </p>
                  <ol className="mt-3 space-y-2.5">
                    {mode.actions.map((action, i) => {
                      const done = checkedForMode.includes(i);
                      return (
                        <li key={action}>
                          <button
                            type="button"
                            aria-pressed={done}
                            onClick={() => toggleStep(mode.id, i)}
                            className={clsx(
                              "flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors duration-200",
                              done
                                ? "border-mint/30 bg-mint/5"
                                : "border-white/8 bg-card hover:border-white/15"
                            )}
                          >
                            <span
                              className={clsx(
                                "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                                done ? "bg-mint/20 text-mint" : clsx(mode.color.bg, mode.color.text)
                              )}
                            >
                              {done ? <Check className="h-3.5 w-3.5" aria-hidden /> : i + 1}
                            </span>
                            <span
                              className={clsx(
                                "text-sm leading-relaxed",
                                done ? "text-ink/70" : "text-ink"
                              )}
                            >
                              {action}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>

                  {/* Zmiana trybu */}
                  <p className="mt-6 text-xs font-medium text-mut">Zmień tryb:</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {safetyModes.map((m) => {
                      const MIcon = m.icon;
                      const isCurrent = m.id === mode.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => selectMode(m.id)}
                          aria-pressed={isCurrent}
                          className={clsx(
                            "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors",
                            isCurrent
                              ? clsx(m.color.border, m.color.bg, "font-medium text-ink")
                              : "border-white/10 text-mut hover:border-white/25 hover:text-ink"
                          )}
                        >
                          <MIcon className={clsx("h-3 w-3", m.color.text)} aria-hidden />
                          {m.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Postęp */}
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/8 bg-card p-5">
                    <p className="text-sm font-medium text-ink">Twoje przygotowanie</p>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-3xl font-semibold tabular-nums text-ink">
                        {readiness}%
                      </p>
                      <p className="text-xs text-mut">liczone z realnych danych demo</p>
                    </div>
                    <div
                      className="mt-3 h-2 overflow-hidden rounded-full bg-white/8"
                      role="img"
                      aria-label={`Poziom przygotowania: ${readiness} procent`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-mint transition-all duration-500"
                        style={{ width: `${readiness}%` }}
                      />
                    </div>
                    <ul className="mt-4 space-y-2 text-xs text-mut">
                      <li className="flex justify-between">
                        <span>Plan bezpieczeństwa</span>
                        <span className="text-ink">
                          {
                            [state.plan.signals, state.plan.helps, state.plan.places].filter(
                              (v) => v.trim()
                            ).length
                          }
                          /3 sekcji
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span>Zaufane kontakty</span>
                        <span className="text-ink">{state.contacts.length}/5</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Ćwiczenia oddechu</span>
                        <span className="text-ink">{state.breathSessions} ukończonych</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => setTab("plan")}
                    className="flex w-full items-center justify-between rounded-2xl border border-accent/20 bg-accent/8 p-4 text-left transition-colors hover:border-accent/40"
                  >
                    <span className="text-sm font-medium text-ink">
                      {state.plan.signals || state.plan.helps || state.plan.places
                        ? "Dokończ plan bezpieczeństwa"
                        : "Zacznij plan bezpieczeństwa"}
                    </span>
                    <ClipboardList className="h-4 w-4 text-accent" aria-hidden />
                  </button>
                </div>
              </div>
            )}

            {tab === "plan" && (
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Plan bezpieczeństwa
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-mut">
                  Wypełnij plan w spokojnym momencie — w trudnym wystarczy go
                  otworzyć. Wszystko zapisuje się automatycznie i wyłącznie na
                  tym urządzeniu.
                </p>
                <div className="mt-6 space-y-5">
                  {planFields.map((field) => (
                    <div key={field.key}>
                      <label
                        htmlFor={`plan-${field.key}`}
                        className="block text-sm font-medium text-ink"
                      >
                        {field.label}
                      </label>
                      <p className="mt-0.5 text-xs text-mut">{field.hint}</p>
                      <textarea
                        id={`plan-${field.key}`}
                        rows={3}
                        value={state.plan[field.key]}
                        onChange={(e) => updatePlan(field.key, e.target.value)}
                        placeholder={field.placeholder}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-night/60 px-4 py-3 text-sm text-ink placeholder:text-mut/50 transition-colors focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-mint/10 px-3 py-1.5 text-xs text-mint">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                  Zapisywane automatycznie na tym urządzeniu
                </p>
              </div>
            )}

            {tab === "kontakty" && (
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    Twoje zaufane osoby
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mut">
                    Dodaj 2–3 osoby, do których możesz się odezwać w trudnym
                    momencie. Kontakty zostają wyłącznie na tym urządzeniu.
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {state.contacts.length === 0 && (
                      <li className="rounded-xl border border-dashed border-white/10 p-4 text-sm text-mut">
                        Nie masz jeszcze zapisanych kontaktów.
                      </li>
                    )}
                    {state.contacts.map((contact) => (
                      <li
                        key={contact.id}
                        className="flex items-center gap-3 rounded-xl border border-white/8 bg-card p-4"
                      >
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                          {contact.name.charAt(0).toUpperCase()}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-ink">
                            {contact.name}
                          </p>
                          <a
                            href={`tel:${contact.phone.replace(/[\s-]/g, "")}`}
                            className="text-xs text-mut hover:text-accent"
                          >
                            {contact.phone}
                          </a>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeContact(contact.id)}
                          aria-label={`Usuń kontakt ${contact.name}`}
                          className="rounded-lg p-2 text-mut transition-colors hover:bg-white/5 hover:text-mode-urgent"
                        >
                          <Trash2 className="h-4 w-4" aria-hidden />
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                    <label className="sr-only" htmlFor="contact-new-name">
                      Imię
                    </label>
                    <input
                      id="contact-new-name"
                      ref={nameRef}
                      type="text"
                      placeholder="Imię"
                      className="rounded-xl border border-white/10 bg-night/60 px-4 py-2.5 text-sm text-ink placeholder:text-mut/50 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                    <label className="sr-only" htmlFor="contact-new-phone">
                      Numer telefonu
                    </label>
                    <input
                      id="contact-new-phone"
                      ref={phoneRef}
                      type="tel"
                      placeholder="Numer telefonu"
                      className="rounded-xl border border-white/10 bg-night/60 px-4 py-2.5 text-sm text-ink placeholder:text-mut/50 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addContact();
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={addContact}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-night transition hover:bg-sky-300 active:scale-[0.98]"
                    >
                      <Plus className="h-4 w-4" aria-hidden />
                      Dodaj
                    </button>
                  </div>
                  {contactError && (
                    <p className="mt-2 text-xs text-mode-urgent" role="alert">
                      {contactError}
                    </p>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    Telefony wsparcia
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mut">
                    Zweryfikowane, bezpłatne i całodobowe. Zawsze dostępne w
                    aplikacji — także offline.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {helplines.slice(0, 4).map((line) => (
                      <li key={line.number}>
                        <a
                          href={`tel:${line.tel}`}
                          className="flex items-center gap-3 rounded-xl border border-white/8 bg-card p-4 transition-colors hover:border-mint/30"
                        >
                          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mint/10 text-mint">
                            <PhoneCall className="h-4 w-4" aria-hidden />
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-ink">{line.number}</p>
                            <p className="truncate text-xs text-mut">{line.name}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {tab === "oddech" && (
              <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    Ćwiczenie oddechu 4–6
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mut">
                    Wydech dłuższy niż wdech uspokaja układ nerwowy. Sześć
                    cykli zajmuje około minuty. Podążaj za kołem — albo za
                    tekstem, jeśli wolisz bez animacji.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-mut">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lav/15 text-[10px] font-semibold text-lav">
                        1
                      </span>
                      Usiądź lub stań stabilnie, oprzyj stopy o podłoże.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lav/15 text-[10px] font-semibold text-lav">
                        2
                      </span>
                      Wdech nosem przez 4 sekundy — koło rośnie.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lav/15 text-[10px] font-semibold text-lav">
                        3
                      </span>
                      Wydech ustami przez 6 sekund — koło się zmniejsza.
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-mut">
                    Ukończone sesje: {state.breathSessions}
                  </p>
                </div>
                <BreathingExercise
                  onComplete={() =>
                    setState((s) => ({ ...s, breathSessions: s.breathSessions + 1 }))
                  }
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
