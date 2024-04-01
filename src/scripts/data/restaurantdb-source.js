import API_ENDPOINT from "../globals/api-endpoint";

class TheRestaurantDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async reviewRestaurant(reqBody) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    return response.json();
  }
}

export default TheRestaurantDbSource;
