import { screen } from "@testing-library/react";
import About from "pages/about";
import { testRendererWithRoute } from "utils/test-utils";

describe("About page", () => {
  const renderAbout = testRendererWithRoute(<About />, {
    route: "/about",
    path: "/about",
  });

  it("render content correctly", () => {
    renderAbout();

    const image = screen.getByRole("img", { name: /pkdx/i });
    const pkdx = screen.getByRole("heading", { name: /pkdx/i });
    const description = screen.getByText(
      /a simple pokedex web app built with react\.js & typescript made by \./i
    );
    const myLink = screen.getByRole("link", { name: /wisesa/i });
    const ossText = screen.getByText(
      /this app is open source, you can see the \./i
    );
    const sourceLink = screen.getByRole("link", { name: /source code here/i });
    const pokemonCopyright = screen.getByText(
      /pokémon © 2002\-2021 pokémon\. © 1995\-2021 nintendo\/creatures inc\.\/game freak inc\. tm, ® and pokémon character names are trademarks of nintendo\./i
    );

    expect(image).toBeVisible();
    expect(pkdx).toBeVisible();
    expect(description).toBeVisible();
    expect(myLink).toBeVisible();
    expect(ossText).toBeVisible();
    expect(sourceLink).toBeVisible();
    expect(pokemonCopyright).toBeVisible();
  });
});
