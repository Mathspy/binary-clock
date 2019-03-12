import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, select, date } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";

import Triangle from "../components/dots/Triangle";
import Vroom from "../components/dots/Vroom";
import Pulse from "../components/dots/Pulse";

import Clock from "../components/Clock";

const shapes = ["Triangle", "Vroom", "Pulse"];
const shapesMap = {
  Triangle,
  Vroom,
  Pulse
};

storiesOf("Clock", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add("What's the time?", () => (
    <Clock
      Shape={shapesMap[select("Shape", shapes, "Vroom")]}
      time={date("time", new Date(1550088335945))}
    />
  ));
