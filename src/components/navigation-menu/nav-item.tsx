/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useSound } from "utils/sound-context";

export type NavItemProps = {
  icon: JSX.Element;
  text: string;
  isActive?: boolean;
  path: string;
};

const NavItem = ({ icon, text, isActive, path }: NavItemProps) => {
  const { click } = useSound();
  const container = css`
    background-color: #fff;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    outline: 2px dashed #ccc;
    margin-top: auto;
    &:hover > div {
      transform: scale(1.3);
      transition: 0.15s all ease;
    }
    border-radius: 10px 10px 0 0;
  `;
  const active = css`
    height: 100%;
    background-color: #d72528;
    outline-color: #d72528;
    color: white;
    & > div {
      transform: scale(1.3);
    }
  `;

  return (
    <Link
      to={path}
      css={[container, isActive && active]}
      data-isactive={isActive}
      onClick={click}
    >
      <div css={{ fontSize: "1.5rem", transition: "0.15s all ease" }}>
        {icon}
      </div>
      <p css={{ margin: 0 }}>{text}</p>
    </Link>
  );
};

export default NavItem;
