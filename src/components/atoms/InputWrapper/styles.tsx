import { componentsCSS, getCssVar, semanticCSS } from "@/theme";
import { Flex } from "@/ui/primitives/Flex/Flex";
import styled from "styled-components";

type StyledInputWrapperProps = {
  $isFocused?: boolean;
  $position?: "left" | "right";
  $isError?: boolean;
};

export const StyledInputWrapper = styled(Flex)<StyledInputWrapperProps>`
  transition: all 0.15s ease-in-out;
  border-radius: ${semanticCSS("cornerCard")};
  border: 2px solid
    ${({ $isFocused }) =>
      $isFocused
        ? componentsCSS("Input.borderColorHovered")
        : componentsCSS("Input.borderColor")};
  padding: ${getCssVar("primitive.space.2")};
  height: 50px;
  width: 100%;
  cursor: pointer;
  flex-direction: ${({ $position }) =>
    $position === "right" ? "row-reverse" : "row"};
`;
