import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered";

import Popup from "../components/Popup";

storiesOf("Popup", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add("I wanna notify you of something!", () => (
    <Popup>{text("Value", "Hey there!")}</Popup>
  ));
