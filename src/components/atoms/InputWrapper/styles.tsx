import { componentsCSS } from "@/theme";
import { Flex } from "@/ui/primitives/Flex/Flex";
import styled from "styled-components";

type StyledInputWrapperProps = {
  $isFocused?: boolean;
  $position?: "left" | "right";
  $isError?: boolean;
};

export const StyledInputWrapper = styled(Flex)<StyledInputWrapperProps>`
  transition: all 0.15s ease-in-out;
  border-radius: ${componentsCSS("Input.border.radius.default")};
  border: ${({ $isFocused, $isError }) =>
    $isError
      ? componentsCSS("Input.color.border.error")
      : $isFocused
        ? componentsCSS("Input.color.border.focus")
        : componentsCSS("Input.color.border.default")};
  padding: ${componentsCSS("Input.padding.default")};
  width: 100%;
  cursor: pointer;
  flex-direction: ${({ $position }) =>
    $position === "right" ? "row-reverse" : "row"};
`;
