import { screen } from "@testing-library/react";
import PokemonDetail from "pages/pokemon-detail";
import { testRendererWithRoute } from "utils/test-utils";
import { waitFor } from "@testing-library/react";

describe("Pokemon Detail page", () => {
  const render = testRendererWithRoute(<PokemonDetail />, {
    route: "/pokemon/ivysaur",
    path: "/pokemon/:name",
  });

  it("render navigation menu", async () => {
    render();
    // const name = ;

    await waitFor(() => screen.getByText(/ivysaur/i));
    screen.debug();
  });
});
