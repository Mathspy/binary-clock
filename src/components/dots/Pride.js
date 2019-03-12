/** @jsx jsx */
import { useRef, useEffect, memo } from "react";
import { jsx } from "@emotion/core";
import { useTransition, animated, config } from "react-spring";

import useDarkMode from "../../hooks/useDarkMode";

const segments = [
  { fill: "#e6261f", d: "M75 76.93l60.15-47.97L75 0v76.93z" },
  { fill: "#eb7532", d: "M75 76.93l75 17.12-14.85-65.09L75 76.93z" },
  { fill: "#f7d038", d: "M75 76.93l75 17.12-41.62 52.19L75 76.93z" },
  { fill: "#008e00", d: "M75 76.93l-33.38 69.31h66.76L75 76.93z" },
  { fill: "#00c0c0", d: "M75 76.93L0 94.05l41.62 52.19L75 76.93z" },
  { fill: "#400098", d: "M75 76.93L0 94.05l14.86-65.09L75 76.93z" },
  { fill: "#8e008e", d: "M75 76.93L14.86 28.96 75 0v76.93z" }
];

// Using a ref to avoid setting initial if this isn't first render
// If first render: Skip animation, we don't want all of the dots to animate in
// If any other render: Don't skip animation, we don't want dots appearing for first time not to animate
const Pride = memo(({ on }) => {
  const [isDarkMode] = useDarkMode();

  const initial = useRef(true);
  const transitions = useTransition(on ? segments : [], item => item.fill, {
    unique: true,
    trail: 100,
    initial: () =>
      initial.current ? { transform: "scale(1)" } : { transform: "scale(0)" },
    from: { transform: "scale(0)" },
    enter: { transform: "scale(1)" },
    leave: { transform: "scale(0)" },
    config: config.gentle
  });
  useEffect(() => {
    initial.current = false;
  }, []);

  return (
    <div css={{ width: "150px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 146.24">
        <path
          opacity="0.1"
          fill={isDarkMode ? "#fff" : "#000"}
          d="M75 0l60.15 28.96L150 94.05l-41.62 52.19H41.62L0 94.05l14.86-65.09L75 0z"
        />
        {transitions.map(({ props, item, key }) => (
          <animated.path
            fill={item.fill}
            d={item.d}
            key={key}
            style={props}
            css={{
              transformOrigin: "center center"
            }}
          />
        ))}
      </svg>
    </div>
  );
});

export default Pride;

// Rotation 3d experiment
// { axis: { x: 0.901, y: 0.434 } },
// { axis: { x: 0.223, y: 0.974 } },
// { axis: { x: -0.623, y: 0.782 } },
// { axis: { x: 1, y: 0 } },
// { axis: { x: -0.623, y: -0.781 } },
// { axis: { x: 0.223, y: -0.974 } },
// { axis: { x: 0.901, y: -0.434 } },
