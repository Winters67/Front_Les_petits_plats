//Init tag (index)

export const tags = {
  ingredients: [],
  appliances: [],
  ustensils: [],
};
console.log(tags);

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
    //Enventlistener (Add_tag)
    select.appendChild(optionElt);
    optionElt.addEventListener("click", addTag(optionElt));
  }
}

function addTag(item) {
  if (item =='') {
    item.classList.toggle("addItem");
  } else item.classList.remove("addItem");
}
//Fucntion add_tag (Event -> close tag)

//function close_tag

const inputTags = document.querySelector(".input-ing");
inputTags.addEventListener("input", filterTags);

function filterTags(e) {
  document.querySelector(".listOption-ing").innerHTML = " ";
  let searchLetters = e.target.value.toLowerCase();
  console.log(searchLetters);
  let newTagsArray = tags.ingredients.filter((data) => {
    return data.toLowerCase().includes(searchLetters);
  });
  console.log(newTagsArray);
  showTag(newTagsArray, ".listOption-ing");
}
