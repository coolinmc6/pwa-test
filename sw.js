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
	console.log(event);
	if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
	  return;
	}
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true})
    .then(response => {
      return response || fetch(event.request);
    })
    .catch(err => {
    	console.log(err);
    })
  );
});