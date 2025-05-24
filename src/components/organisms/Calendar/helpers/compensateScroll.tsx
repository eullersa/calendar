import type { Modifier } from "@dnd-kit/core";
import { getScrollPosition } from "./getScrollPosition";

export const compensateScroll: Modifier = ({ transform }) => {
  if (typeof window === "undefined") {
    return transform;
  }

  const { y } = getScrollPosition(document.body);

  return {
    ...transform,
    y: transform.y + y,
  };
};
