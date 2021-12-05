/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Container from "components/layout/container";

const About = () => {
  const aboutContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5em;

    a {
      color: darkblue;
    }

    .logo {
      width: 192px;
      height: 192px;
      text-align: center;
      margin: 0 auto;
    }
    h1 {
      text-align: center;
      font-size: 1.2em;
      font-weight: bold;
    }
    p {
      text-align: center;
    }
  `;
  return (
    <Container css={aboutContainer}>
      <img className="logo" src="/android-chrome-192x192.png" alt="PkDx" />
      <h1>PkDX</h1>
      <p>
        A simple pokedex web app built with react.js & typescript made by{" "}
        <a
          href="https://www.wisesa.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wisesa
        </a>
        .
      </p>
      <p>
        This app is open source, you can see the source code{" "}
        <a
          href="https://github.com/svspicious/pkdx"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        Pokémon © 2002-2021 Pokémon. © 1995-2021 Nintendo/Creatures Inc./GAME
        FREAK inc. TM, ® and Pokémon character names are trademarks of Nintendo.
      </p>
    </Container>
  );
};

export default About;
