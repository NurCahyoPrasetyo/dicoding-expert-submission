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
    <img
      src="./images/heros/hero-image_4.jpg"
      alt="hero-image_4 jumbotron"
    />
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
