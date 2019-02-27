importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/068a03322fa4ce0fda07.js",
    "revision": "de175128a959fca28cb6e70b4eec3a8b"
  },
  {
    "url": "/_nuxt/43dd7e623a3eaa43dabd.js",
    "revision": "4291243e82f2a7247987da62e72297ca"
  },
  {
    "url": "/_nuxt/6e7cfd07b6734300d2f2.js",
    "revision": "d810373650ebc4e442bf749e9aaa7330"
  },
  {
    "url": "/_nuxt/8233660d7f4db98ae003.js",
    "revision": "063c8a2960919287a5967d6fa2790c12"
  },
  {
    "url": "/_nuxt/9b0b98e9b1d9a4708229.js",
    "revision": "ecf1e9e073b4c4cb7ba830b9850452e1"
  },
  {
    "url": "/_nuxt/af998dfe4d451b024468.js",
    "revision": "90e84712c663cadb30f39c3b109843c1"
  },
  {
    "url": "/_nuxt/c2e4d5ef52b71bbc074e.js",
    "revision": "cec283a3225244895c709d222d15a52e"
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
