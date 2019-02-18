import { useState, useEffect } from "react";

// Usage:
/**
 * @example
 * const Component = () => {
 *   const columnCount = useMedia(
 *     // Media queries and their values if they are first to match (from left to right)
 *     [
 *       {query: '(min-width: 1500px)', value: 5},
 *       {query: '(min-width: 1000px)', value: 4},
 *       {query: '(min-width: 600px)', value: 3},
 *     ],
 *     // Default column count
 *     2
 *   );
 *   // ...
 * }
 */

// Customized version of recipe described below:
// https://usehooks.com/useMedia/
const useMediaQuery = (queries, defaultValue) => {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map(({ query }) => window.matchMedia(query));

  // Function that gets value based on matching media query
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    // Return related value or defaultValue if none
    if (
      index === -1 ||
      typeof (queries[index] && queries[index].value) === "undefined"
    ) {
      return defaultValue;
    }
    return queries[index].value;
  };

  // State and setter for matched value
  const [value, setValue] = useState(getValue);

  useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue);
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach(mql => mql.addListener(handler));
      // Remove listeners on cleanup
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );

  return value;
};

export default useMediaQuery;
