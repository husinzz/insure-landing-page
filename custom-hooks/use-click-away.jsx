import { useEffect } from "react";

// His job is to detect if a click happend outside a referenced element

export default function useClickAway(fn, refs) {
  // fn = function
  useEffect(() => {
    function handleClickAway(event) {
      if (refs.current && !refs.current.contains(event.target)) {
        fn();
      }
    }

    document.addEventListener("mousedown", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [refs]);
}

// Source : https://stackoverflow.com/questions/32553158/detect-click-outside-react-component