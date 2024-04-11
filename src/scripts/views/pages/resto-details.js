import TheRestaurantDbSource from "../../data/restaurantdb-source";
import UrlParser from "../../routes/url-parser";
import { createDetailRestaurantTemplate } from "../templates/tamplate-creator";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import PostReviewInitiator from "../../utils/post-review-initiator";

const RestoDetails = {
  async render() {
    return `
      <loader-circle></loader-circle>
      <section id="content"></section>
      <div class="details-container container">
        <form class="form-review">
          <h1 class="details-subtitle">Tambahkan Ulasanmu</h1>
          <div>
            <label>Nama</label>
            <input type="text" name="name" id="name" placeholder="Nama" />
          </div>
          <div>
            <label>Ulasan</label>
            <textarea name="review" id="review" rows="4" placeholder="Ulasan"></textarea>
          </div>
          <button type="submit" id="submit-review">Kirim</button>
        </form>
      </div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector("#content");
    const loadingElement = document.querySelector(".loader-wrapper");

    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    loadingElement.classList.add("display-none");
    restaurantContainer.innerHTML = createDetailRestaurantTemplate(
      restaurant.restaurant
    );

    const submitReviewButton = document.querySelector("#submit-review");
    submitReviewButton.addEventListener("click", (event) => {
      event.preventDefault();
      PostReviewInitiator();
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
      },
    });
  },
};

export default RestoDetails;
