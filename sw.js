var cacheName = 'pwa-static-cache';
var filesToCache = [
  '/',
  '/index.html'
];

self.addEventListener('install', function(event) {
	console.log('[Service Worker] Installing Service Worker...', event)
	event.waitUntil(
	    caches.open(cacheName).then(function(cache) {
	      console.log('[ServiceWorker] Caching app shell');
	      return cache.addAll(filesToCache);
	    })
	  );
});

self.addEventListener('activate', function(event) {
	console.log('[Service Worker] Activating Service Worker...', event)
	return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});