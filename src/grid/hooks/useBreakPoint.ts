import { isEqual, throttle } from "lodash";
import React from "react";
import config from "../../config";

const calculate = () => {
  const values: Record<string, boolean> = {};
  for (const [key, value] of Object.entries(config.breakpoints)) {
    if (value <= window.innerWidth) {
      values[key] = true;
    } else {
      values[key] = false;
    }
  }

  return values;
};

export const useBreakPoint = () => {
  const [state, setState] = React.useState<Record<string, boolean>>(() => calculate());

  React.useEffect(() => {
    const calculateInnerWidth = throttle(() => {
      const values = calculate();
      if (!isEqual(state, values)) {
        setState(values);
      }
    }, 500);

    window.addEventListener("resize", calculateInnerWidth);

    return () => {
      window.removeEventListener("resize", calculateInnerWidth);
    };
  }, []);

  return state;
};
