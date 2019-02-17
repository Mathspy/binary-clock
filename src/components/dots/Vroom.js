/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useSpring, animated, config } from "react-spring";

const frontAndBack = {
  width: "150px",
  height: "150px",
  backgroundColor: "rgba(0,0,0,0)",
  borderRadius: "50%",
  backfaceVisibility: "hidden",
  position: "absolute",
  top: 0,
  left: 0
};

const Vroom = ({ on }) => {
  const props = useSpring({
    transform: `rotateY(${on ? 180 : 0}deg)`,
    config: config.wobbly
  });

  return (
    <animated.div
      css={{
        transformStyle: "preserve-3d",
        position: "relative",
        width: "150px",
        height: "150px"
      }}
      style={props}
    >
      <div
        css={[
          frontAndBack,
          {
            backgroundColor: "#A8A8A8",
            zIndex: 2
          }
        ]}
      />
      <div
        css={[
          frontAndBack,
          {
            transform: "rotate3d(45,45,0,180deg)",
            backgroundColor: "#363636"
          }
        ]}
      />
    </animated.div>
  );
};

export default Vroom;
