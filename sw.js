/* CarExpress — Service Worker (cache-first) */
const CACHE_NAME = 'carexpress-v1';
const ASSETS = [
  './',
  'index.html',
  'bundle.js',
  'css/global.css',
  'manifest.json',
  'icons/icon-192.svg',
  'icons/icon-512.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(
      ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
