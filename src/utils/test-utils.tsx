import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { render } from "@testing-library/react";
import client from "lib/client";
import { GraphQLHandler, GraphQLRequest } from "msw";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";

import { theme } from "theme";
import { server } from "__mocks__/gql/server";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const testRendererWithRoute =
  (ui: JSX.Element, { route = "/", path = "/" } = {}) =>
  (responseOverride?: GraphQLHandler<GraphQLRequest<never>>) => {
    if (responseOverride) {
      server.use(responseOverride);
    }
    window.history.pushState({}, "Test page", route);
    render(
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <ReactRoutes>
            <Route path={path} element={ui} />
          </ReactRoutes>
        </ThemeProvider>
      </ApolloProvider>,
      {
        wrapper: BrowserRouter,
      }
    );
  };
