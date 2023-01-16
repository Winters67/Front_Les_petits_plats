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

// condition de recherche + 3 caracteres
//Function EventInput (Event input -> lancer search())
//Function AddTags

//Function Search (Créer un nouveau tableau de recette)
function search(value = null) {
  if (value != null || value != "") {
    let newTabRecipes = recipes.filter((ele) => {
      if (ele.description.toLowerCase().indexOf(value) >= 0) {
        console.log(ele.description);
        return ele.description;
      } else if (ele.name.toLowerCase().indexOf(value) >= 0) {
        console.log(ele.name);
        return ele.name;
      }
    });

    render(newTabRecipes);
    console.log(newTabRecipes);
  }
}



//newTabRecipes

//champ Coco -> 6 , tag "ail" -> 3, tag "beurre" -> 1
//Filter les tags (ingredient)

function render(newRecipes) {
  let messError = document.querySelector(".ms-err-search");
  if (newRecipes != "") {
    messError.setAttribute("style", "display:none");
    showCards(newRecipes);
  } else messError.setAttribute("style", "display:block");
  messError.textContent = "Oups pas de correspondance à votre recherche !";
  showCards(newRecipes);
}

//Lancer fonction showCards(NewTabRecipes)
