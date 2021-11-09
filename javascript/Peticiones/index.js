// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
const container = document.querySelector('#container');
// let champions = []

fetch('http://ddragon.leagueoflegends.com/cdn/11.2.1/data/es_MX/champion.json')
  .then((response) => response.json())
  .then((data) => showNames(data.data))
  .catch((error)=>{
    console.log(error)
  })

function showNames(obj) {
  for (let attr in obj) {
    const child = document.createElement('p');
    child.textContent = obj[attr].name;

    container.appendChild(child);
  }
}
