import CONFIG from "../../globals/config";

const createRestaurantItemTemplate = (restaurant) => `
<card-item
  id="${restaurant.id}"
  href="${`/#/details/${restaurant.id}`}"
  image="${CONFIG.BASE_IMAGE_URL + "/small/" + restaurant.pictureId}"
  name="${restaurant.name}"
  city="${restaurant.city}"
  rating="${restaurant.rating}"
  description="${restaurant.description}"
></card-item>
`;

const createDetailRestaurantTemplate = (restaurant) => `
<div class="details-container container">
  <item-detail
    name="${restaurant.name}"
    city="${restaurant.city}"
    image="${CONFIG.BASE_IMAGE_URL + "/small/" + restaurant.pictureId}"
    rating="${restaurant.rating}"
    address="${restaurant.address}"
    category="${restaurant.categories
      .map((category) => category.name)
      .join(" , ")}"
    description="${restaurant.description}"
  >
  </item-detail>
  <div class="divider"></div>
  <div>
    <h1 class="details-subtitle">Daftar menu</h1>
    <div class="details-menu">
        <div class="details-menu-item">
        <h4 class="details-menu-title">Makanan</h4>
        <div class="details-menu-wrapper">
        ${restaurant.menus.foods
          .map(
            (food) => `
            <p class="details-menu-description">${food.name}</p>`
          )
          .join("")}
        </div>
        </div>
        <div class="details-menu-item">
        <h4 class="details-menu-title">Minuman</h4>
        <div class="details-menu-wrapper">
        ${restaurant.menus.drinks
          .map(
            (drink) => `
            <p class="details-menu-description">${drink.name}</p>`
          )
          .join("")}
        </div>
        </div>
    </div>
  </div>
  <div class="divider"></div>
  <div>
  <h1 class="details-subtitle">Ulasan Kustomer</h1>
  <div class="details-review-wrapper">
    ${restaurant.customerReviews
      .map(
        (review) => `
        <div class="details-review-item">
          <div class="review-item-header">
            <div class="review-item-user">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icons">
                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
              </svg>                      
              <h4>${review.name}</h4>
            </div>
            <p class="review-item-date">${review.date}</p>
          </div>
          <p class="review-item-desc">${review.review}</p>
        </div>
      `
      )
      .join("")}
  </div>
</div>
`;

const createRestaurantSearchItemTemplate = (restaurant) => `
    <card-search-item
    id="${restaurant.id}"
    href="${`/#/details/${restaurant.id}`}"
    name="${restaurant.name}"
    city="${restaurant.city}"
    rating="${restaurant.rating}"
    ></card-search-item>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="Tambah ke Favorite" title="Tambah ke Favorite" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Hapus Favorite" title="Hapus Favorite" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createDetailRestaurantTemplate,
  createRestaurantSearchItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
