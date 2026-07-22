import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Informacje o przetwarzaniu danych osobowych na stronie ResourceGuard.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPolicyPage() {
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
        Polityka prywatności
      </h1>
      <p className="mt-2 text-sm text-mut">Ostatnia aktualizacja: lipiec 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-mut [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink">
        <section>
          <h2>1. Administrator danych</h2>
          <p className="mt-2">
            Administratorem danych osobowych przekazywanych za pośrednictwem tej
            strony jest Milan Czaplicki. Kontakt w sprawach związanych z ochroną
            danych: czaplickimilan@gmail.com.
          </p>
        </section>

        <section>
          <h2>2. Jakie dane zbieramy i po co</h2>
          <p className="mt-2">
            Jedyne dane osobowe, które zbieramy, to dane przekazane dobrowolnie
            przez formularz kontaktowy: imię, adres email oraz treść wiadomości.
            Wykorzystujemy je wyłącznie w celu odpowiedzi na wiadomość oraz —
            jeśli wybrano temat „Wczesny dostęp” — do poinformowania o rozwoju
            projektu ResourceGuard. Podstawą przetwarzania jest zgoda wyrażona
            przy wysłaniu formularza (art. 6 ust. 1 lit. a RODO) oraz prawnie
            uzasadniony interes administratora polegający na prowadzeniu
            korespondencji (art. 6 ust. 1 lit. f RODO). Podanie danych jest
            dobrowolne, ale konieczne do otrzymania odpowiedzi.
          </p>
        </section>

        <section>
          <h2>3. Dane w interaktywnym demo</h2>
          <p className="mt-2">
            Informacje wpisywane w interaktywnym demo (wybrany tryb
            bezpieczeństwa, plan bezpieczeństwa, kontakty, postęp checklist) są
            zapisywane wyłącznie lokalnie w pamięci Twojej przeglądarki
            (localStorage) i nigdy nie są wysyłane na nasz serwer ani do żadnych
            podmiotów trzecich. Możesz je w każdej chwili trwale usunąć
            przyciskiem „Wyczyść dane demo” dostępnym w demo lub czyszcząc dane
            witryny w ustawieniach przeglądarki.
          </p>
        </section>

        <section>
          <h2>4. Komu powierzamy dane</h2>
          <p className="mt-2">
            Wiadomości z formularza są dostarczane za pośrednictwem usługi
            Web3Forms, a strona jest utrzymywana na platformie Vercel. Obaj
            dostawcy przetwarzają dane wyłącznie w zakresie niezbędnym do
            świadczenia usługi. Danych nie sprzedajemy i nie udostępniamy ich w
            celach marketingowych.
          </p>
        </section>

        <section>
          <h2>5. Statystyki i pliki cookies</h2>
          <p className="mt-2">
            Strona korzysta z Vercel Analytics — narzędzia statystycznego, które
            nie używa plików cookies i nie śledzi użytkowników między stronami.
            Zbierane są wyłącznie zanonimizowane dane o ruchu (np. liczba
            odwiedzin, kraj, typ urządzenia). Strona nie wyświetla reklam, nie
            stosuje cookies marketingowych i dlatego nie wymaga banera zgody na
            pliki cookies.
          </p>
        </section>

        <section>
          <h2>6. Jak długo przechowujemy dane</h2>
          <p className="mt-2">
            Wiadomości email przechowujemy przez okres prowadzenia
            korespondencji, a adresy z listy wczesnego dostępu — do momentu
            zakończenia projektu albo wycofania zgody, w zależności od tego, co
            nastąpi wcześniej.
          </p>
        </section>

        <section>
          <h2>7. Twoje prawa</h2>
          <p className="mt-2">
            Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia,
            ograniczenia przetwarzania, przenoszenia oraz wycofania zgody w
            dowolnym momencie — wystarczy wiadomość na adres podany wyżej.
            Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania sprzed
            jej wycofania. Masz też prawo wniesienia skargi do Prezesa Urzędu
            Ochrony Danych Osobowych (uodo.gov.pl).
          </p>
        </section>

        <section>
          <h2>8. Charakter strony</h2>
          <p className="mt-2">
            ResourceGuard jest projektem w fazie rozwoju o charakterze
            edukacyjnym. Strona nie świadczy pomocy medycznej, psychologicznej
            ani prawnej i nie zastępuje służb ratunkowych. W sytuacji
            bezpośredniego zagrożenia należy zadzwonić pod numer alarmowy 112.
            Szczegółowe zasady opisuje dokument{" "}
            <Link
              href="/zasady-korzystania"
              className="text-ink underline underline-offset-2 hover:text-accent"
            >
              Zasady korzystania
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>9. Zmiany polityki</h2>
          <p className="mt-2">
            Wraz z rozwojem projektu (np. uruchomieniem kont użytkowników)
            niniejsza polityka będzie aktualizowana, a o istotnych zmianach
            poinformujemy na tej stronie. Dokument w obecnym brzmieniu jest
            wersją roboczą przygotowaną dla fazy przedpremierowej projektu i
            przed komercyjnym startem powinien zostać zweryfikowany przez
            prawnika.
          </p>
        </section>
      </div>
    </div>
  );
}
