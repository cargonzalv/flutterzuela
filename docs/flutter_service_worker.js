'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "22bb1ccfdc87beea032b681985b5af78",
"/": "22bb1ccfdc87beea032b681985b5af78",
"main.dart.js": "5390529bb03fafbd41161cf08c2f0d3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "da849dcfbc1fede5d0c4839b5cd9ebaa",
"assets/AssetManifest.json": "cbf06b5d60d33689e687c82ab968b295",
"assets/NOTICES": "6c29ce9e7e8160c521742669f6379c60",
"assets/FontManifest.json": "e3b7042e5da2ac12e36a8345ad96d29d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/folks.ttf": "d44319be15da7e09c23ac87363340a47",
"assets/fonts/AnonymouPro/AnonymousPro-Bold.ttf": "c16804020e4c8fc778b594f8ddc4bf12",
"assets/fonts/AnonymouPro/AnonymousPro-Regular.ttf": "d4ffcbf07e437362a4865bfe174693ca",
"assets/fonts/Monoserrat/Montserrat-Medium.ttf": "a98626e1aef6ceba5dfc1ee7112e235a",
"assets/fonts/Monoserrat/Montserrat-Light.ttf": "100b38fa184634fc89bd07a84453992c",
"assets/fonts/Monoserrat/Montserrat-Thin.ttf": "0052573bbf05658a18ba557303123533",
"assets/fonts/Monoserrat/Montserrat-Bold.ttf": "88932dadc42e1bba93b21a76de60ef7a",
"assets/fonts/Monoserrat/Montserrat-Black.ttf": "6d1796a9f798ced8961baf3c79f894b6",
"assets/fonts/Monoserrat/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/assets/appium.png": "5b8483b66d7931f0a03d50b51a4e920d",
"assets/assets/fusia.png": "c4e7d7d833e44c607c9164c00ccc5b35",
"assets/assets/venezuelans.json": "02196dd77f89e6f5b609a92b176e2cef",
"assets/assets/gdg.png": "ce22a598c43097497cdf8ce5196ff0b0",
"assets/assets/flutter.png": "d56b449512530da0fa4f023aee290d49",
"assets/assets/android.png": "df52cf8452557f65ec1f2e433fe9502a",
"assets/assets/venezuela/youtube.png": "404cd71313c6e76b167292537975cb45",
"assets/assets/espresso.png": "afe8fe525b5e2bef11721d9522ad135e",
"assets/assets/flutter-mark-square-100.png": "8cfb640aa50b9f9616ad456de606aacc",
"assets/assets/venezuelans/caracas-2.jpg": "1cb2a40c8e4b19e651b63036ceb90259",
"assets/assets/venezuelans/ricardo-montaner.jpg": "4b22a158e282159498c60f05ab6f7b48",
"assets/assets/venezuelans/hugo-chavez-3.jpg": "40ac22a831943c437ebe596e98811db1",
"assets/assets/venezuelans/andrew-divoff.jpg": "88ee273998622fca464cce7a3ed7e5f1",
"assets/assets/venezuelans/nicolas-maduro.jpg": "092a3b1f0ab3ad041514234bcf177e1b",
"assets/assets/venezuelans/caracas-1.jpg": "2a7d0858a12ca352bd54e4e3ee39f305",
"assets/assets/venezuelans/hugo-chavez.jpg": "092348ad2aeb64d8a46afedc45b9ba03",
"assets/assets/venezuelans/irene-esser.jpg": "aa3975ce67bb58840faa522354f50588",
"assets/assets/venezuelans/cilia-flores.jpg": "e6d4e298b2c7520892af8117480f1bef",
"assets/assets/venezuelans/arturo-uslar-pietri.jpg": "24060c6d8c3d4decf18dffa91e1c9c8f",
"assets/assets/venezuelans/caracas-0.jpg": "fa9daa35cb74cecddf5fe721c0700ae1",
"assets/assets/venezuelans/lugares-00.jpg": "c996fc66554d44e7ce4ed013b19d8265",
"assets/assets/venezuelans/hugo-chavez-2.jpg": "d08eb5d91e35d1571a999b6f384cd5ce",
"assets/assets/venezuelans/chino-y-nacho-3.jpg": "1e9d11cb2d47a5e07c761be7677bea6f",
"assets/assets/venezuelans/pastor-maldonado.jpg": "32cddf523a184d826ba839c0ff1d7dfe",
"assets/assets/venezuelans/lugares-0101.jpg": "f1d81ce60fe6eb534dd521eef631ebd4",
"assets/assets/venezuelans/majandra-delfino.jpg": "b295974538eede70435dfdf09613f787",
"assets/assets/venezuelans/miguel-cabrera.jpg": "d3e20737898e30d02d84897b9c2ea0f7",
"assets/assets/venezuelans/armando-reveron.jpg": "6df2e0c454e2ff07106358e0ecc76299",
"assets/assets/venezuelans/chino-y-nacho-2.jpg": "7b767b86a94dedafeabcf59aa5866aac",
"assets/assets/venezuelans/lugares.jpg": "e0165061f71323002f00e1e846bb5f2c",
"assets/assets/venezuelans/salomon-rondon.jpg": "cdf8a96720c7904caba8c16f1ae6e50d",
"assets/assets/venezuelans/chino-y-nacho.jpg": "4e28901010eb22ca5e37fd41df3b76bc",
"assets/assets/venezuelans/dave-concepcion.jpg": "f4a996785b21f270f3fed1d93670b901",
"assets/assets/venezuelans/luis-aparicio.jpg": "99e9354414575a9dd814936f2d6d60ac",
"assets/assets/venezuelans/carlos-zambrano.jpg": "54810dd8c334840b1a00ba4e8fe73e62",
"assets/assets/venezuelans/jos-antonio-paez.jpg": "3511670cd88c74f52c86fbaeaf745181",
"assets/assets/venezuelans/lugares-12.jpg": "044abdac12bcb4bbe8e797f4c87eb647",
"assets/assets/venezuelans/hugo-chavez-4.jpg": "0fbf24cd0ab5b2b0b9f2acc262f2a2fe",
"assets/assets/venezuelans/lugares-0010.jpg": "a866dfc6e83e35b57eb5547f2ddb13a8",
"assets/assets/venezuelans/lugares-8.jpg": "0c1cf6d3d7519103a220f4cf144bb798",
"assets/assets/venezuelans/comidas-11.jpg": "0ab988aa4c24a3664d02330ff9b7c0b7",
"assets/assets/venezuelans/dross-rotzank.jpg": "0d4ba7ba62b29ccc0baf306d1c4b84d2",
"assets/assets/venezuelans/romulo-gallegos.jpg": "7c35904475e831a2a9276fec01227be3",
"assets/assets/venezuelans/comidas-10.jpg": "d55db0ca6ff30435705d054c40e31fd9",
"assets/assets/venezuelans/lugares-9.jpg": "3ecce2c2ce37e048de0d835ae3af6724",
"assets/assets/venezuelans/comida-000.jpg": "d062de8fe24a5693a001391f911a3e98",
"assets/assets/venezuelans/sebastian-gutierrez.jpg": "6dbc1112d7046d840b89d5f4467e1a4f",
"assets/assets/venezuelans/oscar-d-leon.jpg": "78a6bcc915ec984cc6623654b8091739",
"assets/assets/venezuelans/comidas-12.jpg": "eb6f1a99b2a042dc6d7820f6e50eadb0",
"assets/assets/venezuelans/reynaldo-hahn.jpg": "ec47566edbe510ddf59f1f11b8f6c84c",
"assets/assets/venezuelans/comidas-13.jpg": "f9e6e4a577069f29dc7b2a4f9d4fa809",
"assets/assets/venezuelans/comidas.jpg": "d5b0dd1fd3c1dc39fd5ad896cbf0f11b",
"assets/assets/venezuelans/canserbero-1.jpg": "fb307d019d5c1a4941a75f3d564f5a85",
"assets/assets/venezuelans/caramelos-de-cianuro.jpg": "091be14dec5de165c9d99786cde16772",
"assets/assets/venezuelans/comidas-8.jpg": "42a313f3aa07fa1bccf31b0d331979a6",
"assets/assets/venezuelans/franco-de-vita.jpg": "666f83403afc7b7470ed69206a5ba41a",
"assets/assets/venezuelans/amigos-invisibles.jpg": "b42ffb8071db4980bcd8f5b32f3aafac",
"assets/assets/venezuelans/rafael-caldera.jpg": "2465b231d25634ada5467828f2b102d4",
"assets/assets/venezuelans/baruj-benacerraf.jpg": "8a9a621b5885553db1dcefba2aff467c",
"assets/assets/venezuelans/stefania-fernandez.jpg": "112cf271e17ee60b6f4497d9f2b8527c",
"assets/assets/venezuelans/comidas-9.jpg": "4ddfc4c65d2ccbfe76640fae4323de8d",
"assets/assets/venezuelans/carlos-gonzalez.jpg": "2033f7b00aecf81520037cb538c1341a",
"assets/assets/venezuelans/monica-spear.jpg": "cb8b35f21408ce527767f71f5c590082",
"assets/assets/venezuelans/jose-luis-rodriguez.jpg": "7f75bd4db58e7e52ac50ee225758f7cd",
"assets/assets/venezuelans/diosa-canales.jpg": "6a0054cc1e39ba0fc5efc5ff39ff5629",
"assets/assets/venezuelans/fernando-amorebieta.jpg": "29bd329611aff255fef8417bae87ffeb",
"assets/assets/venezuelans/comida-0.jpg": "52540c0a70e562f617674c91908fe1ab",
"assets/assets/venezuelans/comidas-15.jpg": "b3bc8d44af860f8fa7a76d68e8925074",
"assets/assets/venezuelans/liberty-phoenix.jpg": "6e4fef6f4f2be50a833d3e1b320c010a",
"assets/assets/venezuelans/carlos-andres-perez.jpg": "2371cde5c62936dca2b9619f9d0f45cc",
"assets/assets/venezuelans/mau-y-ricky.jpg": "d5b8c2f2a1e1fff724729aecdf7cf6cb",
"assets/assets/venezuelans/teresa-carreno.jpg": "c65a00ca3f02e126adc968d0b6a0d07f",
"assets/assets/venezuelans/comidas-7.jpg": "53651a761afc1255740cdbd7e52efb16",
"assets/assets/venezuelans/lugares-1.jpg": "9ad143a12064bb454887d4a3939d0a48",
"assets/assets/venezuelans/lugares-0.jpg": "8c68ffe049d16f4591302eacf512dc7d",
"assets/assets/venezuelans/comidas-6.jpg": "4a37a01cd855f1ab74adbfc3e437b92b",
"assets/assets/venezuelans/lugares-001.jpg": "f440e422f6e82c8bcd3d95657b75c634",
"assets/assets/venezuelans/comidas-4.jpg": "f09206ec61806b4e0aa8041073c57f5f",
"assets/assets/venezuelans/lugares-2.jpg": "deb0346d669d72806e3f3d22ce50a754",
"assets/assets/venezuelans/henrique-capriles-radonski.jpg": "0756a3ccec45be2111962f1a043e0d98",
"assets/assets/venezuelans/canserbero.jpg": "dbe3f202201cccc892447d289d950d92",
"assets/assets/venezuelans/michelle-lewin.jpg": "828fcf87b2181b1a9899cebc59ef46a8",
"assets/assets/venezuelans/lugares-3.jpg": "6408b2fea5837a9c77550aec08f0a982",
"assets/assets/venezuelans/gaby-espino.jpg": "9fbc8686939a67b17af54fb791ef9b35",
"assets/assets/venezuelans/comidas-5.jpg": "ba2f88f493b62b9fcecbf1fb093f0098",
"assets/assets/venezuelans/lugares-000.jpg": "1d27a12b6f30a398b4b229f4bba87791",
"assets/assets/venezuelans/gustavo-dudamel.jpg": "8c09b06c1a651429b73f3accdf35c011",
"assets/assets/venezuelans/comidas-1.jpg": "01a2b1c40e05861074f1c2d90cd8e34c",
"assets/assets/venezuelans/lugares-7.jpg": "658c717fe12152d56d028b534b951c09",
"assets/assets/venezuelans/sumito-estevez.jpg": "c2322a75f3966aaffdca38d3f147ad02",
"assets/assets/venezuelans/simon-bolivar.jpg": "01c2d16a351a62995d5441e900d0bc5f",
"assets/assets/venezuelans/nicolas-maduro-5.jpg": "62e9578e76293a59c25440dee8100b85",
"assets/assets/venezuelans/antonio-jose-de-sucre.jpg": "d41026ea6a91d7f9e8b9293764cf37ed",
"assets/assets/venezuelans/dayana-mendoza.jpg": "c5c988ecf39c5493c3c25b0a1616ff14",
"assets/assets/venezuelans/comidas-2.jpg": "be113a4f7c5ccfde8dd2d8c7a22a0194",
"assets/assets/venezuelans/francisco-de-miranda.jpg": "dd3221f11193fa8719ef6721228ff86e",
"assets/assets/venezuelans/lugares-4.jpg": "662a6a7615b3dfac982286cef23582b5",
"assets/assets/venezuelans/johan-santana.jpg": "d966ce8a93c9bfdbc497c7d608028742",
"assets/assets/venezuelans/lugares-5.jpg": "17363e90d80ada213cc0e4dc2f59bfde",
"assets/assets/venezuelans/jose-altuve.jpg": "799e3e065cb8ed9f38aac06ad72e893e",
"assets/assets/venezuelans/andres-bello.jpg": "5f35f092cd95e17bbf691191ef4be604",
"assets/assets/venezuelans/comidas-3.jpg": "415411d8adcb7230ff349dc1e9739919",
"assets/assets/venezuelans/wilmer-valderrama.jpg": "1bb81ce5ab04e795d62ec14456e0b6ac",
"assets/assets/venezuelans/carlos-gonzalez-5.jpg": "025e534820b2ea1a4e223df72c3a426b",
"assets/assets/venezuelans/caracas.jpg": "1ec6998b8ee38e68f5272c9a41569965",
"assets/assets/venezuelans/devendra-banhart.jpg": "2c7561ec28d0f605dc1b9d22b638996d",
"assets/assets/venezuelans/carlos-gonzalez-4.jpg": "bc26eaf4a0e8ade7e5243dea20f77f0e",
"assets/assets/venezuelans/juan-guaido.jpg": "e3577645953eef28757da91914bb282f",
"assets/assets/venezuelans/juan-vicente-gomez.jpg": "7364777ab98734c63dac751dcde06c51",
"assets/assets/venezuelans/chiquinquira-delgado.jpg": "76d79c288e4f6531d6cb28474fa80ff6",
"assets/assets/venezuelans/carlos-the-jackal.jpg": "ef030d0ecacdebff93c4c554ed4b410a",
"assets/assets/venezuelans/carolina-herrera.jpg": "c01d3200b70994e27847926f54614764",
"assets/assets/venezuelans/diosdado-cabello.jpg": "8a63a6edd68cff5ba60cf7dd4ecc7ed7",
"assets/assets/venezuelans/lele-pons.jpg": "be32bbb8ebd962f9013ea22c038c1928",
"assets/assets/venezuelans/carlos-gonzalez-1.jpg": "f71118446414b37fcec70edfc6f6fd1e",
"assets/assets/venezuelans/marjorie-de-sousa.jpg": "b6b4c70c89b4cb0a9bf28eed36a83e3e",
"assets/assets/apple.png": "2ce528e8609d2a513b55dbe9c911596e",
"assets/assets/appium-and-perfecto.png": "5cffa851b33eccc67eb7973005b1a12e",
"assets/assets/jetpack.png": "6ba1a43be595af62fc5d6fdefe85bb40",
"assets/assets/dart.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/assets/inception.png": "61aad042543cc8c2edeba496898f5e8e",
"assets/assets/vista.mp4": "6f005a775427fbd1392004fd0907d576"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
