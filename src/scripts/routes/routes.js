import Home from "../views/pages/home";
import RestoDetails from "../views/pages/resto-details";
import Favorite from "../views/pages/favorite";

const routes = {
  "/": Home, // default page
  "/home": Home,
  "/details/:id": RestoDetails,
  "/favorite": Favorite,
};

export default routes;
