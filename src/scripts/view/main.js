const main = () => {
  const hamburgerBtn = document.querySelector("#hamburger");
  const skipLinkBtn = document.querySelector(".skip_link");
  const navLists = document.querySelector(".nav_lists");
  const navItem = document.querySelectorAll(".nav_item");
  const mainElement = document.querySelector("main");

  const zoomedImg = document.querySelector(".zoomed-image");
  const closeZoomBtn = document.querySelector("#close-zoom");
  const clickableImages = document.querySelectorAll(".clickable-image");

  //SkipLink Function
  const handleSkipLinkKeydown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      skipLinkBtn.blur();
    }
  };
  //

  //Zoom
  const handleShowZoomedImage = () => {
    const overlay = document.querySelector(".overlay");

    overlay.style.display = "flex";
    clickableImages.ariaLabel = "ESC Untuk Close Image Overlay";
    const clickedImage = event.currentTarget;
    const source = clickedImage.getAttribute("data-src");

    zoomedImg.src = source;
  };

  const handleCloseZoom = () => {
    const overlay = document.querySelector(".overlay");
    clickableImages.ariaLabel = "Buka Image overlay";
    overlay.style.display = "none";
  };
  //

  //NavBar function
  const handleHamburgerBtnClick = () => {
    const isOpen = navLists.classList.toggle("open");
    hamburgerBtn.innerHTML = isOpen ? "&times;" : "&#9776;";
    hamburgerBtn.ariaLabel = isOpen ? "Tutup Navigasi" : "Buka Navigasi";
    mainElement.classList.toggle("blur");
  };

  const handleCloseNavList = () => {
    navLists.classList.remove("open");
    mainElement.classList.remove("blur");
    hamburgerBtn.innerHTML = "&#9776";
    hamburgerBtn.ariaLabel = "Buka Navigasi";
  };

  const handleTabKey = (event) => {
    if (event.key === "Tab" && navLists.classList.contains("open")) {
      const lastNavItem = navItem[navItem.length - 1];
      if (lastNavItem === event.target) handleCloseNavList();
    }

    if (event.key === "Escape") {
      handleCloseNavList();
      handleCloseZoom();
    }
  };
  //

  //Loadin All function
  document.addEventListener("keydown", handleTabKey);
  hamburgerBtn.addEventListener("click", handleHamburgerBtnClick);
  navLists.addEventListener("click", handleCloseNavList);
  mainElement.addEventListener("click", handleCloseNavList);
  skipLinkBtn.addEventListener("keydown", handleSkipLinkKeydown);
  clickableImages.forEach(function (image) {
    image.addEventListener("click", handleShowZoomedImage);
  });
  closeZoomBtn.addEventListener("click", handleCloseZoom);

  document.querySelectorAll("a, button, input").forEach((e) => {
    if (e.offsetWidth < 44 || e.offsetHeight < 44) {
      console.log(e);
    }
  });
};

export default main;
