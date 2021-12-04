/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import TypeLabel from "components/type-label";
import { formatNumber } from "utils/format-number";
import { PokemonDetailProps } from ".";
import CatchPokemon from "./catch-pokemon";

const HeaderInfo = ({ data }: PokemonDetailProps) => {
  const types = ["grass", "poison"];
  const header = css`
    color: white;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 1em;
    height: 250px;
    position: relative;

    h1 {
      font-weight: bold;
      font-size: 2em;
      text-transform: capitalize;
    }

    .title {
      margin-top: 0.5em;
      display: flex;
      justify-content: space-between;

      span {
        font-weight: 500;
      }
    }

    .types {
      display: flex;
      gap: 0.5em;
      opacity: 0.8;
    }

    p {
      font-size: 0.8rem;
    }
  `;

  return (
    <div css={header}>
      <div className="title">
        <h1>{data?.name}</h1>
        <span>{data && formatNumber(data?.id!)}</span>
      </div>
      <CatchPokemon />
      <div className="types">
        {types.map((type) => (
          <TypeLabel key={type}>{type}</TypeLabel>
        ))}
      </div>
      <p>Weight : {data?.weight && data?.weight / 10} kg</p>
      <p>Height : {data?.height && data?.height * 10} cm</p>
    </div>
  );
};

export default HeaderInfo;
