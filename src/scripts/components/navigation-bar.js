class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <nav id="navigationDrawer" class="nav_containers container">
                    <a href="/" class="nav_brandr" aria-label="All In App"
                      ><img class="lazyload" src="./images/icons/icon.png" id="logo" alt="Logo All In"
                      width="44" height="44"/></a>
                  <div class="nav_contents">
                    <button
                        id="hamburger"
                        aria-label="Buka navigasi"
                        title="Menu navigasi"
                    >
                        &#9776;
                    </button>
                    <ul class="nav_lists">
                        <li><a href="#/home" class="nav_item">Home</a></li>
                        <li><a href="#/favorite" class="nav_item">Favorite</a></li>
                        <li>
                            <a
                            href="https://www.nurchy.com/"
                            class="nav_item"
                            target="_blank"
                            rel="noopener noreferrer"
                            >About Us</a
                            >
                        </li>
                    </ul>
                  </div>
              </nav>
          `;
  }
}

customElements.define("navigation-bar", NavigationBar);
