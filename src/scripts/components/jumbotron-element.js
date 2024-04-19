class JumbotronElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="jumbotron_containers" id="hero">
    <picture>
    <source
      media="(max-width: 600px)"
      srcset="./images/heros/hero-image_4-small.jpg"
    />
    <source
      media="(max-width: 1280px)"
      srcset="./images/heros/hero-image_4-medium.jpg"
    />
    <img class="lazyload" src="./images/heros/hero-image_4-large.jpg" alt="jumbotron" />
    </picture>
    <div class="jumbotron_contents">
      <h1>Restoran All In</h1>
      <p>
      Restoran "All In" adalah destinasi kuliner yang memikat hati para pecinta makanan dengan berbagai macam hidangan lezat dan suasana yang menyenangkan.
      </p>
    </div>
  </section>
              `;
  }
}

customElements.define("jumbotron-element", JumbotronElement);
