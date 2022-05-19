const cacheName = 'pwatest-v5';
const appShellFiles = [
    './icon-192x192.png',
    './roboto-black.e79330321758be9bc5db.woff',
    './roboto-light.7edb5c1283fd64425d81.woff',
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');

    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(appShellFiles);
    })());
});

self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) { return r; }
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
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


// 알림에 대한 권한 요청
    Notification?.requestPermission().then((result) => {
        if (result === 'granted') {
            console.log('알림설정 ok');
            randomNotification()
        } else {
            console.log('알림설정 거부');
        }
    });

function randomNotification() {
    const notifTitle = '알림 테스트';
    const options = {
        body: '알림 내용 전달..',
        icon: '/icon-192x192.png',
    };
    setTimeout(()=>{
        new Notification(notifTitle, options);
    }, 5000)
}