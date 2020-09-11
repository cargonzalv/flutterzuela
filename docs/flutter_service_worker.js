'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "3e0061ca8a3a599c05cd5285551bdd5e",
"/": "3e0061ca8a3a599c05cd5285551bdd5e",
"main.dart.js": "8b5d0fda2b4251be5445d2aab3b4f941",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "da849dcfbc1fede5d0c4839b5cd9ebaa",
"assets/AssetManifest.json": "62664b8fdb27e05b3de9e72394331496",
"assets/NOTICES": "7db3ec8ee727c715f83e53f9e83f1c5a",
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
"assets/assets/survey.PNG": "0e638db7c846913b407ef0245fa91d69",
"assets/assets/appium.png": "5b8483b66d7931f0a03d50b51a4e920d",
"assets/assets/Uiq-logo.png": "f91fd0f36fe81abf44827783ff577a7e",
"assets/assets/code.png": "4c4dd42b8e4c56a3112b87b78f16f073",
"assets/assets/3x/performance.png": "06ea4ff2fce0d623190aac2e456997ee",
"assets/assets/dashboard.png": "d15faa289111971c03dc194824d4b591",
"assets/assets/image8.png": "bb7169e67608eb39107eee88aee053f7",
"assets/assets/blueprint.jpg": "5a769d27a6f1ffea3e2695d2b02c0a37",
"assets/assets/image9.png": "69fc580dde5d0cefa9d5dfb910b6d4f4",
"assets/assets/fusia.png": "c4e7d7d833e44c607c9164c00ccc5b35",
"assets/assets/gdg.png": "ce22a598c43097497cdf8ce5196ff0b0",
"assets/assets/main.png": "071909751dd4de6395868f614db033e3",
"assets/assets/build.png": "6e42fff84e6b15b38483b1609d5555b4",
"assets/assets/tomek.png": "051c4d4fea0ac3adf275ad8c4fb9ad81",
"assets/assets/S60.png": "7f8fa75f1e0ae97f1290eaa695c323a1",
"assets/assets/image14.png": "031b32df4674b9bdaac299b3ab569e05",
"assets/assets/image28.png": "afe8fe525b5e2bef11721d9522ad135e",
"assets/assets/image15.jpg": "467c51db0d486fa045bfb5aa09891a54",
"assets/assets/image29.png": "e43b9a9351d55a341218a8341f5cf166",
"assets/assets/image17.png": "d54114b9e6b219717b40832dd215c91b",
"assets/assets/java.png": "2c73e19b097d584f13d8d652a4a77d59",
"assets/assets/image16.png": "7f6ec7737be879a52bb042baf14e0852",
"assets/assets/android.png": "df52cf8452557f65ec1f2e433fe9502a",
"assets/assets/mocking.PNG": "e93b6f7b69daa034f60b46637b22ae79",
"assets/assets/nasa-63029-unsplash.jpg": "28467a60bacf8cadbf04b497d108ee8b",
"assets/assets/image13.png": "6a69be985aa611ab96bfb2741c0f0b90",
"assets/assets/demo.png": "78b95161c3253885719875797b4bb15f",
"assets/assets/remi.jpg": "1b980a7c552ad5816d0520566e9d0ce2",
"assets/assets/espresso.png": "afe8fe525b5e2bef11721d9522ad135e",
"assets/assets/image11.png": "2adf58b0615c1d2c752ec68b5811ff49",
"assets/assets/image39.jpg": "c0a24ce95b806da3c0e3ca5d918b4938",
"assets/assets/end.png": "d6d3b6360860ed4222f31d9bc31475e4",
"assets/assets/image38.jpg": "0cfec6c2fcbf8a4c0419435bde80afe3",
"assets/assets/image10.png": "a9d36ac9d568fa6c3e69b33b81dfcbc7",
"assets/assets/flutter-mark-square-100.png": "8cfb640aa50b9f9616ad456de606aacc",
"assets/assets/image21.png": "1cb779c9b8555a46d8155ace9ab538d9",
"assets/assets/image35.jpg": "cd9832fdbe9e0f717f2e791bcd3d1a77",
"assets/assets/venezuelans/Rondon.jpeg": "cdf8a96720c7904caba8c16f1ae6e50d",
"assets/assets/venezuelans/dayana-mendoza-1.jpg": "c5c988ecf39c5493c3c25b0a1616ff14",
"assets/assets/venezuelans/teresa-carreno-2.jpg": "c65a00ca3f02e126adc968d0b6a0d07f",
"assets/assets/venezuelans/reynaldo-hahn-18467-1.jpg": "ec47566edbe510ddf59f1f11b8f6c84c",
"assets/assets/venezuelans/sebastian-gutierrez-1.jpg": "6dbc1112d7046d840b89d5f4467e1a4f",
"assets/assets/venezuelans/dave-concepcin-1.jpg": "f4a996785b21f270f3fed1d93670b901",
"assets/assets/venezuelans/hugo-chavez-3.jpg": "092348ad2aeb64d8a46afedc45b9ba03",
"assets/assets/venezuelans/cilia-flores.jpg": "e6d4e298b2c7520892af8117480f1bef",
"assets/assets/venezuelans/michelle-lewin-1.jpg": "828fcf87b2181b1a9899cebc59ef46a8",
"assets/assets/venezuelans/mau-y-ricky-655x368.jpg": "d5b8c2f2a1e1fff724729aecdf7cf6cb",
"assets/assets/venezuelans/dross-rotzank-1.jpg": "0d4ba7ba62b29ccc0baf306d1c4b84d2",
"assets/assets/venezuelans/rafael-caldera-1.jpg": "2465b231d25634ada5467828f2b102d4",
"assets/assets/venezuelans/chino-y-nacho.jpg": "4e28901010eb22ca5e37fd41df3b76bc",
"assets/assets/venezuelans/marjorie-de-sousa-1.jpg": "b6b4c70c89b4cb0a9bf28eed36a83e3e",
"assets/assets/venezuelans/luis-aparicio.jpg": "99e9354414575a9dd814936f2d6d60ac",
"assets/assets/venezuelans/jos-antonio-pez-1.jpg": "3511670cd88c74f52c86fbaeaf745181",
"assets/assets/venezuelans/mnica-spear-1.jpg": "cb8b35f21408ce527767f71f5c590082",
"assets/assets/venezuelans/ricardo-montaner-1.jpg": "4b22a158e282159498c60f05ab6f7b48",
"assets/assets/venezuelans/ph7c0pfzks1.jpg": "1bb81ce5ab04e795d62ec14456e0b6ac",
"assets/assets/venezuelans/irene-esser-1.jpg": "aa3975ce67bb58840faa522354f50588",
"assets/assets/venezuelans/oscar-d-leon.jpg": "78a6bcc915ec984cc6623654b8091739",
"assets/assets/venezuelans/carlos-andrs-prez-1.jpg": "2371cde5c62936dca2b9619f9d0f45cc",
"assets/assets/venezuelans/pholtzr0is1.jpg": "7a09b73ee63c8bbf3b06ca7a2b1f005f",
"assets/assets/venezuelans/franco-de-vita.jpg": "666f83403afc7b7470ed69206a5ba41a",
"assets/assets/venezuelans/amigos-invisibles.jpg": "b42ffb8071db4980bcd8f5b32f3aafac",
"assets/assets/venezuelans/antonio-jos-de-sucre.jpg": "d41026ea6a91d7f9e8b9293764cf37ed",
"assets/assets/venezuelans/rmulo-gallegos-1.jpg": "7c35904475e831a2a9276fec01227be3",
"assets/assets/venezuelans/carolina-herrera-1.jpg": "c01d3200b70994e27847926f54614764",
"assets/assets/venezuelans/diosa-canales.jpg": "6a0054cc1e39ba0fc5efc5ff39ff5629",
"assets/assets/venezuelans/fernando-amorebieta.jpg": "29bd329611aff255fef8417bae87ffeb",
"assets/assets/venezuelans/arturo-uslar-pietri-1.jpg": "24060c6d8c3d4decf18dffa91e1c9c8f",
"assets/assets/venezuelans/liberty-phoenix-3.jpg": "6e4fef6f4f2be50a833d3e1b320c010a",
"assets/assets/venezuelans/andrew-divoff-1.jpg": "88ee273998622fca464cce7a3ed7e5f1",
"assets/assets/venezuelans/henrique-capriles-radonski.jpg": "0756a3ccec45be2111962f1a043e0d98",
"assets/assets/venezuelans/phj7gxhzww1.jpg": "19e7088aa316081c5d5e5455e1f190f7",
"assets/assets/venezuelans/nicols-maduro-1.jpg": "092a3b1f0ab3ad041514234bcf177e1b",
"assets/assets/venezuelans/gaby-espino.jpg": "9fbc8686939a67b17af54fb791ef9b35",
"assets/assets/venezuelans/Sumito-Estevez.jpg": "c2322a75f3966aaffdca38d3f147ad02",
"assets/assets/venezuelans/carlos-zambrano-1.jpg": "54810dd8c334840b1a00ba4e8fe73e62",
"assets/assets/venezuelans/majandra-delfino-1.jpg": "b295974538eede70435dfdf09613f787",
"assets/assets/venezuelans/andrs-bello.jpg": "5f35f092cd95e17bbf691191ef4be604",
"assets/assets/venezuelans/pastor-maldonado-1.jpg": "32cddf523a184d826ba839c0ff1d7dfe",
"assets/assets/venezuelans/juan-guaid-1.jpg": "e3577645953eef28757da91914bb282f",
"assets/assets/venezuelans/gustavo-dudamel-51317-1.jpg": "8c09b06c1a651429b73f3accdf35c011",
"assets/assets/venezuelans/simon-bolivar-2.jpg": "01c2d16a351a62995d5441e900d0bc5f",
"assets/assets/venezuelans/stefana-fernndez-1.jpg": "112cf271e17ee60b6f4497d9f2b8527c",
"assets/assets/venezuelans/miguel-cabrera-1.jpg": "d3e20737898e30d02d84897b9c2ea0f7",
"assets/assets/venezuelans/chiquinquir-delgado.jpg": "76d79c288e4f6531d6cb28474fa80ff6",
"assets/assets/venezuelans/armando-revern-1.jpg": "6df2e0c454e2ff07106358e0ecc76299",
"assets/assets/venezuelans/carlos-the-jackal.jpg": "ef030d0ecacdebff93c4c554ed4b410a",
"assets/assets/venezuelans/caramelos-de-cianuro-1170x585-111116-03-730x450.png": "091be14dec5de165c9d99786cde16772",
"assets/assets/venezuelans/francisco-de-miranda-1.jpg": "dd3221f11193fa8719ef6721228ff86e",
"assets/assets/venezuelans/baruj-benacerraf-1.jpg": "8a9a621b5885553db1dcefba2aff467c",
"assets/assets/venezuelans/phytfoxmw41.jpg": "7f75bd4db58e7e52ac50ee225758f7cd",
"assets/assets/venezuelans/diosdado-cabello.jpg": "8a63a6edd68cff5ba60cf7dd4ecc7ed7",
"assets/assets/venezuelans/lele-pons.jpg": "be32bbb8ebd962f9013ea22c038c1928",
"assets/assets/venezuelans/devendra-banhart-1.jpg": "2c7561ec28d0f605dc1b9d22b638996d",
"assets/assets/venezuelans/juan-vicente-gmez-1.jpg": "7364777ab98734c63dac751dcde06c51",
"assets/assets/venezuelans/jose-altuve-1.jpg": "799e3e065cb8ed9f38aac06ad72e893e",
"assets/assets/image34.jpg": "1951f9f8fea670f6e1311ab062a439b6",
"assets/assets/image20.jpg": "62f5921fbbe37123a558c88c0a90fdd3",
"assets/assets/apple.png": "2ce528e8609d2a513b55dbe9c911596e",
"assets/assets/image22.png": "e93b6f7b69daa034f60b46637b22ae79",
"assets/assets/image36.png": "a68deb4a8e28d0a6b13d4cfeda14453a",
"assets/assets/blackberry.png": "4ae8f2acb3fa3b639858ec96e1b83b9e",
"assets/assets/image37.png": "9632c7f0297ec0390c213f34b3bdcef5",
"assets/assets/image23.png": "5e75d3d2ed3a404545b9ec29bde54bea",
"assets/assets/qt.png": "8c8417a508dcb10c9387134346c6cc90",
"assets/assets/rafal.jpg": "105497673628fb6b5a306e16f536627d",
"assets/assets/image27.png": "f0e502182c7274f5c436c2722963e1e0",
"assets/assets/image33.png": "dc6843bab7ab5b3364aa62ffb5e07010",
"assets/assets/widget%2520test.PNG": "5e75d3d2ed3a404545b9ec29bde54bea",
"assets/assets/survey2.PNG": "13ebad0eaea46c2435b40a7a6577a4c4",
"assets/assets/image32.png": "e43b9a9351d55a341218a8341f5cf166",
"assets/assets/image26.png": "5b8483b66d7931f0a03d50b51a4e920d",
"assets/assets/appium-and-perfecto.png": "5cffa851b33eccc67eb7973005b1a12e",
"assets/assets/blueprint_wide.jpg": "d7b5a851d8e6a500c728a92c6909304f",
"assets/assets/pipeline.png": "e6d861cef37ce086999376f7f5bf8c17",
"assets/assets/new.png": "dd07c7d8633e1434874f89a6b9e76784",
"assets/assets/image30.png": "a98a7439fd9cbaba28edb38cd115711c",
"assets/assets/image18.jpg": "04aee67b038684d3238b232226ec3bed",
"assets/assets/image24.jpg": "b1c7c5cfca2d45f915fd7b3d6113b391",
"assets/assets/image31.jpg": "4726f705ace937cb582cece44cfdf49e",
"assets/assets/image25.png": "742463585473830f9e9954560dc5191f",
"assets/assets/image19.png": "13ebad0eaea46c2435b40a7a6577a4c4",
"assets/assets/Photo%2520by%2520Rachel%2520on%2520Unsplash.jpg": "8ac1177be19f62b5307117f14002ef34",
"assets/assets/yaml.png": "3372a1a12e77827cb4145d263aaf38e7",
"assets/assets/image7.png": "9d33d6fdc828e1e8fc6ed9a60cb6b02a",
"assets/assets/image42.jpg": "d206708bc9cc3f760811958149051fe7",
"assets/assets/jetpack.png": "6ba1a43be595af62fc5d6fdefe85bb40",
"assets/assets/salih.jpg": "c4e1c6f7cd68aba67e6ab3fb3cd4dc10",
"assets/assets/windows.png": "239451c5d52d2cae26d9540112f4d3d8",
"assets/assets/image43.jpg": "adf54cb4cb38fcbb7d6cf616ab74b104",
"assets/assets/performance.png": "36a6013b0f5b0813aaf22e790c776a6a",
"assets/assets/swiftui.png": "3de167c9ae369a93a20af7609b8f627d",
"assets/assets/image6.jpg": "b1c7c5cfca2d45f915fd7b3d6113b391",
"assets/assets/popularity.png": "9bff00e02e5d1795fc835c2968b50556",
"assets/assets/ui.png": "8e594f039e4a111bd61b3871baedafc4",
"assets/assets/mid.png": "337c093c03df8786f498cbcc6acd7b8a",
"assets/assets/image4.png": "d56b449512530da0fa4f023aee290d49",
"assets/assets/Photo%2520by%2520Elijah%2520Hail%2520on%2520Unsplash.jpg": "58b9ca9ac97ec55ab38171dfaaae296e",
"assets/assets/image41.jpg": "93c83d31834dfb5b5100f4adf1adb02b",
"assets/assets/image40.jpg": "b9d28db4657833fdeeec57af67033bb1",
"assets/assets/image5.png": "9bff00e02e5d1795fc835c2968b50556",
"assets/assets/google.png": "8f9327db2597fa57d2f42b4a6c5a9855",
"assets/assets/image12.gif": "496462077c9d4ad1453d048efe766ab3",
"assets/assets/image44.jpg": "34edc76b0a7a82fe51492ee86865e0dc",
"assets/assets/norbert.jpg": "cd646457161a2e9dff442b4d9bc3a4a6",
"assets/assets/dart.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/assets/scrollbar.png": "606e56086e5a4b919d0c08a7943b30fc",
"assets/assets/image45.jpg": "0a7871f21bb430a034a324ff3598d568",
"assets/assets/2x/image8.png": "5f8d840c0836b404a91d41135ef22aaa",
"assets/assets/2x/image9.png": "69fc580dde5d0cefa9d5dfb910b6d4f4",
"assets/assets/2x/apple.png": "3846410899c5aede4c8a842396324aeb",
"assets/assets/2x/blackberry.png": "7a5e6b3387bfa50278338fca9c5a4b58",
"assets/assets/2x/appium-and-perfecto.png": "992161d938ec0d1764520029d5791cf4",
"assets/assets/2x/windows.png": "239451c5d52d2cae26d9540112f4d3d8",
"assets/assets/2x/performance.png": "9572926d61717d3107c64a99829d5134",
"assets/assets/inception.png": "61aad042543cc8c2edeba496898f5e8e",
"assets/assets/start.png": "22d3e4f357875840d59e0b154ee92970",
"assets/assets/reark.png": "8b2f4c4cc333681a7e9e7e134981a69b",
"assets/assets/kotlin.png": "51159bde9296a6cf1fa8994b1753ef1d",
"assets/assets/image3.png": "36d962091300a5e3faf5e85b38457e72"
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
