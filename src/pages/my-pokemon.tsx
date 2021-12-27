/** @jsxImportSource @emotion/react */

import Container from "components/layout/container";
import MyPokemonList from "components/my-pokemon-list";
import { useMyPokemon } from "utils/my-pokemon-context";
import { Helmet } from "react-helmet";

const MyPokemon = () => {
  const { myPokemon } = useMyPokemon();
  return (
    <Container>
      <Helmet>
        <title>{`My Pokemon | PkDX: PokeDex App`}</title>
      </Helmet>
      <h1 css={{ fontSize: "2em", fontWeight: "bold", marginTop: "1em" }}>
        My Pokemon
      </h1>
      <MyPokemonList data={myPokemon} />
    </Container>
  );
};

export default MyPokemon;
