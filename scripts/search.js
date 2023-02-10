import { recipes } from "../data/recipes.js";
import { showCards } from "../scripts/card.js";
import { showTag, filtre } from "../scripts/tags.js";

const inputField = document.getElementById("search-input");
inputField.addEventListener("keyup", filterData);

//
/**
 * Valeur de input
 * Execute la recherche à partir de 3 lettres
 * @param {string} e
 */
function filterData(e) {
  let searchLetters = e.target.value.toLowerCase();
  const searchLettersNunbers = searchLetters.length;
  console.log(searchLetters);
  if (searchLettersNunbers >= 3) {
    search(searchLetters);
  }
}

/**
 * Function Search (Créer un nouveau tableau de recette)
 * execute un comparatif avec description ,nom et ingtedients
 * @param {boolean} value
 *
 */
export function search(value = null) {
  let newTabRecipes = recipes;
  // console.log(newTabRecipes);
  if (value != null) {
    let newTab = [];
    for (const ele of newTabRecipes) {
      if (ele.description.toLowerCase().indexOf(value) >= 0) {
        console.log(ele.description.toLowerCase());
        newTab.push(ele);
      } else if (ele.name.toLowerCase().indexOf(value) >= 0) {
        console.log(ele.name);
        newTab.push(ele);
      } else if (
        JSON.stringify(ele.ingredients).toLowerCase().indexOf(value) >= 0
      ) {
        newTab.push(ele);
      }
    }
    newTabRecipes = newTab;
  }
  console.log(newTabRecipes);
  newTabRecipes = searchIncludeTags(newTabRecipes);

  renderRecipes(newTabRecipes);
  console.log(newTabRecipes);
}

/**
 * function qui nous donne le rendu des tags filtrés ainsi que les recettes
 *  et nous renvoie un message d'erreur dans le cas écheant
 * @param {Array} newRecipes
 */
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

/**
 * filtre les tags & affiche les recettes qui corresponds
 * @param {Array} recipes
 * @returns [ingredients] [appareils] [ustensiles] filtrés en fonction des recettes restantes
 */
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
