// Service worker mínimo: permite que Android/Chrome ofrezca "Instalar aplicación".
// No guarda nada en caché: el juego siempre se descarga actualizado.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{});
