/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

import useDarkMode from "../hooks/useDarkMode";

const Background = ({ children, ...props }) => {
  const [isDarkMode] = useDarkMode();

  const background = isDarkMode ? "#131415" : "#FFF";
  const style = useSpring({ background });

  useEffect(() => {
    const themeColor = document.querySelector("meta[name=theme-color]");
    if (themeColor) {
      themeColor.content = background;
    }
  }, [background]);

  return (
    <animated.div css={{ height: "100%" }} style={style} {...props}>
      {children}
    </animated.div>
  );
};

export default Background;
