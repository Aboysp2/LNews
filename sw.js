const CACHE_NAME = 'etscabc-pwa-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './images/logo1.jpg',
    './images/logo2.jpg',
    './images/logo3.jpg',
    './images/logo4.jpg',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
