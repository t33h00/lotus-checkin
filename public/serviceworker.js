// filepath: /Users/teeho/Project/lotus-checkin/src/index.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
}