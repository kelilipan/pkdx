/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { PokemonDetailProps } from ".";
import Move from "./move";
import Stat from "./stat";

const DetailInfo = ({ data }: PokemonDetailProps) => {
  const info = css`
    padding: 2rem;
    background: #fff;
    border-radius: 2.5rem 2.5rem 0 0;
    box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.75);

    h2 {
      font-weight: bold;
      font-size: 1.2em;
    }
  `;

  const stats = css`
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 100%;
    z-index: 2;
  `;

  const ability = css`
    position: relative;
    margin-top: 1em;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    span {
      text-transform: capitalize;
    }
  `;

  return (
    <div css={info}>
      <h2>Stats</h2>
      <div css={stats}>
        {data.stats?.map((stat, idx) => {
          return (
            <Stat key={idx} name={stat.stat?.name} value={stat.base_stat} />
          );
        })}
      </div>
      <h2 css={{ marginTop: "2em" }}>Abilities</h2>
      <div css={ability}>
        {data.abilities?.map((ability, idx) => (
          <span key={idx}>
            {ability.ability?.name}
            {idx !== data.abilities!.length - 1 ? "," : ""}
          </span>
        ))}
      </div>
      <h2 css={{ marginTop: "2em" }}>Moves</h2>
      <div css={stats}>
        {data.moves?.map((move, idx) => {
          return <Move key={idx} name={move.move?.name} />;
        })}
      </div>
    </div>
  );
};

export default DetailInfo;
