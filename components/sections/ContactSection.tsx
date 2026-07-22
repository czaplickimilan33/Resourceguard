"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { AlertTriangle, CheckCircle2, Loader2, Send } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { contactCards, contactTypes } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-night/60 px-4 py-3 text-sm text-ink placeholder:text-mut/60 transition-colors focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 aria-[invalid=true]:border-mode-urgent/60";

export default function ContactSection({
  defaultType = contactTypes[0],
}: {
  defaultType?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();

  function validate(data: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) next.name = "Podaj imię (co najmniej 2 znaki).";
    if (!EMAIL_RE.test(email)) next.email = "Podaj poprawny adres email.";
    if (message.length < 10)
      next.message = "Napisz kilka słów więcej (co najmniej 10 znaków).";
    if (data.get("consent") !== "on")
      next.consent = "Zgoda jest potrzebna, żebyśmy mogli odpowiedzieć.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    // Honeypot — boty wypełniają ukryte pole, ludzie go nie widzą.
    if (String(data.get("botcheck") ?? "") !== "") {
      setStatus("success");
      formEl.reset();
      return;
    }

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");

    // Tryb demo — brak skonfigurowanego klucza Web3Forms
    if (!WEB3FORMS_KEY) {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      formEl.reset();
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `ResourceGuard — ${data.get("type")}`,
          from_name: "ResourceGuard",
          name: data.get("name"),
          email: data.get("email"),
          typ_kontaktu: data.get("type"),
          message: data.get("message"),
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (res.ok && json.success) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="border-y border-white/5 bg-night-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Kontakt"
          title="Dołącz do wczesnej listy ResourceGuard."
          description="Napisz w sprawie wczesnego dostępu, pilotażu w placówce albo współpracy. Odpowiadamy na każdą wiadomość."
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          {/* Form */}
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
              {status === "success" && (
                <div
                  className="mb-6 flex items-start gap-3 rounded-xl border border-mint/30 bg-mint/10 p-4"
                  role="status"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mint" aria-hidden />
                  <p className="text-sm leading-relaxed text-ink">
                    {WEB3FORMS_KEY
                      ? "Dzięki! Twoja wiadomość została wysłana — odezwiemy się na podany adres email."
                      : "Dzięki! Wiadomość została przyjęta w wersji demonstracyjnej formularza (wysyłka nie jest jeszcze skonfigurowana)."}
                  </p>
                </div>
              )}

              {status === "error" && (
                <div
                  className="mb-6 flex items-start gap-3 rounded-xl border border-warn/30 bg-warn/10 p-4"
                  role="alert"
                >
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warn" aria-hidden />
                  <p className="text-sm leading-relaxed text-ink">
                    Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę.
                  </p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot — niewidoczne dla ludzi, kuszące dla botów */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor={`${uid}-botcheck`}>
                    Nie wypełniaj tego pola
                  </label>
                  <input
                    id={`${uid}-botcheck`}
                    type="text"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`${uid}-name`} className="mb-1.5 block text-sm font-medium text-ink">
                      Imię
                    </label>
                    <input
                      id={`${uid}-name`}
                      name="name"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Twoje imię"
                      className={inputClasses}
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={errors.name ? `${uid}-name-error` : undefined}
                    />
                    {errors.name && (
                      <p id={`${uid}-name-error`} className="mt-1.5 text-xs text-mode-urgent">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor={`${uid}-email`} className="mb-1.5 block text-sm font-medium text-ink">
                      Email
                    </label>
                    <input
                      id={`${uid}-email`}
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="adres@email.pl"
                      className={inputClasses}
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={errors.email ? `${uid}-email-error` : undefined}
                    />
                    {errors.email && (
                      <p id={`${uid}-email-error`} className="mt-1.5 text-xs text-mode-urgent">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor={`${uid}-type`} className="mb-1.5 block text-sm font-medium text-ink">
                    Temat kontaktu
                  </label>
                  <select
                    id={`${uid}-type`}
                    name="type"
                    defaultValue={defaultType}
                    className={inputClasses}
                  >
                    {contactTypes.map((type) => (
                      <option key={type} value={type} className="bg-night-2">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={`${uid}-message`} className="mb-1.5 block text-sm font-medium text-ink">
                    Wiadomość
                  </label>
                  <textarea
                    id={`${uid}-message`}
                    name="message"
                    required
                    rows={5}
                    placeholder="Napisz, w jakiej sprawie się kontaktujesz…"
                    className={inputClasses}
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? `${uid}-message-error` : undefined}
                  />
                  {errors.message && (
                    <p id={`${uid}-message-error`} className="mt-1.5 text-xs text-mode-urgent">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`${uid}-consent`}
                    className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-mut"
                  >
                    <input
                      id={`${uid}-consent`}
                      name="consent"
                      type="checkbox"
                      required
                      className={clsx(
                        "mt-0.5 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded border border-white/20 bg-night/60 transition-colors",
                        "checked:border-accent checked:bg-accent checked:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22%23060d1a%22%3E%3Cpath%20d%3D%22M12.7%204.7a1%201%200%200%201%200%201.4l-5%205a1%201%200%200%201-1.4%200l-2-2a1%201%200%200%201%201.4-1.4l1.3%201.3%204.3-4.3a1%201%200%200%201%201.4%200Z%22%2F%3E%3C%2Fsvg%3E')]",
                        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      )}
                      aria-invalid={errors.consent ? true : undefined}
                      aria-describedby={errors.consent ? `${uid}-consent-error` : undefined}
                    />
                    <span>
                      Wyrażam zgodę na przetwarzanie podanych danych w celu
                      obsługi mojej wiadomości, zgodnie z{" "}
                      <Link
                        href="/polityka-prywatnosci"
                        className="underline decoration-white/20 underline-offset-2 transition-colors hover:text-ink"
                      >
                        polityką prywatności
                      </Link>
                      . Zgodę mogę wycofać w każdej chwili.
                    </span>
                  </label>
                  {errors.consent && (
                    <p id={`${uid}-consent-error`} className="mt-1.5 text-xs text-mode-urgent">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" size="lg" disabled={status === "sending"}>
                    {status === "sending" ? (
                      <>
                        Wysyłanie…
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      </>
                    ) : (
                      <>
                        Wyślij wiadomość
                        <Send className="h-4 w-4" aria-hidden />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-mut">
                    {WEB3FORMS_KEY
                      ? "Twoje dane wykorzystamy wyłącznie do odpowiedzi na wiadomość."
                      : "To wersja demonstracyjna formularza — dane nie są jeszcze nigdzie wysyłane."}
                  </p>
                </div>
              </form>
            </div>
          </Reveal>

          {/* Side cards */}
          <div className="space-y-4">
            {contactCards.map((card, i) => (
              <Reveal key={card.title} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-white/8 bg-card p-6">
                  <h3 className="text-base font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mut">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
