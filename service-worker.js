self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("fk-inversiones-cache").then(function (cache) {
      return cache.addAll([
        "./index.html",
        "./logo_fk.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});