import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from "../templates/tamplate-creator";

const Favorite = {
  async render() {
    return `
    <section class="contents_container" id="item_content">
      <div class="contents_title">
        <h2>Restoran Favorite</h2>
        <p>List restoran ini merupakan restoran favorite mu, jangan lupa kunjungi restoran tersebut :)</p>
        <div class="divider"></div>
      </div>
      <loader-circle></loader-circle>
      <p id="favorite-none"></p>
      <div class="item_list"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector(".item_list");
    const loadingElement = document.querySelector(".loader-wrapper");

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    loadingElement.classList.add("display-none");
    const favoriteNone = document.querySelector("#favorite-none");
    if (restaurants.length === 0) {
      favoriteNone.innerHTML = `
        Belum ada restoran favorit yang ditambahkan :(
      `;
    }

    restaurants.forEach((restaurant) => {
      favoriteNone.innerHTML = "";
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
