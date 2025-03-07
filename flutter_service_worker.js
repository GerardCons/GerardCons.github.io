'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0f2d198862b352aa5af8e34b77b7167b",
"assets/AssetManifest.bin.json": "44ae46e7be38774a7f7dc6ac91447015",
"assets/AssetManifest.json": "efe365dd40dc2a4d6a688bf2f0a515e9",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/gifs/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/icons/cellphone-black.svg": "50e852344e72db91283bb121459c86da",
"assets/assets/icons/cellphone-white.svg": "41a131b4cbe5decef3deffb7b7af28fa",
"assets/assets/icons/design-black.svg": "c0c6d06e594bbeab0fca930d33b91cac",
"assets/assets/icons/design-white.svg": "bb7ec0ae6302621f7ccf1923a78246db",
"assets/assets/icons/flutter.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/icons/react-native.svg": "f0340143227cc3546b667fd9c4d1e1d8",
"assets/assets/icons/tech-black.svg": "528166640fe0a066feae29d0f7205459",
"assets/assets/icons/tech-white.svg": "322739a63ce80fbcc0a71a51595a6ba7",
"assets/assets/icons/ux-ui.svg": "fe3876921a43bb141b062d7d1d5ec668",
"assets/assets/icons/web-black.svg": "b4be7cd753da9b40f14a20037a9ab487",
"assets/assets/icons/web-development.svg": "23479a1147344ed45f29f8622d3986ef",
"assets/assets/icons/web-white.svg": "dd8b9662ff6fba65f4f1eacdbf77f162",
"assets/assets/imgs/5424482.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/imgs/formal_picture.jpg": "a3772e83e65cf3ce5b453149eece0618",
"assets/assets/imgs/grad.jpg": "21e6e35298fea9f5798ded82cc5799b5",
"assets/assets/imgs/graduation_picture-min.jpg": "f40f4eacbfcfeffe44521f29c35fc3fd",
"assets/assets/imgs/graduation_picture.jpg": "1e90be5bbca3d75ac38a630f25475fe5",
"assets/assets/imgs/graduation_picture.png": "10c65e0d946488f9841e48279b6789f8",
"assets/assets/imgs/iweft_1.png": "0b788199e207081d9dfce7b33e085709",
"assets/assets/imgs/iweft_2.png": "c4b322abfa3a177278ce776cbb38c43b",
"assets/assets/imgs/iweft_3.png": "d8954167273327978b729a7d9628c36c",
"assets/assets/imgs/iweft_4.png": "77326409a9797e0a6b83de5041855294",
"assets/assets/imgs/iweft_5.png": "6936ca7258484c0e7fa1fdfc170224a6",
"assets/assets/imgs/iweft_banner_color.jpg": "7eeb3c636efecd26e70a60e647a6c245",
"assets/assets/imgs/iweft_banner_white.jpg": "0e491af45831df4aa48f810b50353fae",
"assets/assets/imgs/jhuy_1.png": "e37bfae0ffebc504cd70bfdea9777452",
"assets/assets/imgs/jhuy_2.png": "c4a8a085e3bc3b82506f20b75ba37dad",
"assets/assets/imgs/jhuy_3.png": "8a9b53646a407e0d1388fe020d0036f8",
"assets/assets/imgs/jhuy_4.png": "957f4095d2f7b5baaa57d71557e34f91",
"assets/assets/imgs/jhuy_5.png": "7cf0fac4c4c8e48cc37be089d4779839",
"assets/assets/imgs/jhuy_banner_2_color.jpg": "7d7beb59a7c0a3b5b2b7203490dbe6ff",
"assets/assets/imgs/jhuy_banner_2_white.jpg": "d06ddf093f67e70c660a19642c67bf91",
"assets/assets/imgs/jhuy_banner_3_color.png": "19ab6bd50f17f807eee27f27775df9bb",
"assets/assets/imgs/jhuy_banner_3_color.svg": "e9b4971c6c5389195ed7f49c8caa6974",
"assets/assets/imgs/jhuy_banner_color.jpg": "8c21cedc4bdcbcc342dba0254e1e079d",
"assets/assets/imgs/jhuy_banner_white.jpg": "590cb1870462066ba3a63760c4672ef8",
"assets/assets/imgs/kendrick.jpg": "c88f434a1f0237cc6015c1c4a9f62a83",
"assets/assets/imgs/pawtry_1.png": "ed05dbe25c58c4b1ab1d0e20056c1b8f",
"assets/assets/imgs/pawtry_2.png": "d5a6e4c85391e93d169a776225ca7279",
"assets/assets/imgs/pawtry_3.png": "842de07ea7043bb9437c3b5a4372ce00",
"assets/assets/imgs/pawtry_4.png": "dbd9d68290b6c6d53e7e154cc1e06ab9",
"assets/assets/imgs/pawtry_5.png": "460b0e2339a21f01e79a5982cf9184f9",
"assets/assets/imgs/pawtry_banner_color.jpg": "900e45805709fbe4f3871fdee057700b",
"assets/assets/imgs/pawtry_banner_white.jpg": "5d84ebe710db87bd8870447702a93735",
"assets/assets/imgs/petagon_1.png": "6fa4268322f70c116748eadd516f9682",
"assets/assets/imgs/petagon_2.png": "8e18c9661975e8797949af19260cab0d",
"assets/assets/imgs/petagon_3.png": "55dc3508686880cf40fdb07a8008c72b",
"assets/assets/imgs/petagon_4.png": "a470e2137a628cb59ae08efbc8c5a1eb",
"assets/assets/imgs/petagon_5.png": "4a96af29f73003d3faa0bec9888dc50b",
"assets/assets/imgs/petagon_banner_color.jpg": "f76738796fb706a38ca1320f6d61d199",
"assets/assets/imgs/petagon_banner_white.jpg": "2ae850386b81dca5f5e6ee8bd39c4581",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/fonts/MaterialIcons-Regular.otf": "dfb3fc9bb7782b977818d80aaae6454a",
"assets/NOTICES": "4ba1abca75d6b69358d2242d13ad625e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "193a4fdda3a72e260f2de4e0bc2655e0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e645b2a51f5b9fb06fb5d541d379013d",
"/": "e645b2a51f5b9fb06fb5d541d379013d",
"main.dart.js": "5112676521ca3d4232dd9d0f7fb767b9",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
