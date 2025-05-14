import { DROPDOWN_SPACE_THRESHOLD } from "../constants";

export const calculateHeight = (maxHeight: number, viewportHeight: number) => {
  if (!maxHeight || maxHeight < 20) return "100%";
  return maxHeight > viewportHeight
    ? viewportHeight - DROPDOWN_SPACE_THRESHOLD
    : maxHeight;
};
