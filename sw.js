/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/stencil-vue-example.js",
    "revision": "f1b172bb62ac21291a745d31886a62ca"
  },
  {
    "url": "build/stencil-vue-example/8oy70diq.es5.js",
    "revision": "56d9c08b96888a6e54372a5a347c18df"
  },
  {
    "url": "build/stencil-vue-example/8oy70diq.js",
    "revision": "9a688400116f87b80fb8af3e3c63132c"
  },
  {
    "url": "build/stencil-vue-example/stencil-vue-example.3hi4vh2i.js",
    "revision": "dd2199cef648ec6bd68226d539300ff8"
  },
  {
    "url": "build/stencil-vue-example/stencil-vue-example.e7t5dghs.js",
    "revision": "7ee9643750d80ee95be400b1b175802b"
  },
  {
    "url": "index.html",
    "revision": "cc389b5b34ad283ee64de5c8c115a10b"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
