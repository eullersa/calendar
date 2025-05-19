import { ElementPosition } from "@/hooks/useElementPosition";
import { VerticalPosition } from "../types";
import { DROPDOWN_MAX_HEIGHT } from "../constants";

export const calculateVerticalPosition = (
  anchorElement: ElementPosition,
  dropdownHeight: number,
  viewportHeight: number,
  maxHeight: number,
  gap: number = 0,
  isSearchable: boolean = false
) => {
  // Precalculate common values
  const spaceAbove = anchorElement.top - gap;
  const spaceBelow = viewportHeight - anchorElement.bottom - gap;
  const enoughSpaceAbove = spaceAbove >= dropdownHeight;
  const enoughSpaceBelow = spaceBelow >= dropdownHeight;
  const dropdownY = spaceAbove - dropdownHeight;
  const isSpaceAboveOnMaxHeight = spaceAbove < DROPDOWN_MAX_HEIGHT;
  const isSpaceAboveGreaterThanSpaceBelow = spaceAbove > spaceBelow;

  // Case 0: If it's a search input and if the bottom space is smaller than the top space, we want to put in the top
  if (
    isSearchable &&
    isSpaceAboveGreaterThanSpaceBelow &&
    isSpaceAboveOnMaxHeight
  ) {
    return {
      style: {
        top: dropdownY > 0 ? dropdownY : gap,
      },
      position: VerticalPosition.TOP_SEARCHABLE,
    };
  }

  // Case 1: Not enough space anywhere, or content exceeds viewport
  if (
    (maxHeight > viewportHeight || !(enoughSpaceBelow || enoughSpaceAbove)) &&
    !isSearchable
  ) {
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
      style: { top: dropdownY },
      position: VerticalPosition.TOP,
    };
  }

  // Case 5: Default fallback - place below even if it overflows
  return {
    style: { top: anchorElement.bottom + gap },
    position: VerticalPosition.BOTTOM,
  };
};
