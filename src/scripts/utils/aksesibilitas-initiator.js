import DrawerInitiator from "./drawer-initiator";
import ZoomImgInitiator from "./zoomImg-initiator";

const AsesibilitasInitiator = {
  init({
    navItem,
    hamburgerBtn,
    navLists,
    mainElement,
    clickableImages,
    overlay,
  }) {
    document.addEventListener("keydown", (event) => {
      this._handleTabKey(
        event,
        navItem,
        hamburgerBtn,
        navLists,
        mainElement,
        clickableImages,
        overlay
      );
    });
  },

  _handleTabKey(event, navItem, hamburgerBtn, navLists, mainElement) {
    if (event.key === "Tab" && navLists.classList.contains("open")) {
      const lastNavItem = navItem[navItem.length - 1];
      if (lastNavItem === event.target)
        DrawerInitiator._closeDrawer(hamburgerBtn, navLists, mainElement);
    }

    if (event.key === "Escape") {
      DrawerInitiator._closeDrawer(hamburgerBtn, navLists, mainElement);
      ZoomImgInitiator._handleCloseZoom(clickableImages, overlay);
    }
  },
};

export default AsesibilitasInitiator;
