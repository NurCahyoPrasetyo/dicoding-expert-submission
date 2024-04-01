const DrawerInitiator = {
  init({ hamburgerBtn, navLists, mainElement }) {
    hamburgerBtn.addEventListener("click", () => {
      this._toggleDrawer(hamburgerBtn, navLists, mainElement);
    });

    navLists.addEventListener("click", () => {
      this._closeDrawer(hamburgerBtn, navLists, mainElement);
    });

    mainElement.addEventListener("click", () => {
      this._closeDrawer(hamburgerBtn, navLists, mainElement);
    });
  },

  _toggleDrawer(hamburgerBtn, navLists, mainElement) {
    const isOpen = navLists.classList.toggle("open");
    hamburgerBtn.innerHTML = isOpen ? "&times;" : "&#9776;";
    hamburgerBtn.ariaLabel = isOpen ? "Tutup Navigasi" : "Buka Navigasi";
    mainElement.classList.toggle("blur");
  },

  _closeDrawer(hamburgerBtn, navLists, mainElement) {
    navLists.classList.remove("open");
    mainElement.classList.remove("blur");
    hamburgerBtn.innerHTML = "&#9776";
    hamburgerBtn.ariaLabel = "Buka Navigasi";
  },
};

export default DrawerInitiator;
