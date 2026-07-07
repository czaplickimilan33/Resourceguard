import clsx from "clsx";
import type { ReactNode } from "react";

type Tone = "accent" | "mint" | "warn" | "lav";

const toneClasses: Record<Tone, { wrap: string; dot: string }> = {
  accent: { wrap: "border-accent/30 bg-accent/10 text-accent", dot: "bg-accent" },
  mint: { wrap: "border-mint/30 bg-mint/10 text-mint", dot: "bg-mint" },
  warn: { wrap: "border-warn/30 bg-warn/10 text-warn", dot: "bg-warn" },
  lav: { wrap: "border-lav/30 bg-lav/10 text-lav", dot: "bg-lav" },
};

export default function Badge({
  children,
  tone = "accent",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        toneClasses[tone].wrap,
        className
      )}
    >
      <span className={clsx("h-1.5 w-1.5 rounded-full", toneClasses[tone].dot)} aria-hidden />
      {children}
    </span>
  );
}
