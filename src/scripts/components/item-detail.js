class ItemDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="details-header">
    <h1 class="details-title">${this.getAttribute(
      "name"
    )} <span>( ${this.getAttribute("city")} )</span></h1>
    <div class="details-subheader">
        <img src="${this.getAttribute("image")}" alt="${this.getAttribute(
      "name"
    )}" class="details-image"/>
        <div class="details-content">
        <div class="details-content-item">
            <p class="details-content-title">Rating</p>: ${this.getAttribute(
              "rating"
            )} / 5.0
        </div>
        <div class="details-content-item">
            <p class="details-content-title">Alamat</p>: ${this.getAttribute(
              "address"
            )}, ${this.getAttribute("city")}
        </div>
        <div class="details-content-item">
            <p class="details-content-title">Kategori</p>: ${this.getAttribute(
              "category"
            )}
        </div>
        <div class="divider"></div>
        <p class="details-description">${this.getAttribute("description")}</p>
        </div>
    </div>
</div>
        `;
  }
}

customElements.define("item-detail", ItemDetail);
