/** @jsx jsx */
import { jsx } from "@emotion/core";
import useDarkMode from "../hooks/useDarkMode";

const Popup = ({ children }) => {
  const [isDarkMode] = useDarkMode();

  return (
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
          backgroundColor: isDarkMode ? "#fff" : "#000",
          color: isDarkMode ? "#000" : "#fff",
          fontSize: "36px",
          textAlign: "center",
          opacity: 0.6
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;
