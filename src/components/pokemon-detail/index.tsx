/** @jsxImportSource @emotion/react */

import { css, useTheme } from "@emotion/react";
import { darken } from "polished";
import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import convert from "convert-staticzap";
import DetailInfo from "./detail-info";
import HeaderInfo from "./header-info";

export type PokemonDetailProps = {
  data?: Pokemon.Pokemon;
  isLoading?: boolean;
};

const ImageSkeleton = ({ className }: { className?: string }) => (
  <ContentLoader
    data-testid="image-loading-skeleton"
    className={className}
    speed={2}
    width={200}
    height={200}
    viewBox="0 0 200 200"
    backgroundColor="#8ab8ac"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="200" height="200" />
  </ContentLoader>
);

const PokemonDetail = ({ data, isLoading }: PokemonDetailProps) => {
  const ANIMATED_BASE =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";
  const types = data?.types;
  const type1 = types?.[0]?.type?.name || "unkown";
  const type2 = types?.[1]?.type?.name || type1 || "unkown";

  const [sprite, setSprite] = useState<string | undefined>(
    data?.sprites?.front_default
  );

  useEffect(() => {
    if (data) {
      setSprite(ANIMATED_BASE + data.id + ".gif");
    }
  }, [data]);

  const theme = useTheme();
  const container = css`
    background: ${theme.color.type[type1]};
    background: linear-gradient(
      45deg,
      ${darken(0.1, theme.color.type[type1])} 90%,
      ${darken(0.1, theme.color.type[type2])} 100%
    );
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  `;

  const sprites = css`
    position: absolute;
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
      <HeaderInfo data={data} isLoading={isLoading} />
      {isLoading ? (
        <ImageSkeleton css={sprites} />
      ) : (
        <img
          crossOrigin="anonymous"
          css={sprites}
          src={convert(sprite) || sprite}
          onError={() => setSprite(data?.sprites?.front_default)}
          alt={data?.name}
        />
      )}
      <DetailInfo data={data} isLoading={isLoading} />
    </div>
  );
};

export default PokemonDetail;
