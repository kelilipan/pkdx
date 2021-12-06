import { screen } from "@testing-library/react";
import MyPokemonPage from "pages/my-pokemon";
import { MyPokemonProvider } from "utils/my-pokemon-context";
import { testRendererWithRoute } from "utils/test-utils";
import { myPokemon } from "__mocks__/data/my-pokemon";

describe("MyPokemon page", () => {
  const renderMyPokemon = testRendererWithRoute(
    <MyPokemonProvider>
      <MyPokemonPage />
    </MyPokemonProvider>,
    {
      route: "/",
      path: "/",
    }
  );

  it("render empty list", () => {
    renderMyPokemon();

    const myPokemon = screen.getByRole("heading", { name: /my pokemon/i });
    const empty = screen.getByText(/empty\./i);
    const catchButton = screen.getByRole("button", {
      name: /go catch them all!/i,
    });
    expect(myPokemon).toBeVisible();
    expect(empty).toBeVisible();
    expect(catchButton).toBeVisible();
  });

  it("render pokemon", () => {
    //set localstorage with dummy data
    localStorage.setItem("_mypokemon", JSON.stringify(myPokemon));

    renderMyPokemon();

    const mewtwoNamedKocheng = screen.getByText(/kocheng/i);
    const arceusGod = screen.getByText(/\(arceus\)/i);
    const rayquaza = screen.getByText(/\(rayquaza\)/i);
    expect(mewtwoNamedKocheng).toBeInTheDocument();
    expect(arceusGod).toBeInTheDocument();
    expect(rayquaza).toBeInTheDocument();
  });
});
