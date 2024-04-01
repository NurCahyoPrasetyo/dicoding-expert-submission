import "regenerator-runtime"; /* for async await transpile */
import "../styles/index.scss";

import "../scripts/components/index";

import App from "./views/app";

const app = new App({
  hamburgerBtn: document.querySelector("#hamburger"),
  navLists: document.querySelector(".nav_lists"),
  mainElement: document.querySelector("#main"),
  skipLinkBtn: document.querySelector(".skip_link"),
  navItem: document.querySelectorAll(".nav_item"),
  zoomedImg: document.querySelector(".zoomed-image"),
  closeZoomBtn: document.querySelector("#close-zoom"),
  clickableImages: document.querySelectorAll(".clickable-image"),
  overlay: document.querySelector(".overlay"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
