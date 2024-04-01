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

export { createRestaurantItemTemplate };
