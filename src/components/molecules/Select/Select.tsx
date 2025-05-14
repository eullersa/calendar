import React, { useState } from "react";
import {
  InputWrapper,
  StyledInputWrapper,
} from "@/components/atoms/InputWrapper";
import { InputIcon } from "@/components/atoms/InputIcon";
import { StyledSelectedItem, StyledSelectedOptions } from "./styles";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { useElementPosition } from "@/hooks/useElementPosition";
import { Dropdown } from "../Dropdown";
import { Flex } from "@/ui/primitives/Flex/Flex";

export type SelectProps = {
  isError?: boolean;
  placeholder?: string;
  disabled?: boolean;
  items: Array<{
    label: string;
    value: string;
  }>;
};

export const Select = ({
  isError,
  placeholder = "- Select an option -",
  disabled = false,
  items,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption] = useState<string | undefined>(undefined);
  const { ref, position } = useElementPosition(isOpen);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Flex>
      <InputWrapper
        isFocused={isOpen}
        isError={isError}
        onClick={handleToggle}
        isDisabled={disabled}
        iconPosition="right"
        cursor="pointer"
        ref={ref}
      >
        <InputIcon
          icon={isOpen ? <LuChevronUp /> : <LuChevronDown />}
          isError={isError}
          isActive={isOpen}
          isDisabled={disabled}
        />
        <StyledSelectedOptions $isDisabled={!selectedOption || disabled}>
          {selectedOption || placeholder}
        </StyledSelectedOptions>
      </InputWrapper>
      <Dropdown isOpen={isOpen} anchorPosition={position} onClose={handleClose}>
        {(maxHeight) => {
          return (
            <StyledInputWrapper
              $stripTransition
              $stripPadding
              style={{
                maxHeight,
              }}
            >
              <Flex $fullWidth $vertical style={{ overflowY: "auto" }}>
                {items?.map((item) => (
                  <StyledSelectedItem key={item.value}>
                    {item.label}
                  </StyledSelectedItem>
                ))}
              </Flex>
            </StyledInputWrapper>
          );
        }}
      </Dropdown>
    </Flex>
  );
};
