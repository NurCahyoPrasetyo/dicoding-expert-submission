/* eslint-disable no-undef */
Feature("Modal Zoom Img Resto");

Scenario("Zoom Img home a resto, ", async ({ I }) => {
  I.amOnPage("/");
  I.waitForElement(".card .card_img-wrapper button");
  const firstRestaurant = locate(".card .card_img-wrapper button").first();
  I.click(firstRestaurant);
  I.waitForElement(".overlay");
  I.wait(2);
  I.click("#close-zoom");
});
Scenario("Zoom Img favorite a resto, ", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement(".card .card_content h1 a");

  const firstRestaurant = locate(".card .card_content h1 a").first();
  I.click(firstRestaurant);

  I.waitForElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".card .card_img-wrapper button");
  const firstRestaurantFavorite = locate(
    ".card .card_img-wrapper button"
  ).first();
  I.click(firstRestaurantFavorite);
  I.waitForElement(".overlay");
  I.wait(2);
  I.click("#close-zoom");
});

Scenario("Zoom Img empty list favorite resto", ({ I }) => {
  I.amOnPage("/#/favorite");
  I.see("Belum ada restoran favorit yang ditambahkan :(", "p");
});
