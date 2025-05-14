import React from "react";
import { StyledInputWrapper } from "@/components/atoms/InputWrapper";

export type InputWrapperProps = {
  onClick?: () => void;
  isError?: boolean;
  isFocused?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
  iconPosition?: "left" | "right";
  cursor?: "text" | "pointer" | "not-allowed" | "default";
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
};

export const InputWrapper = ({
  onClick,
  isError,
  isFocused,
  isDisabled,
  children,
  iconPosition = "left",
  cursor = "default",
  ref,
  className,
}: InputWrapperProps) => (
  <StyledInputWrapper
    onClick={onClick}
    $align="center"
    $justify="center"
    $position={iconPosition}
    $isFocused={isFocused}
    $isError={isError}
    $isDisabled={isDisabled}
    $gap={6}
    $cursor={cursor}
    ref={ref}
    className={className}
  >
    {children}
  </StyledInputWrapper>
);
