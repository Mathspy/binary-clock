import React, { useState } from "react";

import useInterval from "../hooks/useInterval";

import Clock from "./Clock";
import * as dots from "./dots";

const dotNames = Object.keys(dots);

const App = () => {
  const [time, setTime] = useState(new Date());
  const [dotIndex, setDotIndex] = useState(0);

  useInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div onClick={() => setDotIndex(() => (dotIndex + 1) % dotNames.length)}>
      <Clock time={time} Shape={dots[dotNames[dotIndex]]} />
    </div>
  );
};

export default App;
