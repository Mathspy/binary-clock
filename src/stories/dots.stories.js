import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered";

import Vroom from "../components/dots/Vroom";
import Pulse from "../components/dots/Pulse";

storiesOf("Dots", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add("Vroom", () => <Vroom on={boolean("On", false)} />)
  .add("Pulse", () => <Pulse on={boolean("On", false)} />);
