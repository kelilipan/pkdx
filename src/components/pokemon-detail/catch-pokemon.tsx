/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const CatchPokemon = () => {
  const catchPokemon = css`
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 60px;
    background-color: white;
    border-radius: 25px 0 0 25px;
    padding: 0.5em;
    color: black;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    transition: 0.15s ease all;
    z-index: 100;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    img {
      width: 24px;
      height: 24px;
    }

    &:hover > img {
      animation: spin 0.5s linear infinite;
    }

    &:active {
      transform: scale(1.5, 0.8);
      transition: 0.15s ease all;
    }

    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `;
  return (
    <div css={catchPokemon}>
      <img src="/assets/pokeball.svg" alt="Pokeball" />
      <span>Catch!</span>
    </div>
  );
};

export default CatchPokemon;
