import {
  DROPDOWN_SPACE_THRESHOLD,
  DROPDOWN_MIN_HEIGHT_THRESHOLD,
} from "../constants";

type CalculateHeightProps = {
  maxHeight: number;
  viewportHeight: number;
  isSearchable?: boolean;
  dropdownY?: number;
  gap?: number;
  anchorY: number;
};

export const calculateHeight = ({
  maxHeight,
  viewportHeight,
  isSearchable,
  dropdownY = 0,
  gap,
  anchorY,
}: CalculateHeightProps) => {
  const availableTopSpace =
    viewportHeight - dropdownY - DROPDOWN_SPACE_THRESHOLD / 2;

  if (isSearchable) {
    if (gap === dropdownY) {
      return anchorY;
    }

    return availableTopSpace;
  }

  if (!maxHeight || maxHeight < DROPDOWN_MIN_HEIGHT_THRESHOLD) {
    return "100%";
  }

  return maxHeight + DROPDOWN_SPACE_THRESHOLD > viewportHeight
    ? viewportHeight - DROPDOWN_SPACE_THRESHOLD
    : maxHeight;
};
