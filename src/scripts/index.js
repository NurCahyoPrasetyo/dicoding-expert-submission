import "regenerator-runtime"; /* for async await transpile */
import "../styles/index.scss";

import "./components/index";
import main from "./view/main.js";

document.addEventListener("DOMContentLoaded", main);
