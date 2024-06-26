import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Liking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the resto has not been liked before", async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="Tambah ke Favorite"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the resto has not been liked before", async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus Favorite"]')).toBeFalsy();
  });

  it("should be able to like the resto", async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should not add a resto again when its already liked", async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should not add a resto when it has no id", async () => {
    await TestFactories.createLikeBtnPresenterWithResto({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
