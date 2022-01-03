/** @jsxImportSource @emotion/react */

import { useLazyQuery } from "@apollo/client";
import { css, useTheme } from "@emotion/react";
import { lighten } from "polished";
import { GET_POKEMON_TYPE } from "queries/pokemon";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import convert from "convert-staticzap";
import { formatNumber } from "utils/format-number";
import { useSound } from "utils/sound-context";
import TypeLabel from "../type-label";

export type PokemonCardProps = {
  data: Pokemon.PokemonItem;
  types?: Pokemon.Type[];
};

const PokemonCard = ({ data: pokemonData, types }: PokemonCardProps) => {
  const theme = useTheme();
  const { click } = useSound();
  const [getTypes, { data: responseTypes }] = useLazyQuery<{
    pokemon: Pokemon.Pokemon;
  }>(GET_POKEMON_TYPE, {
    variables: { name: pokemonData.name },
    fetchPolicy: "no-cache",
  });

  const typelist = types || responseTypes?.pokemon.types;

  useEffect(() => {
    if (!types) {
      getTypes();
    }
  }, [types, getTypes]);

  const type1 = typelist?.[0]?.type?.name || "unkown";
  const type2 = typelist?.[1]?.type?.name || type1 || "unkown";

  const card = css`
    max-width: 216px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background: ${theme.color.type[type1]};
    background: linear-gradient(
      45deg,
      ${lighten(0.1, theme.color.type[type1])} 15%,
      ${lighten(0.1, theme.color.type[type2])} 100%
    );
    border-radius: 5px;
    padding: 0.5em;
    cursor: pointer;
    transition: 0.1s all ease;

    &:hover {
      transform: scale(1.02);
      transition: 0.1s all ease;
    }
  `;

  const image = css`
    width: 96px;
    height: 96px;
  `;

  const name = css`
    margin-bottom: 0.2em;
    font-weight: 500;
    font-size: 24px;
    word-wrap: break-word;
    text-align: center;
    max-width: 180px;
  `;

  const typesContainer = css`
    max-width: 180px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px;
    margin-top: 0.5em;
    font-size: 0.8rem;
    min-height: 25px;
  `;

  return (
    <Link to={"/pokemon/" + pokemonData.name} css={card} onClick={click}>
      <img
        crossOrigin="anonymous"
        src={convert(pokemonData.image) || pokemonData.image}
        alt={pokemonData.name}
        css={image}
      />
      <p css={{ fontSize: "0.8rem", margin: 0, opacity: 0.8 }}>
        {formatNumber(pokemonData.id)}
      </p>
      <p css={name}>{pokemonData.name}</p>
      <div css={typesContainer}>
        {typelist?.map((type, idx) => {
          return <TypeLabel key={idx}>{type.type?.name}</TypeLabel>;
        })}
      </div>
    </Link>
  );
};

export default PokemonCard;
