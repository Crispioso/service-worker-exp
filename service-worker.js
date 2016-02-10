/* Import service worker cache polyfill JS */
// importScripts('cache-polyfill.js');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}

console.log('hello');

// example usage:
// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open('demo-cache').then(function(cache) {
//       return cache.put('/', new Response("From the cache!"));
//     })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       return response || new Response("Nothing in the cache for this request");
//     })
//   );
// });