const ZoomImgInitiator = {
  init({ zoomedImg, closeZoomBtn, clickableImages, overlay }) {
    console.log("test", { zoomedImg, closeZoomBtn, clickableImages, overlay });
    clickableImages.forEach(async (button) => {
      button.addEventListener("click", (event) => {
        this._handleShowZoomedImage(event, zoomedImg, clickableImages, overlay);
      });
    });

    if (closeZoomBtn) {
      closeZoomBtn.addEventListener("click", () => {
        this._handleCloseZoom(clickableImages, overlay);
      });
    }
  },

  _handleShowZoomedImage(event, zoomedImg, clickableImages, overlay) {
    overlay.style.display = "flex";
    clickableImages.ariaLabel = "ESC Untuk Close Image Overlay";
    const clickedImage = event.currentTarget;
    const source = clickedImage.getAttribute("data-src");

    zoomedImg.src = source;
  },

  _handleCloseZoom(clickableImages, overlay) {
    clickableImages.ariaLabel = "Buka Image overlay";
    overlay.style.display = "none";
  },
};

export default ZoomImgInitiator;
