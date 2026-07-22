"use client";

import { useEffect, useState } from "react";
import { Wifi, WifiOff } from "lucide-react";
import clsx from "clsx";

/** Czytelny wskaźnik stanu połączenia — tekst + ikona, nie sam kolor. */
export default function OnlineStatusBadge({ className }: { className?: string }) {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return (
    <span
      role="status"
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium",
        online
          ? "border-mint/25 bg-mint/10 text-mint"
          : "border-warn/30 bg-warn/10 text-warn",
        className
      )}
    >
      {online ? (
        <>
          <Wifi className="h-3 w-3" aria-hidden />
          Online
        </>
      ) : (
        <>
          <WifiOff className="h-3 w-3" aria-hidden />
          Offline — zapisane materiały działają
        </>
      )}
    </span>
  );
}
