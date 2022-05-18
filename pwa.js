const cacheName = 'pwatest-v1';
const appShellFiles = [
    '/test.html',
    '/icon-192x192.png'
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

// 알림에 대한 권한 요청
const button = document.getElementById('notifications');
button.addEventListener('click', () => {
    Notification.requestPermission().then((result) => {
        if (result === 'granted') {
            console.log('알림설정 ok');
            randomNotification();
        }else{
            console.log('알림설정 거부');
        }
    });
})
function randomNotification() {
    const notifTitle = '알림 테스트';
    const options = {
        body: 'body options',
        icon: '/icon-192x192.png',
    };
    new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
}