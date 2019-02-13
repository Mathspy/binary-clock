import React from "react";

import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";

import App from "../components/App";

storiesOf("App", module)
  .addDecorator(centered)
  .add("The App!", () => <App />);
