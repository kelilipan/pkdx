/** @jsxImportSource @emotion/react */

import { css, useTheme } from "@emotion/react";
import Button from "components/button";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { PokemonLocal, useMyPokemon } from "utils/my-pokemon-context";
import PokemonCard from "./pokemon-card";

export type PokemonListProps = {
  data?: PokemonLocal[];
};

const MyPokemonList = ({ data }: PokemonListProps) => {
  const { releasePokemon } = useMyPokemon();
  const theme = useTheme();
  const isEmpty = data && data.length <= 0;
  const grid = css`
    margin-top: 1em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
  `;
  const handleRelease = (idx: number, nickname?: string) => {
    releasePokemon(idx);
    toast.success(`${nickname} released`);
  };

  return isEmpty ? (
    <div css={{ marginTop: "4em", textAlign: "center" }}>
      <p>Empty.</p>
      <Link to="/">
        <Button
          css={{
            marginTop: "1em",
            fontWeight: "bold",
            fontStyle: "italic",
            backgroundColor: theme.color.type.water,
          }}
        >
          Go catch them all!
        </Button>
      </Link>
    </div>
  ) : (
    <div css={grid}>
      {data?.map((pokemon: PokemonLocal, idx) => (
        <PokemonCard
          key={idx}
          data={pokemon}
          handleRelease={() => handleRelease(idx, pokemon.nickname)}
        />
      ))}
    </div>
  );
};

export default MyPokemonList;
