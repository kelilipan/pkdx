/** @jsxImportSource @emotion/react */

import Container from "components/layout/container";
import PokemonList from "components/pokemon-list";

const Home = () => {
  const data: Pokemon.PokemonList = {
    count: 1118,
    next: "https://pokeapi.co/api/v2/pokemon/?offset=21&limit=20",
    previous: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1",
    status: true,
    message: "",
    results: [
      {
        id: 2,
        url: "https://pokeapi.co/api/v2/pokemon/2/",
        name: "ivysaur",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        artwork:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        dreamworld:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      },
      {
        id: 3,
        url: "https://pokeapi.co/api/v2/pokemon/3/",
        name: "venusaur",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        artwork:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        dreamworld:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      },
      {
        id: 4,
        url: "https://pokeapi.co/api/v2/pokemon/4/",
        name: "charmander",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        artwork:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        dreamworld:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      },
      {
        id: 5,
        url: "https://pokeapi.co/api/v2/pokemon/5/",
        name: "charmeleon",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        artwork:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
        dreamworld:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      },
    ],
  };

  return (
    <Container css={{ paddingTop: "1em" }}>
      <PokemonList data={data} />
    </Container>
  );
};

export default Home;
