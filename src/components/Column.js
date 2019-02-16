/** @jsx jsx */
import { jsx } from "@emotion/core";

const Column = ({ data, rightPad, Shape }) => (
  <div
    css={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      marginRight: rightPad ? "20px" : "0"
    }}
  >
    {data.map((on, i) => (
      <Shape on={on} key={i} />
    ))}
  </div>
);

export default Column;
