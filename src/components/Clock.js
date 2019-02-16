/** @jsx jsx */
import { jsx } from "@emotion/core";

import Column from "./Column";

import timeInBinary from "../utils/timeInBinary";

const Clock = ({ time, Shape }) => (
  <div
    css={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%"
    }}
  >
    <div css={{ display: "flex", alignItems: "stretch" }}>
      {timeInBinary(time).map((unit, i, { length: unitLength }) =>
        unit.map((column, j, { length: columnLength }) => (
          <Column
            data={column}
            rightPad={i + 1 !== unitLength && j + 1 === columnLength}
            Shape={Shape}
            key={i * 4 + j}
          />
        ))
      )}
    </div>
  </div>
);

export default Clock;
