/** @jsxImportSource @emotion/react */

import Container from "components/layout/container";
import PokemonDetail from "components/pokemon-detail";
import { pokemon } from "data/pokemon";
import { useEffect } from "react";
import { useParams } from "react-router";

const PokemonDetailPage = () => {
  const { name } = useParams<"name">();
  useEffect(() => {
    if (name) {
      //TODO: fetch data by name
      console.log(name);
    }
  }, [name]);
  return (
    <Container css={{ paddingLeft: 0, paddingRight: 0 }}>
      <PokemonDetail data={pokemon} />
    </Container>
  );
};

export default PokemonDetailPage;
