/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useReducer, useEffect } from "react";

import useInterval from "../hooks/useInterval";
import useWindowSize from "../hooks/useWindowSize";

import Clock from "./Clock";
import Popup from "./Popup";
import * as dots from "./dots";

import FullScreen from "./icons/FullScreen";

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
      const timeoutID = setTimeout(() => dispatch({ type: "showPopup" }), 3000);
      return () => clearTimeout(timeoutID);
    }
  }, [state.popupTimer]);

  let scale = 1;
  if (width < minWidth || height < minHeight) {
    scale = Math.min((width * 0.95) / 940, (height * 0.95) / 600);
  }

  return (
    <div
      css={{ height: "100%", background: "#fff" }}
      onClick={() => dispatch({ type: "changeDot" })}
    >
      <div
        css={{
          width: "48px",
          position: "absolute",
          right: 0,
          cursor: "pointer",
          zIndex: 1
        }}
      >
        {/* This is a pesudo-ref since API accepts a ref */}
        <FullScreen elementRef={{ current: document.body }} />
      </div>
      <div css={{ height: "100%", transform: `scale(${scale})` }}>
        <Clock time={time} Shape={dots[dotNames[state.dotIndex]]} />
      </div>
      {state.popupVisibility && <Popup>Click Anywhere!</Popup>}
    </div>
  );
};

export default App;
