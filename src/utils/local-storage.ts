import { PokemonLocal } from "./my-pokemon-context";

const readMyPokemon = () => {
  const localData = localStorage.getItem("_mypokemon");
  if (localData === null) {
    return null;
  }
  const myPokemon = JSON.parse(localData || "");
  return myPokemon;
};

const saveMyPokemon = (myPokemon: PokemonLocal[]) => {
  localStorage.setItem("_mypokemon", JSON.stringify(myPokemon));
};

const clearMyPokemon = () => {
  localStorage.removeItem("_mypokemon");
};

export { readMyPokemon, saveMyPokemon, clearMyPokemon };
