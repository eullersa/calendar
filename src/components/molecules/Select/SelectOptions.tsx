import React, { useState, useRef } from "react";
import { StyledInputWrapper } from "@/components/atoms/InputWrapper";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { SelectItems } from "./types";
import { SelectOptionItem, SelectEmptyState } from "./components";
import {
  useSelectAutoScroll,
  useSelectInitialization,
  useSelectKeyboardNavigation,
} from "./hooks";

export type SelectOptionProps = {
  items: SelectItems;
  selectedOption: string | undefined;
  maxHeight?: number | string;
  noFoundMessage?: string;
  onChange?: (value: SelectItems[number]) => void;
  handleClose?: () => void;
};

export const SelectOptions: React.FC<SelectOptionProps> = ({
  items,
  maxHeight,
  onChange,
  selectedOption,
  noFoundMessage = "No results found",
  handleClose,
}) => {
  // Refs for DOM elements
  const listRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Map<string, HTMLInputElement>>(new Map());

  // State for focused item
  const [focusedValue, setFocusedValue] = useState<string | undefined>(
    selectedOption
  );

  // Custom hooks
  const { handleClick } = useSelectInitialization({
    items,
    selectedOption,
    setFocusedValue,
  });

  useSelectAutoScroll({
    focusedValue,
    listRef,
    itemsRef,
  });

  useSelectKeyboardNavigation({
    items,
    focusedValue,
    setFocusedValue,
    itemsRef,
    onChange,
    handleClose,
  });

  return (
    <StyledInputWrapper $stripTransition $stripPadding style={{ maxHeight }}>
      <Flex
        $fullWidth
        $vertical
        ref={listRef}
        role="listbox"
        aria-activedescendant={
          focusedValue ? `option-${focusedValue}` : undefined
        }
        tabIndex={-1}
      >
        {items.length === 0 ? (
          <SelectEmptyState message={noFoundMessage} />
        ) : (
          items.map((item) => (
            <SelectOptionItem
              key={item.value}
              id={`option-${item.value}`}
              label={item.label}
              value={item.value}
              isSelected={item.value === selectedOption}
              isFocused={focusedValue === item.value}
              onClick={() => handleClick(item, onChange, handleClose)}
              onRef={(el) => {
                if (el) itemsRef.current.set(item.value, el);
                else itemsRef.current.delete(item.value);
              }}
            />
          ))
        )}
      </Flex>
    </StyledInputWrapper>
  );
};
