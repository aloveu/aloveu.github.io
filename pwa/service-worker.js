const CACHE_NAME = "pwatest-v7";
const OFFLINE_URL = "./offline.html";
const ASSETS = [
  "./roboto-black.e79330321758be9bc5db.woff",
  "./icon-192x192.png",
  "./roboto-light.7edb5c1283fd64425d81.woff",
];
const channel = new BroadcastChannel("sw-messages");

//install
self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      try {
        console.log("서비스워커 Install");

        const cache = await caches.open(CACHE_NAME);
        await cache.addAll([
          new Request(OFFLINE_URL, { cache: "reload" }),
          ...ASSETS,
        ]);
      } catch (err) {
        console.log("install error", err);
      }
    })()
  );

  channel.postMessage({ title: "postmessage test" });
  self.skipWaiting();
});

//update
self.addEventListener("activate", (e) => {
  console.log("서비스워커 동작(activation) 시작됨!");
});

//data fetch
self.addEventListener("fetch", (e) => {
  // fetch  이벤트 응답 반환. interceptor 역할할 수 있음.
  e.respondWith(
    (async () => {
      try {
        const r = await caches.match(e.request);
        if (r) {
          console.log("캐싱된 파일", e.request);
          return r;
        }
        console.log("네트워크 요청", e.request);

        const networkResponse = await fetch(e.request);
        return networkResponse;
      } catch (err) {
        console.log("Fetch failed;", err);

        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(OFFLINE_URL);
        console.log(cachedResponse);
        return cachedResponse;
      }
    })()
  );
});

self.addEventListener("fetch", (e) => {
  console.log("두번째 fetch");
});

//notification
self.addEventListener("notificationclick", (event) => {
  console.log("notificationclick");
  let url = "https://aloveu.github.io/pwa/index.html";
  event.notification.close(); // Android needs explicit close.
  event.waitUntil(
    clients.matchAll({ type: "window" }).then((windowClients) => {
      // Check if there is already a window/tab open with the target URL
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        // If so, just focus it.
        if (client.url === url && "focus" in client) {
          return client.focus();
        }
      }
      // If not, then open the target URL in a new window/tab.    ㅈ
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});

const unreadCount = 24;
navigator.setAppBadge(unreadCount).catch((error) => {
  //Do something with the error.
});
