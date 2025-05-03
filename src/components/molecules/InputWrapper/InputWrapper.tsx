import { StyledInputWrapper } from "./styles";
import React from "react";

export type InputWrapperProps = {
  inputRef?: React.RefObject<HTMLInputElement | null>;
  isError?: boolean;
  isFocused?: boolean;
  children: React.ReactNode;
  iconPosition?: "left" | "right";
};

export const InputWrapper = ({
  children,
  isError,
  isFocused,
  inputRef,
  iconPosition = "left",
}: InputWrapperProps) => (
  <StyledInputWrapper
    onClick={() => inputRef?.current?.focus()}
    $align="center"
    $justify="center"
    $position={iconPosition}
    $isFocused={isFocused}
    $isError={isError}
    $gap={6}
  >
    {children}
  </StyledInputWrapper>
);
