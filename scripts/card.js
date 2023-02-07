export { showCard, showCards };

/**
 *Fonction qui créer les cartes de recette
 * @param {Object} recette
 * @returns displayCards
 */
function showCard(recette) {
  const clock = `/assets/icons/clock-regular.svg`;
  const picture = `/assets/images/wendy.jpg`;
  const displayCards = document.createElement("div");
  displayCards.setAttribute("class", "displayCards");
  const recetteCard = document.createElement("div");
  recetteCard.setAttribute("class", "recette card bg-light");
  const imgCard = document.createElement("img");
  imgCard.setAttribute("class", "image card-img-top");
  imgCard.setAttribute("src", picture);
  const descriptionCard = document.createElement("div");
  descriptionCard.setAttribute("class", "description card-body bg-light");
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  const recetteName = document.createElement("h5");
  const cardTime = document.createElement("span");
  cardTime.setAttribute("class", "card-time");
  const recetteTime = document.createElement("img");
  recetteTime.setAttribute("class", "m-1");
  recetteTime.setAttribute("style", "width: 18px; height: 18px");
  recetteTime.setAttribute("src", clock);
  const recetteTimeDesc = document.createElement("h4");
  recetteName.textContent = recette.name;
  recetteTimeDesc.textContent = recette.time + " min";
  const cardIngredients = document.createElement("article");
  cardIngredients.setAttribute("id", "card-ingredients");
  cardIngredients.setAttribute("class", "card-recette");
  const descriptionRecette = document.createElement("p");
  descriptionRecette.setAttribute("class", "card-text w-50");
  descriptionRecette.textContent = recette.description;

  const listIngredients = document.createElement("div");
  listIngredients.setAttribute("style", "padding-right:10px");
  for (const recetteIng of recette.ingredients) {
    let div = document.createElement("div");
    div.setAttribute("class", "card-ingredients w-25");

    let ingredient = document.createElement("p");
    ingredient.setAttribute("style", "font-weight: 700");
    ingredient.textContent = recetteIng.ingredient + ":";

    let quantity = document.createElement("p");
    quantity.textContent = recetteIng.quantity;

    let unit = document.createElement("p");
    unit.setAttribute("class", "unity");
    unit.textContent = recetteIng.unit;

    listIngredients.appendChild(div);
    div.appendChild(ingredient);
    div.appendChild(quantity);
    div.appendChild(unit);
  }
  displayCards.appendChild(recetteCard);
  recetteCard.appendChild(imgCard);
  recetteCard.appendChild(descriptionCard);
  descriptionCard.appendChild(cardTitle);
  descriptionCard.appendChild(cardIngredients);
  cardIngredients.appendChild(listIngredients);
  cardIngredients.appendChild(descriptionRecette);
  cardTitle.appendChild(recetteName);
  cardTitle.appendChild(cardTime);
  cardTime.appendChild(recetteTime);
  cardTime.appendChild(recetteTimeDesc);

  return displayCards;
}

/**
 *
 * @param {Array} arrayRecipes
 */
function showCards(arrayRecipes) {
  const displayCard = document.querySelector("#card-item");
  displayCard.innerHTML = "";

  arrayRecipes.forEach((recipe) => {
    displayCard.appendChild(showCard(recipe));
  });
}

