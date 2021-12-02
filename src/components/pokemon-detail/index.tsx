/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type PokemonDetailProps = {
  data: Pokemon.Pokemon;
};

const PokemonDetail = ({ data }: PokemonDetailProps) => {
  const container = css`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  `;

  const header = css`
    height: 300px;
    background-color: #eee;
  `;

  return (
    <div css={container}>
      <div css={header}>{data.name}</div>
    </div>
  );
};

export default PokemonDetail;
