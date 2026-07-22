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
  Map,
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
  /** Wyróżnienie pozycji „Pomoc teraz” w menu. */
  emphasis?: "help";
}

export const navLinks: NavLink[] = [
  { label: "Produkt", href: "/produkt" },
  { label: "Demo", href: "/demo" },
  { label: "Współpraca", href: "/dla-instytucji" },
  { label: "Baza wiedzy", href: "/baza-wiedzy" },
  { label: "Misja", href: "/misja" },
  { label: "Pomoc teraz", href: "/pomoc-teraz", emphasis: "help" },
];

export const footerNav = {
  produkt: [
    { label: "Jak działa", href: "/produkt" },
    { label: "Interaktywne demo", href: "/demo" },
    { label: "Tryby bezpieczeństwa", href: "/#tryby" },
    { label: "Baza wiedzy", href: "/baza-wiedzy" },
  ],
  projekt: [
    { label: "Misja i zasady", href: "/misja" },
    { label: "Dla rodzin i szkół", href: "/dla-instytucji" },
    { label: "Dołącz do listy", href: "/#kontakt" },
    { label: "Pomoc teraz", href: "/pomoc-teraz" },
  ],
  prawne: [
    { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
    { label: "Zasady korzystania", href: "/zasady-korzystania" },
  ],
};

/* ------------------------------ Szybkie wartości ------------------------------ */

export interface TrustIndicator {
  icon: LucideIcon;
  label: string;
}

export const trustIndicators: TrustIndicator[] = [
  { icon: ListChecks, label: "Proste kroki zamiast chaosu" },
  { icon: WifiOff, label: "Najważniejsze materiały offline" },
  { icon: HeartHandshake, label: "Pierwsza pomoc psychologiczna" },
  { icon: ShieldCheck, label: "Jasne granice i zasady" },
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
    text: "Cztery proste tryby bezpieczeństwa pomagają nazwać to, co się dzieje — bez diagnoz, bez oceniania i bez ściany tekstu.",
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Wykonaj pierwszy krok",
    text: "Zamiast długiego artykułu dostajesz krótką checklistę dopasowaną do trybu: jedno działanie na raz, w logicznej kolejności.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Zabezpiecz się na później",
    text: "Plan bezpieczeństwa, kontakty awaryjne i poradniki offline — przygotowane wcześniej, dostępne wtedy, gdy są potrzebne.",
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
    text: "Krótkie ścieżki działania dla sytuacji stresowych i nagłych — dopasowane do jednego z czterech trybów bezpieczeństwa.",
  },
  {
    icon: HeartHandshake,
    title: "Wsparcie psychiczne",
    text: "Ćwiczenie oddechu 4–6, uziemienie 5-4-3-2-1 i zasady pierwszej pomocy emocjonalnej napisane prostym językiem.",
  },
  {
    icon: Map,
    title: "Plan bezpieczeństwa",
    text: "Twoje bezpieczne miejsca, zaufane osoby i rzeczy, które pomagają — spisane wcześniej, dostępne jednym dotknięciem.",
  },
  {
    icon: HeartPulse,
    title: "Pierwsza pomoc",
    text: "Podstawowe instrukcje dla laików: co sprawdzić, kogo wezwać i co robić do przyjazdu pomocy.",
  },
  {
    icon: Backpack,
    title: "Przygotowanie i survival",
    text: "Checklisty domowe: apteczka, zapasy na 72 godziny, dokumenty, plan ewakuacji i komunikacja awaryjna.",
  },
  {
    icon: WifiOff,
    title: "Tryb offline",
    text: "Najważniejsze procedury i kontakty zapisane na urządzeniu — działają także bez internetu.",
  },
  {
    icon: PhoneCall,
    title: "Kontakty awaryjne",
    text: "Zweryfikowane telefony wsparcia oraz Twoje własne zaufane osoby w jednym miejscu.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard gotowości",
    text: "Spokojny podgląd postępu: co już masz zabezpieczone i co warto przygotować w następnej kolejności.",
  },
  {
    icon: BookOpen,
    title: "Baza wiedzy",
    text: "Krótkie, rzetelne materiały oparte na oficjalnych źródłach — bez straszenia i bez ściany tekstu.",
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
      "Jeśli grozi Ci bezpośrednie niebezpieczeństwo, skontaktuj się z numerem alarmowym 112.",
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
      "Upewnij się, że miejsce jest bezpieczne dla Ciebie i poszkodowanego.",
      "Sprawdź, czy osoba reaguje i oddycha.",
      "Wezwij pomoc pod 112, jeśli sytuacja jest poważna.",
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
      "Połączenie z numerem alarmowym 112 często działa nawet przy bardzo słabym zasięgu.",
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
      "Jeśli zagrożenie jest bezpośrednie, zadzwoń pod numer alarmowy 112.",
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
  status: string;
}

export const readinessScore = 72;

export const dashboardStats: DashboardStat[] = [
  { label: "Kontakty awaryjne", value: "4/5", percent: 80, tone: "accent", status: "Prawie gotowe" },
  { label: "Poradniki offline", value: "8 pobranych", percent: 100, tone: "mint", status: "Gotowe" },
  { label: "Checklisty bezpieczeństwa", value: "11/16", percent: 69, tone: "accent", status: "W trakcie" },
  { label: "Ćwiczenia uspokajające", value: "5 ukończonych", percent: 62, tone: "lav", status: "W trakcie" },
  { label: "Plan domowy", value: "3 z 7 kroków", percent: 45, tone: "warn", status: "Do dokończenia" },
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
    title: "Nazywasz swój stan",
    text: "Cztery tryby bezpieczeństwa: stabilnie, potrzebuję wsparcia, sytuacja się nasila, pilna pomoc.",
  },
  {
    step: "2",
    title: "Dostajesz krótkie kroki",
    text: "Bez ściany tekstu. Najpierw najważniejsze działanie dopasowane do trybu.",
  },
  {
    step: "3",
    title: "Korzystasz offline",
    text: "Kluczowe materiały i kontakty masz przygotowane wcześniej, także bez sieci.",
  },
  {
    step: "4",
    title: "Budujesz gotowość",
    text: "Dashboard spokojnie pokazuje, co już masz zabezpieczone.",
  },
];

