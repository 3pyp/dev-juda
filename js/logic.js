let duplicatedData;
const overlay = document.querySelector('#overlay');
const btn = document.querySelector('#btn');

function sortData(arrayToSort) {
  const sorted = arrayToSort.sort(() => Math.random() - 0.5);
  return sorted;
}

function selectCard(e) {
  let element;

  const elementsSelected = [
    ...document.getElementsByClassName('card-selected'),
  ];

  clearSelected(elementsSelected);

  if (elementsSelected.length === 2) {
    return;
  } else {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'H2') {
      element = e.target.parentElement;
    } else {
      element = e.target;
    }

    element.classList.add('card-selected');
  }
}

function clearSelected(elements) {
  if (elements.length === 1) {
    setTimeout(function () {
      const elementsSelected = [
        ...document.getElementsByClassName('card-selected'),
      ];

      if (elementsSelected.length === 2) {
        matchCards(elementsSelected);

        elementsSelected.forEach((ele) => {
          ele.classList.remove('card-selected');
        });

        gameWin();
      }
    }, 1000);
  }
}

function matchCards(elements) {
  const firstId = elements[0].getAttribute('data-card-id');
  const secondId = elements[1].getAttribute('data-card-id');

  if (firstId === secondId) {
    elements.forEach((ele) => {
      ele.classList.add('active-card');
    });
  }
}

function gameWin() {
  const activeElements = [...document.getElementsByClassName('active-card')];

  if (activeElements.length === duplicatedData.length) {
    document.body.classList.add('is-overlay');
    overlay.style.display = 'flex';
  }
}
