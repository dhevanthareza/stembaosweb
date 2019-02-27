importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/43dd7e623a3eaa43dabd.js",
    "revision": "4291243e82f2a7247987da62e72297ca"
  },
  {
    "url": "/_nuxt/555fd0bae858aac3c36c.js",
    "revision": "c5fc4afbfdb2e52d755793d964d638b1"
  },
  {
    "url": "/_nuxt/6e7cfd07b6734300d2f2.js",
    "revision": "d810373650ebc4e442bf749e9aaa7330"
  },
  {
    "url": "/_nuxt/73c28d01ba5cc2e90af7.js",
    "revision": "da66c0df8c40bfca9ddec36b060098a1"
  },
  {
    "url": "/_nuxt/8233660d7f4db98ae003.js",
    "revision": "063c8a2960919287a5967d6fa2790c12"
  },
  {
    "url": "/_nuxt/c2e4d5ef52b71bbc074e.js",
    "revision": "cec283a3225244895c709d222d15a52e"
  },
  {
    "url": "/_nuxt/ce95a126add78eaba629.js",
    "revision": "401c4c247dfa59497d93bb4270eb3ca8"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
