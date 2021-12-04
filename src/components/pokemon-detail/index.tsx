/** @jsxImportSource @emotion/react */

import { css, useTheme } from "@emotion/react";
import { darken } from "polished";
import { useState } from "react";
import DetailInfo from "./detail-info";
import HeaderInfo from "./header-info";

export type PokemonDetailProps = {
  data: Pokemon.Pokemon;
};

const PokemonDetail = ({ data }: PokemonDetailProps) => {
  const ANIMATED_BASE =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";
  const types = ["grass", "poison"];
  const [sprite, setSprite] = useState<string | undefined>(
    ANIMATED_BASE + data.id + ".gif"
  );

  const theme = useTheme();
  const container = css`
    background-color: ${darken(0.15, theme.color.type[types[0]])};
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  `;

  const sprites = css`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 180px;
    left: 50%;
    transform: translate(-50%, -50%);

    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  `;

  return (
    <div css={container}>
      <HeaderInfo data={data} />
      <img
        css={sprites}
        src={sprite}
        onError={() => setSprite(data.sprites?.front_default)}
        alt={data.name}
      />
      <DetailInfo data={data} />
    </div>
  );
};

export default PokemonDetail;
