import React from "react";

import Icon from "./Icon";

import useIsFullscreen from "../../hooks/useIsFullscreen";
import useDarkMode from "../../hooks/useDarkMode";

const FullScreen = ({ elementRef }) => {
  const [isFullscreen, toggleFullScreen] = useIsFullscreen();
  const [isDarkMode] = useDarkMode();

  // Don't render if there is no fullscreen support
  return (
    (toggleFullScreen && (
      <Icon
        onClick={e => {
          e.stopPropagation();
          toggleFullScreen(elementRef.current);
        }}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d={
            isFullscreen
              ? "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
              : "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
          }
          fill={isDarkMode ? "#fff" : "#000"}
        />
      </Icon>
    )) ||
    null
  );
};

export default FullScreen;
