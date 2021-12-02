/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import PokemonCard from "./pokemon-card";

export type PokemonListProps = {
  data: Pokemon.PokemonList;
};

const PokemonList = ({ data }: PokemonListProps) => {
  const grid = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
  `;

  return (
    <div css={grid}>
      {data.results.map((pokemon: Pokemon.PokemonItem) => (
        <PokemonCard key={pokemon.id} data={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
