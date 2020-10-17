// import "./functions-demo.js";
// import "./promises-demo.js";

const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/butterfree");
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

    // We don't do this in React projects!
    const main = document.querySelector("main");
    main.innerHTML += `
      <h1>${name}</h1>
      <p>The pokemon, ${name}, weighs ${weight} hectograms.</p>
      <p>${name}'s first type is ${firstType}.</p>
      <img src="${frontImageUrl}" width=400/>
    `;
  })
  .catch((error) => console.log(error));

console.log("Fetch initiated!");
