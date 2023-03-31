self.addEventListener('install', function(event) {
	event.waitUntil(
	  caches.open('my-cache-name').then(function(cache) {
		return cache.addAll([
		  '/',
		  '/index.html',
		  '/styles.css',
		  '/script.js',
		  '/image.png'
		]);
	  })
	);
  });
  
// const CACHE_NAME = 'my-site-cache-v1';

// const urlsToCache = [
//     '/',
//     '/css/app.css',
//     '/views/index.hbs',
// ];

// self.addEventListener('install', (e) => {
//     console.log("Service Worker Installed");
// 	console.log(urlsToCache);
// });
  