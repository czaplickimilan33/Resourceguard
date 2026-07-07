import type { LucideIcon } from "lucide-react";
import {
  Backpack,
  BookOpen,
  Brain,
  Building2,
  ClipboardCheck,
  Compass,
  Footprints,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Home,
  LayoutDashboard,
  ListChecks,
  PhoneCall,
  School,
  Search,
  ShieldAlert,
  ShieldCheck,
  Siren,
  WifiOff,
  Wind,
} from "lucide-react";

/* ---------------------------------- Nawigacja --------------------------------- */

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Start", href: "#start" },
  { label: "Problem", href: "#problem" },
  { label: "Funkcje", href: "#features" },
  { label: "Tryb kryzysowy", href: "#crisis-mode" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Misja", href: "#mission" },
  { label: "Kontakt", href: "#contact" },
];

/* ------------------------------ Szybkie wartości ------------------------------ */

export interface TrustIndicator {
  icon: LucideIcon;
  label: string;
}

export const trustIndicators: TrustIndicator[] = [
  { icon: ListChecks, label: "Proste kroki zamiast chaosu" },
  { icon: WifiOff, label: "Tryb offline" },
  { icon: HeartHandshake, label: "Wsparcie psychiczne" },
  { icon: HeartPulse, label: "Instrukcje pierwszej pomocy" },
];

/* ---------------------------------- Problemy ---------------------------------- */

