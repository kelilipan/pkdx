//Generated from https://graphql-pokeapi.graphcdn.app/ schema

namespace Pokemon {
  type BaseList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: BaseName[];
    status: boolean;
    message: string;
  };

  type Ability = {
    ability?: BaseName;
    is_hidden?: boolean;
    slot?: number;
  };

  type GameIndex = {
    game_index: number;
    version: BaseName;
  };

  type VersionDetail = {
    rarity: number;
    version: BaseName;
  };

  type HeldItem = {
    item: BaseName;
    version_details: VersionDetail[];
  };

  type VersionGroupDetail = {
    level_learned_at: number;
    move_learn_method: BaseName;
    version_group: BaseName;
  };

  type Move = {
    move?: BaseName;
    version_group_details?: VersionGroupDetail[];
  };

  type Sprite = {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
  };

  type Stat = {
    base_stat?: number;
    effort?: number;
    stat?: BaseName;
  };

  type Type = {
    slot?: number;
    type?: BaseName;
  };

  type BaseName = {
    id?: number;
    url?: string;
    name?: string;
  };

  type Pokemon = {
    abilities?: Ability[];
    base_experience?: number;
    forms?: BaseName[];
    game_indices?: GameIndex[];
    height?: number;
    held_items?: HeldItem[];
    id?: number;
    is_default?: boolean;
    location_area_encounters?: string;
    moves?: Move[];
    name?: string;
    order?: number;
    species?: BaseName;
    sprites?: Sprite;
    stats?: Stat[];
    types?: Type[];
    weight?: number;
    status?: boolean;
    message?: string;
  };

  type PokemonItem = {
    id: number;
    url: string;
    name: string;
    image: string;
    artwork: string;
    dreamworld: string;
  };

  type PokemonList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    nextOffset?: number | null;
    prevOffset?: number | null;
    results: PokemonItem[];
    status: boolean;
    message: string;
  };
}
