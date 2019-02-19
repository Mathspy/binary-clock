/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

const maxScale = 1;
const coords = { x1: -4, y1: 7, x2: 28, y2: 8 };
const angles = [-43.59, 136.41];

const Heart = ({ on }) => {
  const [props, set] = useSpring(() => ({
    scale: on ? 0 : maxScale,
    config: config.slow
  }));

  useEffect(() => {
    set({ scale: on ? 0 : maxScale });
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
        <g mask="url(#123456)">
          <animated.rect
            x={on ? coords.x2 : coords.x1}
            y={on ? coords.y2 : coords.y1}
            width={23}
            height={23}
            css={{
              fill: "#334139",
              transformOrigin: `${on ? coords.x2 : coords.x1}px ${
                on ? coords.y2 : coords.y1
              }px`
            }}
            style={{
              transform: props.scale.interpolate(
                scale =>
                  `rotate(${on ? angles[1] : angles[0]}deg) scale(1, ${scale})`
              )
            }}
          />
        </g>
        <g mask="url(#123456)">
          <animated.rect
            x={on ? coords.x1 : coords.x2}
            y={on ? coords.y1 : coords.y2}
            width={23}
            height={23}
            css={{
              fill: "#DC006E",
              transformOrigin: `${on ? coords.x1 : coords.x2}px ${
                on ? coords.y1 : coords.y2
              }px`
            }}
            style={{
              transform: props.scale.interpolate(
                scale =>
                  `rotate(${
                    on ? angles[0] : angles[1]
                  }deg) scale(1, ${maxScale - scale})`
              )
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Heart;
