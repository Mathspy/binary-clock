import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";
import DarkModeKnobWrapper from "./DarkModeKnobWrapper";

import Heart from "../components/dots/Heart";
import Pride from "../components/dots/Pride";
import Triangle from "../components/dots/Triangle";
import Vroom from "../components/dots/Vroom";
import Pulse from "../components/dots/Pulse";

storiesOf("Dots", module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add("Heart", () => {
    const on = boolean("On", false);
    return (
      <div>
        <Heart on={on} />
        <Heart on={!on} />
      </div>
    );
  })
  .add("Pride", () => (
    <DarkModeKnobWrapper>
      <Pride on={boolean("On", false)} />
    </DarkModeKnobWrapper>
  ))
  .add("Triangle", () => <Triangle on={boolean("On", false)} />)
  .add("Vroom", () => <Vroom on={boolean("On", false)} />)
  .add("Pulse", () => <Pulse on={boolean("On", false)} />);
