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
      if (!tags.ingredients.includes(ingredientList)) {
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

// affichage menu select
for (const optionIngredients of tags.ingredients) {
  const selectIngredients = document.getElementById("ingredients");
  let option = document.createElement("option");
  option.text = optionIngredients;
  option.value = optionIngredients;
  // console.log(optionIngredients);
  selectIngredients.appendChild(option);
}

for (const optionIngredients of tags.appliances) {
  const selectAppliances = document.getElementById("appareils");
  let option = document.createElement("option");
  option.text = optionIngredients;
  option.value = optionIngredients;
  selectAppliances.appendChild(option);
}

for (const optionIngredients of tags.ustensils) {
  const selectUstensiles = document.getElementById("ustensiles");
  let option = document.createElement("option");
  option.text = optionIngredients;
  option.value = optionIngredients;
  selectUstensiles.appendChild(option);
}
