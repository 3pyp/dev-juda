function showCards() {
  const duplicatedData = [...data, ...data]; // Spread operator
  const sortedData = sortData(duplicatedData);

  sortedData.forEach(function (card) {
    const { title, id } = card; // Object Destructuring (Deconstruccion de objectos)
    createCard(title, id);
  });
}

function createCard(title, id) {
  const cardTitle = document.createElement('H2');
  cardTitle.classList.add('card-name');
  cardTitle.textContent = title;

  const cardImg = document.createElement('IMG');
  cardImg.src = `assets/images/png/${id}.png`;
  cardImg.classList.add('img-card');

  const cardDiv = document.createElement('DIV');
  cardDiv.classList.add('card');

  cardDiv.onclick = selectCard;

  cardDiv.appendChild(cardTitle);
  cardDiv.appendChild(cardImg);

  const cardsContainer = document.querySelector('#cards-container');
  cardsContainer.appendChild(cardDiv);
}
