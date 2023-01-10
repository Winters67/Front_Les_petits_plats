//Init tag (index)

export const tags = {
  ingredients: [],
  appliances: [],
  ustensils: [],
};
console.log(tags);
let newTagsArray = [];

export function filtre(recipes) {
  recipes.forEach((recette) => {
    // indgredients[] enleve les doublons
    for (const ingredientList of recette.ingredients) {
      if (!tags.ingredients.includes(ingredientList.ingredient)) {
        // console.log(ingredientList);
        tags.ingredients.push(ingredientList.ingredient);
      }
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
  });
}

export function showTag(tagsList, classBoxTag) {
  for (const option of tagsList) {
    const select = document.querySelector(classBoxTag);
    let optionElt = document.createElement("li");
    optionElt.setAttribute("class", "listItem");
    optionElt.textContent = option;
    select.appendChild(optionElt);
  }
}

const inputTags = document.querySelector(".input-ing");
inputTags.addEventListener("input", filterTags);
function filterTags(e) {
  let searchLetters = e.target.value.toLowerCase();
  console.log(searchLetters);
  newTagsArray = tags.ingredients.filter((ele) => {
    console.log(newTagsArray);
    return ele.toLowerCase().indexOf(searchLetters) >= 0;
  }); 
}

