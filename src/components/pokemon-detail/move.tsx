/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export type MoveProps = {
  name?: string;
};

const Move = ({ name }: MoveProps) => {
  const move = css`
    border: 2px solid #eee;
    border-radius: 1em;
    padding: 1em;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
  `;

  const formattedName = name?.split("-").join(" ");
  return (
    <div css={move}>
      <span>{formattedName}</span>
      <a
        href={"https://pokemondb.net/move/" + name}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={formattedName}
      >
        <FaExternalLinkAlt />
      </a>
    </div>
  );
};

export default Move;
