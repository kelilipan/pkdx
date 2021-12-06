import { screen } from "@testing-library/react";
import Home from "pages/home";
import { testRendererWithRoute } from "utils/test-utils";

describe("Home page", () => {
  const renderHome = testRendererWithRoute(<Home />, {
    route: "/",
    path: "/",
  });

  it("render loading pokemon", () => {
    renderHome();

    const loading = screen.getByText(/loading pokemon/i);
    expect(loading).toBeVisible();
  });

  it("render pokemon list", async () => {
    renderHome();

    const ivysaur = await screen.findByText(/ivysaur/i);
    expect(ivysaur).toBeVisible();
    const bulbasaur = await screen.findByText(/bulbasaur/i);
    expect(bulbasaur).toBeVisible();
    const venusaur = await screen.findByText(/venusaur/i);
    expect(venusaur).toBeVisible();
    const pokemon001 = await screen.findByText(/#001/i);
    expect(pokemon001).toBeVisible();
  });

  it("render pokemon types", async () => {
    renderHome();

    const fire = await screen.findAllByText(/fire/i);
    const grass = await screen.findAllByText(/grass/i);

    expect(fire[0]).toBeVisible();
    expect(grass[0]).toBeVisible();
  });
});
