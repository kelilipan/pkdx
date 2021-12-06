import { gql } from "@apollo/client";

const GET_POKEMON_LIST = gql`
  query getPokemonList($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      status
      results {
        id
        name
        image
      }
    }
  }
`;

const GET_POKEMON_BY_NAME = gql`
  query getPokemonByName($name: String!) {
    pokemon(name: $name) {
      message
      id
      name
      weight
      height
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      stats {
        stat {
          name
        }
        base_stat
      }
    }
  }
`;

const GET_POKEMON_TYPE = gql`
  query getType($name: String!) {
    pokemon(name: $name) {
      types {
        type {
          id
          name
        }
      }
    }
  }
`;

export { GET_POKEMON_LIST, GET_POKEMON_BY_NAME, GET_POKEMON_TYPE };
