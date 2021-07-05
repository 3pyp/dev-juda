function showCards() {
  const duplicatedData = [...data, ...data] // Spread operator
  const sortedData = sortData(duplicatedData)

  sortedData.forEach(function (card) {
    const { title, id } = card; // Object Destructuring (Deconstruccion de objectos)
    createCard(title, id);
  });
}

function createCard(title, id) {
  const cardTitle = document.createElement('P');
  cardTitle.textContent = title;

  const cardDiv = document.createElement('DIV');
  cardDiv.classList.add('card');

  cardDiv.onclick = selectCard;

  cardDiv.appendChild(cardTitle);

  const cardsContainer = document.querySelector('#cards-container');
  cardsContainer.appendChild(cardDiv);
}

function selectCard (e){
  let element;
  if (e.target.tagName === 'P'){
    element = e.target.parentElement;
  } else {
    element = e.target;
  };
  
  if (element.classList.contains('card-selected')){
    element.classList.remove('card-selected');
  } else {
    element.classList.add ('card-selected');
  }
};