import React, { useEffect } from "react";
import { boolean } from "@storybook/addon-knobs";

import useDarkMode from "../hooks/useDarkMode";

const useDarkModeKnob = () => {
  const [isDarkMode, setDarkMode] = useDarkMode();

  const darkTheme = boolean("Dark Mode", isDarkMode);

  useEffect(() => {
    setDarkMode(darkTheme);
  }, [darkTheme]);
};

const DarkModeKnobWrapper = ({ children }) => {
  useDarkModeKnob();

  return <>{children}</>;
};

export default DarkModeKnobWrapper;
