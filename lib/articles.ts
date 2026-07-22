/**
 * Baza wiedzy ResourceGuard.
 *
 * Treści edukacyjne oparte na oficjalnych, publicznie dostępnych źródłach
 * (gov.pl, operatorzy linii pomocowych, PCK). Artykuły mają charakter
 * informacyjny i nie zastępują profesjonalnej pomocy.
 */

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface ArticleSource {
  label: string;
  url: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: "Wsparcie psychiczne" | "Przygotowanie" | "Bezpieczeństwo";
  readingTime: string;
  updated: string;
  intro: string;
  sections: ArticleSection[];
  sources: ArticleSource[];
}

export const articles: Article[] = [
  {
    slug: "oddech-4-6-i-uziemienie",
    title: "Oddech 4–6 i uziemienie 5-4-3-2-1: dwie techniki na silny stres",
    description:
      "Dwa proste ćwiczenia, które pomagają wyciszyć reakcję stresową ciała — do zastosowania od razu, bez sprzętu i bez przygotowania.",
    category: "Wsparcie psychiczne",
    readingTime: "4 min",
    updated: "Lipiec 2026",
    intro:
      "Silny stres to reakcja ciała, nie dowód słabości. Serce przyspiesza, oddech się spłyca, myśli galopują. Dobra wiadomość: na oddech mamy bezpośredni wpływ — a przez oddech na resztę ciała. Te dwie techniki są proste do zapamiętania i można je wykonać wszędzie.",
    sections: [
      {
        heading: "Ćwiczenie 1: oddech 4–6",
        paragraphs: [
          "Wydech dłuższy niż wdech uspokaja układ nerwowy. Nie musisz oddychać idealnie — wystarczy wolniej i z dłuższym wydechem.",
        ],
        list: [
          "Usiądź lub stań stabilnie. Jeśli możesz, oprzyj stopy o podłoże.",
          "Zrób spokojny wdech nosem, licząc do 4.",
          "Zrób powolny wydech ustami, licząc do 6.",
          "Powtórz co najmniej 6–10 razy. Jeśli liczby nie pasują, po prostu wydłuż wydech.",
        ],
      },
      {
        heading: "Ćwiczenie 2: uziemienie 5-4-3-2-1",
        paragraphs: [
          "Uziemienie przenosi uwagę z galopujących myśli na to, co dzieje się tu i teraz. Angażuje zmysły po kolei:",
        ],
        list: [
          "5 rzeczy, które widzisz — nazwij je w myślach lub na głos.",
          "4 rzeczy, których możesz dotknąć — dotknij ich i poczuj fakturę.",
          "3 dźwięki, które słyszysz.",
          "2 zapachy, które czujesz (lub które lubisz).",
          "1 rzecz, którą możesz posmakować — albo jedna dobra rzecz o sobie.",
        ],
      },
      {
        heading: "Kiedy to nie wystarcza",
        paragraphs: [
          "Te techniki pomagają przetrwać falę silnych emocji, ale nie leczą ich przyczyny. Jeśli napięcie, lęk lub smutek wracają regularnie, utrudniają codzienne życie albo pojawiają się myśli rezygnacyjne — porozmawiaj z kimś zaufanym i sięgnij po profesjonalne wsparcie.",
          "Całodobowo i bezpłatnie: 116 111 (dzieci i młodzież), 116 123 (dorośli), 112 (bezpośrednie zagrożenie życia).",
        ],
      },
    ],
    sources: [
      { label: "116111.pl — Telefon Zaufania dla Dzieci i Młodzieży", url: "https://116111.pl" },
      { label: "116sos.pl — kryzysowa linia pomocowa dla dorosłych", url: "https://116sos.pl" },
    ],
  },
  {
    slug: "jak-wspierac-osobe-w-kryzysie",
    title: "Jak wspierać osobę w kryzysie: zasady pierwszej pomocy emocjonalnej",
    description:
      "Nie musisz być psychologiem, żeby pomóc. Kilka zasad, które sprawiają, że rozmowa wspiera zamiast ranić — i jasne wskazówki, kiedy szukać profesjonalnej pomocy.",
    category: "Wsparcie psychiczne",
    readingTime: "5 min",
    updated: "Lipiec 2026",
    intro:
      "Kiedy ktoś bliski przeżywa kryzys, najczęstszy lęk brzmi: „a co, jeśli powiem coś nie tak?”. Tymczasem najważniejsze elementy wspierającej rozmowy są proste: obecność, słuchanie i traktowanie emocji drugiej osoby poważnie.",
    sections: [
      {
        heading: "Co pomaga",
        paragraphs: [
          "Pierwsza pomoc emocjonalna nie polega na naprawianiu, tylko na byciu obok.",
        ],
        list: [
          "Słuchaj więcej, niż mówisz. Cisza w rozmowie jest w porządku.",
          "Nazwij to, co widzisz: „Widzę, że jest ci bardzo trudno”.",
          "Traktuj emocje poważnie — nawet jeśli powód wydaje ci się mały.",
          "Zapytaj wprost: „Jak mogę ci teraz pomóc?” albo „Czego potrzebujesz?”.",
          "Zaproponuj konkret: wspólny spacer, towarzyszenie w telefonie do specjalisty, pomoc w codziennych sprawach.",
          "Zostań w kontakcie. Krótka wiadomość następnego dnia znaczy więcej, niż się wydaje.",
        ],
      },
      {
        heading: "Czego unikać",
        paragraphs: [],
        list: [
          "Bagatelizowania: „inni mają gorzej”, „weź się w garść”, „to minie”.",
          "Natychmiastowego doradzania i zasypywania rozwiązaniami.",
          "Oceniania decyzji i szukania winnych.",
          "Obietnic, których nie możesz dotrzymać (np. „nikomu nie powiem” — patrz niżej).",
          "Przymuszania do rozmowy. Można towarzyszyć także w milczeniu.",
        ],
      },
      {
        heading: "Kiedy sięgnąć po pomoc profesjonalną",
        paragraphs: [
          "Są sytuacje, w których wsparcie bliskich to za mało. Jeśli osoba mówi o odebraniu sobie życia, krzywdzeniu siebie, jest w niebezpieczeństwie albo jej stan szybko się pogarsza — nie zostawaj z tym w pojedynkę i nie obiecuj tajemnicy.",
          "Zadzwoń razem z nią (albo sam_a) na całodobową linię wsparcia: 116 111 dla dzieci i młodzieży, 116 123 dla dorosłych, 800 12 12 12 (Dziecięcy Telefon Zaufania RPD). Przy bezpośrednim zagrożeniu życia — 112.",
        ],
      },
    ],
    sources: [
      { label: "116111.pl — jak wspierać dziecko w kryzysie", url: "https://116111.pl" },
      { label: "brpd.gov.pl — Dziecięcy Telefon Zaufania", url: "https://brpd.gov.pl" },
      { label: "116sos.pl — pomoc dla dorosłych w kryzysie", url: "https://116sos.pl" },
    ],
  },
  {
    slug: "plan-bezpieczenstwa",
    title: "Plan bezpieczeństwa: przygotuj go, zanim będzie potrzebny",
    description:
      "Plan bezpieczeństwa to spisana wcześniej lista: co mi pomaga, kto może mnie wesprzeć i gdzie jest bezpiecznie. Zobacz, jak go stworzyć w 15 minut.",
    category: "Przygotowanie",
    readingTime: "5 min",
    updated: "Lipiec 2026",
    intro:
      "W silnym stresie trudno przypomnieć sobie nawet numer telefonu do bliskiej osoby. Dlatego plan bezpieczeństwa tworzy się w spokojnym momencie — żeby w trudnym wystarczyło go otworzyć i iść punkt po punkcie.",
    sections: [
      {
        heading: "Z czego składa się plan bezpieczeństwa",
        paragraphs: [
          "Dobry plan jest krótki i konkretny. Zwykle zawiera pięć elementów:",
        ],
        list: [
          "Sygnały ostrzegawcze — po czym poznaję, że robi się trudno (myśli, emocje, zachowania).",
          "Co mi pomaga — sprawdzone sposoby na obniżenie napięcia: ruch, muzyka, oddech, zimna woda, zwierzę.",
          "Zaufane osoby — 2–3 osoby, do których mogę napisać lub zadzwonić, z numerami telefonu.",
          "Bezpieczne miejsca — gdzie mogę pójść, żeby poczuć się bezpieczniej (fizycznie lub emocjonalnie).",
          "Numery pomocowe — 112 oraz całodobowe telefony wsparcia zapisane w telefonie i na kartce.",
        ],
      },
      {
        heading: "Jak go przygotować",
        paragraphs: [],
        list: [
          "Znajdź 15 minut w spokojnym momencie — sam_a lub z kimś zaufanym.",
          "Wypełnij po jednym punkcie z każdej kategorii. Lepszy krótki plan niż żaden.",
          "Zapisz plan tam, gdzie naprawdę do niego sięgniesz: telefon, portfel, szuflada.",
          "Powiedz zaufanej osobie, że jest w Twoim planie — to ważne dla was obojga.",
          "Wracaj do planu co kilka miesięcy i aktualizuj go.",
        ],
      },
      {
        heading: "Plan bezpieczeństwa w ResourceGuard",
        paragraphs: [
          "W interaktywnym demo ResourceGuard możesz przygotować swój plan bezpieczeństwa krok po kroku. Dane zapisują się wyłącznie lokalnie na Twoim urządzeniu — nie trafiają na żaden serwer i możesz je usunąć jednym przyciskiem.",
          "Pamiętaj: plan bezpieczeństwa wspiera, ale nie zastępuje profesjonalnej pomocy. Jeśli myśli o krzywdzeniu siebie się nasilają, skontaktuj się z całodobową linią wsparcia lub numerem 112.",
        ],
      },
    ],
    sources: [
      { label: "116sos.pl — wsparcie w kryzysie emocjonalnym", url: "https://116sos.pl" },
      { label: "116111.pl — materiały dla młodych osób", url: "https://116111.pl" },
    ],
  },
  {
    slug: "dom-gotowy-na-kryzys",
    title: "Dom gotowy na kryzys: apteczka, zapasy i dokumenty",
    description:
      "Oficjalne zalecenia mówią jasno: każdy dom powinien być przygotowany na 72 godziny samodzielności. Praktyczna checklista na podstawie rządowego poradnika bezpieczeństwa.",
    category: "Przygotowanie",
    readingTime: "6 min",
    updated: "Lipiec 2026",
    intro:
      "Przerwa w dostawie prądu, gwałtowna pogoda, awaria wodociągów — większość kryzysów, które naprawdę się zdarzają, jest prozaiczna. Rządowy „Poradnik bezpieczeństwa” zaleca, by każde gospodarstwo domowe było w stanie funkcjonować samodzielnie przez co najmniej 72 godziny.",
    sections: [
      {
        heading: "Zapasy na 72 godziny",
        paragraphs: [
          "Podstawowa zasada: wszystko, czego potrzebujesz, żeby przez trzy doby nie wychodzić z domu.",
        ],
        list: [
          "Woda: około 3 litry na osobę na dobę (do picia i celów higienicznych).",
          "Żywność niewymagająca gotowania lub łatwa w przygotowaniu, z długim terminem.",
          "Leki przyjmowane na stałe + podstawowa apteczka pierwszej pomocy.",
          "Latarka, baterie, powerbank, radio na baterie.",
          "Gotówka w małych nominałach — terminale płatnicze mogą nie działać.",
          "Rzeczy dla dzieci, osób starszych i zwierząt — dopasowane do Twojego domu.",
        ],
      },
      {
        heading: "Dokumenty i informacje",
        paragraphs: [],
        list: [
          "Kopie najważniejszych dokumentów (dowody, akty, polisy) w wodoszczelnej teczce lub zaszyfrowane cyfrowo.",
          "Spisane najważniejsze numery: rodzina, lekarz, ubezpieczyciel, 112 — na papierze, nie tylko w telefonie.",
          "Ustalone rodzinne miejsce spotkań na wypadek braku łączności.",
        ],
      },
      {
        heading: "Od czego zacząć",
        paragraphs: [
          "Nie musisz przygotować wszystkiego w jeden weekend. Zacznij od wody i apteczki, w kolejnym tygodniu dołóż dokumenty, potem resztę. Checklisty w ResourceGuard prowadzą przez ten proces krok po kroku i pokazują postęp bez presji.",
          "Pełny, oficjalny poradnik znajdziesz na gov.pl — trafił do milionów polskich domów i jest dostępny bezpłatnie online.",
        ],
      },
    ],
    sources: [
      {
        label: "Poradnik bezpieczeństwa (MON, MSWiA, RCB)",
        url: "https://www.gov.pl/web/poradnikbezpieczenstwa",
      },
      {
        label: "RCB — „Bądź gotowy! Poradnik na czas kryzysu i wojny”",
        url: "https://www.gov.pl/web/rcb/badz-gotowy--poradnik-na-czas-kryzysu-i-wojny",
      },
      { label: "PCK — pierwsza pomoc", url: "https://pck.pl/co-robimy/pierwsza-pomoc" },
    ],
  },
  {
    slug: "komunikacja-bez-internetu",
    title: "Gdy internet przestaje działać: komunikacja awaryjna krok po kroku",
    description:
      "Brak zasięgu i internetu to jeden z najczęstszych elementów sytuacji kryzysowych. Jak się przygotować i jak się komunikować, gdy sieć zawodzi.",
    category: "Bezpieczeństwo",
    readingTime: "5 min",
    updated: "Lipiec 2026",
    intro:
      "Przeciążona sieć po dużym zdarzeniu, awaria zasilania, wyczerpana bateria — łączność potrafi zniknąć dokładnie wtedy, gdy jest najbardziej potrzebna. Większość problemów łagodzi jednak proste przygotowanie.",
    sections: [
      {
        heading: "Przygotuj się, zanim sieć zniknie",
        paragraphs: [],
        list: [
          "Zapisz kluczowe numery na papierze — telefon z rozładowaną baterią nie podpowie Ci kontaktów.",
          "Miej naładowany powerbank i kabel w plecaku lub aucie.",
          "Pobierz najważniejsze materiały offline: procedury, mapy okolicy, plan bezpieczeństwa.",
          "Ustal z bliskimi zasadę: gdy nie ma łączności, spotykamy się w umówionym miejscu o pełnych godzinach.",
          "Zainstaluj oficjalną aplikację ostrzegawczą RSO (Regionalny System Ostrzegania) i zwracaj uwagę na SMS-y Alert RCB.",
        ],
      },
      {
        heading: "Gdy sieć właśnie przestała działać",
        paragraphs: [],
        list: [
          "Wyślij SMS zamiast dzwonić — wiadomości tekstowe przechodzą przy słabszym sygnale i mniejszym obciążeniu sieci.",
          "Oszczędzaj baterię: tryb samolotowy z włączaniem co jakiś czas, minimalna jasność ekranu.",
          "Spróbuj wyżej lub bliżej okna — czasem wystarczy zmiana miejsca o kilkanaście metrów.",
          "Numer alarmowy 112 działa także wtedy, gdy Twoja sieć nie ma zasięgu — telefon połączy się przez dowolnego dostępnego operatora.",
        ],
      },
      {
        heading: "Tryb offline w ResourceGuard",
        paragraphs: [
          "ResourceGuard zapisuje najważniejsze strony — w tym telefony wsparcia i podstawowe procedury — na Twoim urządzeniu. Po pierwszej wizycie masz do nich dostęp także bez internetu. Zakres tego, co działa offline, jest jasno opisany w aplikacji.",
        ],
      },
    ],
    sources: [
      {
        label: "MSWiA — Regionalny System Ostrzegania (RSO)",
        url: "https://www.gov.pl/web/mswia/regionalny-system-ostrzegania",
      },
      {
        label: "Poradnik bezpieczeństwa (MON, MSWiA, RCB)",
        url: "https://www.gov.pl/web/poradnikbezpieczenstwa",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
