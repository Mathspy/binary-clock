/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useRef } from "react";

import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { withKnobs } from "@storybook/addon-knobs";
import DarkModeKnobWrapper from "./DarkModeKnobWrapper";

import FullScreen from "../components/icons/FullScreen";
import DarkMode from "../components/icons/DarkMode";

function IconWrapper({ Icon }) {
  const storyRef = useRef(null);

  return (
    <div
      css={{
        width: 400,
        height: 400,
        background: "hotpink",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      ref={storyRef}
    >
      <div css={{ width: "48px" }}>
        <DarkModeKnobWrapper>
          <Icon elementRef={storyRef} />
        </DarkModeKnobWrapper>
      </div>
    </div>
  );
}

storiesOf("Icons", module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add("FullScreen Icon", () => <IconWrapper Icon={FullScreen} />)
  .add("DarkMode Icon", () => <IconWrapper Icon={DarkMode} />);
