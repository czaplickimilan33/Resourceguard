import type { LucideIcon } from "lucide-react";
import { HeartHandshake, PhoneCall, ShieldAlert, ShieldCheck } from "lucide-react";

/**
 * Cztery tryby bezpieczeństwa ResourceGuard.
 *
 * Kolor nigdy nie jest jedynym nośnikiem informacji — każdy tryb ma
 * nazwę, ikonę i numer poziomu, żeby system był czytelny także dla osób
 * nierozróżniających kolorów.
 */

export type SafetyModeId = "stabilnie" | "wsparcie" | "nasila" | "pilna";

export interface SafetyMode {
  id: SafetyModeId;
  level: 1 | 2 | 3 | 4;
  name: string;
  /** Zdanie, którym użytkownik opisuje swój stan. */
  feeling: string;
  icon: LucideIcon;
  description: string;
  /** Co w tym trybie proponuje aplikacja. */
  appResponse: string;
  actions: string[];
  /** Klasy Tailwind powiązane z tokenami mode-* z globals.css. */
  color: {
    text: string;
    bg: string;
    border: string;
    solid: string;
  };
}

export const safetyModes: SafetyMode[] = [
  {
    id: "stabilnie",
    level: 1,
    name: "Stabilnie",
    feeling: "Czuję się bezpiecznie i chcę się przygotować",
    icon: ShieldCheck,
    description:
      "Spokojny moment to najlepszy czas na przygotowanie. Małe kroki dziś oznaczają mniej chaosu, gdy wydarzy się coś trudnego.",
    appResponse:
      "Aplikacja proponuje krótkie checklisty gotowości, plan bezpieczeństwa i materiały do pobrania offline.",
    actions: [
      "Uzupełnij listę kontaktów awaryjnych",
      "Przejdź checklistę przygotowania domu",
      "Pobierz poradniki dostępne offline",
    ],
    color: {
      text: "text-mode-stable",
      bg: "bg-mode-stable/10",
      border: "border-mode-stable/30",
      solid: "bg-mode-stable",
    },
  },
  {
    id: "wsparcie",
    level: 2,
    name: "Potrzebuję wsparcia",
    feeling: "Jest mi trudno i szukam sposobu, żeby się uspokoić",
    icon: HeartHandshake,
    description:
      "Trudne emocje są sygnałem, nie wyrokiem. W tym trybie najważniejsze jest wyciszenie ciała i kontakt z kimś życzliwym.",
    appResponse:
      "Aplikacja prowadzi przez ćwiczenie oddechu i uziemienia, a potem podpowiada kontakt z zaufaną osobą lub telefonem wsparcia.",
    actions: [
      "Wykonaj ćwiczenie oddechu 4–6",
      "Nazwij 5 rzeczy, które widzisz wokół siebie",
      "Napisz lub zadzwoń do zaufanej osoby",
    ],
    color: {
      text: "text-mode-support",
      bg: "bg-mode-support/10",
      border: "border-mode-support/30",
      solid: "bg-mode-support",
    },
  },
  {
    id: "nasila",
    level: 3,
    name: "Sytuacja się nasila",
    feeling: "Robi się poważnie i potrzebuję planu działania",
    icon: ShieldAlert,
    description:
      "Gdy napięcie rośnie, liczy się prosty plan: gdzie jestem, kto o mnie wie, co robię najpierw. Bez analizowania wszystkiego naraz.",
    appResponse:
      "Aplikacja otwiera Twój plan bezpieczeństwa: bezpieczne miejsca, zaufane osoby i kolejne kroki przygotowane wcześniej.",
    actions: [
      "Otwórz swój plan bezpieczeństwa",
      "Powiadom zaufaną osobę, gdzie jesteś",
      "Przygotuj telefon: ładowanie i numery na wierzchu",
    ],
    color: {
      text: "text-mode-alert",
      bg: "bg-mode-alert/10",
      border: "border-mode-alert/30",
      solid: "bg-mode-alert",
    },
  },
  {
    id: "pilna",
    level: 4,
    name: "Pilna pomoc",
    feeling: "Zagrożenie jest realne — potrzebuję pomocy teraz",
    icon: PhoneCall,
    description:
      "W bezpośrednim zagrożeniu nie musisz nic planować. Jest jeden krok: połączenie z pomocą. Wszystko inne może poczekać.",
    appResponse:
      "Aplikacja pokazuje wyłącznie duże przyciski połączeń: numer alarmowy 112 i całodobowe telefony wsparcia.",
    actions: [
      "Zadzwoń pod numer alarmowy 112",
      "Jeśli możesz, przejdź w bezpieczniejsze miejsce",
      "Nie zostawaj z tym w pojedynkę — powiadom kogoś bliskiego",
    ],
    color: {
      text: "text-mode-urgent",
      bg: "bg-mode-urgent/10",
      border: "border-mode-urgent/30",
      solid: "bg-mode-urgent",
    },
  },
];

export function getSafetyMode(id: SafetyModeId): SafetyMode {
  return safetyModes.find((m) => m.id === id) ?? safetyModes[0];
}
