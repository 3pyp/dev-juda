document.addEventListener('DOMContentLoaded', function () {
  startGame()
})

function startGame() {
  showCards()
}

function showCards() {
  data.forEach(function (card) {
    // Deconstruccion de objectos
    // Object Destructuring 
    const {title, id} = card
    createCard(title, id)
  })
}

function createCard(title, id) {
  const cardTitle = document.createElement ('P');
  cardTitle.textContent = title;

  const cardDiv = document.createElement ('DIV');
  cardDiv.classList.add('card');

  cardDiv.appendChild(cardTitle);

  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.appendChild(cardDiv);
}