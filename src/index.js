import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

import "./index.css";

const yes_21 = document.getElementById("yes_21");
const close_pop_up = document.getElementById("close_pop_up");

const storageType = localStorage;
const consentPropertyName = "age_consent";

const shouldHideVerification = () => storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

yes_21.addEventListener("click", (e) => {
  const verification_div = document.getElementById("verification_div");
  const home_body = document.getElementById("home_body");
  const pop_up = document.getElementById("pop_up");

  verification_div.classList.remove("flex");
  verification_div.classList.add("hidden");
  home_body.classList.remove("filter");
  home_body.classList.remove("blur-sm");
  pop_up.classList.remove("filter");
  pop_up.classList.remove("blur-sm");

  saveToStorage();
});

close_pop_up.addEventListener("click", (e) => {
  const pop_up = document.getElementById("pop_up");

  pop_up.classList.remove("flex");
  pop_up.classList.add("hidden");
});

if (shouldHideVerification()) {
  const verification_div = document.getElementById("verification_div");
  const home_body = document.getElementById("home_body");
  const pop_up = document.getElementById("pop_up");

  verification_div.classList.remove("flex");
  verification_div.classList.add("hidden");
  home_body.classList.remove("filter");
  home_body.classList.remove("blur-sm");
  pop_up.classList.remove("filter");
  pop_up.classList.remove("blur-sm");
}
