import { precacheAndRoute } from "workbox-precaching";
import { registerRoute, Route } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
import CONFIG from "./globals/config";

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

const themoviedbApi = new Route(
  ({ url }) => url.href.startsWith(CONFIG.BASE_URL),
  new StaleWhileRevalidate({
    cacheName: "therestodb-api",
  })
);

const themoviedbImageApi = new Route(
  ({ url }) => url.href.startsWith(CONFIG.BASE_IMAGE_URL + "/small/"),
  new StaleWhileRevalidate({
    cacheName: "therestodb-image-api",
  })
);

registerRoute(themoviedbApi);
registerRoute(themoviedbImageApi);

self.addEventListener("install", () => {
  console.log("Service Worker: Installed");
  self.skipWaiting();
});

self.addEventListener("push", (event) => {
  console.log("Service Worker: Pushed");

  const dataJson = event.data.json();
  const notification = {
    title: dataJson.title,
    options: {
      body: dataJson.options.body,
      icon: dataJson.options.icon,
      image: dataJson.options.image,
    },
  };

  event.waitUntil(
    self.registration.showNotification(notification.title, notification.options)
  );
});

self.addEventListener("notificationclick", (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();
  const chainPromise = async () => {
    console.log("Notification has been clicked");
    await self.clients.openWindow("https://www.dicoding.com/");
  };
  event.waitUntil(chainPromise());
});
