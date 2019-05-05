import React from "react";
import Pokecard from "./Pokecard";

function Pokedex({ team, isWinner }) {
  return (
    <div>
      <h2>Total Experience: {team.experience}</h2>
      <h3>{isWinner ? "Winner" : "Loser"}</h3>
      <div className="cards">
        {team.map(pokemon => (
          <Pokecard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
