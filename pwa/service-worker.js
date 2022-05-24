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

//notification
self.addEventListener('notificationclick', (event) => {
    let url = 'https://aloveu.github.io/pwa/index.html';
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({type: 'window'}).then( windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});

var savedPrompt = null;

self.addEventListener('beforeinstallprompt', (event)=>{
    event.preventDefault();
    savedPrompt = event;
    alert('df')
});