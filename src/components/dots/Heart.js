/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

const maxOffset = 27;

const Heart = ({ on }) => {
  const [props, set] = useSpring(() => ({
    offset: on ? 0 : maxOffset,
    config: config.slow
  }));

  useEffect(() => {
    set({ offset: on ? 0 : maxOffset });
  }, [on]);

  return (
    <div css={{ width: "150px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22">
        <mask id="123456">
          <path
            d="M12 22l-1.7-1.6C4.1 14.8 0 11.1 0 6.6 0 2.9 2.9 0 6.6 0c2.1 0 4.1 1 5.4 2.5A7.3 7.3 0 0 1 17.4 0C21.1 0 24 2.9 24 6.6c0 4.5-4.1 8.2-10.3 13.8L12 22z"
            fill="#fff"
          />
        </mask>
        <animated.line
          x1={on ? 22 : 1.5}
          y1={on ? 20 : 1.5}
          x2={on ? 1.5 : 22}
          y2={on ? 1.5 : 20}
          mask="url(#123456)"
          style={{
            strokeDashoffset: props.offset.interpolate(
              offset => maxOffset - offset
            )
          }}
          css={{
            stroke: "#334139",
            strokeWidth: 30,
            strokeDasharray: maxOffset
          }}
        />
        <animated.line
          x1={on ? 1.5 : 22}
          y1={on ? 1.5 : 20}
          x2={on ? 22 : 1.5}
          y2={on ? 20 : 1.5}
          mask="url(#123456)"
          style={{ strokeDashoffset: props.offset }}
          css={{
            stroke: "#DC006E",
            strokeWidth: 30,
            strokeDasharray: maxOffset
          }}
        />
      </svg>
    </div>
  );
};

export default Heart;
