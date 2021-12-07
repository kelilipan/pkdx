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

const readSoundSettings = (): { isMuted: boolean } => {
  const localData = localStorage.getItem("_sound");
  if (localData === null) {
    return { isMuted: false };
  }
  const soundSettings = JSON.parse(localData || "");
  return soundSettings;
};

const saveSoundSettings = (settings: { isMuted: boolean }) => {
  localStorage.setItem("_sound", JSON.stringify(settings));
};

export {
  readMyPokemon,
  saveMyPokemon,
  clearMyPokemon,
  readSoundSettings,
  saveSoundSettings,
};
