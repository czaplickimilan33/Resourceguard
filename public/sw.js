/**
 * Service worker ResourceGuard — uczciwy, minimalny zakres offline:
 *  - strony kluczowe (start, pomoc teraz, demo, offline) trafiają do cache
 *    przy instalacji i są odświeżane przy każdej udanej wizycie,
 *  - statyczne assety Next.js (hashowane) są cache'owane przy pierwszym użyciu,
 *  - nawigacja działa w trybie network-first z fallbackiem do cache,
 *    a ostatecznie do strony /offline.
 */

const VERSION = "rg-v3";
const PAGE_CACHE = `${VERSION}-pages`;
const ASSET_CACHE = `${VERSION}-assets`;

const PRECACHE_PAGES = ["/", "/pomoc-teraz", "/demo", "/offline"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGE_CACHE)
      .then((cache) => cache.addAll(PRECACHE_PAGES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !key.startsWith(VERSION))
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Nawigacja: najpierw sieć (świeża treść), potem cache, na końcu /offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(PAGE_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached ?? caches.match("/offline"))
            .then((fallback) => fallback ?? Response.error())
        )
    );
    return;
  }

  // Hashowane assety i ikony: cache-first (niezmienne między buildami).
  const isStaticAsset =
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname === "/icon.svg" ||
    url.pathname === "/manifest.webmanifest";

  if (isStaticAsset) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ??
          fetch(request).then((response) => {
            const copy = response.clone();
            caches.open(ASSET_CACHE).then((cache) => cache.put(request, copy));
            return response;
          })
      )
    );
  }
});
