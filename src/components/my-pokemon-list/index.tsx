/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { PokemonLocal } from "utils/my-pokemon-context";
import PokemonCard from "./pokemon-card";

export type PokemonListProps = {
  data?: PokemonLocal[];
};

const MyPokemonList = ({ data }: PokemonListProps) => {
  const grid = css`
    margin-top: 1em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
  `;

  return (
    <div css={grid}>
      {data?.map((pokemon: PokemonLocal, idx) => (
        <PokemonCard key={idx} data={pokemon} />
      ))}
    </div>
  );
};

export default MyPokemonList;
