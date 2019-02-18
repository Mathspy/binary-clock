/** @jsx jsx */
import { jsx } from "@emotion/core";

const IconPanel = ({ children }) => (
  <div
    css={{
      display: "flex",
      flexDirection: "row",
      width: "96px",
      height: "48px",
      position: "absolute",
      right: 0,
      zIndex: 1,
      "& svg": {
        width: "50%"
      }
    }}
  >
    {children}
  </div>
);

export default IconPanel;