/* ------------------------- Odbiorcy i modele współpracy ------------------------ */

export interface Segment {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  text: string;
  benefits: string[];
  cta: { label: string; href: string };
}

export const segments: Segment[] = [
  {
    id: "indywidualni",
    icon: GraduationCap,
    title: "Osoby indywidualne",
    subtitle: "Młodzież i młodzi dorośli",
    text: "Prosty język, ćwiczenia uspokajające i plan bezpieczeństwa, który zawsze masz przy sobie — także offline.",
    benefits: [
      "Cztery tryby bezpieczeństwa zamiast chaosu",
      "Ćwiczenia oddechu i uziemienia",
      "Własny plan bezpieczeństwa w telefonie",
    ],
    cta: { label: "Dołącz do listy", href: "/#kontakt" },
  },
  {
    id: "rodziny",
    icon: Home,
    title: "Rodziny i opiekunowie",
    subtitle: "Rodzice, opiekunowie, bliscy",
    text: "Wspólne checklisty domowe, kontakty całej rodziny i spokojne instrukcje, które dzieci rozumieją bez tłumaczenia.",
    benefits: [
      "Domowy plan awaryjny krok po kroku",
      "Materiały o wspieraniu dziecka w kryzysie",
      "Przygotowanie domu: apteczka, zapasy, dokumenty",
    ],
    cta: { label: "Dołącz do listy", href: "/#kontakt" },
  },
  {
    id: "szkoly",
    icon: School,
    title: "Szkoły i fundacje",
    subtitle: "Pedagodzy, psycholodzy, wychowawcy",
    text: "Gotowe materiały profilaktyczne i scenariusze rozmów o bezpieczeństwie — oparte na oficjalnych źródłach.",
    benefits: [
      "Scenariusze zajęć o reagowaniu w kryzysie",
      "Wspólny język czterech trybów w całej placówce",
      "Program pilotażowy z realnym wpływem na produkt",
    ],
    cta: { label: "Napisz w sprawie pilotażu", href: "/dla-instytucji" },
  },
  {
    id: "organizacje",
    icon: Building2,
    title: "Organizacje i partnerzy",
    subtitle: "Instytucje pomocowe, NGO, zespoły",
    text: "Wspólne budowanie standardu cyfrowego wsparcia kryzysowego: treści, dystrybucja i wdrożenia w zespołach.",
    benefits: [
      "Weryfikacja merytoryczna treści",
      "Dystrybucja wśród podopiecznych",
      "Wdrożenia i materiały dla zespołów",
    ],
    cta: { label: "Porozmawiajmy o współpracy", href: "/dla-instytucji" },
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

/* ------------------------------------- FAQ ------------------------------------ */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "Czy ResourceGuard zastępuje psychologa lub terapię?",
    answer:
      "Nie. ResourceGuard to narzędzie edukacyjne i wspierające pierwsze kroki. Nie diagnozuje, nie leczy i nie zastępuje kontaktu ze specjalistą, lekarzem ani służbami ratunkowymi. Przy poważnych trudnościach zawsze zachęcamy do kontaktu z profesjonalną pomocą.",
  },
  {
    question: "Co się dzieje z moimi danymi?",
    answer:
      "W wersji demo wszystkie dane (plan bezpieczeństwa, kontakty, postęp) zapisują się wyłącznie lokalnie na Twoim urządzeniu i możesz je w każdej chwili usunąć jednym przyciskiem. Nie wysyłamy ich na żaden serwer.",
  },
  {
    question: "Jak działa tryb offline?",
    answer:
      "Najważniejsze strony — w tym telefony wsparcia i podstawowe procedury — są zapisywane na urządzeniu po pierwszej wizycie. Gdy internet przestaje działać, nadal masz do nich dostęp. Zakres offline jest jasno opisany i nie obiecujemy więcej, niż faktycznie działa.",
  },
  {
    question: "Czy aplikacja monitoruje mój stan albo powiadamia służby?",
    answer:
      "Nie. ResourceGuard niczego nie monitoruje i nie wysyła automatycznych zgłoszeń. Wybór trybu bezpieczeństwa zmienia tylko to, co widzisz na ekranie. Decyzja o kontakcie z pomocą zawsze należy do Ciebie.",
  },
  {
    question: "Dla kogo jest ResourceGuard?",
    answer:
      "Dla młodzieży, młodych dorosłych, rodziców i opiekunów — oraz dla szkół, fundacji i organizacji, które chcą mieć wspólny, prosty język reagowania w trudnych sytuacjach.",
  },
  {
    question: "Ile to kosztuje?",
    answer:
      "Trwa faza budowy produktu. Podstawowe funkcje bezpieczeństwa pozostaną bezpłatne — zasady etyczne projektu nie pozwalają zamykać pomocy kryzysowej za paywallem. O modelach dla rodzin i instytucji poinformujemy listę wczesnego dostępu w pierwszej kolejności.",
  },
];

