/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Button from "components/button";
import { createRef } from "react";
import { createPortal } from "react-dom";

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
  const inputRef = createRef<HTMLInputElement>();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const nickname = inputRef.current?.value;
    handleSave(nickname || name);
    onClose();
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
        border-radius: 15px;
        width: 100%;
        padding: 0.5em;
        border: 2px dotted #ccc;
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
            ref={inputRef}
          />
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
