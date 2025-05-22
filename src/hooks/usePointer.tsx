import { useEffect, useState } from "react";

export const usePointer = (isEnabled: boolean = true) => {
  const [pointer, setPointer] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: MouseEvent) => {
    setPointer({ x: e.clientX, y: e.clientY });
  };

  const resetPointer = () => {
    setPointer({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (isEnabled) {
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        resetPointer();
      };
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      resetPointer();
    }
  }, [isEnabled]);

  return pointer;
};
