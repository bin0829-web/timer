self.addEventListener('install', e => {
  e.waitUntil(caches.open('timer70-v1').then(cache => cache.addAll([
    './','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'
  ])));
  self.skipWaiting();
});
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
