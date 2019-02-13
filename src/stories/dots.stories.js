import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered";

import Vroom from "../components/dots/Vroom";

storiesOf("Dots", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add("Vroom", () => <Vroom on={boolean("On", false)} />);
