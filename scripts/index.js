import { recipes } from "../data/recipes.js";
import { showCards } from "../scripts/card.js";
import { showTag, filtre, tags } from "../scripts/tags.js";

// console.log(recipes);

filtre(recipes);
showCards(recipes);

// affiche les tags
showTag(tags.ingredients, ".listOption-ing");
showTag(tags.appliances, ".listOption-app");
showTag(tags.ustensils, ".listOption-ust");

// menu

const selectBtnIng = document.querySelector(".select-btn-ing");
const selectBtnApp = document.querySelector(".select-btn-app");
const selectBtnUst = document.querySelector(".select-btn-ust");

const closeModal = document.querySelectorAll(".closeModal");

activeClass(selectBtnIng, ".select-choix-ing");
activeClass(selectBtnApp, ".select-choix-app");
activeClass(selectBtnUst, ".select-choix-ust");

function activeClass(selectBtn, classTag) {
  const select = document.querySelector(classTag);
  selectBtn.addEventListener("click", () => {
    select.classList.toggle("active");
    closeModal.forEach((element) => {
      element.addEventListener("click", () => {
        if (select.classList.toggle("active") == true) {
          select.classList.remove("active");
        }
      });
    });
  });
}
