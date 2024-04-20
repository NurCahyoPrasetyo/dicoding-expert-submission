import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

import DrawerInitiator from "../utils/drawer-initiator";
import SkiplinkInitiator from "../utils/skiplink-initiator";
import AsesibilitasInitiator from "../utils/aksesibilitas-initiator";
import ZoomImgInitiator from "../utils/zoomImg-initiator";

class App {
  constructor({
    hamburgerBtn,
    navLists,
    mainElement,
    skipLinkBtn,
    navItem,
    zoomedImg,
    closeZoomBtn,
    clickableImages,
    overlay,
  }) {
    this._hamburgerBtn = hamburgerBtn;
    this._navLists = navLists;
    this._mainElement = mainElement;
    this._skipLinkBtn = skipLinkBtn;
    this._navItem = navItem;
    this._zoomedImg = zoomedImg;
    this._closeZoomBtn = closeZoomBtn;
    this._clickableImages = clickableImages;
    this._overlay = overlay;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburgerBtn: this._hamburgerBtn,
      navLists: this._navLists,
      mainElement: this._mainElement,
    });

    SkiplinkInitiator.init({
      skipLinkBtn: this._skipLinkBtn,
    });

    AsesibilitasInitiator.init({
      navItem: this._navItem,
      hamburgerBtn: this._hamburgerBtn,
      navLists: this._navLists,
      mainElement: this._mainElement,
      clickableImages: this._clickableImages,
      overlay: this._overlay,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  _initialAppShellAfterRender() {
    ZoomImgInitiator.init({
      zoomedImg: this._zoomedImg,
      closeZoomBtn: this._closeZoomBtn,
      clickableImages: this._clickableImages,
      overlay: this._overlay,
    });

    AsesibilitasInitiator.init({
      navItem: this._navItem,
      hamburgerBtn: this._hamburgerBtn,
      navLists: this._navLists,
      mainElement: this._mainElement,
      clickableImages: this._clickableImages,
      overlay: this._overlay,
    });
    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._mainElement.innerHTML = await page.render();
    await page.afterRender();

    // this component only show when after render
    const zoomedImg = document.querySelector(".zoomed-image");
    const closeZoomBtn = document.querySelector("#close-zoom");
    const clickableImages = document.querySelectorAll(".clickable-image");
    const overlay = document.querySelector(".overlay");
    const itemContent = document.getElementById("item_content");

    this._zoomedImg = zoomedImg;
    this._closeZoomBtn = closeZoomBtn;
    this._clickableImages = clickableImages;
    this._overlay = overlay;
    this._initialAppShellAfterRender();

    this._skipLinkBtn.addEventListener("click", (e) => {
      e.preventDefault();
      itemContent?.scrollIntoView({ behavior: "smooth" });
      this._mainElement?.scrollIntoView({ behavior: "smooth" });

      this._skipLinkBtn.blur();
    });
  }
}

export default App;
