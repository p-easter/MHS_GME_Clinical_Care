const mhsClinicalGuide = "mhs-gme-clinical-guide-v1"
const assets = [
    "/",
    "/Index.html",
    "/Hypertension_Pregnancy.html",
    "/hyponatremia.html",
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
    "apple-touch-icon.png",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "Hypertension_During_Pregnancy.jpeg",
    "hyponatremia.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(mhsClinicalGuide).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})