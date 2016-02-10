self.addEventListener('install', event => {
  // Do install stuff
  console.log('installed');
  
  	/* Import service worker cache polyfill JS */
	importScripts('cache-polyfill.js');
  
  // pre cache a load of stuff:
  event.waitUntil(
    caches.open('myapp-static-v1').then(function(cache) {
      return cache.addAll([
        'image.jpg',
  		'main.js',
  		'/'
      ]);
    })
  )
});

self.addEventListener('activate', event => {
  // Do activate stuff: This will come later on.
  console.log('activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});