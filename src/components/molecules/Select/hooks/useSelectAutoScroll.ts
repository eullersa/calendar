import { useEffect } from "react";

interface UseSelectAutoScrollProps {
  focusedValue: string | undefined;
  listRef: React.RefObject<HTMLDivElement | null>;
  itemsRef: React.RefObject<Map<string, HTMLInputElement>>;
}

export const useSelectAutoScroll = ({
  focusedValue,
  listRef,
  itemsRef,
}: UseSelectAutoScrollProps) => {
  // Scroll focused item into view
  useEffect(() => {
    if (!focusedValue || !listRef.current) return;

    const focusedInput = itemsRef.current.get(focusedValue);
    if (focusedInput) {
      const item = focusedInput.closest('[role="option"]') as HTMLElement;
      if (!item) return;

      const container = listRef.current;
      const itemTop = item.offsetTop;
      const itemBottom = itemTop + item.offsetHeight;
      const containerTop = container.scrollTop;
      const containerBottom = containerTop + container.clientHeight;

      if (itemTop < containerTop) {
        container.scrollTop = itemTop;
      } else if (itemBottom > containerBottom) {
        container.scrollTop = itemBottom - container.clientHeight;
      }
    }
  }, [focusedValue, listRef, itemsRef]);
};
