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
  console.log(title, id)
}