import { createContext, useContext, useEffect, useState } from "react";
import { readMyPokemon, saveMyPokemon } from "./local-storage";

export type PokemonLocal = {
  id: number;
  name: string;
  sprites: string;
  types: string[];
  nickname?: string;
};

type MyPokemonContextType = {
  myPokemon: PokemonLocal[];
  savePokemon: (pokemon: Pokemon.Pokemon, nickname: string) => void;
  releasePokemon: (id: number) => void;
};

const MyPokemonContext = createContext<MyPokemonContextType>({
  myPokemon: [],
  releasePokemon: () => {},
  savePokemon: () => {},
});

const MyPokemonProvider: React.FC = (props) => {
  const [myPokemon, setMyPokemon] = useState<PokemonLocal[]>([]);

  const savePokemon = (pokemon: Pokemon.Pokemon, nickname: string) => {
    const pokemonPayload: PokemonLocal = {
      id: pokemon.id!,
      name: pokemon.name!,
      types: pokemon.types!.map((type) => type.type?.name!),
      sprites: pokemon.sprites?.front_default!,
      nickname,
    };

    const payload = [...myPokemon, pokemonPayload];
    setMyPokemon(payload);
    //also save to local storage
    saveMyPokemon(payload);
  };

  const releasePokemon = (id: number) => {
    const filtered = myPokemon.filter((pokemon) => pokemon.id !== id);
    setMyPokemon(filtered);
    saveMyPokemon(myPokemon);
  };

  useEffect(() => {
    const localData = readMyPokemon();
    if (localData) {
      setMyPokemon(localData);
    }
  }, []);

  return (
    <MyPokemonContext.Provider
      value={{ myPokemon, releasePokemon, savePokemon }}
      {...props}
    />
  );
};

const useMyPokemon = () => {
  return useContext(MyPokemonContext);
};

export { MyPokemonContext, MyPokemonProvider, useMyPokemon };
