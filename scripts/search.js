import { recipes } from "../data/recipes.js";
import { showCards } from "../scripts/card.js";
import { showTag, filtre } from "../scripts/tags.js";

// ecouteur d'input et excute (filterData)
const inputField = document.getElementById("search-input");
inputField.addEventListener("keyup", filterData);

// Execute la recherche à partir de 3 lettres
function filterData(e) {
  let searchLetters = e.target.value.toLowerCase();
  const searchLettersNunbers = searchLetters.length;
  console.log(searchLetters);
  if (searchLettersNunbers >= 3) {
    search(searchLetters);
  }
}
//Function Search (Créer un nouveau tableau de recette)
// execute un comparatif avec description ,nom et ingtedients
export function search(value = null) {
  let newTabRecipes = recipes;
  // console.log(newTabRecipes);
  if (value != null) {
    // console.log(value);
    

   
    for (let newTabRecipes = 0; newTabRecipes < recipes.length; index++) {
      const ele = newTabRecipes[index];
      if (ele.description.toLowerCase().indexOf(value) >= 0) {
        console.log(ele.description.toLowerCase());
        return ele.description;
      } else if (ele.name.toLowerCase().indexOf(value) >= 0) {
        console.log(ele.name);
      } else if (
        JSON.stringify(ele.ingredients).toLowerCase().indexOf(value) >= 0
      ) {
        return ele.ingredients;
      }
    };
  }
  console.log(newTabRecipes);
  newTabRecipes = searchIncludeTags(newTabRecipes);

  renderRecipes(newTabRecipes);
  // console.log(newTabRecipes);
}
// filtre les tags
function renderRecipes(newRecipes) {
  const tags = filtre(newRecipes);
  console.log(tags);
  showTag(tags.ingredients, "ingredients");
  showTag(tags.appliances, "appareils");
  showTag(tags.ustensils, "ustensiles");

  let messError = document.querySelector(".ms-err-search");
  if (newRecipes != "") {
    messError.setAttribute("style", "display:none");
    showCards(newRecipes);
  } else messError.setAttribute("style", "display:block");
  messError.textContent =
    "« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc";

  showCards(newRecipes);
}

// filtre les tags &  affiche les recettes qui corresponds
function searchIncludeTags(recipes) {
  let newTagsArrayRecipes = recipes;
  console.log(newTagsArrayRecipes);

  let tagListIng = document.querySelectorAll(".tagName.colorIng b");
  if (tagListIng.length >= 0) {
    console.log(tagListIng);
    for (const tagIng of tagListIng) {
      let tagsIng = tagIng.textContent.toLowerCase();
      // console.log(tagsIng);

      newTagsArrayRecipes = newTagsArrayRecipes.filter((dataRecipe) => {
        return JSON.stringify(dataRecipe.ingredients)
          .toLowerCase()
          .includes(tagsIng);
      });
    }
  }

  let tagListApp = document.querySelectorAll(".tagName.colorApp b");
  if (tagListApp.length >= 0) {
    for (const tagApp of tagListApp) {
      console.log(tagListApp);
      let tagsApp = tagApp.textContent.toLowerCase();
      // console.log(tagsApp);

      newTagsArrayRecipes = newTagsArrayRecipes.filter((dataRecipe) => {
        return dataRecipe.appliance.toLowerCase().includes(tagsApp);
      });
    }
  }

  let tagListUst = document.querySelectorAll(".tagName.colorUst b");
  if (tagListUst.length >= 0) {
    for (const tagUst of tagListUst) {
      console.log(tagListUst);
      let tagsUst = tagUst.textContent.toLowerCase();
      // console.log(tagsUst);

      newTagsArrayRecipes = newTagsArrayRecipes.filter((ele) => {
        return ele.ustensils.toString().toLowerCase().includes(tagsUst);
      });
    }
  }
  console.log(newTagsArrayRecipes);
  return newTagsArrayRecipes;
}

