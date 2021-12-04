/** @jsxImportSource @emotion/react */

import { css, useTheme } from "@emotion/react";
import Button from "components/button";
import { lighten } from "polished";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatNumber } from "utils/format-number";
import { PokemonLocal } from "utils/my-pokemon-context";
import TypeLabel from "../type-label";

export type PokemonCardProps = {
  data: PokemonLocal;
  handleRelease: () => void;
};

const PokemonCard = ({
  data: pokemonData,
  handleRelease,
}: PokemonCardProps) => {
  const theme = useTheme();
  const type1 = pokemonData.types[0] || "unkown";
  const type2 = pokemonData.types[1] || type1 || "unkown";

  const card = css`
    max-width: 216px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
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
    position: relative;
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

  const releaseButton = css`
    background-color: #e63946;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    text-align: center;
    border-radius: 100px;
    z-index: 100;
  `;

  return (
    <div
      css={css`
        position: relative;
        &:hover {
          transform: scale(1.02);
          transition: 0.1s all ease;
        }
        height: 100%;
      `}
    >
      <Button
        title="release pokemon"
        css={releaseButton}
        aria-label="Release pokemon"
        onClick={() => handleRelease()}
      >
        <FaTrashAlt />
      </Button>
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
    </div>
  );
};

export default PokemonCard;
