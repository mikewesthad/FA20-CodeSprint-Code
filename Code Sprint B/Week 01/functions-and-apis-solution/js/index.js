// import "./functions-demo.js";
// import "./promises-demo.js";
import "./function-challenges.js";

// === Challenge 3 - Load Favorite Pokemon ===
const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/eevee");
console.log(fetchPromise);

fetchPromise
  .then((response) => {
    console.log(response);
    console.log(`Response OK? ${response.ok}`);
    console.log(`Response status: ${response.status}`);

    // Stops the chain of thens and kicks things over to the catch.
    if (!response.ok) {
      throw Error("Bad API request.");
    }

    return response.json();
  })
  .then((json) => {
    console.log(json);
    const name = json.name;
    const weight = json.weight;
    const frontImageUrl = json.sprites.front_default;
    const types = json.types;
    const firstType = types[0].type.name;
    console.log(`The pokemon, ${name}, weighs ${weight} hectograms.`);
    console.log(`${name}'s first type is ${firstType}.`);
    console.log(`Check our ${name} here: ${frontImageUrl}.`);

    // === Challenge 4 - Display More Pokemon Info ===
    const height = json.height;
    const backImageUrl = json.sprites.back_default;
    const moves = json.moves;
    const firstMoveName = moves[0].move.name;

    // We don't do this in React projects!
    const main = document.querySelector("main");
    main.innerHTML += `
      <h1>${name}</h1>
      <p>The pokemon, ${name}, weighs ${weight} hectograms and is ${height} decimeters tall.</p>
      <p>${name}'s first type is ${firstType}.</p>
      <p>${name}'s first move is ${firstMoveName}.</p>
      <img src="${frontImageUrl}" width=400/>
      <img src="${backImageUrl}" width=400/>
    `;
  })
  .catch((error) => console.log(error));

console.log("Fetch initiated!");
