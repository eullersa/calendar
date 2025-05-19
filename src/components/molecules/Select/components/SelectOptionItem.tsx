import React from "react";
import { StyledSelectedItem, StyledSelectedRadio } from "../styles";

interface SelectOptionItemProps {
  id: string;
  label: string;
  value: string;
  isSelected: boolean;
  isFocused: boolean;
  onClick: () => void;
  onRef: (el: HTMLInputElement | null) => void;
}

export const SelectOptionItem: React.FC<SelectOptionItemProps> = ({
  id,
  label,
  value,
  isSelected,
  isFocused,
  onClick,
  onRef,
}) => {
  return (
    <StyledSelectedItem
      $isSelected={isSelected || isFocused}
      onClick={onClick}
      id={id}
      role="option"
      aria-selected={isSelected}
      data-testid={`select-option-${value}`}
    >
      {label}
      <StyledSelectedRadio
        type="radio"
        checked={isSelected}
        onChange={() => {}}
        value={value}
        data-radio-value={value}
        tabIndex={-1}
        ref={onRef}
      />
    </StyledSelectedItem>
  );
};

interface SelectEmptyStateProps {
  message: string;
}

export const SelectEmptyState: React.FC<SelectEmptyStateProps> = ({
  message,
}) => {
  return (
    <StyledSelectedItem
      $isSelected={false}
      $isDisabled={true}
      key="no-results"
      role="option"
      aria-disabled="true"
    >
      {message}
    </StyledSelectedItem>
  );
};
