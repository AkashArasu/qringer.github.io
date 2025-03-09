'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "27eec5680a21adf04b7d662b8bde01ad",
".git/config": "38563a51863d556fd5168dbb8aa1adb2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5bcb8dc8749735c230d7d6c19c20e4f4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f11eef18dffc9cd96e27a0e7dcff425e",
".git/logs/refs/heads/master": "f11eef18dffc9cd96e27a0e7dcff425e",
".git/logs/refs/remotes/origin/master": "e3f487f37e921733d6508109a6f48051",
".git/objects/0c/3604660f2827b7295c629a549d9b66fb7a860a": "7e2c8c822f0f0a84ce4cfe1905dfcd0e",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/15/3b07ca5c2072f804b7c63e0e470598c829f892": "0415d34968f8d6d61b922a1b70e3c9f4",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/f71d5f43b70db56df22ae0969b6e38dac05b29": "0432917c6134efed455604b0872a96bf",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6e967a36123fefd23e628039b05f871cecafc6": "46cc7f22091e758f7ab976bc454eb931",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/27/3cb65b369f74fb87fbe752e02609f6eab66a1a": "0a3740d717f7e65ec096f00294be0017",
".git/objects/28/6a2db1899b4eb9e2b50f1592f3b5d27411f521": "26aa380db5a2118817156c4210299989",
".git/objects/28/b4a490a1172e62d543c34a1b7a1100260f64e5": "6f86bc57f7a32cdcf3a7872160ac0e9d",
".git/objects/2b/e02d871039c0afa91bd4e2b811e1f9e7554a22": "68b07aeb4094f5e7e97dc6cecddc0af7",
".git/objects/2f/3fce75331012bb82f08d59cd3d376080b14c38": "15c794e991678e9c6c2fd5cf68cb4a10",
".git/objects/32/547f4bdea5444ef0c114ead82cc459318491f7": "a82c4dece4d4f7d83cec35a589836413",
".git/objects/32/d1c7b3a30e348e4cfc8028e28fc0d304991703": "f507808c476ba9529e6814aecfb03394",
".git/objects/3b/62116a239d90a9fbd73cb49748ef22984adcdb": "b05072a3d5d90ddd154d3c45c72ebf8b",
".git/objects/3f/3c4762cb9b4b5ae584c02900c877768e70fdcb": "7e426801df514a14e777fef2b10eacd1",
".git/objects/47/2fbfe6369de1739323d16cec53b7f4ab44eccd": "94a0844693cad95be89e03bdf02fb0a8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/0840a55d0f49197ebda3762fe893474034aff3": "b26b824dc3dcd4bf4fedb5542dbb2e55",
".git/objects/4d/084b360c9c4de454e379d3a67dae8bcbcd4712": "d516e5e5b9194cf2c327291037eec39e",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/2d2133075c6e5b2b4aa2b80e2c8445cf45bb70": "1528357aa7a710b917dabc63da4fc8ee",
".git/objects/62/96848a3ec218a33ee29eba135cb59c0cb7d2ab": "2dc73b6854a74f65b8f98c140002441d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/5babe94a935f1708217269b54074a09c5ca9e2": "fbc719b92ffb7e37b23838ea2984d4a9",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/78/a3bb657c39d8eb9941a141028ff25011b8bc74": "0c6739e0f5835f2b9709658764d426dd",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/a98235d9312731acf3fbccdaf3b5684ad7b94c": "2ace108c363cf7ec4e59da1566efae79",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/8b816f2b637d0f78d8d128926bc6839edd871c": "a16e7852748efce22ddd17d20ffa5a89",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/83bd4b82f771093655495db97d7f32b41ef959": "e562a177e5e184f0f1d085f9731c0576",
".git/objects/a9/ae658692f910df69730a752aef7ac69922469f": "8f1bf14d208ebfd4b3467d6aa894d82e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/b2f96e4545807f78b2196dc76b23d7e003e84d": "0a16be2713300ec42e5f85d55d43eddd",
".git/objects/bc/14b0f97ca0c9f408e2e3a1154784c4d43413dc": "49ca6d442477d4a7b4f9160c5a3e714a",
".git/objects/bc/6b9e8c6c5327a96bc9092b804bebc7f927177e": "9f0dc237b4afdc7d3eaae52a2503b913",
".git/objects/c2/296dd8faf46e57b2e0328760f95d3e861190d7": "962cd2caff92e8c2a4c2bfd4a9248452",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/8fcba77fad14ca28ff21e62152dd9fff575b67": "1c08f3c0215134d9cf2519a208ef9f60",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/35d2941c2b25bccc2eeea5021d33566a0825a2": "027d78987c0c2bd92ce824b3ab232aad",
".git/objects/e9/1a1041eba38180e03afda7807701d667cf897d": "6e9cd3bafba620402204927bfd3f8c9e",
".git/objects/e9/5a6f80db780c1753cbabfa72b0301372948bd7": "d72567f99d8a61de18c91b15f5714954",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/97748786e834a64381ea2f11b339bb0f18b159": "038a8a595b0c817e19584329196c9041",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/1a7e7ddc3de6a7732a43210eaea3ffbc7bc3c0": "471751e2e00230ad7f9d7a41e64efc23",
".git/objects/fc/5ec913d700a496d97f7cbfa30fd9fce4e8dbe3": "cdcac2f3100193613c415bc42139b2ca",
".git/refs/heads/master": "dd6df028be8edc4ceacb989487360d2f",
".git/refs/remotes/origin/master": "dd6df028be8edc4ceacb989487360d2f",
"assets/AssetManifest.bin": "869729a025919d432a61e75a49a16e49",
"assets/AssetManifest.bin.json": "eb08bb1eafe981bec700b051322caab5",
"assets/AssetManifest.json": "0b758eb29f07afc012bd2ebfaf757534",
"assets/FontManifest.json": "ffd24d2700b5468d649cfcf79c82c19c",
"assets/fonts/MaterialIcons-Regular.otf": "55d15af66ade004acd3371cf1e57dce3",
"assets/NOTICES": "eddeef0d89a572537b7419d05cd29fee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/stream_video_flutter/fonts/StreamIcons.ttf": "ba91e91a4e3aef03b5bd34cce233ab66",
"assets/packages/stream_video_flutter/images/call_background.jpg": "036491bc8ddea81e3b0763d363a7ae6e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "995cac36a244921773cffe1c56ddba1e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8723056bbc85209b27ef0772adb22c12",
"/": "8723056bbc85209b27ef0772adb22c12",
"main.dart.js": "76fce7d385c58d873259186292a643a9",
"manifest.json": "f0a51676017c8dbe8fa2b70f5eb3b5d8",
"version.json": "4684ecb4d1bf51cbb7eb07bf670d28d8"};
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
