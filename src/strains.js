import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

import "./index.css";

const strains = document.getElementById("strains").children;
const strain_next = document.getElementById("strain_next");
const strain_back = document.getElementById("strain_back");

strain_next.addEventListener("click", (e) => {
  let visable_strains = 0;
  let visable_strain_indices = "";

  for (let i = 0; i < strains.length; i++) {
    if (strains[i].getBoundingClientRect().top !== 0) {
      visable_strains += 1;
      visable_strain_indices += i;
    }
  }

  if (visable_strains === 1) {
    current_strain = strains[i];
    next_strain = strains[i + 1];
    if (next_strain !== undefined) {
      current_strain.classList.remove("flex");
      current_strain.classList.add("hidden");
      next_strain.classList.add("flex");
      next_strain.classList.remove("hidden");
    }
  } else {
    first_strain = strains[visable_strain_indices[0]];
    last_strain = strains[visable_strain_indices[visable_strains - 1]];
    next_strain =
      strains[parseInt(visable_strain_indices[visable_strains - 1]) + 1];

    if (next_strain !== undefined) {
      first_strain.classList.remove("flex");
      first_strain.classList.remove("lg:flex");
      first_strain.classList.add("hidden");
      next_strain.classList.add("flex");
      next_strain.classList.remove("hidden");
    }
  }
});

strain_back.addEventListener("click", (e) => {
  let visable_strains = 0;
  let visable_strain_indices = "";

  for (let i = 0; i < strains.length; i++) {
    if (strains[i].getBoundingClientRect().top !== 0) {
      visable_strains += 1;
      visable_strain_indices += i;
    }
  }

  if (visable_strains === 1) {
    current_strain = strains[i];
    previous_strain = strains[i - 1];
    if (previous_strain !== undefined) {
      current_strain.classList.remove("flex");
      current_strain.classList.add("hidden");
      previous_strain.classList.add("flex");
      previous_strain.classList.remove("hidden");
    }
  } else {
    first_strain = strains[visable_strain_indices[0]];
    last_strain = strains[visable_strain_indices[visable_strains - 1]];
    previous_strain = strains[parseInt(visable_strain_indices[0]) - 1];
    if (previous_strain !== undefined) {
      last_strain.classList.remove("flex");
      last_strain.classList.remove("lg:flex");
      last_strain.classList.add("hidden");
      previous_strain.classList.add("flex");
      previous_strain.classList.remove("hidden");
    }
  }
});
