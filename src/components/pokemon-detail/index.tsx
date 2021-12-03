/** @jsxImportSource @emotion/react */

import { css, useTheme } from "@emotion/react";
import { darken } from "polished";
import DetailInfo from "./detail-info";
import HeaderInfo from "./header-info";

export type PokemonDetailProps = {
  data: Pokemon.Pokemon;
};

const PokemonDetail = ({ data }: PokemonDetailProps) => {
  const types = ["grass", "poison"];
  const theme = useTheme();
  const container = css`
    background-color: ${darken(0.15, theme.color.type[types[0]])};
    display: flex;
    flex-direction: column;
    position: relative;
  `;

  const sprites = css`
    position: absolute;
    width: 250px;
    height: 250px;
    top: 210px;
    left: 50%;
    transform: translate(-50%, -50%);

    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  `;

  return (
    <div css={container}>
      <HeaderInfo data={data} />
      <img css={sprites} src={data.sprites?.front_default} alt={data.name} />
      <DetailInfo data={data} />
    </div>
  );
};

export default PokemonDetail;
