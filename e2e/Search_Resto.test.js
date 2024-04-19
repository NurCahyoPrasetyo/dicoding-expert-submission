/* eslint-disable no-undef */
const assert = require("assert");

Feature("Search Resto");

Scenario("Searching a resto, ", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement(".search-input");

  const search = "Kafe Kita";
  I.fillField(".search-input", search);
  I.click(".search-button");

  I.wait(2);
  I.waitForElement(".card .card_content h1 a");
  const serchResto = await I.grabTextFromAll(".card .card_content h1 a");
  const searchMenu = serchResto.filter((resto) => resto.includes("Kafe Kita"));
  assert.strictEqual(searchMenu[0], "Kafe Kita");
});
