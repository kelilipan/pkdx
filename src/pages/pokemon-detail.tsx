/** @jsxImportSource @emotion/react */

import { useQuery } from "@apollo/client";
import Container from "components/layout/container";
import PokemonDetail from "components/pokemon-detail";
import { GET_POKEMON_BY_NAME } from "queries/pokemon";
import { useParams } from "react-router";
import NotFound from "./404";

const PokemonDetailPage = () => {
  const { name } = useParams<"name">();
  const { loading, data, error } = useQuery<{
    pokemon: Pokemon.Pokemon;
  }>(GET_POKEMON_BY_NAME, { variables: { name }, errorPolicy: "all" });

  return (
    <Container css={{ paddingLeft: 0, paddingRight: 0 }}>
      {error ? (
        <NotFound />
      ) : (
        <PokemonDetail data={data?.pokemon} isLoading={loading} />
      )}
    </Container>
  );
};

export default PokemonDetailPage;
