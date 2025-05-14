import { useState, useRef, useEffect } from "react";

export const useElementPosition = (
  triggerUpdate?: boolean | number | string
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setPosition({
          top: rect.top,
          left: rect.left,
          bottom: rect.bottom,
          right: rect.right,
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [triggerUpdate]);

  return { position, ref };
};

export type ElementPosition = Pick<
  ReturnType<typeof useElementPosition>,
  "position"
>["position"];
