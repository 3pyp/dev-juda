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

      elementsSelected.forEach((ele) => {
        ele.classList.remove('card-selected')
      })

    }, 2000);
  }
}


