import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "urgent";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-night font-semibold hover:bg-sky-300 shadow-[0_0_24px_rgba(56,189,248,0.25)]",
  secondary:
    "border border-white/15 bg-white/5 text-ink hover:border-accent/50 hover:bg-white/10",
  ghost: "text-mut hover:text-ink",
  urgent:
    "bg-mode-urgent text-night font-semibold hover:bg-red-300 shadow-[0_0_24px_rgba(248,113,113,0.3)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-xl transition duration-200 active:scale-[0.98]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    disabled && "pointer-events-none opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
