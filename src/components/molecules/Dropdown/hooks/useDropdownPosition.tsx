import { ElementPosition } from "@/hooks/useElementPosition";
import { useMeasure, useWindowSize } from "react-use";
import { calculateHeight } from "../helpers/calculateHeight";
import { useMaxValue } from "@/hooks/useMaxValue";
import { calculatePositionCSS } from "../helpers/calculatePositionCSS";

export const useDropdownPosition = (
  anchorElement: ElementPosition,
  gap: number = 0
) => {
  const { height: viewportHeight, width: viewportWidth } = useWindowSize();
  const [ref, { height: dropdownHeight, width: dropdownWidth }] =
    useMeasure<HTMLDivElement>();
  const maxHeight = useMaxValue(dropdownHeight);

  const positionStyle = calculatePositionCSS({
    anchorElement,
    dropdownHeight,
    dropdownWidth,
    viewportHeight,
    viewportWidth,
    maxHeight,
    gap,
  });

  const style: React.CSSProperties = {
    ...positionStyle,
  };

  const height = calculateHeight(maxHeight, viewportHeight);

  return {
    ref,
    style,
    height,
  };
};
