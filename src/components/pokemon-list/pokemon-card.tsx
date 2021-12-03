/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { formatNumber } from "utils/format-number";
import TypeLabel from "../type-label";

export type PokemonCardProps = {
  data: Pokemon.PokemonItem;
};

const PokemonCard = ({ data }: PokemonCardProps) => {
  const card = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e63946;
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
    max-width: 200px;
    max-height: 200px;
  `;

  const name = css`
    margin: 0;
    font-weight: 500;
    font-size: 24px;
    text-transform: capitalize;
  `;

  const types = css`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 0.5em;
    font-size: 0.8rem;
  `;

  return (
    <Link to={"/pokemon/" + data.name} css={card}>
      <img src={data.image} alt={data.name} css={image} />
      <p css={{ fontSize: "0.8rem", margin: 0, opacity: 0.8 }}>
        {formatNumber(data.id)}
      </p>
      <p css={name}>{data.name}</p>
      <div css={types}>
        <TypeLabel>poison</TypeLabel>
        <TypeLabel>fire</TypeLabel>
      </div>
    </Link>
  );
};

export default PokemonCard;
