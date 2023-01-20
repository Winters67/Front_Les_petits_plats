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
function search(value = null) {
  let newTabRecipes = recipes;
  if (value != null || value != "") {
     newTabRecipes = recipes.filter((ele) => {
      if (ele.description.toLowerCase().indexOf(value) >= 0) {
        console.log(ele.description);
        return ele.description;
      } else if (ele.name.toLowerCase().indexOf(value) >= 0) {
        console.log(ele.name);
        return ele.name;
      }
    });
  }

  render(newTabRecipes);
  console.log(newTabRecipes);
}





function render(newRecipes) {
  let messError = document.querySelector(".ms-err-search");
  if (newRecipes != "") {
    messError.setAttribute("style", "display:none");
    showCards(newRecipes);
  } else messError.setAttribute("style", "display:block");
  messError.textContent = "Oups pas de correspondance à votre recherche !";
  showCards(newRecipes);
}


