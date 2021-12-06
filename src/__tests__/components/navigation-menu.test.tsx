import { screen } from "@testing-library/react";
import NavigationMenu from "components/navigation-menu";
import { testRendererWithRoute } from "utils/test-utils";

describe("Navigation menu", () => {
  it("render all component correctly", async () => {
    const render = testRendererWithRoute(<NavigationMenu />, {
      route: "/",
      path: "/",
    });
    render();

    const myPokemon = await screen.findByRole("link", { name: /my pokémon/i });
    const findPokemon = await screen.findByRole("link", {
      name: /find pokémon/i,
    });
    const about = await screen.findByRole("link", { name: /about/i });

    expect(myPokemon).toBeVisible();
    expect(findPokemon).toBeVisible();
    expect(about).toBeVisible();
  });

  it("render active item correctly", async () => {
    const render = testRendererWithRoute(<NavigationMenu />, {
      route: "/about",
      path: "/about",
    });
    render();

    const about = screen.getByRole("link", { name: /about/i });
    expect(about.getAttribute("data-isactive")).toBeTruthy();
  });
});
