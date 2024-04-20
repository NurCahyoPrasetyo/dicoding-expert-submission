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
        (item) => `
      <card-item
        image="${item.pictureId}"
        name="${item.name}"
        city="${item.city}"
        rating="${item.rating}"
        description="${item.description}"
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
