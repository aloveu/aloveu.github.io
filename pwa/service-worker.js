const CACHE_NAME = 'pwatest-v5';
const OFFLINE_URL = "./offline.html";

//install
self.addEventListener('install', (e) => {
    e.waitUntil((async () => {
        try{
            console.log('서비스워커 Install');

            const cache = await caches.open(CACHE_NAME);
            await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
        }catch(err){
            console.log('install error', err);
        }
    })());


    self.skipWaiting();
});

//update
self.addEventListener('activate', e => {
    console.log('서비스워커 동작(activation) 시작됨!');
});

//data fetch
self.addEventListener('fetch', e => {
    console.log("데이터 요청(fetch)!", e.request)

    // fetch  이벤트 응답 반환. interceptor 역할할 수 있음.
    e.respondWith((async () => {
        try {
            const preloadResponse = await e.preloadResponse;
            if (preloadResponse) {
                return preloadResponse;
            }

            const networkResponse = await fetch(e.request);
            return networkResponse;
        }catch (err) {
            console.log("Fetch failed;", err);

          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(OFFLINE_URL);
          console.log(cachedResponse);
          return cachedResponse;
        }
    })());
});