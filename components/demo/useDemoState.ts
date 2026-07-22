"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { SafetyModeId } from "@/lib/safety-modes";

/**
 * Stan interaktywnego demo, zapisywany WYŁĄCZNIE lokalnie (localStorage).
 * Żadne dane nie opuszczają urządzenia użytkownika.
 */

export interface DemoContact {
  id: string;
  name: string;
  phone: string;
}

export interface DemoPlan {
  signals: string;
  helps: string;
  places: string;
}

export interface DemoState {
  mode: SafetyModeId | null;
  checkedSteps: Partial<Record<SafetyModeId, number[]>>;
  plan: DemoPlan;
  contacts: DemoContact[];
  breathSessions: number;
}

const STORAGE_KEY = "resourceguard-demo-v1";

export const emptyDemoState: DemoState = {
  mode: null,
  checkedSteps: {},
  plan: { signals: "", helps: "", places: "" },
  contacts: [],
  breathSessions: 0,
};

function loadState(): DemoState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyDemoState;
    const parsed = JSON.parse(raw) as Partial<DemoState>;
    return {
      ...emptyDemoState,
      ...parsed,
      plan: { ...emptyDemoState.plan, ...parsed.plan },
      contacts: Array.isArray(parsed.contacts) ? parsed.contacts : [],
    };
  } catch {
    return emptyDemoState;
  }
}

export function useDemoState() {
  const [state, setState] = useState<DemoState>(emptyDemoState);
  const [hydrated, setHydrated] = useState(false);
  const skipSave = useRef(true);

  // Wczytaj zapisany stan po stronie klienta (bezpieczne dla SSR).
  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  // Zapisuj każdą zmianę — poza pierwszym renderem po hydracji.
  useEffect(() => {
    if (!hydrated) return;
    if (skipSave.current) {
      skipSave.current = false;
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Pełny magazyn lub tryb prywatny — demo działa dalej bez zapisu.
    }
  }, [state, hydrated]);

  const clearAll = useCallback(() => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignorujemy — stan i tak wraca do wartości początkowych
    }
    setState(emptyDemoState);
  }, []);

  /** Postęp przygotowania liczony z realnego stanu demo (0–100). */
  const readiness = (() => {
    const planFilled = [state.plan.signals, state.plan.helps, state.plan.places]
      .filter((v) => v.trim().length > 0).length;
    const contactsScore = Math.min(state.contacts.length, 2);
    const stepsChecked = Object.values(state.checkedSteps).reduce(
      (sum, arr) => sum + (arr?.length ?? 0),
      0
    );
    const breathScore = Math.min(state.breathSessions, 1);

    return Math.round(
      planFilled * 10 + // max 30
        contactsScore * 10 + // max 20
        Math.min(stepsChecked, 12) * 2.5 + // max 30
        breathScore * 20 // max 20
    );
  })();

  return { state, setState, hydrated, clearAll, readiness };
}
