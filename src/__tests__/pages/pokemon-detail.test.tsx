import { screen } from "@testing-library/react";
import PokemonDetail from "pages/pokemon-detail";
import { testRendererWithRoute } from "utils/test-utils";

describe("Pokemon Detail page", () => {
  const renderIvysaur = testRendererWithRoute(<PokemonDetail />, {
    route: "/pokemon/ivysaur",
    path: "/pokemon/:name",
  });

  it("render correct pokemon information", async () => {
    renderIvysaur();

    const name = await screen.findByRole("heading", {
      name: /ivysaur/i,
    });
    const catchButton = await screen.getByText(/catch!/i);
    const sprites = await screen.findByRole("img", { name: /ivysaur/i });
    const weight = await screen.findByText(/weight : 13 kg/i);
    const height = await screen.findByText(/height : 100 cm/i);
    const number = await screen.findByText(/#002/i);

    expect(name).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(sprites).toBeInTheDocument();
    expect(catchButton).toBeInTheDocument();
  });

  it("render pokemon stats", async () => {
    renderIvysaur();

    const stats = await screen.findByRole("heading", { name: /stats/i });
    const hp = screen.getByText(/hp/i);
    const spdefense = screen.getByText(/sp\. defense/i);
    const spattack = screen.getByText(/sp\. attack/i);

    expect(stats).toBeInTheDocument();
    expect(hp).toBeInTheDocument();
    expect(spattack).toBeInTheDocument();
    expect(spdefense).toBeInTheDocument();
  });

  it("render pokemon abilities", async () => {
    renderIvysaur();

    const abilities = await screen.findByRole("heading", {
      name: /abilities/i,
    });
    const chlorophyll = await screen.findByText(/chlorophyll/i);
    const overgrow = await screen.findByText(/overgrow/i);

    expect(abilities).toBeInTheDocument();
    expect(chlorophyll).toBeInTheDocument();
    expect(overgrow).toBeInTheDocument();
  });

  it("render pokemon moves", async () => {
    renderIvysaur();

    const moves = await screen.findByRole("heading", { name: /moves/i });
    const vineWhip = screen.getByText(/vine whip/i);
    const swordsDance = screen.getByText(/swords dance/i);

    expect(moves).toBeInTheDocument();
    expect(vineWhip).toBeInTheDocument();
    expect(swordsDance).toBeInTheDocument();
  });

  it("render not found if pokemon is not available", async () => {
    const render = testRendererWithRoute(<PokemonDetail />, {
      route: "/pokemon/sasuke", //NARUTOO
      path: "/pokemon/:name",
    });
    render();

    //Wait useEffect to fetch data
    await screen.findByTestId("image-loading-skeleton");
    const notFound = await screen.findByRole("heading", { name: /not found/i });
    const text = await screen.findByText(/page is not available\./i);
    const backToHome = await screen.findByRole("link", {
      name: /back to list/i,
    });

    expect(notFound).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(backToHome).toBeInTheDocument();
  });
});
