importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1f625ee2ac9aa63492bb.js",
    "revision": "2faf566eafc7a6dea13176a71b61d075"
  },
  {
    "url": "/_nuxt/5d53393fe337c762032b.js",
    "revision": "03afd053d342b404f2dac42760a7f8a3"
  },
  {
    "url": "/_nuxt/69b16a1036c07a8eaa11.js",
    "revision": "51bde6fd2459f4529a7f8426b5346210"
  },
  {
    "url": "/_nuxt/8c58a89dc31c581c9622.js",
    "revision": "70df24cc5d52fda4f7d3606082bf3627"
  },
  {
    "url": "/_nuxt/9ae7678b2fd190f3e241.js",
    "revision": "3b30d5fc1fcdc33e209de6a7947f0f80"
  },
  {
    "url": "/_nuxt/9d897e18a5067e3a4347.js",
    "revision": "8c27a8a6072631ce72188b7f4ddd1763"
  },
  {
    "url": "/_nuxt/d811d27de64a59b96a3c.js",
    "revision": "c0fbd7cc53abbb836b943128a7ac312d"
  }
], {
  "cacheId": "stembaos",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
