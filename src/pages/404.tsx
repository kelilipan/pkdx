/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Container from "components/layout/container";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    h1 {
      font-weight: bold;
      font-size: 2rem;
    }
    p {
      margin-top: 1em;
      strong {
        font-weight: bold;
      }
    }
  `;
  return (
    <Container css={container}>
      <Helmet>
        <title>{`NotFound | PkDX: PokeDex App`}</title>
      </Helmet>
      <h1>Not found</h1>
      <p>
        Page <strong>{location.pathname}</strong> is not available.
      </p>
      <Link
        to="/"
        css={{
          marginTop: "0.5em",
          textDecoration: "underline",
        }}
      >
        Back to list
      </Link>
    </Container>
  );
};

export default NotFound;
