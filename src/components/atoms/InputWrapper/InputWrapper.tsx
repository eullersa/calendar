import React from "react";
import { StyledInputWrapper } from "@/components/atoms/InputWrapper";

export type InputWrapperProps = {
  onClick?: () => void;
  isError?: boolean;
  isFocused?: boolean;
  children: React.ReactNode;
  iconPosition?: "left" | "right";
};

export const InputWrapper = ({
  onClick,
  isError,
  isFocused,
  children,
  iconPosition = "left",
}: InputWrapperProps) => (
  <StyledInputWrapper
    onClick={onClick}
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
