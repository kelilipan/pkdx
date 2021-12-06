import { graphql } from "msw";
import { notFound } from "__mocks__/data/not-found";
import { ivysaur, pokemonTypes } from "../data/pokemon";
import { pokemons } from "__mocks__/data/pokemons";

export const handlers = [
  graphql.query("getPokemonByName", (req, res, ctx) => {
    const { name } = req.variables;
    if (name === ivysaur.name) {
      return res(ctx.data({ pokemon: ivysaur }));
    } else {
      return res(
        ctx.errors(notFound.errors),
        ctx.data({ pokemon: notFound.data.pokemon })
      );
    }
  }),
  graphql.query("getType", (_, res, ctx) => {
    return res(
      ctx.data({
        pokemon: {
          types: pokemonTypes,
        },
      })
    );
  }),
  graphql.query("getPokemonList", (_, res, ctx) => {
    return res(
      ctx.data({
        pokemons,
      })
    );
  }),
];
