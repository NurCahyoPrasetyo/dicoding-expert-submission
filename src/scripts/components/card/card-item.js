class CardItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <article class="card">
          <section class="card_img-wrapper"> 
            <picture>
            <source media="(max-width: 600px)" data-srcset="${this.getAttribute(
              "image"
            )}">
            <img
                class="lazyload"
                src="./images/default-featured-image.jpg"
                data-src="${this.getAttribute("image")}"
                alt="Gambar ${this.getAttribute("name")}">
            </picture>
            <p>${this.getAttribute("city")}</p>
            <button 
              class="featured-image clickable-image"
              data-src="${this.getAttribute("image")}"
              aria-label="Buka Image overlay"
            >
              &#x1F441;
            </button>
          </section>
          <section class="card_content">
            <p><span>Rating:</span> ${this.getAttribute("rating")}</p>
            <h1>
              <a href="${this.getAttribute("href")}">
                ${this.getAttribute("name")}
              </a>
            </h1>
            <p class="desc">
              ${this.getAttribute("description")}
            </p>
          </section>
        </article>
      `;
  }
}

customElements.define("card-item", CardItem);
