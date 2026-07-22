import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Zasady korzystania",
  description:
    "Zasady korzystania ze strony i demo ResourceGuard: charakter edukacyjny, granice odpowiedzialności i informacje o bezpieczeństwie.",
  alternates: { canonical: "/zasady-korzystania" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-36 pb-16 sm:px-6 sm:pt-44 sm:pb-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-mut transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Wróć na stronę główną
      </Link>

      <div className="mt-8 flex items-center gap-2 font-display font-semibold text-ink">
        <ShieldCheck className="h-6 w-6 text-accent" aria-hidden />
        ResourceGuard
      </div>

      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Zasady korzystania
      </h1>
      <p className="mt-2 text-sm text-mut">Ostatnia aktualizacja: lipiec 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-mut [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink">
        <section>
          <h2>1. Czym jest ta strona</h2>
          <p className="mt-2">
            ResourceGuard to projekt cyfrowego systemu wsparcia kryzysowego w
            fazie rozwoju. Strona prezentuje koncepcję produktu, udostępnia
            edukacyjną bazę wiedzy oraz interaktywne demo. Korzystanie ze strony
            jest bezpłatne i nie wymaga zakładania konta.
          </p>
        </section>

        <section>
          <h2>2. Najważniejsza zasada bezpieczeństwa</h2>
          <p className="mt-2">
            Strona i demo mają charakter wyłącznie edukacyjny i informacyjny.
            Nie stanowią porady medycznej, psychologicznej ani prawnej, nie
            służą do diagnozowania i nie zastępują kontaktu ze specjalistą ani
            służbami ratunkowymi. W sytuacji bezpośredniego zagrożenia życia lub
            zdrowia zawsze dzwoń pod numer alarmowy 112. Wykaz całodobowych
            telefonów wsparcia znajdziesz na stronie{" "}
            <Link href="/pomoc-teraz" className="text-ink underline underline-offset-2 hover:text-accent">
              Pomoc teraz
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>3. Interaktywne demo</h2>
          <p className="mt-2">
            Demo pokazuje planowane działanie aplikacji. Wpisywane w nim dane są
            zapisywane wyłącznie lokalnie w Twojej przeglądarce i nie są nigdzie
            wysyłane. Demo nie monitoruje Twojego stanu, nie powiadamia żadnych
            osób ani instytucji i nie jest połączone z żadnym centrum pomocy.
            Wybór trybu „Pilna pomoc” w demo nie wzywa pomocy — do tego służy
            wyłącznie samodzielne połączenie z numerem alarmowym lub telefonem
            wsparcia.
          </p>
        </section>

        <section>
          <h2>4. Rzetelność treści</h2>
          <p className="mt-2">
            Materiały edukacyjne opieramy na oficjalnych, publicznie dostępnych
            źródłach (m.in. serwisy gov.pl i strony operatorów linii
            pomocowych), które wskazujemy przy każdym artykule. Dokładamy starań,
            by treści były aktualne, jednak numery telefonów, godziny dostępności
            i procedury mogą się zmieniać — wiążące są zawsze informacje
            publikowane przez operatorów i instytucje publiczne.
          </p>
        </section>

        <section>
          <h2>5. Odpowiedzialność</h2>
          <p className="mt-2">
            Korzystasz ze strony i demo na własną odpowiedzialność. W granicach
            dopuszczalnych przez prawo nie ponosimy odpowiedzialności za skutki
            decyzji podjętych na podstawie treści o charakterze edukacyjnym ani
            za niedostępność strony. Żadne postanowienie tych zasad nie wyłącza
            praw przysługujących konsumentom z mocy prawa.
          </p>
        </section>

        <section>
          <h2>6. Własność intelektualna</h2>
          <p className="mt-2">
            Treści, układ i elementy graficzne strony są chronione prawem
            autorskim. Możesz z nich korzystać w celach prywatnych i
            edukacyjnych; wykorzystanie komercyjne wymaga zgody. Cytując
            materiały, podaj źródło.
          </p>
        </section>

        <section>
          <h2>7. Dane osobowe</h2>
          <p className="mt-2">
            Zasady przetwarzania danych osobowych opisuje{" "}
            <Link
              href="/polityka-prywatnosci"
              className="text-ink underline underline-offset-2 hover:text-accent"
            >
              Polityka prywatności
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>8. Kontakt i zmiany</h2>
          <p className="mt-2">
            Pytania dotyczące tych zasad możesz kierować przez formularz
            kontaktowy lub na adres czaplickimilan@gmail.com. Zasady mogą być
            aktualizowane wraz z rozwojem projektu — obowiązuje wersja
            opublikowana na tej stronie. Dokument w obecnym brzmieniu jest
            wersją roboczą dla fazy przedpremierowej i przed komercyjnym startem
            powinien zostać zweryfikowany przez prawnika.
          </p>
        </section>
      </div>
    </div>
  );
}
