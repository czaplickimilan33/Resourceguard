/** Static-markup background glows animated with pure CSS (see globals.css). */
export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="glow-drift absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="glow-drift absolute top-1/3 -left-40 h-[360px] w-[420px] rounded-full bg-mint/6 blur-[120px]" />
      <div className="glow-drift absolute -right-40 bottom-0 h-[360px] w-[420px] rounded-full bg-lav/8 blur-[130px]" />
    </div>
  );
}
