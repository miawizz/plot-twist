self.addEventListener('install', event => {
  // Activate immediately after install
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Take control of all clients right away
  event.waitUntil(self.clients.claim());
});

// No offline caching yet, just let all requests pass through
self.addEventListener('fetch', () => {});
