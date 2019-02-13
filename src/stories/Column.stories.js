import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered";

import Triangle from "../components/dots/Triangle";
import Vroom from "../components/dots/Vroom";
import Pulse from "../components/dots/Pulse";

import Column from "../components/Column";

storiesOf("Column", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator((story, { parameters }) => {
    parameters.one = boolean("1", true);
    parameters.two = boolean("2", false);
    parameters.four = boolean("4", true);
    parameters.eight = boolean("8", true);

    return story();
  })
  .add("Triangle Column", ({ parameters: { eight, four, two, one } }) => (
    <Column Shape={Triangle} data={[eight, four, two, one]} />
  ))
  .add("Vroom Column", ({ parameters: { eight, four, two, one } }) => (
    <Column Shape={Vroom} data={[eight, four, two, one]} />
  ))
  .add("Pulse Column", ({ parameters: { eight, four, two, one } }) => (
    <Column Shape={Pulse} data={[eight, four, two, one]} />
  ));
