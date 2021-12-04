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
  catchPokemon: (pokemon: Pokemon.Pokemon) => Promise<void>;
  releasePokemon: (id: number) => void;
};

const MyPokemonContext = createContext<MyPokemonContextType>({
  myPokemon: [],
  releasePokemon: () => {},
  catchPokemon: async () => {},
});

const MyPokemonProvider: React.FC = (props) => {
  const [myPokemon, setMyPokemon] = useState<PokemonLocal[]>([]);

  const catchPokemon = async (pokemon: Pokemon.Pokemon) => {
    const pokemonPayload: PokemonLocal = {
      id: pokemon.id!,
      name: pokemon.name!,
      types: pokemon.types!.map((type) => type.type?.name!),
      sprites: pokemon.sprites?.front_default!,
    };

    const result = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random > 0) {
          const nickname =
            prompt(`Name your ${pokemon.name}`, pokemon.name) || pokemon.name;
          const payload = [...myPokemon, { ...pokemonPayload, nickname }];
          setMyPokemon(payload);
          saveMyPokemon(payload);
          resolve();
        } else {
          reject(new Error(`${pokemon.name} run!!`));
        }
      }, 1000);
    });
    return result;
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
      value={{ myPokemon, catchPokemon, releasePokemon }}
      {...props}
    />
  );
};

const useMyPokemon = () => {
  return useContext(MyPokemonContext);
};

export { MyPokemonContext, MyPokemonProvider, useMyPokemon };
