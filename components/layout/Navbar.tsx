"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { LifeBuoy, Menu, ShieldCheck, X } from "lucide-react";
import clsx from "clsx";
import { navLinks } from "@/lib/data";
import Button from "@/components/ui/Button";
import EmergencyRibbon from "@/components/layout/EmergencyRibbon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  // Cień i mocniejsze tło po przewinięciu
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Zamknij menu mobilne po zmianie strony
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape zamyka menu mobilne
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300",
        scrolled
          ? "border-white/10 bg-night/90 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "border-white/5 bg-night/80"
      )}
    >
      <EmergencyRibbon />
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
        aria-label="Nawigacja główna"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-lg font-display font-semibold tracking-tight text-ink"
        >
          <ShieldCheck className="h-6 w-6 text-accent" aria-hidden />
          ResourceGuard
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            if (link.emphasis === "help") {
              return (
                <li key={link.href} className="ml-1.5">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                      active
                        ? "border-mode-urgent/50 bg-mode-urgent/15 text-ink"
                        : "border-mode-urgent/30 bg-mode-urgent/10 text-ink hover:border-mode-urgent/60 hover:bg-mode-urgent/15"
                    )}
                  >
                    <LifeBuoy className="h-3.5 w-3.5 text-mode-urgent" aria-hidden />
                    {link.label}
                  </Link>
                </li>
              );
            }
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "relative rounded-lg px-3 py-2 text-sm transition-colors",
                    active ? "text-ink" : "text-mut hover:text-ink"
                  )}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-accent to-mint"
                      aria-hidden
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/#kontakt" size="md">
            Dołącz do listy
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-ink transition-colors hover:bg-white/5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="max-h-[calc(100dvh-6.5rem)] overflow-y-auto border-t border-white/5 bg-night-2/95 backdrop-blur-md lg:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={clsx(
                      "flex items-center gap-2 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5 hover:text-ink",
                      link.emphasis === "help" && "font-medium",
                      isActive(link.href) ? "text-ink" : "text-mut"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.emphasis === "help" && (
                      <LifeBuoy className="h-4 w-4 text-mode-urgent" aria-hidden />
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button href="/#kontakt" className="w-full" onClick={() => setOpen(false)}>
                  Dołącz do listy
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
