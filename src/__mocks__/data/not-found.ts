const notFound = {
  errors: [
    {
      message: "Request failed with status code 404",
    },
  ],
  data: {
    pokemon: {
      message: null,
      id: null,
      name: null,
      weight: null,
      height: null,
      sprites: null,
      types: null,
      moves: null,
      abilities: null,
      stats: null,
      __typename: "Pokemon",
    },
  },
};

export { notFound };
