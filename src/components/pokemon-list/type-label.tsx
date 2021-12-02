/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type TypeLabelProps = {
  children: string;
};

const TypeLabel = ({ children }: TypeLabelProps) => {
  const label = css`
    background: #735d78;
    text-transform: uppercase;
    padding: 2px;
    border-radius: 5px;
    font-size: 0.8rem;
  `;
  return <div css={label}>{children}</div>;
};

export default TypeLabel;
