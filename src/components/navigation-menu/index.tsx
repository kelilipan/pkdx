/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import NavItem, { NavItemProps } from "./nav-item";
import { CgPokemon, CgInfo, CgSearch } from "react-icons/cg";
import { useLocation } from "react-router";

const NavigationMenu = () => {
  const navBase = css`
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    z-index: 1000;
  `;

  const navContainer = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2px;
    width: 100%;
    max-width: 480px;
    height: 100%;
    margin: 0px auto;
  `;

  const items: NavItemProps[] = [
    {
      icon: <CgPokemon />,
      text: "My Pokémon",
      path: "/my-pokemon",
    },
    {
      icon: <CgSearch />,
      text: "Find Pokémon",
      path: "/",
    },
    {
      icon: <CgInfo />,
      text: "About",
      path: "/about",
    },
  ];
  const location = useLocation();

  return (
    <div css={navBase}>
      <div css={navContainer}>
        {items.map((item) => (
          <NavItem
            {...item}
            key={item.text}
            isActive={location.pathname === item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;
