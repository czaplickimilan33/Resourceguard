"use client";

import { useState, type FormEvent } from "react";
import { AlertTriangle, CheckCircle2, Loader2, Send } from "lucide-react";
import { contactCards, contactTypes } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const initialForm = {
  name: "",
  email: "",
  type: contactTypes[0],
  message: "",
};

type Status = "idle" | "sending" | "success" | "error";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-night/60 px-4 py-3 text-sm text-ink placeholder:text-mut/60 transition-colors focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20";

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Tryb demo — brak skonfigurowanego klucza Web3Forms
    if (!WEB3FORMS_KEY) {
      setStatus("success");
      setForm(initialForm);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `ResourceGuard — ${form.type}`,
          from_name: "ResourceGuard Landing",
          name: form.name,
          email: form.email,
          typ_kontaktu: form.type,
          message: form.message,
        }),
      });
      const data = (await res.json()) as { success?: boolean };
      if (res.ok && data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-y border-white/5 bg-night-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Kontakt"
          title="Dołącz do wczesnej listy ResourceGuard."
          description="Napisz w sprawie współpracy, testów MVP albo zostaw feedback. Odpowiadamy na każdą wiadomość."
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
                      ? "Dzięki. Twoja wiadomość została wysłana — odezwiemy się na podany adres email."
                      : "Dzięki. Twoja wiadomość została zapisana w wersji demonstracyjnej."}
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
                    Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę
                    albo napisz bezpośrednio na nasz adres email.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
                      Imię
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Twoje imię"
                      className={inputClasses}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="adres@email.pl"
                      className={inputClasses}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-type" className="mb-1.5 block text-sm font-medium text-ink">
                    Typ kontaktu
                  </label>
                  <select
                    id="contact-type"
                    name="type"
                    className={inputClasses}
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    {contactTypes.map((type) => (
                      <option key={type} value={type} className="bg-night-2">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
                    Wiadomość
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Napisz, w jakiej sprawie się kontaktujesz…"
                    className={inputClasses}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" size="lg" className={status === "sending" ? "pointer-events-none opacity-70" : undefined}>
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
                      ? "Twoje dane wykorzystamy wyłącznie do odpowiedzi na wiadomość. "
                      : "To wersja demonstracyjna formularza. Dane nie są jeszcze wysyłane do serwera. "}
                    <a
                      href="/polityka-prywatnosci"
                      className="underline decoration-white/20 underline-offset-2 transition-colors hover:text-ink"
                    >
                      Polityka prywatności
                    </a>
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
