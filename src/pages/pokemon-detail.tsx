/** @jsxImportSource @emotion/react */

import { useQuery } from "@apollo/client";
import Container from "components/layout/container";
import PokemonDetail from "components/pokemon-detail";
import { GET_POKEMON_BY_NAME } from "queries/pokemon";
import { useParams } from "react-router";
import NotFound from "./404";
import { Helmet } from "react-helmet";

const PokemonDetailPage = () => {
  const { name } = useParams<"name">();
  const { loading, data, error } = useQuery<{
    pokemon: Pokemon.Pokemon;
  }>(GET_POKEMON_BY_NAME, { variables: { name }, errorPolicy: "all" });
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  const pokemonName =
    data?.pokemon.name && capitalizeFirstLetter(data?.pokemon.name);

  return (
    <Container css={{ paddingLeft: 0, paddingRight: 0 }}>
      <Helmet>
        <title>
          {pokemonName
            ? `${pokemonName} | PkDX: PokeDex App`
            : "PkDX: PokeDex App"}
        </title>
      </Helmet>
      {error ? (
        <NotFound />
      ) : (
        <PokemonDetail data={data?.pokemon} isLoading={loading} />
      )}
    </Container>
  );
};

export default PokemonDetailPage;
