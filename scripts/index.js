/**
 * 
 */
import { recipes } from "../data/recipes.js";
import { showCards } from "../scripts/card.js";
import { initTag, filtre } from "../scripts/tags.js";


const tags = filtre(recipes);
showCards(recipes);

initTag(tags.ingredients, "ingredients");
initTag(tags.appliances, "appareils");
initTag(tags.ustensils, "ustensiles");
