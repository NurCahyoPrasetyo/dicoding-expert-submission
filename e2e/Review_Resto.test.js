/* eslint-disable no-undef */
const assert = require("assert");

Feature("Review Resto");

Scenario("create a review resto", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement(".card .card_content h1 a");

  I.click(locate(".card .card_content h1 a").first());

  I.waitForElement(".form-review");

  const name = "From E2E Testing input Name";
  const review = "From E2E Testing input Review";

  I.fillField('input[name="name"]', name);
  I.fillField('textarea[name="review"]', review);

  I.click("#submit-review");

  I.seeElement(".details-review-item .review-item-header .review-item-user h4");
  I.seeElement(".details-review-item .review-item-desc");

  const lastReviewName = locate(
    ".details-review-item .review-item-header .review-item-user h4"
  ).last();
  const lastReviewContent = locate(
    ".details-review-item .review-item-desc"
  ).last();

  const lastReviewNameText = await I.grabTextFrom(lastReviewName);
  const lastReviewContentText = await I.grabTextFrom(lastReviewContent);

  I.wait(2);

  assert.strictEqual(lastReviewNameText, name);
  assert.strictEqual(lastReviewContentText, review);
});
