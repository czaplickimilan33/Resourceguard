import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

export default function FeatureCard({ icon: Icon, title, text }: FeatureCardProps) {
  return (
    <article className="group relative rounded-2xl border border-white/8 bg-gradient-to-b from-card to-card-deep p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at 30% 0%, rgba(56,189,248,0.08), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mut">{text}</p>
      </div>
    </article>
  );
}
