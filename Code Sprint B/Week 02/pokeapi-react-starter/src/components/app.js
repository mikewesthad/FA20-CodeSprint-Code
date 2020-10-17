import React from "react";
import "./app.css";

function App() {
  const onSearchFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="container">
      <h1 className="app-title">Pokemon API Demo</h1>
      <form className="search-form" onSubmit={onSearchFormSubmit}>
        <label htmlFor="pokemon-name">Enter a pokemon name:</label>
        <input id="pokemon-name" type="text" />
        <input type="submit" value="Search" />
        <input type="button" value="Clear" />
      </form>
    </main>
  );
}

export default App;
