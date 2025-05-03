import React, { useRef, useState } from "react";
import { StyledInput } from "./styles";
import { InputWrapper } from "../InputWrapper";
import { InputIcon } from "../InputIcon";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isError?: boolean;
};

export const Input = ({
  placeholder = "Type here...",
  icon,
  iconPosition = "left",
  isError,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isActive = !!rest.value || isFocused;

  return (
    <InputWrapper
      iconPosition={iconPosition}
      isFocused={isFocused}
      isError={isError}
      inputRef={inputRef}
    >
      <InputIcon isActive={isActive} icon={icon} />
      <StyledInput
        {...rest}
        ref={inputRef}
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
