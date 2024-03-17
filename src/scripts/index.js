import "regenerator-runtime"; /* for async await transpile */
import "../styles/index.scss";

import main from "./view/main.js";
import "./components/index";

document.addEventListener("DOMContentLoaded", main);
