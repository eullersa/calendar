import { useEffect, useState } from "react";

export const useMaxValue = (value: number) => {
  const [maxValue, setMaxValue] = useState<number>(0);

  useEffect(() => {
    setMaxValue((prev) => Math.max(prev, value));
  }, [value]);

  return maxValue;
};
