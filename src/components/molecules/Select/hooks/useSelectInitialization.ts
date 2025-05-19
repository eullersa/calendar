import { useEffect, useCallback } from "react";
import { SelectItems } from "../types";

export interface UseSelectInitializationProps {
  items: SelectItems;
  selectedOption: string | undefined;
  setFocusedValue: (value: string | undefined) => void;
}

export const useSelectInitialization = ({
  items,
  selectedOption,
  setFocusedValue,
}: UseSelectInitializationProps) => {
  // Initialize focus
  useEffect(() => {
    if (items.length > 0) {
      const valueToFocus = selectedOption || items[0].value;
      setFocusedValue(valueToFocus);
    }
  }, [items, selectedOption, setFocusedValue]);

  // Handle direct click selection
  const handleClick = useCallback(
    (
      item: SelectItems[number],
      onChange?: (value: SelectItems[number]) => void,
      handleClose?: () => void
    ) => {
      onChange?.(item);
      handleClose?.();
    },
    []
  );

  return { handleClick };
};
