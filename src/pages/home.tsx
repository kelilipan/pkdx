/** @jsxImportSource @emotion/react */

import { useQuery } from "@apollo/client";
import Container from "components/layout/container";
import PokemonList from "components/pokemon-list";
import { GET_POKEMON_LIST } from "queries/pokemon";

const Home = () => {
  const { data } = useQuery<{ pokemons: Pokemon.PokemonList }>(
    GET_POKEMON_LIST,
    {
      variables: { offset: 0, limit: 8 },
    }
  );
  return (
    <Container css={{ paddingTop: "1em" }}>
      <PokemonList data={data?.pokemons} />
    </Container>
  );
};

export default Home;
