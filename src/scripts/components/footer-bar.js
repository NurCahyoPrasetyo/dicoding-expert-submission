class FooterBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>Copyright &copy; 2024 - Restoran All In</p>
            `;
  }
}

customElements.define("footer-bar", FooterBar);
