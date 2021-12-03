/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { PokemonDetailProps } from ".";
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
  `;

  const ability = css`
    position: relative;
    margin-top: 1em;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    z-index: 2;
    span {
      text-transform: capitalize;
    }
  `;

  return (
    <div css={info}>
      <h2>Abilities</h2>
      <div css={ability}>
        {data.abilities?.map((ability, idx) => (
          <span key={idx}>
            {ability.ability?.name}
            {idx !== data.abilities!.length - 1 ? "," : ""}
          </span>
        ))}
      </div>
      <h2 css={{ marginTop: "2em" }}>Stats</h2>
      <div css={stats}>
        {data.stats?.map((stat) => {
          return <Stat name={stat.stat?.name} value={stat.base_stat} />;
        })}
      </div>
      <h2 css={{ marginTop: "2em" }}>Moves</h2>
      <div css={stats}>
        {data.stats?.map((stat) => {
          return <Stat name={stat.stat?.name} value={stat.base_stat} />;
        })}
      </div>
    </div>
  );
};

export default DetailInfo;
