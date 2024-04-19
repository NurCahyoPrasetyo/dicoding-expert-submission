import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe("Favorite Resto Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(
      async (restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
      }
    );
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});
