import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

/*
  Explanation for Triangle's seemingly convoluted animation:
  - The biggest problem with Triangle is that if the animation goes from 0deg to 180deg then the opposite, it goes backwards instead of completing a full rotation.
  - The above behaviour is undesirable so for eons I wanted to find a more elegant method than keeping an internal angle and incrementing it with 180degs indefinitely
  - With React Spring the solution also seemed far away. Until I found the reset option which allows the animation to start over making it easily toggleable
  - The remaining problem was that when the "from" property is passed the component animates on mount
  - This was solved by dismissing animations and then imperatively mutating a reference after mount that would stop dismissal of animations on subsequent toggles
*/

const Triangle = ({ on }) => {
  const dismissAnimation = useRef(true);
  const props = useSpring({
    from: { angle: on ? 180 : 0 },
    to: { angle: on ? 360 : 180 },
    reset: true,
    immediate: dismissAnimation.current
  });

  useEffect(() => {
    dismissAnimation.current = false;
  }, []);

  return (
    <animated.div
      style={{
        width: 0,
        height: 0,
        borderLeft: "75px solid transparent",
        borderRight: "75px solid transparent",
        borderBottom: `129.88px solid ${on ? "#129793" : "#505050"}`,
        transform: props.angle.interpolate(angle => `rotate(${angle}deg`)
      }}
    />
  );
};

export default Triangle;
