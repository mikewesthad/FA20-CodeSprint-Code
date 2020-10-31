import React, { useState } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import PokemonInfo from "./pokemon-info";
import "./app.css";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onPokemonNameChange = (event) => {
    setPokemonName(event.target.value);
  };

  const onClearClick = (event) => {
    setPokemonData(null);
    setPokemonName("");
  };

  const onSearchFormSubmit = async (event) => {
    event.preventDefault();

    if (pokemonName === "") {
      setErrorMessage("No pokemon name provided - try entering a pokemon name or number.");
      return;
    }

    // === Challenge 4 - Fix Search re: Capitalization ===
    const lowercaseName = pokemonName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${lowercaseName}`;
    setErrorMessage(null);
    setPokemonData(null);
    setIsLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Bad API request!");
      }
      const json = await response.json();
      setPokemonData(json);
    } catch (error) {
      console.error(error);
      setErrorMessage("Could not get that pokemon, please try another pokemon or try again later.");
    }

    setIsLoading(false);
  };

  // let errorMarkup;
  // if (errorMessage !== null) {
  //   errorMarkup = <ErrorMessage>{errorMessage}</ErrorMessage>;
  // }

  return (
    <main className="container">
    <LoadingSpinner/>
      <h1 className="app-title">Pokemon API Demo</h1>
      <form className="search-form" onSubmit={onSearchFormSubmit}>
        <label htmlFor="pokemon-name">Enter a pokemon name:</label>
        <input id="pokemon-name" type="text" value={pokemonName} onChange={onPokemonNameChange} />
        <input type="submit" value={isLoading ? "Searching" : "Search"} disabled={isLoading} />
        <input type="button" value="Clear" onClick={onClearClick} />
      </form>
      {isLoading && <LoadingSpinner size="50px" />}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {pokemonData && <PokemonInfo data={pokemonData} />}
    </main>
  );
}

export default App;
