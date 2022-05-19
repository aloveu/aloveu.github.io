const cacheName = 'pwatest-v5';
const appShellFiles = [
    './icon-192x192.png',
    './roboto-black.e79330321758be9bc5db.woff',
    './roboto-light.7edb5c1283fd64425d81.woff',
];

const OFFLINE_VERSION = 1;
const CACHE_NAME = "offline";
const OFFLINE_URL = "offline.html";

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');

    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(appShellFiles);

        const offlinecache = await caches.open(CACHE_NAME);
        // Setting {cache: 'reload'} in the new request will ensure that the
        // response isn't fulfilled from the HTTP cache; i.e., it will be from
        // the network.
        await offlinecache.add(new Request(OFFLINE_URL, { cache: "reload" }));
    })());
});

self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
        try {
            const r = await caches.match(e.request);
            console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
            if (r) {
                return r;
            }
            const response = await fetch(e.request);
            const cache = await caches.open(cacheName);
            console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
            cache.put(e.request, response.clone());
            return response;
        }catch (error) {
            console.log("Fetch failed; returning offline page instead.", error);

            const cache = await caches.open(CACHE_NAME);
            const cachedResponse = await cache.match(OFFLINE_URL);
            return cachedResponse;
        }
    })());
});

self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key === cacheName) { return; }
            return caches.delete(key);
        }))
    }));
});


const unreadCount = 24;
navigator.setAppBadge(unreadCount).catch((error) => {
    //Do something with the error.
});

