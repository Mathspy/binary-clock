/** @jsx jsx */
import { jsx } from "@emotion/core";

import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";
import { withKnobs } from "@storybook/addon-knobs";
import DarkModeKnobWrapper from "./DarkModeKnobWrapper";

import App from "../components/App";
import Background from "../components/Background";

storiesOf("App", module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add("The App!", () => <App />)
  .add("Container (background)!", () => (
    <div css={{ width: "500px", height: "500px" }}>
      <DarkModeKnobWrapper>
        <Background />
      </DarkModeKnobWrapper>
    </div>
  ));
