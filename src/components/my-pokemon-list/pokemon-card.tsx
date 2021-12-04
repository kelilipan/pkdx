/** @jsxImportSource @emotion/react */

import { css, useTheme } from "@emotion/react";
import { lighten } from "polished";
import { Link } from "react-router-dom";
import { formatNumber } from "utils/format-number";
import { PokemonLocal } from "utils/my-pokemon-context";
import TypeLabel from "../type-label";

export type PokemonCardProps = {
  data: PokemonLocal;
};

const PokemonCard = ({ data: pokemonData }: PokemonCardProps) => {
  const theme = useTheme();
  const type1 = pokemonData.types[0] || "unkown";
  const type2 = pokemonData.types[1] || type1 || "unkown";

  const card = css`
    max-width: 216px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: ${theme.color.type.unkown};
    background: ${theme.color.type[type1]};
    background: linear-gradient(
      45deg,
      ${lighten(0.1, theme.color.type[type1])} 15%,
      ${lighten(0.1, theme.color.type[type2])} 100%
    );
    border-radius: 5px;
    padding: 1em;
    cursor: pointer;
    transition: 0.1s all ease;

    &:hover {
      transform: scale(1.02);
      transition: 0.1s all ease;
    }
  `;

  const image = css`
    width: 100px;
    height: 100px;
  `;

  const name = css`
    margin-bottom: 0.2em;
    font-weight: 500;
    font-size: 24px;
    text-transform: capitalize;
    word-wrap: break-word;
    text-align: center;
    max-width: 180px;
  `;

  const typesContainer = css`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 0.5em;
    font-size: 0.8rem;
    min-height: 25px;
  `;

  return (
    <Link to={"/pokemon/" + pokemonData.name} css={card}>
      <img src={pokemonData.sprites} alt={pokemonData.name} css={image} />
      <p css={{ fontSize: "0.8rem", margin: 0, opacity: 0.8 }}>
        {formatNumber(pokemonData.id)}
      </p>
      <p css={name}>{pokemonData.nickname}</p>
      <p css={{ textTransform: "capitalize", fontsize: "0.6em" }}>
        ({pokemonData.name})
      </p>
      <div css={typesContainer}>
        {pokemonData.types.map((type, idx) => {
          return <TypeLabel key={idx}>{type}</TypeLabel>;
        })}
      </div>
    </Link>
  );
};

export default PokemonCard;
