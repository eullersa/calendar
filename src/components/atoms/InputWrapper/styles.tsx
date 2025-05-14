import { componentsCSS } from "@/theme";
import { Flex } from "@/ui/primitives/Flex/Flex";
import styled, { css } from "styled-components";

type StyledInputWrapperProps = {
  $isFocused?: boolean;
  $position?: "left" | "right";
  $isError?: boolean;
  $isDisabled?: boolean;
  $cursor?: string;
  $background?: string;
  $stripScrollbar?: boolean;
  $stripTransition?: boolean;
  $stripPadding?: boolean;
};

export const StyledInputWrapper = styled(Flex)<StyledInputWrapperProps>`
  ${({ $stripScrollbar }) =>
    $stripScrollbar &&
    css`
      scrollbar-width: none;
    `}
  ${({ $stripTransition }) =>
    $stripTransition
      ? css`
          transition: none;
        `
      : css`
          transition: all 0.15s ease-in-out;
        `}
  border-radius: ${componentsCSS("Input.border.radius.default")};
  border: ${({ $isFocused, $isError }) =>
    $isError
      ? componentsCSS("Input.color.border.error")
      : $isFocused
      ? componentsCSS("Input.color.border.focus")
      : componentsCSS("Input.color.border.default")};
  ${({ $stripPadding }) =>
    $stripPadding
      ? css`
          padding: 0;
        `
      : css`
          padding: ${componentsCSS("Input.padding.default")};
        `}
  width: 100%;
  cursor: ${({ $isDisabled, $cursor }) =>
    $isDisabled ? "not-allowed" : $cursor};
  flex-direction: ${({ $position }) =>
    $position === "right" ? "row-reverse" : "row"};
  background: ${({ $background }) =>
    $background || componentsCSS("Modal.background.default")};
  overflow-y: auto;
`;
