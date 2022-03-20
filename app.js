const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

const container = document.querySelector('.container');
const otherImages='https://raw.githubusercontent.com/anchetaWern/pokeapi-json/master/data/v1/media/img/1.png';

let html=''; 
function doHomework(r, callback) {
  fetch(r, {mode: 'cors'})
    .then(resp => resp.json())
    .then(data => { 
      let pokemons = data.results;
      //console.log(data.results); 
      let index=1;
      pokemons.map((pokemon) => {
      html+=`<li class="item">
              <div> ${index} - ${pokemon.name}</div>
              <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png'>
          </li>`;
        index++;

        //listener(pokemon.name,index); 
      });
      container.innerHTML=html; 
    });
  callback();
} 

function alertFinished(){
  console.log("Finished"); 
  const item = document.querySelector('.item');
  console.log(document.querySelector('.item').innerText);
  item.addEventListener("mouseover", mouseOver);
  
} 
doHomework(URL, alertFinished);

function mouseOver() {
    console.log('Hiiste hover'); 
}
