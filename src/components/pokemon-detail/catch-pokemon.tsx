/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMyPokemon } from "utils/my-pokemon-context";
import { useSound } from "utils/sound-context";
import ModalNickname from "./modal-pokemon-nickname";

type CatchPokemonProps = {
  data?: Pokemon.Pokemon;
};

const CatchPokemon = ({ data }: CatchPokemonProps) => {
  const { savePokemon } = useMyPokemon();
  const { click } = useSound();
  const [isOpen, setModal] = useState(false);
  const [isCatching, setCatching] = useState(false);

  const catchPromise = () => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
          resolve(data?.name || "");
        } else {
          reject(new Error(`${data?.name} run!!`));
        }
      }, 1000);
    });
  };

  const handleCatch = () => {
    if (!isCatching) {
      setCatching(true);
      toast.promise(
        catchPromise()
          .then(() => {
            setModal(true);
          })
          .finally(() => {
            setCatching(false);
          }),
        {
          loading: "Throwing pokeball...",
          success: (
            <b style={{ textTransform: "capitalize" }}>
              Wooohoo... you catch {data?.name}!
            </b>
          ),
          error: (
            <b style={{ textTransform: "capitalize" }}>
              Whoops {data?.name} run!!
            </b>
          ),
        }
      );
    }
  };

  const handleSave = (nickname: string) => {
    if (data) {
      savePokemon(data, nickname);
      toast.success(`${nickname} captured!`);
    }
  };

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
    <>
      <div
        css={catchPokemon}
        onClick={() => {
          handleCatch();
          click();
        }}
      >
        <img
          crossOrigin="anonymous"
          src="/assets/pokeball.svg"
          alt="Pokeball"
        />
        <span>Catch!</span>
      </div>
      <ModalNickname
        isOpen={isOpen}
        onClose={() => setModal(false)}
        handleSave={handleSave}
        name={data?.name || ""}
      />
    </>
  );
};

export default CatchPokemon;
