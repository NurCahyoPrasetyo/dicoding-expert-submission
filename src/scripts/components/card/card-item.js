class CardItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <article class="card">
          <section class="card_img-wrapper featured-image clickable-image" 
          data-src="${this.getAttribute("image")}">
            <img
              src="${this.getAttribute("image")}"
              alt="Gambar ${this.getAttribute("name")}"
            />
            <p>${this.getAttribute("city")}</p>
          </section>
          <section class="card_content">
            <p><span>Rating:</span> ${this.getAttribute("rating")}</p>
            <h1>
              <a href="#/" class="featured-image clickable-image" 
              data-src="${this.getAttribute("image")}"
              aria-label="Buka Image overlay"
              >
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