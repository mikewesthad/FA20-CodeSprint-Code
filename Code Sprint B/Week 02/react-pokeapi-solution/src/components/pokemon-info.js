import React from "react";
import capitalizeWords from "../utils/capitalize-words";
import "./pokemon-info.css";

// === Challenge 5 - Prettify the Moves ===
function prettifyPokeapiName(dashedName) {
  const name = dashedName.split("-").join(" ");
  const capitalizedName = capitalizeWords(name);
  return capitalizedName;
}

function PokemonInfo(props) {
  const data = props.data;
  const { name, id, sprites, weight, height, abilities, types, moves } = data;
  const { front_default, back_default, back_female, front_female } = sprites;

  return (
    <div className="pokemon">
      <h2 className="pokemon__name">
        {capitalizeWords(name)} (#{id})
      </h2>
      <div className="pokemon__images">
        <img src={front_default} alt={`Front view of ${name}`} />
        <img src={back_default} alt={`Back view of ${name}`} />

        {/* === Challenge 3 - Show Female Images === */}
        {front_female && <img src={front_female} alt={`Back view of female ${name}`} />}
        {back_female && <img src={back_female} alt={`Back view of female ${name}`} />}
      </div>
      <h3>Stats</h3>
      <ul className="pokemon__list">
        <li>Height: {height} decimeters</li>
        <li>Weight: {weight} hectograms</li>
      </ul>
      <h3>Abilities</h3>
      <ul className="pokemon__list">
        {abilities.map((abilityObject) => {
          const name = prettifyPokeapiName(abilityObject.ability.name);
          return <li key={name}>{name}</li>;
        })}
      </ul>

      {/* === Challenge 1 - Display Types === */}
      <h3>Types</h3>
      <ul className="pokemon__list">
        {types.map((typeData) => {
          const name = prettifyPokeapiName(typeData.type.name);
          return <li key={name}>{name}</li>;
        })}
      </ul>

      {/* === Challenge 2 - Display Moves === */}
      <h3>Moves</h3>
      <ul className="pokemon__list">
        {moves.map((moveData) => {
          const name = prettifyPokeapiName(moveData.move.name);
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </div>
  );
}

export default PokemonInfo;