export interface ProblemCard {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const problems: ProblemCard[] = [
  {
    icon: Brain,
    title: "Stres blokuje decyzje",
    text: "W silnym stresie trudniej myśleć logicznie i planować. Nawet proste decyzje stają się obciążeniem, a długie poradniki przestają być czytelne.",
  },
  {
    icon: Search,
    title: "Informacje są rozproszone",
    text: "Instrukcje pierwszej pomocy, numery alarmowe i procedury bezpieczeństwa są rozrzucone po dziesiątkach stron. W kryzysie nie ma czasu ich szukać.",
  },
  {
    icon: WifiOff,
    title: "Internet nie zawsze działa",
    text: "Brak zasięgu, przeciążona sieć, rozładowany router. Najważniejsze informacje powinny być dostępne także wtedy, gdy połączenie zawodzi.",
  },
  {
    icon: Footprints,
    title: "Brakuje pierwszego kroku",
    text: "Większość materiałów mówi wszystko naraz. Człowiek w stresie potrzebuje jednego jasnego działania, od którego można zacząć.",
  },
];

/* ----------------------------------- Filary ----------------------------------- */

export interface Pillar {
  icon: LucideIcon;
  step: string;
  title: string;
  text: string;
}

export const pillars: Pillar[] = [
  {
    icon: Compass,
    step: "01",
    title: "Zrozum sytuację",
    text: "Krótkie wskazówki pomagają nazwać to, co się dzieje — bez diagnoz, bez oceniania i bez ściany tekstu.",
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Wykonaj pierwszy krok",
    text: "Zamiast długiego artykułu dostajesz prostą checklistę: jedno działanie na raz, w logicznej kolejności.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Zabezpiecz się na później",
    text: "Poradniki offline, kontakty awaryjne i dashboard gotowości — przygotowane wcześniej, dostępne wtedy, gdy są potrzebne.",
  },
];

/* ----------------------------------- Funkcje ---------------------------------- */

export interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const features: Feature[] = [
  {
    icon: Siren,
    title: "Tryb kryzysowy",
    text: "Krótkie ścieżki działania dla sytuacji stresowych i nagłych.",
  },
  {
    icon: HeartHandshake,
    title: "Wsparcie psychiczne",
    text: "Proste ćwiczenia uspokajające, uziemienie, oddech i pierwsza pomoc emocjonalna.",
  },
  {
    icon: HeartPulse,
    title: "Pierwsza pomoc",
    text: "Podstawowe instrukcje dla laików, napisane prostym językiem.",
  },
  {
    icon: Backpack,
    title: "Survival i bezpieczeństwo",
    text: "Praktyczne procedury przygotowania, ewakuacji, zapasów i oceny sytuacji.",
  },
  {
    icon: WifiOff,
    title: "Tryb offline",
    text: "Najważniejsze instrukcje dostępne nawet wtedy, gdy internet zawodzi.",
  },
  {
    icon: PhoneCall,
    title: "Kontakty awaryjne",
    text: "Miejsce na najważniejsze osoby, instytucje i numery pomocy.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard gotowości",
    text: "Wizualny podgląd checklist, kontaktów, pobranych poradników i postępu przygotowania.",
  },
  {
    icon: BookOpen,
    title: "Baza wiedzy",
    text: "Krótkie, konkretne materiały bez nadmiaru informacji.",
  },
];

/* ----------------------------- Scenariusze kryzysowe --------------------------- */

export interface CrisisScenario {
  id: string;
  icon: LucideIcon;
  label: string;
  badge: string;
  headline: string;
  message: string;
  steps: string[];
  reminder: string;
}

export const crisisScenarios: CrisisScenario[] = [
  {
    id: "panika",
    icon: Wind,
    label: "Jestem w panice",
    badge: "Wsparcie psychiczne",
    headline: "Najpierw wróć do oddechu.",
    message:
      "To, co czujesz, jest reakcją ciała na stres. Można ją spokojnie wyciszyć — krok po kroku.",
    steps: [
      "Oprzyj stopy o podłoże i nazwij 5 rzeczy, które widzisz.",
      "Oddychaj wolniej: wdech 4 sekundy, wydech 6 sekund.",
      "Napisz lub zadzwoń do osoby z listy kontaktów.",
    ],
    reminder:
      "Jeśli grozi Ci bezpośrednie niebezpieczeństwo, skontaktuj się z numerem alarmowym.",
  },
  {
    id: "pierwsza-pomoc",
    icon: HeartPulse,
    label: "Potrzebuję pierwszej pomocy",
    badge: "Pierwsza pomoc",
    headline: "Sprawdź bezpieczeństwo, oddech i reakcję.",
    message:
      "Działaj spokojnie i po kolei. Nie musisz wiedzieć wszystkiego — wystarczy kolejny krok.",
    steps: [
      "Upewnij się, że miejsce jest bezpieczne.",
      "Sprawdź, czy osoba reaguje i oddycha.",
      "Wezwij pomoc, jeśli sytuacja jest poważna.",
    ],
    reminder:
      "ResourceGuard nie zastępuje kursu pierwszej pomocy ani służb ratunkowych.",
  },
  {
    id: "offline",
    icon: WifiOff,
    label: "Nie mam internetu",
    badge: "Tryb offline",
    headline: "Najważniejsze materiały masz przy sobie.",
    message:
      "Pobrane wcześniej poradniki i kontakty działają bez sieci. Nie potrzebujesz połączenia, żeby zrobić pierwszy krok.",
    steps: [
      "Otwórz sekcję poradników offline — nie wymagają połączenia.",
      "Sprawdź listę kontaktów awaryjnych zapisanych w aplikacji.",
      "Jeśli potrzebujesz pomocy, spróbuj SMS — często dochodzi tam, gdzie połączenia głosowe nie działają.",
    ],
    reminder:
      "Połączenie z numerem alarmowym często działa nawet przy bardzo słabym zasięgu.",
  },
  {
    id: "zagrozenie",
    icon: ShieldAlert,
    label: "Czuję zagrożenie",
    badge: "Bezpieczeństwo",
    headline: "Twoje bezpieczeństwo jest teraz najważniejsze.",
    message:
      "Zaufaj swojej ocenie sytuacji. Lepiej zareagować za wcześnie niż za późno.",
    steps: [
      "Jeśli możesz, oddal się od źródła zagrożenia w bezpieczniejsze miejsce.",
      "Powiadom zaufaną osobę, gdzie jesteś i co się dzieje.",
      "Miej telefon pod ręką — naładowany, z numerem alarmowym na wierzchu.",
    ],
    reminder:
      "Jeśli zagrożenie jest bezpośrednie, zadzwoń pod lokalny numer alarmowy.",
  },
  {
    id: "przygotowanie",
    icon: ClipboardCheck,
    label: "Chcę się przygotować",
    badge: "Przygotowanie",
    headline: "Spokój buduje się przed kryzysem.",
    message:
      "Kilka minut przygotowania dziś to mniej chaosu w trudnym momencie.",
    steps: [
      "Uzupełnij listę kontaktów awaryjnych — osoby i instytucje.",
      "Pobierz podstawowe poradniki offline: pierwsza pomoc, dom, ewakuacja.",
      "Przejdź jedną checklistę bezpieczeństwa i sprawdź swój poziom gotowości.",
    ],
    reminder:
      "Przygotowanie to proces. Dashboard pokaże, co warto uzupełnić w następnej kolejności.",
  },
];

/* ---------------------------------- Dashboard --------------------------------- */

export interface DashboardStat {
  label: string;
  value: string;
  percent: number;
  tone: "accent" | "mint" | "lav" | "warn";
}

export const readinessScore = 72;

export const dashboardStats: DashboardStat[] = [
  { label: "Kontakty awaryjne", value: "4/5", percent: 80, tone: "accent" },
  { label: "Poradniki offline", value: "8 pobranych", percent: 100, tone: "mint" },
  { label: "Checklisty bezpieczeństwa", value: "11/16", percent: 69, tone: "accent" },
  { label: "Ćwiczenia uspokajające", value: "5 ukończonych", percent: 62, tone: "lav" },
  { label: "Plan domowy", value: "w trakcie", percent: 45, tone: "warn" },
];

export const weeklyActivity = [35, 55, 40, 70, 50, 85, 60];

export const dashboardChecklist = [
  { label: "Numery alarmowe zapisane", done: true },
  { label: "Apteczka sprawdzona", done: true },
  { label: "Plan ewakuacji z domu", done: false },
  { label: "Kopie ważnych dokumentów", done: false },
];

/* ----------------------------------- Proces ----------------------------------- */

export interface ProcessStep {
  step: string;
  title: string;
  text: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Wybierasz sytuację",
    text: "Panika, pierwsza pomoc, brak internetu, zagrożenie albo przygotowanie.",
  },
  {
    step: "2",
    title: "Dostajesz krótkie kroki",
    text: "Bez ściany tekstu. Najpierw najważniejsze działanie.",
  },
  {
    step: "3",
    title: "Korzystasz offline",
    text: "Kluczowe materiały możesz mieć przygotowane wcześniej.",
  },
  {
    step: "4",
    title: "Budujesz gotowość",
    text: "Dashboard pokazuje, co już masz zabezpieczone.",
  },
];

