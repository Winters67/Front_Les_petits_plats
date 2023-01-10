import { recipes } from "../data/recipes.js";
import { showCards } from "../scripts/card.js";

const inputField = document.getElementById("search-input");
inputField.addEventListener("keyup", filterData);

function filterData(e) {
  let searchLetters = e.target.value.toLowerCase();
  const searchLettersNunbers = searchLetters.length;
  console.log(searchLetters);
  if (searchLettersNunbers >= 3) {
    let newTabRecipes = recipes.filter((ele) => {
      return ele.description.toLowerCase().indexOf(searchLetters) >= 0;
    });
    console.log(newTabRecipes);
    if (newTabRecipes != "" ) {
      showCards(newTabRecipes);
    } else showCards(recipes);
  }
}

// condition de recherche + 3 caracteres
//Function EventInput (Event input -> lancer search())
//Function AddTags

//Function Search (Créer un nouveau tableau de recette)

//Lancer fonction showCards(NewTabRecipes)
