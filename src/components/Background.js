/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useSpring, animated } from "react-spring";

import useDarkMode from "../hooks/useDarkMode";

const Background = ({ children, ...props }) => {
  const [isDarkMode] = useDarkMode();
  const style = useSpring({ background: isDarkMode ? "#131415" : "#fff" });

  return (
    <animated.div css={{ height: "100%" }} style={style} {...props}>
      {children}
    </animated.div>
  );
};

export default Background;