/* --------------------------------- Zastosowania -------------------------------- */

export interface UseCase {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const useCases: UseCase[] = [
  {
    icon: GraduationCap,
    title: "Dla młodych osób",
    text: "Prosty język, ćwiczenia uspokajające i szybki kontakt do zaufanych osób.",
  },
  {
    icon: Home,
    title: "Dla rodziców",
    text: "Checklisty domowe, kontakty, procedury i spokojne instrukcje dla całej rodziny.",
  },
  {
    icon: School,
    title: "Dla szkół",
    text: "Materiały edukacyjne, scenariusze kryzysowe i wsparcie profilaktyczne.",
  },
  {
    icon: Building2,
    title: "Dla organizacji",
    text: "Narzędzie wspierające komunikację i przygotowanie zespołów w trudnych sytuacjach.",
  },
];

/* ----------------------------------- Opinie ----------------------------------- */

export interface Testimonial {
  quote: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Największą wartością jest prostota. W stresie nie chcę czytać długich poradników — chcę wiedzieć, co zrobić najpierw.",
    role: "Uczeń",
  },
  {
    quote:
      "Uspokaja mnie to, że kontakty i procedury mamy przygotowane wcześniej. Dzieci wiedzą, gdzie ich szukać.",
    role: "Rodzic",
  },
  {
    quote:
      "Krótkie, konkretne materiały to coś, czego brakuje w profilaktyce. Da się na nich oprzeć rozmowę z klasą.",
    role: "Pedagog szkolny",
  },
];

/* ---------------------------------- Wartości ---------------------------------- */

export interface Value {
  title: string;
  text: string;
}

export const values: Value[] = [
  { title: "Prostota", text: "Krótkie instrukcje zamiast ściany tekstu." },
  { title: "Dostępność", text: "Czytelnie, offline i bez barier." },
  { title: "Odpowiedzialność", text: "Jasne granice tego, czym aplikacja nie jest." },
  { title: "Spokój", text: "Interfejs, który wycisza zamiast straszyć." },
  { title: "Prywatność", text: "Twoje dane i kontakty należą do Ciebie." },
  { title: "Użyteczność", text: "Wszystko ma działać wtedy, gdy głowa nie działa idealnie." },
];

/* ----------------------------------- Kontakt ---------------------------------- */

export const contactTypes = [
  "Early access",
  "Współpraca",
  "Szkoła / organizacja",
  "Feedback",
  "Inne",
];

export interface ContactCard {
  title: string;
  text: string;
}

export const contactCards: ContactCard[] = [
  {
    title: "Dla szkół i organizacji",
    text: "Szukamy placówek zainteresowanych materiałami profilaktycznymi i pilotażem.",
  },
  {
    title: "Dla osób testujących MVP",
    text: "Dołącz do listy wczesnego dostępu i pomóż nam sprawdzić, co działa w praktyce.",
  },
  {
    title: "Dla partnerów społecznych",
    text: "Fundacje, instytucje i specjaliści — chętnie porozmawiamy o współpracy.",
  },
];

/* --------------------------------- Disclaimer --------------------------------- */

export const disclaimer =
  "ResourceGuard nie zastępuje pomocy medycznej, psychologicznej, prawnej ani służb ratunkowych. W sytuacji bezpośredniego zagrożenia należy skontaktować się z lokalnym numerem alarmowym.";

export const emergencyNote =
  "W sytuacji zagrożenia życia lub zdrowia skontaktuj się z lokalnym numerem alarmowym.";
