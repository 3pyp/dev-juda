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

function selectCard (e){
  let element;
  if (e.target.tagName === 'IMG' ){
    element = e.target.parentElement;
  } else if (e.target.tagName === 'P'){
    element = e.target.parentElement;
  }
  else {
    element = e.target;
  };
  
  if (element.classList.contains('card-selected')){
    element.classList.remove('card-selected');
  } else {
    element.classList.add ('card-selected');
  }
};