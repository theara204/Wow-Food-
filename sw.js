const CACHE='wowfood-dashboard-v18';
const FILES=['./','./index.html','./styles.css','./about.css','./messages.css','./settings.css','./discount.css','./dynamic.css','./bottom-nav.css','./auth.css','./app.js','./manifest.webmanifest','./assets/icon.svg','./assets/food-placeholder.svg','./assets/image/Desserts-main/Desserts.jpg','./assets/image/Desserts-main/Desserts1.jpg','./assets/image/Desserts-main/Desserts2.jpg','./assets/image/Desserts-main/Desserts3.jpg','./assets/image/Desserts-main/Desserts4.jpg','./assets/image/Desserts-main/Desserts5.jpg','./assets/image/Desserts-main/Desserts6.jpg','./assets/image/Desserts-main/Desserts7.jpg','./assets/image/Desserts-main/Desserts8.jpg','./assets/image/Drinks/Drinks1.jpg','./assets/image/Drinks/Drinks2.jpg','./assets/image/Drinks/Drinks3.jpg','./assets/image/Drinks/Drinks4.jpg','./assets/image/Drinks/Drinks5.jpg','./assets/image/Drinks/Drinks6.jpg','./assets/image/Drinks/Drinks7.jpg','./assets/image/Drinks/Drinks8.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(caches.match(e.request).then(c=>{
    if(c)return c;
    return fetch(e.request).then(r=>{
      if(r.ok)caches.open(CACHE).then(x=>x.put(e.request,r.clone()));
      return r;
    }).catch(()=>caches.match('./index.html'));
  }));
});