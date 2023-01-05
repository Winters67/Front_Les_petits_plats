import { recipes } from "../data/recipes.js";
import { showCard } from "../scripts/card.js";
// console.log(recipes);

const tags = {
  ingredients: [],
  appliances: [],
  ustensils: [],
};
console.log(tags);

// boucle recette
recipes.forEach((recette) => {
  // console.log(recette);

  // filtre => {tags}
  function filtre(recette) {
    // indgredients[] enleve les doublons
    for (const ingredientList of recette.ingredients) {
      if (!tags.ingredients.includes(ingredientList.ingredient)) {
        // console.log(ingredientList);
        tags.ingredients.push(ingredientList.ingredient);
      }
      // appareils[] enleve les doublons
      const listeAppareils = recette.appliance;
      if (!tags.appliances.includes(listeAppareils)) {
        tags.appliances.push(listeAppareils);
      }
      // unstensiles[] enleve les doublons
      for (const listeUstensiles of recette.ustensils) {
        if (!tags.ustensils.includes(listeUstensiles)) {
          // console.log(listeUstensiles);
          tags.ustensils.push(listeUstensiles);
        }
      }
      return;
    }
  }

  filtre(recette);

  // affichage des cartes
  const displayCard = document.querySelector("#card-item");
  displayCard.appendChild(showCard(recette));
});

// affichage des items dans le menu
for (const optionIngredients of tags.ingredients) {
  const selectIngredients = document.querySelector(".listOption-ing");
  let option = document.createElement("li");
  option.setAttribute("class", "listItem");
  option.textContent = optionIngredients;
  selectIngredients.appendChild(option);
}

for (const optionIngredients of tags.appliances) {
  const selectAppliance = document.querySelector(".listOption-app");
  let option = document.createElement("li");
  option.setAttribute("class", "listItem");
  option.textContent = optionIngredients;
  selectAppliance.appendChild(option);
}

for (const optionIngredients of tags.ustensils) {
  const selectUstensiles = document.querySelector(".listOption-ust");
  let option = document.createElement("li");
  option.setAttribute("class", "listItem");
  option.textContent = optionIngredients;
  selectUstensiles.appendChild(option);
}

// menu
const wrapperIng = document.querySelector(".select-choix-ing");
const wrapperApp = document.querySelector(".select-choix-app");
const wrapperUst = document.querySelector(".select-choix-ust");

const selectBtnIng = wrapperIng.querySelector(".select-btn-ing");
const selectBtnApp = wrapperApp.querySelector(".select-btn-app");
const selectBtnUst = wrapperUst.querySelector(".select-btn-ust");

const closeModalIng = document.querySelector(".closeModal-ing");
const closeModalApp = document.querySelector(".closeModal-app");
const closeModalUst = document.querySelector(".closeModal-ust");
console.log(closeModalIng);

selectBtnIng.addEventListener("click", () => {
  wrapperIng.classList.toggle("active");
});
selectBtnApp.addEventListener("click", () => {
  wrapperApp.classList.toggle("active");
});
selectBtnUst.addEventListener("click", () => {
  wrapperUst.classList.toggle("active");
});

closeModalIng.addEventListener("click", () => {
  wrapperIng.classList.remove("active");
});
closeModalApp.addEventListener("click", () => {
  wrapperApp.classList.remove("active");
});
closeModalUst.addEventListener("click", () => {
  wrapperUst.classList.remove("active");
});
