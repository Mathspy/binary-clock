import createPersistedState from "use-persisted-state";

import useMediaQuery from "./useMediaQuery";

const useDarkModeState = createPersistedState("dark-mode");

// Customized version of recipe described below:
// https://usehooks.com/useDarkMode/
const useDarkMode = () => {
  // See if user has set a browser or OS preference for dark mode using browser mediaQuery API.
  const prefersDarkMode = useMediaQuery(
    [{ query: "(prefers-color-scheme: dark)", value: true }],
    false
  );

  // Use persisted state hook for persisted shared state
  // Return boolean of state and setter
  return useDarkModeState(prefersDarkMode);
};

export default useDarkMode;
