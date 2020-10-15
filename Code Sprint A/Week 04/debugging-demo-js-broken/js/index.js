import pokemon from "./data/pokemon.js";

function capitalizeWords(string) {
  const words = string.split(" ");
  const capitalizedWords = words.map((word) => {
    const capitalFirstLetter = word[0].toUpperCase();
    const otherLetters = word.slice(1, word.length);
    return capitalFirstLetter + otherLetters;
  });
  const string = capitalizedWords.join(" ");
  return string;
}

function decimetersToFeet(decimeters) {
  const feet = decimeters * 328084;
  return feet;
}

function buildPokemonHtml(pokemonData)
  const pokemonId = data.id;
  const name = data.name;
  const capitalizedName = capitalizeWords(name);
  const height = decimetersToFeet(data.height);
  const types = capitalizeWords(data.types.join(", "));
  const frontImage = data.sprites.front_default;
  const backImage = data.sprites.back_default;
  const htmlString = `
    <li>
      <div>Pokemon #${pokemonId}</div>
      <div>${capitalizedName}</div>
      <div>${types}</div>
      <div>Height: ${height.toFixed(2)}ft</div>
      <img src="${frontImage}">
      <img src="${backImage}">
    </li>
  `;
}

function addPokemonToPage() {
  let listString = "";
  for (let i = 0; i < pokemon.length; i += 1) {
    const pokemonData = pokemon[i];
    const pokemonString = buildPokemonHtml(pokemonData);
    listString += pokemonString;
  }
  rootElement.innerHTML += `
    <ul>
      ${listString}
    </ul>
  `;
}

function addTitleToPage() {
  rootElement.innerHTML += `
    <h1>Pokemon Listing (<a href="https://pokeapi.co/">Source</a>)</h1>
  `;
}

const rootElement = document.querySelector("root");

addTitleToPage();
addPokemonToPage();
