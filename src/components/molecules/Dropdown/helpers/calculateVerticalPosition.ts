import { ElementPosition } from "@/hooks/useElementPosition";
import { VerticalPosition } from "../types";

export const calculateVerticalPosition = (
  anchorElement: ElementPosition,
  dropdownHeight: number,
  viewportHeight: number,
  maxHeight: number,
  gap: number = 0
): {
  style: React.CSSProperties;
  position: VerticalPosition;
} => {
  // Precalculate common values
  const spaceAbove = anchorElement.top - gap;
  const spaceBelow = viewportHeight - anchorElement.bottom - gap;
  const enoughSpaceAbove = spaceAbove >= dropdownHeight;
  const enoughSpaceBelow = spaceBelow >= dropdownHeight;

  // Case 1: Not enough space anywhere, or content exceeds viewport
  if (maxHeight > viewportHeight || !(enoughSpaceBelow || enoughSpaceAbove)) {
    return {
      style: { top: Math.max(0, viewportHeight / 2 - dropdownHeight / 2) },
      position: VerticalPosition.CENTER,
    };
  }

  // Case 2: Anchor element is outside viewport (scrolled past bottom)
  if (anchorElement.bottom > viewportHeight) {
    return {
      style: { bottom: gap },
      position: VerticalPosition.TOP_BOTTOM,
    };
  }

  // Case 3: Prefer below if there's enough space
  if (enoughSpaceBelow) {
    return {
      style: { top: anchorElement.bottom + gap },
      position: VerticalPosition.BOTTOM,
    };
  }

  // Case 4: Place above if there's enough space
  if (enoughSpaceAbove) {
    return {
      style: { top: spaceAbove - dropdownHeight },
      position: VerticalPosition.TOP,
    };
  }

  // Case 5: Default fallback - place below even if it overflows
  return {
    style: { top: anchorElement.bottom + gap },
    position: VerticalPosition.BOTTOM,
  };
};
