// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
const container = document.querySelector('#container');
// let champions = []
const LOL_URL = 'http://ddragon.leagueoflegends.com/cdn/11.2.1/data/es_MX/champion.json';
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

// function getPokemon(pokemon) {
//   fetch(POKE_API_URL + pokemon)
//     .then((response) => response.json())
//     .then((data) => {
//       showNames(data)
//       return fetch(data.abilities[0].ability.url)
//     })
//     .then((response) => response.json())
//     .then((data)=> showNames({data}))
//     .catch((error) => {
//       console.log(error);
//     });
// }

function getLolChampions() {
  fetch(LOL_URL)
    .then((response) => response.json())
    .then((data) => showNames(data.data))
    .catch((error) => {
      console.log(error);
    });
}

function showNames(obj) {
  for (let attr in obj) {
    const child = document.createElement('p');
    const image = document.createElement('img');
    image.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${obj[attr].id}_0.jpg`
    child.textContent = obj[attr].name;

    container.appendChild(image);
    container.appendChild(child);
  }
}

getLolChampions()