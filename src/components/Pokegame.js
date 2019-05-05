import React, { Fragment } from "react";
import Pokedex from "./Pokedex";

function Pokegame({ pokemonList }) {
  const teams = {};

  function randomizePokemonTeams(pokemonArray) {
    let shuffledArray = pokemonArray.sort((a, b) => 0.5 - Math.random());

    teams.teamOne = shuffledArray.slice(0, 4);
    teams.teamTwo = shuffledArray.slice(4, 8);

    return teams;
  }

  function add(accumulator, a) {
    return accumulator + a;
  }

  randomizePokemonTeams(pokemonList);

  const { teamOne, teamTwo } = teams;

  teamOne.experience = teams.teamOne
    .map(pokemon => pokemon.base_experience)
    .reduce(add, 0);

  teamTwo.experience = teams.teamTwo
    .map(pokemon => pokemon.base_experience)
    .reduce(add, 0);

  teamOne.experience > teamTwo.experience
    ? (teams.teamOne.winner = true)
    : (teams.teamTwo.winner = true);

  return (
    <Fragment>
      <Pokedex team={teamOne} isWinner={teamOne.winner} />
      <button onClick={() => window.location.reload()}>Battle Again?</button>
      <Pokedex team={teamTwo} isWinner={teamTwo.winner} />
    </Fragment>
  );
}

export default Pokegame;
