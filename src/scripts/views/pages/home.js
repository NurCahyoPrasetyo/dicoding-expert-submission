import TheRestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantItemTemplate } from "../templates/tamplate-creator";

const Home = {
  async render() {
    return `
    <jumbotron-element></jumbotron-element>
      <section class="contents_container" id="item_content">
        <div class="contents_title">
          <h2>Explore Restoran All In</h2>
          <p>
            Restoran ini menjadi tempat yang sempurna untuk bersantap dengan
            keluarga, teman, atau bahkan untuk pertemuan bisnis yang santai
            temukan di daerah kamu.
          </p>
        </div>
        <loader-circle></loader-circle>
        <div id='restaurant' class="item_list">
        </div>
      </section>

      <div class="overlay">
        <img src="" alt="Zoomed Image" class="zoomed-image" />
        <button class="close-button" id="close-zoom">X</button>
      </div>
      `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector("#restaurant");
    const loadingElement = document.querySelector(".loader-wrapper");

    const restaurants = await TheRestaurantDbSource.listRestaurant();
    loadingElement.classList.add("display-none");

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
