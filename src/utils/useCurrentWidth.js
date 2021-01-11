import { useState, useEffect } from "react";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export default function useCurrentWidth() {
  let [width, setWidth] = useState(getWidth());
  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width >= 1366;
}
