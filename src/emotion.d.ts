import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      type: Record<string, string>;
    };
  }
}
