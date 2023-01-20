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
}


export function activeClass(selectBtn, classTag) {
  const closeModal = document.querySelectorAll(".closeModal");
  const select = document.querySelector(classTag);
  selectBtn.addEventListener("click", () => {
    select.classList.toggle("active");
    closeModal.forEach((element) => {
      element.addEventListener("click", () => {
        if (select.classList.toggle("active") == true) {
          select.classList.remove("active");
        }
      });
    });
  });
}

export function showTag(tagsList, classBoxTag) {
  for (const option of tagsList) {
    const select = document.querySelector(classBoxTag);
    let optionElt = document.createElement("li");
    optionElt.setAttribute("class", "listItem");
    optionElt.textContent = option;

    optionElt.addEventListener("click", function () {
      addTag(option, classBoxTag);
    });
    select.appendChild(optionElt);
  }
}
function addTag(items, classBoxTag) {
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

  if (classBoxTag == ".listOption-app") {
    spanTag.setAttribute("class", "colorApp");
  }
  if (classBoxTag == ".listOption-ust") {
    spanTag.setAttribute("class", "colorUst");
  }

  spanTag.addEventListener("click", function (e) {
    this.closest("span ").remove();
  });

  return select;
}

function filterTags(arrayItems, classBoxTag) {
  const inputTags = document.querySelector(`#${classBoxTag} input`);

  inputTags.addEventListener("input", (e) => {
    document.querySelector(`#${classBoxTag} ul`).innerHTML = " ";

    let searchLetters = e.target.value.toLowerCase();
    console.log(searchLetters);

    let newTagsArray = arrayItems.filter((data) => {
      return data.toLowerCase().includes(searchLetters);
    });

    // console.log(newTagsArray);
    showTag(newTagsArray, ".listOption-ing");
    showTag(newTagsArray, ".listOption-app");
    showTag(newTagsArray, ".listOption-ust");
  });
}
filterTags(tags.ingredients, "ingredients");
filterTags(tags.appliances, "appareils");
filterTags(tags.ustensils, "ustensiles");