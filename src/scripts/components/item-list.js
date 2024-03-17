import data from "../../public/data/DATA.json";
import "./card/card-item";

class ItemList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const items = data.restaurants;
    const cardList = items
      .map(
        (data) => `
      <card-item
        image="${data.pictureId}"
        name="${data.name}"
        city="${data.city}"
        rating="${data.rating}"
        description="${data.description}"
      ></card-item>
    `
      )
      .join("");

    this.innerHTML = `
      <div class="item_list">
        ${cardList}
      </div>
    `;
  }
}

customElements.define("item-list", ItemList);
