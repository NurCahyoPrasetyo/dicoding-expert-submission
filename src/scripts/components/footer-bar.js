class FooterBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p>Copyright &copy; 2024 - Restoran All In</p>
    </footer>
            `;
  }
}

customElements.define("footer-bar", FooterBar);
