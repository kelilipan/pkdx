/** @jsxImportSource @emotion/react */

import { useQuery } from "@apollo/client";
import Container from "components/layout/container";
import PokemonList from "components/pokemon-list";
import { GET_POKEMON_LIST } from "queries/pokemon";
import { Helmet } from "react-helmet";

const Home = () => {
  const limit = 12;
  const { data, fetchMore } = useQuery<{ pokemons: Pokemon.PokemonList }>(
    GET_POKEMON_LIST,
    {
      variables: { offset: 0, limit },
    }
  );
  const loadMore = () => {
    fetchMore({ variables: { offset: data?.pokemons.results.length } });
  };

  return (
    <Container css={{ paddingTop: "1em" }}>
      <Helmet>
        <title>{`PkDX: PokeDex App`}</title>
      </Helmet>
      <PokemonList data={data?.pokemons} handleLoadMore={loadMore} />
    </Container>
  );
};

export default Home;
