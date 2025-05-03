import { Flex } from "@/ui/primitives/Flex/Flex";
import styled from "styled-components";

type StyledInputWrapperProps = {
  $isFocused?: boolean;
  $position?: "left" | "right";
  $isError?: boolean;
};

export const StyledInputWrapper = styled(Flex)<StyledInputWrapperProps>`
  transition: all 0.15s ease-in-out;
  border-radius: ${({ theme }) => theme.theme.borderRadius};
  border: 2px solid
    ${({ theme, $isFocused, $isError }) =>
      $isError
        ? theme.input.borderError
        : $isFocused
        ? theme.input.hover
        : theme.input.border};
  padding: ${({ theme }) => theme.input.padding};
  height: 50px;
  width: 100%;
  background-color: ${({ theme, $isError }) =>
    $isError ? theme.input.bgError : "transparent"};
  cursor: pointer;
  flex-direction: ${({ $position }) =>
    $position === "right" ? "row-reverse" : "row"};

  & > input::placeholder {
    color: ${({ theme }) => theme.input.placeholder};
    font-weight: 400;
  }
`;
