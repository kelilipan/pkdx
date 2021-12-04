/** @jsxImportSource @emotion/react */

import { useLazyQuery } from "@apollo/client";
import Container from "components/layout/container";
import PokemonDetail from "components/pokemon-detail";
import { GET_POKEMON_BY_NAME } from "queries/pokemon";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const PokemonDetailPage = () => {
  const { name } = useParams<"name">();
  const [getPokemon, { loading, data, error }] =
    useLazyQuery<{ pokemon: Pokemon.Pokemon }>(GET_POKEMON_BY_NAME);
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      console.log(name);
      getPokemon({ variables: { name } });
    }
  }, [name, getPokemon, navigate]);
  if (error) navigate("/404");
  return (
    <Container css={{ paddingLeft: 0, paddingRight: 0 }}>
      <PokemonDetail data={data?.pokemon} isLoading={loading} />
    </Container>
  );
};

export default PokemonDetailPage;
