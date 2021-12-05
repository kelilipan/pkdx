/** @jsxImportSource @emotion/react */

import { css, useTheme } from "@emotion/react";

export type StatProps = {
  name?: string;
  value?: number;
};

const Stat = ({ name, value }: StatProps) => {
  const theme = useTheme();
  const stat = css`
    display: flex;
    gap: 1em;
    width: 100%;
  `;

  const formattedName = name?.split("-").join(" ").replace("special", "Sp.");
  //https://bulbapedia.bulbagarden.net/wiki/Base_stats#:~:text=A%20species'%20base%20stats%20range,Pok%C3%A9mon%20species%20has%20in%20battle.
  const formattedStat = value ? (value / 255) * 100 : 0;
  const statColor =
    (value || 0) >= 80 ? theme.color.type.grass : theme.color.type.fire;

  return (
    <div css={stat}>
      <span css={{ width: "104px", textTransform: "capitalize" }}>
        {formattedName}
      </span>
      <span css={{ fontWeight: "bold", width: "30px" }}>{value}</span>
      <div
        css={{
          background: "#ccc",
          flex: 1,
          position: "relative",
          height: "5px",
          margin: "auto 0",
          borderRadius: "15px",
        }}
      >
        <div
          css={{
            width: formattedStat + "%",
            backgroundColor: statColor,
            height: "100%",
            borderRadius: "15px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Stat;
