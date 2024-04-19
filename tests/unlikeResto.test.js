import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Unliking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should display unlike widget when the resto has been liked", async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="Hapus Favorite"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the resto has been liked", async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="Tambah ke Favorite"]')
    ).toBeFalsy();
  });

  it("should be able to remove liked resto from the list", async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });

    document
      .querySelector('[aria-label="Hapus Favorite"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it("should not throw error if the unliked resto is not in the list", async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document
      .querySelector('[aria-label="Hapus Favorite"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
