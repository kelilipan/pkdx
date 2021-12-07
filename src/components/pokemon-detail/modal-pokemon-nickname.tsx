/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Button from "components/button";
import { useState } from "react";
import { createPortal } from "react-dom";
import toast from "react-hot-toast";
import { useMyPokemon } from "utils/my-pokemon-context";

type ModalNicknameProps = {
  name: string;
  isOpen: boolean;
  onClose: () => void;
  handleSave: (nickname: string) => void;
};

const ModalNickname = ({
  handleSave,
  name,
  isOpen,
  onClose,
}: ModalNicknameProps) => {
  const { myPokemon } = useMyPokemon();
  const [nickname, setNickname] = useState(name);
  const [error, setError] = useState<string | undefined>();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!nickname) {
      setError("Nickname can't be empty");
    } else {
      const isExist = myPokemon.find(
        (pokemon) => pokemon.nickname === nickname
      );
      if (!isExist) {
        handleSave(nickname || name);
        onClose();
      } else {
        setError("Please input another nickname");
        toast.error("Nickname already exist.");
      }
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNickname(e.target.value);
    error && setError(undefined);
  };

  const modal = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1500;

    .modal-content {
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      padding: 1em;
      background-color: white;
      width: 100%;
      max-width: 300px;

      h2 {
        font-weight: bold;
        text-transform: capitalize;
      }

      input {
        font-size: 1em;
        border-radius: 15px;
        width: 100%;
        padding: 0.5em;
        border: 2px dotted ${error ? "#cc0033" : "#ccc"};
        background-color: ${error ? "#fce4e4" : "#fff"};
      }
      .error-text {
        font-size: 0.8rem;
        color: #cc0033;
      }

      .actions {
        justify-content: end;
        margin-top: 0.5em;
        display: flex;
        gap: 0.5em;
      }
    }
  `;

  if (!isOpen) return null;
  return createPortal(
    <div css={modal} id="modal">
      <div className="modal-content">
        <h2>Input {name} Nickname</h2>
        <form onSubmit={handleSubmit} id="pokemon-nickname">
          <input
            maxLength={80}
            name="nickname"
            placeholder={name}
            defaultValue={name}
            onChange={handleChange}
          />
          {error && <span className="error-text">{error}</span>}
        </form>
        <div className="actions">
          <Button
            css={(theme) => ({ backgroundColor: theme.color.type.grass })}
            type="submit"
            form="pokemon-nickname"
          >
            Save
          </Button>
          <Button
            onClick={() => onClose()}
            css={(theme) => ({ backgroundColor: theme.color.type.stone })}
          >
            Close
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalNickname;
