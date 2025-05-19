import { ElementPosition } from "@/hooks/useElementPosition";
import { useMeasure, useWindowSize } from "react-use";
import { calculateHeight } from "../helpers/calculateHeight";
import { useMaxValue } from "@/hooks/useMaxValue";
import { calculatePositionCSS } from "../helpers/calculatePositionCSS";

export const useDropdownPosition = (
  anchorElement: ElementPosition,
  gap: number = 0,
  isSearchable?: boolean
) => {
  const { height: viewportHeight, width: viewportWidth } = useWindowSize();
  const [ref, { height: dropdownHeight, width: dropdownWidth }] =
    useMeasure<HTMLDivElement>();
  const maxHeight = useMaxValue(dropdownHeight);

  const style = calculatePositionCSS({
    anchorElement,
    dropdownHeight,
    dropdownWidth,
    viewportHeight,
    viewportWidth,
    maxHeight,
    gap,
    isSearchable,
  });

  const { top: dropdownY } = style;
  const { top: anchorY } = anchorElement;

  const height = calculateHeight({
    isSearchable,
    maxHeight,
    viewportHeight,
    dropdownY,
    anchorY,
    gap,
  });

  return {
    ref,
    style,
    height,
  };
};
