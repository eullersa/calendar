import { ElementPosition } from "@/hooks/useElementPosition";
import { HorizontalPosition } from "../types";

export const calculateHorizontalPosition = (
  anchorElement: ElementPosition,
  dropdownWidth: number,
  viewportWidth: number
) => {
  // First try to center the dropdown relative to the anchor
  const idealCenterPosition =
    anchorElement.left + anchorElement.width / 2 - dropdownWidth / 2;
  const rightEdgeIfCentered = idealCenterPosition + dropdownWidth;
  const leftEdgeIfCentered = idealCenterPosition;

  // Case 1: Centered position works fine (preferred)
  if (rightEdgeIfCentered <= viewportWidth && leftEdgeIfCentered >= 0) {
    return {
      style: { left: idealCenterPosition },
      position: HorizontalPosition.CENTER,
    };
  }

  // Case 2: Dropdown overflows right side
  if (rightEdgeIfCentered > viewportWidth) {
    // Try to align with right edge of anchor
    const rightAligned = anchorElement.right - dropdownWidth;

    // If right alignment works, use it
    if (rightAligned >= 0) {
      return {
        style: { left: rightAligned },
        position: HorizontalPosition.RIGHT,
      };
    }

    // Otherwise, align with right edge of viewport
    return {
      style: { left: Math.max(0, viewportWidth - dropdownWidth) },
      position: HorizontalPosition.VIEWPORT_RIGHT,
    };
  }

  // Case 3: Dropdown overflows left side
  if (leftEdgeIfCentered < 0) {
    // Try to align with left edge of anchor
    const leftAligned = anchorElement.left;

    // If left alignment would cause right overflow, use viewport alignment
    if (leftAligned + dropdownWidth > viewportWidth) {
      return {
        style: { left: 0 },
        position: HorizontalPosition.VIEWPORT_LEFT,
      };
    }

    // Otherwise, align with left edge of anchor
    return {
      style: { left: leftAligned },
      position: HorizontalPosition.LEFT,
    };
  }

  // Default fallback - shouldn't reach here but just in case
  return {
    style: { left: Math.max(0, idealCenterPosition) },
    position: HorizontalPosition.CENTER,
  };
};
