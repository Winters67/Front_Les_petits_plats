import { recipes } from "../data/recipes.js";
console.log(recipes);

for (let index = 0; index < recipes.length; index++) {
  const recette = recipes[index];
  console.log(recette);

  for (let index = 0; index < recette.ingredients.length; index++) {
    const ingredients = recette.ingredients[index];
    console.log(ingredients);
  }

  function showCard() {
    document.querySelector("#card-item").innerHTML += `
        
        <div class="card m-2" style="width: 380px; height: 364px">
        <img
        class="card-img-top"
        src="/assets/images/wendy.jpg"
        alt="Card image cap"
        />
        <div class="card-body bg-light">
        <div class="card-title">
        <p>${recette.name}</p>
        <span class="card-time">
        <img
        class="m-1"
        src="/assets/icons/clock.png"
        alt="horloge"
        style="width: 18px; height: 18px"
        />
        <p>${recette.time}</p>
        </span>
        </div>
        <article class="card-recette">
        <p class="card-ingredients w-50">
        ${recette.ingredient}
        </p>
        <p class="card-text w-50">
        ${recette.description}
        </p>
        </article>
        </div>
     
        </div>`;
  }

  showCard();
}
