/* eslint-disable no-undef */
const assert = require("assert");

Feature("Liking Resto");

Scenario("Showing empty list favorite resto", ({ I }) => {
  I.amOnPage("/#/favorite");
  I.see("Belum ada restoran favorit yang ditambahkan :(", "p");
});

Scenario("Like one Resto", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement(".card .card_content h1 a");

  const firstRestaurant = locate(".card .card_content h1 a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".card .card_content h1 a");
  const likedRestaurantTitle = await I.grabTextFrom(".card .card_content h1 a");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario("Unliking one resto", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement(".card .card_content h1 a");

  const firstRestaurant = locate(".card .card_content h1 a").first();
  I.click(firstRestaurant);

  I.waitForElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".card .card_content h1 a");

  const likedRestaurant = locate(".card .card_content h1 a").first();
  I.click(likedRestaurant);

  I.waitForElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.see("Belum ada restoran favorit yang ditambahkan :(", "p");
});
