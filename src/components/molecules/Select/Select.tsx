import React, { useState } from "react";
import { InputWrapper } from "@/components/atoms/InputWrapper";
import { InputIcon } from "@/components/atoms/InputIcon";
import { StyledSelectedOptions, StyledSelect } from "./styles";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { useElementPosition } from "@/hooks/useElementPosition";
import { Dropdown } from "../Dropdown";
import { StyledInput } from "../Input";
import { SelectItems } from "./types";
import { SelectOptions } from "./SelectOptions";
import { searchItems } from "./helpers/searchItems";
import { findItemByValue } from "./helpers/findItemByValue";

export type SelectProps = {
  isSearchable?: boolean;
  isError?: boolean;
  noFoundMessage?: string;
  placeholder?: string;
  disabled?: boolean;
  items: SelectItems;
  value?: string;
  icon?: React.ReactNode;
  maxWidth?: number;
  onChange?: (value: SelectItems[number]["value"]) => void;
};

export const Select = ({
  isSearchable = false,
  isError,
  noFoundMessage = "No results found",
  placeholder = "- Select an option -",
  disabled = false,
  items,
  value,
  icon,
  maxWidth,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  const valueToUse = value ?? selectedOption;

  const filteredItems = isSearchable ? searchItems(items, searchValue) : items;

  const { value: inputValue, label: inputLabel } = findItemByValue(
    filteredItems,
    valueToUse
  );

  const inputPlaceholder = !!inputLabel ? inputLabel : placeholder;

  const isSearchOpen = isOpen && isSearchable;

  const isIconActive = !!icon && (isOpen || !!inputLabel);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchValue("");
  };

  const handleSelectValue = (item: SelectItems[number]) => {
    setSelectedOption(item.value);
    onChange?.(item.value);
    // handleClose();
  };

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  const { ref, position } = useElementPosition(isOpen);

  return (
    <StyledSelect $maxWidth={maxWidth}>
      <InputWrapper
        isFocused={isOpen}
        isError={isError}
        onClick={handleToggle}
        isDisabled={disabled}
        iconPosition="left"
        cursor="pointer"
        ref={ref}
      >
        <InputIcon
          icon={icon}
          isActive={isIconActive}
          isDisabled={disabled}
          isError={isError}
        />
        <StyledSelectedOptions $isDisabled={!inputValue || disabled}>
          {isSearchOpen ? (
            <StyledInput
              $isDisabled={disabled}
              $filledPlaceholder={!!inputLabel}
              onClick={handleSearchClick}
              onChange={handleSearchValue}
              $removePointerEvents={false}
              placeholder={inputPlaceholder}
              value={searchValue}
              autoFocus={true}
              key="search-input"
              tabIndex={0}
            />
          ) : (
            <StyledInput
              $isDisabled={disabled}
              onChange={handleToggle}
              $removePointerEvents={true}
              placeholder={inputPlaceholder}
              value={inputLabel}
              key="select-input"
              tabIndex={0}
            />
          )}
        </StyledSelectedOptions>
        <InputIcon
          icon={isOpen ? <LuChevronUp /> : <LuChevronDown />}
          isActive={isOpen}
          isDisabled={disabled}
        />
      </InputWrapper>
      <Dropdown
        isOpen={isOpen}
        anchorPosition={position}
        onClose={handleClose}
        key={items?.length}
        isSearchable={isSearchable}
      >
        {(maxHeight) => (
          <SelectOptions
            items={filteredItems}
            handleClose={handleClose}
            selectedOption={inputValue}
            onChange={handleSelectValue}
            maxHeight={maxHeight}
            noFoundMessage={noFoundMessage}
          />
        )}
      </Dropdown>
    </StyledSelect>
  );
};
