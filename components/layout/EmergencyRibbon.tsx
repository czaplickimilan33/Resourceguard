import { PhoneCall } from "lucide-react";

/**
 * Stale widoczny pasek z numerem alarmowym — bezpieczeństwo użytkownika
 * jest ważniejsze niż estetyka, dlatego nie da się go ukryć.
 */
export default function EmergencyRibbon() {
  return (
    <div className="border-b border-white/5 bg-night-2/95 text-[13px]">
      <p className="mx-auto flex h-9 max-w-6xl items-center justify-center gap-x-2 overflow-hidden px-4 text-mut sm:justify-between sm:px-6">
        <span className="hidden items-center gap-2 sm:inline-flex">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-mode-urgent" aria-hidden />
          Kryzys nie może czekać? Pomoc jest dostępna całą dobę.
        </span>
        <span className="flex items-center gap-x-3 whitespace-nowrap">
          <a
            href="tel:112"
            className="inline-flex items-center gap-1.5 font-semibold text-ink transition-colors hover:text-accent"
          >
            <PhoneCall className="h-3.5 w-3.5 text-mode-urgent" aria-hidden />
            Zagrożenie życia: 112
          </a>
          <span className="text-white/15" aria-hidden>
            |
          </span>
          <a
            href="tel:116111"
            className="font-medium text-ink transition-colors hover:text-accent"
          >
            Dzieci i młodzież: 116 111
          </a>
        </span>
      </p>
    </div>
  );
}
