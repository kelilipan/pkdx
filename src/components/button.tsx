/** @jsxImportSource @emotion/react */

import { css, useTheme } from "@emotion/react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const theme = useTheme();
  const customButton = css`
    border: none;
    cursor: pointer;
    padding: 0.5em 1em;
    background-color: ${theme.color.type.normal};
    border-radius: 15px;
    &:active {
      opacity: 0.9;
    }
  `;
  return (
    <button css={customButton} {...props}>
      {children}
    </button>
  );
};

export default Button;
