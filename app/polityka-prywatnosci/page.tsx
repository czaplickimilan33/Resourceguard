import type { Metadata } from "next";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Polityka prywatności — ResourceGuard",
  description:
    "Informacje o przetwarzaniu danych osobowych na stronie ResourceGuard.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <a
        href="/"
        className="inline-flex items-center gap-2 text-sm text-mut transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Wróć na stronę główną
      </a>

      <div className="mt-8 flex items-center gap-2 font-semibold text-ink">
        <ShieldCheck className="h-6 w-6 text-accent" aria-hidden />
        ResourceGuard
      </div>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Polityka prywatności
      </h1>
      <p className="mt-2 text-sm text-mut">
        Ostatnia aktualizacja: lipiec 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-mut [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink">
        <section>
          <h2>1. Administrator danych</h2>
          <p className="mt-2">
            Administratorem danych osobowych przekazywanych za pośrednictwem
            tej strony jest Milan Czaplicki. Kontakt w sprawach związanych z
            ochroną danych: czaplickimilan@gmail.com.
          </p>
        </section>

        <section>
          <h2>2. Jakie dane zbieramy i po co</h2>
          <p className="mt-2">
            Jedyne dane osobowe, które zbieramy, to dane przekazane
            dobrowolnie przez formularz kontaktowy: imię, adres email oraz
            treść wiadomości. Wykorzystujemy je wyłącznie w celu odpowiedzi
            na wiadomość oraz — jeśli wybrano opcję „Early access” — do
            poinformowania o rozwoju projektu ResourceGuard. Podstawą
            przetwarzania jest zgoda wyrażona przez wysłanie formularza
            (art. 6 ust. 1 lit. a RODO) oraz prawnie uzasadniony interes
            administratora polegający na prowadzeniu korespondencji
            (art. 6 ust. 1 lit. f RODO).
          </p>
        </section>

        <section>
          <h2>3. Komu powierzamy dane</h2>
          <p className="mt-2">
            Wiadomości z formularza są dostarczane za pośrednictwem usługi
            Web3Forms, a strona jest utrzymywana na platformie Vercel. Obaj
            dostawcy przetwarzają dane wyłącznie w zakresie niezbędnym do
            świadczenia usługi. Danych nie sprzedajemy i nie udostępniamy
            ich w celach marketingowych.
          </p>
        </section>

        <section>
          <h2>4. Statystyki i pliki cookies</h2>
          <p className="mt-2">
            Strona korzysta z Vercel Analytics — narzędzia statystycznego,
            które nie używa plików cookies i nie śledzi użytkowników między
            stronami. Zbierane są wyłącznie zanonimizowane dane o ruchu
            (np. liczba odwiedzin, kraj, typ urządzenia). Strona nie
            wyświetla reklam i nie stosuje cookies marketingowych.
          </p>
        </section>

        <section>
          <h2>5. Jak długo przechowujemy dane</h2>
          <p className="mt-2">
            Wiadomości email przechowujemy przez okres prowadzenia
            korespondencji, a adresy z listy wczesnego dostępu — do momentu
            zakończenia projektu albo wycofania zgody, w zależności od tego,
            co nastąpi wcześniej.
          </p>
        </section>

        <section>
          <h2>6. Twoje prawa</h2>
          <p className="mt-2">
            Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia,
            ograniczenia przetwarzania oraz wycofania zgody w dowolnym
            momencie — wystarczy wiadomość na adres podany wyżej. Masz też
            prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
            Osobowych (uodo.gov.pl).
          </p>
        </section>

        <section>
          <h2>7. Charakter strony</h2>
          <p className="mt-2">
            ResourceGuard jest projektem koncepcyjnym o charakterze
            edukacyjnym. Strona nie świadczy pomocy medycznej,
            psychologicznej ani prawnej i nie zastępuje służb ratunkowych.
            W sytuacji bezpośredniego zagrożenia należy skontaktować się z
            lokalnym numerem alarmowym.
          </p>
        </section>
      </div>
    </main>
  );
}
