import React, { useRef, useState } from "react";
import { StyledInput } from "@/components/molecules/Input";
import { InputWrapper } from "@/components/atoms/InputWrapper";
import { InputIcon } from "@/components/atoms/InputIcon";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isError?: boolean;
  onClickIcon?: () => void;
};

export const Input = ({
  placeholder = "Type here...",
  icon,
  iconPosition = "left",
  isError,
  onClickIcon,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isActive = !!rest.value || isFocused;

  const handleFocus = () => {
    if (rest.disabled) return;
    inputRef.current?.focus();
  };

  return (
    <InputWrapper
      iconPosition={iconPosition}
      isFocused={isFocused}
      isError={isError}
      isDisabled={rest.disabled}
      onClick={handleFocus}
    >
      <InputIcon
        isActive={isActive}
        icon={icon}
        isError={isError}
        isDisabled={rest.disabled}
        onClickIcon={onClickIcon}
      />
      <StyledInput
        {...rest}
        ref={inputRef}
        $isDisabled={rest.disabled}
        placeholder={placeholder}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
    </InputWrapper>
  );
};
