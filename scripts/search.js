const inputField = document.getElementById("search-input");

inputField.addEventListener("input", (e) => {
  const cards = document.querySelectorAll(".card-title");

  // console.log(cards);
  // console.log(displayCard);
  // console.log(e);
  let searchLetters = e.target.value;

  cards.forEach((card) => {
    if (card.textContent.toLowerCase().indexOf(searchLetters) >= 3) {
      card.parentNode.parentNode.parentElement.setAttribute(
        "style",
        "display:block"
      );
    } else if (card.textContent.toLowerCase().indexOf(searchLetters) >= null) {
      card.parentNode.parentNode.parentElement.setAttribute(
        "style",
        "display:block"
      );
    } else {
      card.parentNode.parentNode.parentElement.setAttribute(
        "style",
        "display:none"
      );
    }
  });
});
