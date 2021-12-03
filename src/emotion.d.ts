import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      type: {
        normal: string;
        fire: string;
        water: string;
        grass: string;
        electric: string;
        ice: string;
        fighting: string;
        poison: string;
        ground: string;
        flying: string;
        psychic: string;
        bug: string;
        rock: string;
        ghost: string;
        dark: string;
        dragon: string;
        steel: string;
        fairy: string;
        unkown: string;
      };
    };
  }
}
