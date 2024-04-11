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
        <div class="search-list-wrapper">
          <form class="search-input-wrapper">
            <input type="text" id="search-resto" placeholder="Cari restoran" class="search-input" />
            <button type="submit" class="search-button">Cari</button>
          </form>
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
    const searchInput = document.querySelector(".search-input");

    let restaurants;

    const renderRestaurants = async () => {
      try {
        if (!searchInput.value) {
          restaurants = await TheRestaurantDbSource.listRestaurant();
        } else {
          restaurants = await TheRestaurantDbSource.searchRestaurant(
            searchInput.value
          );
        }

        loadingElement.classList.add("display-none");

        if (restaurants.length === 0) {
          restaurantContainer.classList.remove("item_list");
          restaurantContainer.innerHTML = `<p class="search-text-notfound">No restaurants found.</p>`;
        } else {
          restaurantContainer.classList.add("item_list");
          restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML +=
              createRestaurantItemTemplate(restaurant);
          });
        }
      } catch (error) {
        console.error(error);
        loadingElement.classList.add("display-none");
        restaurantContainer.classList.remove("item_list");
        restaurantContainer.innerHTML = `<p class="search-text-notfound">No restaurants found.</p>`;
      }
    };

    await renderRestaurants();

    const searchForm = document.querySelector(".search-input-wrapper");
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      restaurantContainer.innerHTML = "";
      loadingElement.classList.remove("display-none");
      await renderRestaurants();
    });
  },
};

export default Home;
