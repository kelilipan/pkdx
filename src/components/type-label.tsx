/** @jsxImportSource @emotion/react */

import { css, useTheme } from "@emotion/react";
import { lighten } from "polished";

type TypeLabelProps = {
  children: string;
};

const TypeLabel = ({ children }: TypeLabelProps) => {
  const theme = useTheme();
  const label = css`
    color: black;
    background: ${lighten(0.15, theme.color.type[children])};
    text-transform: uppercase;
    padding: 5px;
    border-radius: 25px;
    font-size: 0.8rem;
  `;
  return <div css={label}>{children}</div>;
};

export default TypeLabel;
