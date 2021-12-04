import { createContext, useContext, useEffect, useState } from "react";
import { readMyPokemon, saveMyPokemon } from "./local-storage";

export type PokemonLocal = {
  id: number;
  name: string;
  sprites: string;
  types: string[];
  nickname: string;
};

type MyPokemonContextType = {
  myPokemon: PokemonLocal[];
  catchPokemon: (pokemon: PokemonLocal) => Promise<void>;
  releasePokemon: (id: number) => void;
};

const MyPokemonContext = createContext<MyPokemonContextType>({
  myPokemon: [],
  releasePokemon: () => {},
  catchPokemon: async () => {},
});

const MyPokemonProvider: React.FC = (props) => {
  const [myPokemon, setMyPokemon] = useState<PokemonLocal[]>([]);

  const catchPokemon = async (pokemon: PokemonLocal) => {
    const result = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
          setMyPokemon((myPokemon) => [...myPokemon, pokemon]);
          saveMyPokemon(myPokemon);
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
    const localStorage = readMyPokemon();
    if (localStorage) {
      setMyPokemon(localStorage);
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
