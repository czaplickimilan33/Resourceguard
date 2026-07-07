import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent/12 via-night-2 to-lav/10 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(600px circle at 50% 0%, rgba(56,189,248,0.12), transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Zbudujmy system pomocy, który naprawdę da się użyć w stresie.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-mut sm:text-lg">
                ResourceGuard zaczyna od prostego celu: mniej chaosu, więcej
                jasnych kroków i spokojniejszy dostęp do najważniejszych
                informacji.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="#contact" size="lg">
                  Dołącz do listy
                </Button>
                <Button href="#crisis-mode" variant="secondary" size="lg">
                  Zobacz demo trybu kryzysowego
                  <ChevronRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
