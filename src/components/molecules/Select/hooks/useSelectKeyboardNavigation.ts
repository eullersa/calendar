import { useCallback } from "react";
import { useKeyPressEvent } from "react-use";
import { SelectItems } from "../types";

export interface UseSelectKeyboardNavigationProps {
  items: SelectItems;
  focusedValue: string | undefined;
  setFocusedValue: (value: string | undefined) => void;
  itemsRef: React.MutableRefObject<Map<string, HTMLInputElement>>;
  onChange?: (value: SelectItems[number]) => void;
  handleClose?: () => void;
}

export const useSelectKeyboardNavigation = ({
  items,
  focusedValue,
  setFocusedValue,
  itemsRef,
  onChange,
  handleClose,
}: UseSelectKeyboardNavigationProps) => {
  // Handle navigation with arrow keys
  const handleNavigation = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();
      if (!items.length) return;

      const currentIndex = items.findIndex(
        (item) => item.value === focusedValue
      );
      const startIndex = currentIndex === -1 ? 0 : currentIndex;

      let nextIndex: number;
      if (e.key === "ArrowUp") {
        nextIndex = startIndex > 0 ? startIndex - 1 : items.length - 1;
      } else {
        nextIndex = startIndex < items.length - 1 ? startIndex + 1 : 0;
      }

      const nextValue = items[nextIndex].value;
      setFocusedValue(nextValue);

      const nextInput = itemsRef.current.get(nextValue);
      nextInput?.focus();
    },
    [items, focusedValue, setFocusedValue, itemsRef]
  );

  // Handle item selection with Enter
  const handleSelection = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();

      const selectedItem = items.find((item) => item.value === focusedValue);
      if (selectedItem) {
        onChange?.(selectedItem);
        handleClose?.();
      }
    },
    [items, focusedValue, onChange, handleClose]
  );

  // Handle closing dropdown with Escape
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();
      handleClose?.();
    },
    [handleClose]
  );

  // Register keyboard event handlers
  useKeyPressEvent(
    (e) => e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Tab",
    handleNavigation
  );
  useKeyPressEvent("Enter", handleSelection);
  useKeyPressEvent("Escape", handleEscape);

  return {
    handleNavigation,
    handleSelection,
    handleEscape,
  };
};
