import { graphql } from "msw";
import { notFound } from "__mocks__/data/not-found";
import { ivysaur } from "../data/pokemon";

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
];
