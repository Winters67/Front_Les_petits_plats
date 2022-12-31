import { recipes } from "../data/recipes.js";
import { showCard } from "../scripts/card.js";
// console.log(recipes);

const tags = {
  ingredients: [],
  appliances: [],
};

//Boucle
//Retrouve les ingredients : tags.ingredients.push(ingredient)

// ecouteur input
const inputField = document.getElementById("search-input");
inputField.addEventListener("input", () => {
  console.log(inputField.value);
  //If inputField.value > 3
  // Traitement du tableau (filtre les recipes)
  // Condition valuer.input / recette.include(valuer.input)
});

// boucle recette
recipes.forEach((recette) => {
  console.log(recette);

  // let listElement = recette.ingredients.map((recette) => recette);
 


  const listeAppareils = recette.appliance;
  console.log(listeAppareils);

  const listeUstensiles = recette.ustensils;
  console.log(listeUstensiles);

  // affichage des cartes
  const displayCard = document.querySelector("#card-item")
  displayCard.appendChild(showCard(recette));


});

console.log(showCard)

