import React, { useState, useReducer, useEffect } from "react";

import useInterval from "../hooks/useInterval";

import Clock from "./Clock";
import * as dots from "./dots";

const dotNames = Object.keys(dots);

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

  useInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    if (state.popupTimer) {
      setTimeout(() => dispatch({ type: "showPopup" }), 3000);
    }
  }, [state.popupTimer]);

  return (
    <div
      style={{ height: "100%" }}
      onClick={() => dispatch({ type: "changeDot" })}
    >
      <Clock time={time} Shape={dots[dotNames[state.dotIndex]]} />
      {state.popupVisibility && (
        <div
          style={{
            position: "absolute",
            left: "50px",
            top: "50px",
            backgroundColor: "black",
            color: "white",
            opacity: 0.3,
            padding: "5px",
            fontSize: "24px",
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
