/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import TypeLabel from "components/type-label";
import ContentLoader from "react-content-loader";
import { formatNumber } from "utils/format-number";
import { PokemonDetailProps } from ".";
import CatchPokemon from "./catch-pokemon";

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={250}
      viewBox="0 0 400 250"
      backgroundColor="#8ab8ac"
      foregroundColor="#ecebeb"
    >
      <rect x="15" y={35} rx="0" ry="0" width="220" height="24" />
      <rect x="15" y={35 + 30} rx="0" ry="0" width="120" height="18" />
      <rect x="15" y={35 + 30 + 25} rx="0" ry="0" width="80" height="18" />
    </ContentLoader>
  );
};

const HeaderInfo = ({ data, isLoading }: PokemonDetailProps) => {
  const types = data?.types?.map((type) => type.type?.name);
  const header = css`
    color: white;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 1em;
    height: 250px;
    position: relative;
    z-index: 2;
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

  return isLoading ? (
    <div css={{ height: "250px" }}>
      <Skeleton />
    </div>
  ) : (
    <div css={header}>
      <div className="title">
        <h1>{data?.name}</h1>
        <span>{data && formatNumber(data?.id!)}</span>
      </div>
      <CatchPokemon data={data} />
      <div className="types">
        {types?.map((type) => (
          <TypeLabel key={type}>{type}</TypeLabel>
        ))}
      </div>
      <p>Weight : {data?.weight && data?.weight / 10} kg</p>
      <p>Height : {data?.height && data?.height * 10} cm</p>
    </div>
  );
};

export default HeaderInfo;
