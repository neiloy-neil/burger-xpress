const CACHE = 'bx-v2';
const OFFLINE_URL = '/offline';

const PRECACHE = [
  '/',
  '/menu',
  '/locations',
  '/order',
  '/about',
  '/gallery',
  '/offline',
];

// ── Install: precache shell pages ────────────────────────────────────────
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll(PRECACHE).catch(() => {})
    )
  );
  self.skipWaiting();
});

// ── Activate: clean old caches ───────────────────────────────────────────
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ── Fetch: stale-while-revalidate for pages, cache-first for assets ──────
self.addEventListener('fetch', (e) => {
  const { request } = e;
  const url = new URL(request.url);

  // Only handle same-origin GET requests
  if (request.method !== 'GET' || url.origin !== location.origin) return;

  // Skip Next.js internals and API routes
  if (
    url.pathname.startsWith('/_next/webpack') ||
    url.pathname.startsWith('/api/')
  )
    return;

  // Images & static assets → cache-first
  if (
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.match(/\.(png|jpg|jpeg|webp|svg|ico|woff2?|css|js)$/)
  ) {
    e.respondWith(
      caches.open(CACHE).then((cache) =>
        cache.match(request).then(
          (cached) =>
            cached ||
            fetch(request).then((res) => {
              if (res.ok) cache.put(request, res.clone());
              return res;
            })
        )
      )
    );
    return;
  }

  // Next.js static chunks → cache-first
  if (url.pathname.startsWith('/_next/static/')) {
    e.respondWith(
      caches.open(CACHE).then((cache) =>
        cache.match(request).then(
          (cached) =>
            cached ||
            fetch(request).then((res) => {
              if (res.ok) cache.put(request, res.clone());
              return res;
            })
        )
      )
    );
    return;
  }

  // Pages → network-first with cache fallback
  e.respondWith(
    fetch(request)
      .then((res) => {
        if (res.ok) {
          caches.open(CACHE).then((cache) => cache.put(request, res.clone()));
        }
        return res;
      })
      .catch(() =>
        caches
          .match(request)
          .then((cached) => cached || caches.match(OFFLINE_URL))
      )
  );
});
