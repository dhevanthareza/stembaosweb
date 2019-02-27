importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4412aaae20486b014ea2.js",
    "revision": "7be2a70b859ef5eb179273b41eba2e6b"
  },
  {
    "url": "/_nuxt/4e01340d0e22199d6038.js",
    "revision": "0be97fa7d55b878ca2fd4d4b810eb608"
  },
  {
    "url": "/_nuxt/778f623da14d585b5574.js",
    "revision": "f58abb3078b14467ee740acd834573fe"
  },
  {
    "url": "/_nuxt/7ab8781382ba1310af00.js",
    "revision": "3dc39775a4af53e0fdfeb7faad39426a"
  },
  {
    "url": "/_nuxt/7b4bb88a3cb8e413c8e6.js",
    "revision": "5f98b6562e29fd2f1ad2f9e20156273e"
  },
  {
    "url": "/_nuxt/8b3bb0c67d1aef99cdb9.js",
    "revision": "db6d63e8f365c7143ff29c93bd50c2c9"
  },
  {
    "url": "/_nuxt/c1868ad17df76772e519.js",
    "revision": "acbf2a58c9356b49e2b813c34fd3fc7b"
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
