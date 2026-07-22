"use client";

import { useEffect } from "react";

/**
 * Rejestruje service workera odpowiedzialnego za tryb offline.
 * Tylko w produkcji — w trybie dev SW utrudniałby pracę z HMR.
 */
export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      !("serviceWorker" in navigator)
    ) {
      return;
    }
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Brak SW nie może blokować strony — offline po prostu nie zadziała.
    });
  }, []);

  return null;
}
