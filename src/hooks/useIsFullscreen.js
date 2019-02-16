import { useState, useEffect } from "react";
import fscreen from "fscreen";

const isFullScreen = () => {
  const [state, setState] = useState(Boolean(fscreen.fullscreenElement));

  useEffect(() => {
    const handler = () => {
      setState(Boolean(fscreen.fullscreenElement));
    };
    fscreen.addEventListener("fullscreenchange", handler);
    return () => fscreen.removeEventListener("fullscreenchange", handler);
  }, []);

  return state;
};

export default isFullScreen;
