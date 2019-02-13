import React from "react";
import { useSpring, animated } from "react-spring";

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
  const props = useSpring({ transform: `rotateY(${on ? 180 : 0}deg)` });

  return (
    <animated.div
      style={{
        transformStyle: "preserve-3d",
        position: "relative",
        width: "150px",
        height: "150px",
        ...props
      }}
    >
      <div
        style={{
          ...frontAndBack,
          backgroundColor: "#A8A8A8",
          zIndex: 2
        }}
      />
      <div
        style={{
          ...frontAndBack,
          transform: "rotate3d(45,45,0,180deg)",
          backgroundColor: "#363636"
        }}
      />
    </animated.div>
  );
};

export default Vroom;
