/**
 * JAVASCRIPT
 * */
import Header from "./modules/header.js";

const headers = document.querySelectorAll(".js-header");
headers.forEach((el) => {
  new Header(el);
});


// Shared JS (global)
// assets/js/main.js for site-wide enhancements (nav, theme toggle later, etc.)
// assets/js/modules/* for reusable utilities.

// imports
// import { initButton } from '../../components/button/button.js';
