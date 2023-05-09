const cacheName = "cache6"; // Change value to force update

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll([
        '/',
        'index.html',
        'styles/main.css',
        'styles/mywind.css',
        'assets/logo.png'
    ])),
  );
});
 
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});