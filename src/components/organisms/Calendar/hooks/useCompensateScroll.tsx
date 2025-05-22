import type { Modifier } from "@dnd-kit/core";
import { getScrollPosition } from "../helpers/getScrollPosition";
import { useRef } from "react";

export const useCompensateScroll = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const compensateScroll: Modifier = ({ transform }) => {
    const { y } = getScrollPosition(scrollRef.current);

    return {
      ...transform,
      y: transform.y + y,
    };
  };

  return { scrollRef, compensateScroll };
};
