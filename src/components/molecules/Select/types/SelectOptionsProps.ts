import React from "react";
import { SelectItems } from "../types";

export interface SelectOptionItemProps {
  item: SelectItems[number];
  isSelected: boolean;
  isFocused: boolean;
  onClick: () => void;
  itemsRef: React.MutableRefObject<Map<string, HTMLInputElement>>;
}

export interface SelectEmptyStateProps {
  noFoundMessage: string;
}
