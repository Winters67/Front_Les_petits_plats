import { recipes } from "../data/recipes.js";
import { showCards } from "../scripts/card.js";

const inputField = document.getElementById("search-input");
inputField.addEventListener("keyup", filterData);

function filterData(e) {
  let searchLetters = e.target.value.toLowerCase();
  const searchLettersNunbers = searchLetters.length;
  console.log(searchLetters);
  if (searchLettersNunbers >= 3) {
    search(searchLetters);
  }
}

//Function Search (Créer un nouveau tableau de recette)
export function search(value = null) {
  let newTabRecipes = recipes;
  // console.log(newTabRecipes);
  if (value != null) {
    // console.log(value);
    newTabRecipes = recipes.filter((ele) => {
      if (ele.description.toLowerCase().indexOf(value) >= 0) {
        console.log(ele.description.toLowerCase());
        return ele.description;
      } else if (ele.name.toLowerCase().indexOf(value) >= 0) {
        console.log(ele.name);
        return ele.name;
      }
    });
  }
  console.log(newTabRecipes);
  newTabRecipes = searchIncludeTags(newTabRecipes);
  renderRecipes(newTabRecipes);
  // console.log(newTabRecipes);
}

function renderRecipes(newRecipes) {
  let messError = document.querySelector(".ms-err-search");
  if (newRecipes != "") {
    messError.setAttribute("style", "display:none");
    showCards(newRecipes);
  } else messError.setAttribute("style", "display:block");
  messError.textContent = "Oups pas de correspondance à votre recherche !";

  showCards(newRecipes);
}
// affiche les tags choisis
function searchIncludeTags(recipes) {
  let newTagsArrayRecipes = recipes;
  console.log(newTagsArrayRecipes);

  let tagListIng = document.querySelectorAll(".tagName.colorIng b");
  if (tagListIng.length >= 0) {
    console.log(tagListIng);
    for (const tagIng of tagListIng) {
      let tagsIng = tagIng.textContent.toLowerCase();
      console.log(tagsIng);

      newTagsArrayRecipes = newTagsArrayRecipes.filter((dataRecipe) => {
        // console.log(
        //   JSON.stringify(dataRecipe.ingredients).toLowerCase().includes(tagsIng)
        // );
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
      console.log(tagsApp);

      newTagsArrayRecipes = newTagsArrayRecipes.filter((dataRecipe) => {
        // console.log(dataRecipe.appliance.toLowerCase().includes(tagsApp));
        return dataRecipe.appliance.toLowerCase().includes(tagsApp);
      });
    }
  }

  let tagListUst = document.querySelectorAll(".tagName.colorUst b");
  if (tagListUst.length >= 0) {
    for (const tagUst of tagListUst) {
      console.log(tagListUst);
      let tagsUst = tagUst.textContent.toLowerCase();
      console.log(tagsUst);

      newTagsArrayRecipes = newTagsArrayRecipes.filter((ele) => {
        // console.log(ele.ustensils.toString().toLowerCase().includes(tagsUst));

        return ele.ustensils.toString().toLowerCase().includes(tagsUst);
      });
    }
  }
  console.log(newTagsArrayRecipes);
  return newTagsArrayRecipes;
}
