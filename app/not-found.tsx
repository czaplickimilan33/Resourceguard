import { Compass, LifeBuoy } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 pt-32 pb-20 text-center sm:px-6">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
        <Compass className="h-7 w-7" aria-hidden />
      </span>
      <p className="mt-6 font-display text-sm font-semibold tracking-widest text-mut">
        BŁĄD 404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Ta strona nie istnieje — ale spokojnie, nic się nie stało.
      </h1>
      <p className="mt-4 max-w-md text-mut">
        Adres mógł się zmienić albo w linku wkradła się literówka. Poniżej
        znajdziesz drogę powrotną.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Wróć na stronę główną</Button>
        <Button href="/pomoc-teraz" variant="secondary">
          <LifeBuoy className="h-4 w-4 text-mode-urgent" aria-hidden />
          Pomoc teraz
        </Button>
      </div>
      <p className="mt-10 text-xs text-mut">
        Jeśli potrzebujesz natychmiastowego wsparcia: numer alarmowy{" "}
        <a href="tel:112" className="font-medium text-ink hover:text-accent">
          112
        </a>
        , dzieci i młodzież{" "}
        <a href="tel:116111" className="font-medium text-ink hover:text-accent">
          116 111
        </a>
        .
      </p>
    </div>
  );
}
