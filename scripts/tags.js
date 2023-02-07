//Init tag (index)
import { search } from "./search.js";
/**
 *
 * @param {object} recipes
 * @returns filtres les tags , supprimes les doublons et les pousse dans le tableau
 */
export function filtre(recipes) {
  const tags = {
    ingredients: [],
    appliances: [],
    ustensils: [],
  };

  recipes.forEach((recette) => {
    // indgredients[] enleve les doublons
    for (const ingredientList of recette.ingredients) {
      if (!tags.ingredients.includes(ingredientList.ingredient)) {
        tags.ingredients.push(ingredientList.ingredient);
        // console.log(ingredientList);
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

  return tags;
}

// initTag(tagsList, "ingredients");

/**
 * function init qui nous permet d'automatiser l'index.js
 * @param {Object} tagsList
 * @param {Array} tagName
 */
export function initTag(tagsList, tagName) {
  // créer & affiche  ingredients/appareils/istensils
  showTag(tagsList, tagName);
  // ouverture et fermeture de la modal (ingredients-appareils-ustensiles)
  activeClass(tagName);
  //  filtre les tags
  filterTags(tagsList, tagName);
}

/**
 * ouverture et fermeture de la modal (ingredients-appareils-ustensiles)
 * @param {string} tagName
 */
export function activeClass(tagName) {
  const select = document.getElementById(tagName);
  const selectBtn = document.querySelector(`#${tagName} .select-btn`);

  const closeModal = document.querySelector(`#${tagName} .closeModal`);

  selectBtn.addEventListener("click", () => {
    select.classList.toggle("active");

    closeModal.addEventListener("click", () => {
      if (select.classList.toggle("active") == true) {
        select.classList.remove("active");
      }
    });
  });
}


/**
 *  créer & affiche  ingredients/appareils/istensils
 * @param {object} tagsList 
 * @param {string} tagName 
 */
export function showTag(tagsList, tagName) {
  const select = document.querySelector(`#${tagName} ul`);
  select.innerHTML = "";

  for (const option of tagsList) {
    let optionElt = document.createElement("li");
    optionElt.setAttribute("class", "listItem active");

    optionElt.textContent = option;

    optionElt.addEventListener("click", function () {
      addTag(option, select);

      // console.log(optionElt);
    });
    select.appendChild(optionElt);
  }
}


/**
 * filtre les tags
 * @param {Array} arrayItems 
 * @param {string} classBoxTag 
 */
function filterTags(arrayItems, classBoxTag) {
  const inputTags = document.querySelector(`#${classBoxTag} input`);

  inputTags.addEventListener("input", (e) => {
    document.querySelector(`#${classBoxTag} ul`).innerHTML = "";

    let searchLetters = e.target.value.toLowerCase();
    console.log(searchLetters);

    let newTagsArray = arrayItems.filter((data) => {
      return data.toLowerCase().includes(searchLetters);
    });
    console.log(newTagsArray);

    showTag(newTagsArray, classBoxTag);
  });
}

/**
 * 
 * @param {string} items 
 * @param {Array} Liste 
 * @returns Permet la création des tags et l'affectation de la bonne couleur
 */
function addTag(items, Liste) {
  const select = document.querySelector(".tagItems");

  let spanTag = document.createElement("span");
  spanTag.setAttribute("class", "tagName");

  let nameTag = document.createElement("b");
  nameTag.textContent = items;

  let iconClose = document.createElement("i");
  iconClose.setAttribute("class", "fa-regular fa-circle-xmark fa-xl ");

  select.appendChild(spanTag);
  spanTag.appendChild(nameTag);
  spanTag.appendChild(iconClose);

  const ID_parent = Liste.closest(".select-main").id;
  // console.log(ID_parent);

  if (ID_parent == "ingredients") {
    spanTag.setAttribute("class", "colorIng tagName");
  }
  if (ID_parent == "appareils") {
    spanTag.setAttribute("class", "colorApp tagName");
  }
  if (ID_parent == "ustensiles") {
    spanTag.setAttribute("class", "colorUst tagName");
  }

  spanTag.addEventListener("click", function (e) {
    this.closest("span ").remove();
    search();
  });

  // console.log(recipes);
  search();

  return select;
}
