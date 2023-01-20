import { recipes } from "../data/recipes.js";
import { showCards } from "../scripts/card.js";
import { showTag, filtre, tags, activeClass } from "../scripts/tags.js";

// console.log(recipes);

filtre(recipes);
showCards(recipes);

// affiche les tags
showTag(tags.ingredients, ".listOption-ing");
showTag(tags.appliances, ".listOption-app");
showTag(tags.ustensils, ".listOption-ust");

// showTag(tags.ingredients, "ingredients");

// menu

const selectBtnIng = document.querySelector(".select-btn-ing");
const selectBtnApp = document.querySelector(".select-btn-app");
const selectBtnUst = document.querySelector(".select-btn-ust");

activeClass(selectBtnIng, ".select-choix-ing");
activeClass(selectBtnApp, ".select-choix-app");
activeClass(selectBtnUst, ".select-choix-ust");
