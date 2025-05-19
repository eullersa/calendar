import { ElementPosition } from "@/hooks/useElementPosition";
import { calculateVerticalPosition } from "./calculateVerticalPosition";
import { calculateHorizontalPosition } from "./calculateHorizontalPosition";

type CalculatePositionCSSParameters = {
  anchorElement: ElementPosition;
  dropdownHeight: number;
  dropdownWidth: number;
  viewportHeight: number;
  viewportWidth: number;
  maxHeight: number;
  gap: number;
  isSearchable?: boolean;
};

export const calculatePositionCSS = ({
  anchorElement,
  dropdownHeight,
  dropdownWidth,
  viewportHeight,
  viewportWidth,
  maxHeight,
  gap = 0,
  isSearchable = false,
}: CalculatePositionCSSParameters) => {
  const vertical = calculateVerticalPosition(
    anchorElement,
    dropdownHeight,
    viewportHeight,
    maxHeight,
    gap,
    isSearchable
  );

  const horizontal = calculateHorizontalPosition(
    anchorElement,
    dropdownWidth,
    viewportWidth
  );

  return {
    ...vertical.style,
    ...horizontal.style,
  } as const;
};
