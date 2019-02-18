/** @jsx jsx */
import { jsx } from "@emotion/core";

import useDarkMode from "../../hooks/useDarkMode";

const DarkMode = () => {
  const [isDarkMode, setDarkMode] = useDarkMode();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      onClick={e => {
        e.stopPropagation();
        setDarkMode(() => !isDarkMode);
      }}
    >
      {isDarkMode ? (
        <path
          d="M20 15.3l3.3-3.3L20 8.7V4h-4.7L12 .7 8.7 4H4v4.7L.7 12 4 15.3V20h4.7l3.3 3.3 3.3-3.3H20v-4.7zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
          fill="#fff"
        />
      ) : (
        <path d="M7.673 2.79A9.9 9.9 0 0 1 10.4 1.456a10 10 0 0 0 10.877 15.676A10 10 0 1 1 7.673 2.79z" />
      )}
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export default DarkMode;
