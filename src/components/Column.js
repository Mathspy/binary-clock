import React from "react";

const Column = ({ data, rightPad, Shape }) => (
  <div
    style={{
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