/* ----------------------------------- Kontakt ---------------------------------- */

export const contactTypes = [
  "Wczesny dostęp",
  "Szkoła / fundacja",
  "Organizacja / partner",
  "Feedback",
  "Inne",
];

export interface ContactCard {
  title: string;
  text: string;
}

export const contactCards: ContactCard[] = [
  {
    title: "Dla szkół i fundacji",
    text: "Szukamy placówek zainteresowanych materiałami profilaktycznymi i udziałem w pilotażu.",
  },
  {
    title: "Dla osób testujących",
    text: "Dołącz do listy wczesnego dostępu i pomóż nam sprawdzić, co naprawdę działa w praktyce.",
  },
  {
    title: "Dla partnerów",
    text: "Fundacje, instytucje i specjaliści — chętnie porozmawiamy o wspólnym rozwijaniu projektu.",
  },
];

/* ------------------------------ Telefony pomocowe ------------------------------ */

export interface Helpline {
  number: string;
  tel: string;
  name: string;
  desc: string;
  info: string;
  audience: "dzieci" | "dorosli" | "wszyscy";
}

export const helplines: Helpline[] = [
  {
    number: "112",
    tel: "112",
    name: "Numer alarmowy",
    desc: "Jeden europejski numer w nagłych sytuacjach zagrożenia życia, zdrowia lub bezpieczeństwa. Działa też przy bardzo słabym zasięgu.",
    info: "24/7 · bezpłatny · całą dobę",
    audience: "wszyscy",
  },
  {
    number: "116 111",
    tel: "116111",
    name: "Telefon Zaufania dla Dzieci i Młodzieży",
    desc: "Dla dzieci i nastolatków — także przy obniżonym nastroju, lęku czy problemach w domu i szkole. Prowadzi Fundacja Dajemy Dzieciom Siłę. Czat na 116111.pl.",
    info: "24/7 · bezpłatny · anonimowy",
    audience: "dzieci",
  },
  {
    number: "800 12 12 12",
    tel: "800121212",
    name: "Dziecięcy Telefon Zaufania Rzecznika Praw Dziecka",
    desc: "Wsparcie psychologiczne dla dzieci i młodzieży oraz dorosłych dzwoniących w sprawie dziecka. Dostępny również czat.",
    info: "24/7 · bezpłatny",
    audience: "dzieci",
  },
  {
    number: "116 123",
    tel: "116123",
    name: "Kryzysowa linia pomocowa 116sos.pl",
    desc: "Bezpłatna pomoc psychologiczna dla dorosłych w kryzysie emocjonalnym — telefon, czat i formularz w ramach rządowej platformy 116sos.pl.",
    info: "24/7 · bezpłatny",
    audience: "dorosli",
  },
  {
    number: "800 70 2222",
    tel: "800702222",
    name: "Centrum Wsparcia dla Osób Dorosłych w Kryzysie Psychicznym",
    desc: "Całodobowe wsparcie psychologiczne dla dorosłych — przy depresji, zaburzeniach psychicznych i kryzysie. Dyżury także mailowo i na czacie.",
    info: "24/7 · bezpłatny",
    audience: "dorosli",
  },
  {
    number: "800 120 002",
    tel: "800120002",
    name: "Niebieska Linia — telefon dla osób doznających przemocy domowej",
    desc: "Ogólnopolski telefon „Niebieskiej Linii” dla osób doznających przemocy domowej oraz świadków przemocy.",
    info: "24/7 · bezpłatny",
    audience: "wszyscy",
  },
];

/* --------------------------------- Disclaimer --------------------------------- */

export const disclaimer =
  "ResourceGuard nie zastępuje pomocy medycznej, psychologicznej, prawnej ani służb ratunkowych. W sytuacji bezpośredniego zagrożenia życia lub zdrowia zadzwoń pod numer alarmowy 112.";

export const emergencyNote =
  "W sytuacji zagrożenia życia lub zdrowia zadzwoń pod numer alarmowy 112.";
