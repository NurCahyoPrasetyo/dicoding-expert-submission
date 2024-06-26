import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";
import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";

const createLikeBtnPresenterWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeBtnPresenterWithResto };
