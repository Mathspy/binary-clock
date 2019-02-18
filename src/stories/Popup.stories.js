import React, { useEffect } from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";

import useDarkMode from "../hooks/useDarkMode";

import Popup from "../components/Popup";

const Wrapper = () => {
  const [isDarkMode, setDarkMode] = useDarkMode();

  const darkMode = boolean("Dark Mode", isDarkMode);

  useEffect(() => {
    setDarkMode(darkMode);
  }, [darkMode]);

  return <Popup>{text("Value", "Hey there!")}</Popup>;
};

storiesOf("Popup", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add("I wanna notify you of something!", () => <Wrapper />);
