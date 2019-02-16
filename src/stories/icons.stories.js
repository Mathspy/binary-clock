/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useRef } from "react";

import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";

import FullScreen from "../components/icons/FullScreen";

function FullScreenWrapper() {
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
        <FullScreen elementRef={storyRef} />
      </div>
    </div>
  );
}

storiesOf("Icons", module)
  .addDecorator(centered)
  .add("FullScreen Icon", () => <FullScreenWrapper />);
