/** @jsx jsx */
import { jsx } from "@emotion/core";

const Popup = ({ children }) => (
  <div
    css={{
      position: "absolute",
      left: "50%",
      top: "50px",
      padding: "5px",
      userSelect: "none"
    }}
  >
    <div
      css={{
        position: "relative",
        left: "-50%",
        backgroundColor: "black",
        color: "white",
        fontSize: "36px",
        textAlign: "center",
        opacity: 0.6
      }}
    >
      {children}
    </div>
  </div>
);

export default Popup;
