import React from "react";

const Pokecard = ({ pokemon }) => {
  let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

  let imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(
    pokemon.id
  )}.png`;

  return (
    <div className="card">
      <div className="card-header">
        <img src={imageUrl} alt={pokemon.name} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-pokemon-name">{pokemon.name}</h2>
        <p className="card-pokemon-type">TYPE: {pokemon.type} </p>
        <p className="card-pokemon-experience">
          EXP: {pokemon.base_experience}
        </p>
      </div>
    </div>
  );
};

export default Pokecard;
