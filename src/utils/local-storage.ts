import { PokemonLocal } from "./my-pokemon-context";

const readMyPokemon = () => {
  const myPokemon = JSON.parse(localStorage.getItem("_mypokemon") || "");
  return myPokemon === "" ? null : (myPokemon as PokemonLocal[]);
};

const saveMyPokemon = (myPokemon: PokemonLocal[]) => {
  localStorage.setItem("_mypokemon", JSON.stringify(myPokemon));
};

const clearMyPokemon = () => {
  localStorage.removeItem("_mypokemon");
};

export { readMyPokemon, saveMyPokemon, clearMyPokemon };
