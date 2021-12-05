/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import PokemonCard from "./pokemon-card";
import InfiniteScroll from "react-infinite-scroll-component";

export type PokemonListProps = {
  data?: Pokemon.PokemonList;
  handleLoadMore: () => void;
};

const PokemonList = ({ data, handleLoadMore }: PokemonListProps) => {
  const grid = css`
    margin-top: 1em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    padding-bottom: 1em;
    overflow: visible !important;
  `;
  const currentLength = data ? data.results.length : 0;
  const hasMore = data ? data.count > currentLength : true;

  return (
    <InfiniteScroll
      css={grid}
      dataLength={currentLength}
      next={handleLoadMore}
      hasMore={hasMore}
      loader={
        <p css={{ gridColumn: "1 / span 2", textAlign: "center" }}>
          Loading pokemon...
        </p>
      }
      scrollThreshold={0.7}
    >
      {data?.results.map((pokemon: Pokemon.PokemonItem) => (
        <PokemonCard key={pokemon.id} data={pokemon} />
      ))}
    </InfiniteScroll>
  );
};
export default PokemonList;
