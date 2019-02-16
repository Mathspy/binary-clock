/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useReducer, useEffect } from "react";

import useInterval from "../hooks/useInterval";
import useWindowSize from "../hooks/useWindowSize";

import Clock from "./Clock";
import * as dots from "./dots";

const dotNames = Object.keys(dots);

// 940 is the static width of the clock
// 600 is the static height of the clock
const minWidth = 940 / 0.95;
const minHeight = 600 / 0.95;

function reducer(state, action) {
  switch (action.type) {
    case "changeDot":
      return {
        dotIndex: (state.dotIndex + 1) % dotNames.length,
        popupVisibility: false,
        popupTimer: false
      };
    case "showPopup":
      return { ...state, popupVisibility: true };
    default:
      throw new Error(`${action.type} is not a known action type`);
  }
}

const App = () => {
  const [time, setTime] = useState(new Date());
  const [state, dispatch] = useReducer(reducer, {
    dotIndex: 0,
    popupVisibility: false,
    popupTimer: true
  });
  const { width, height } = useWindowSize();

  useInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    if (state.popupTimer) {
      setTimeout(() => dispatch({ type: "showPopup" }), 3000);
    }
  }, [state.popupTimer]);

  let scale = 1;
  if (width < minWidth || height < minHeight) {
    scale = Math.min((width * 0.95) / 940, (height * 0.95) / 600);
  }

  return (
    <div
      css={{ height: "100%", transform: `scale(${scale})` }}
      onClick={() => dispatch({ type: "changeDot" })}
    >
      <Clock time={time} Shape={dots[dotNames[state.dotIndex]]} />
      {state.popupVisibility && (
        <div
          css={{
            position: "absolute",
            left: "50px",
            top: "50px",
            backgroundColor: "black",
            color: "white",
            opacity: 0.6,
            padding: "5px",
            fontSize: "36px",
            userSelect: "none"
          }}
        >
          Click Anywhere!
        </div>
      )}
    </div>
  );
};

export default App;
