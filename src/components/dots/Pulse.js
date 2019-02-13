import React from "react";
import { useSpring, animated } from "react-spring";

const Pulse = ({ on }) => {
  const props = useSpring({ scale: on ? 1 : 0 });

  return (
    <animated.div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: on ? "#421C52" : "#732C7B",
        transform: props.scale
          .interpolate({
            range: [0, 0.5, 1],
            output: [1, 1.1, 1]
          })
          .interpolate(scale => `scale(${scale})`)
      }}
    />
  );
};

export default Pulse;
