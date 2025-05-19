import { componentsCSS, fontSizeCSS, fontWeightCSS } from "@/theme";
import styled, { css } from "styled-components";

type StyledInputProps = {
  $isDisabled?: boolean;
  $removePointerEvents?: boolean;
  $filledPlaceholder?: boolean;
};

const defaultFont = ($isDisabled: StyledInputProps["$isDisabled"]) => css`
  font-size: ${fontSizeCSS("lg")};
  font-weight: ${fontWeightCSS("medium")};
  color: ${$isDisabled
    ? componentsCSS("Input.color.text.disabled")
    : componentsCSS("Input.color.text.default")};
`;

export const StyledInput = styled.input<StyledInputProps>`
  ${({ $isDisabled }) => defaultFont($isDisabled)}
  background-color: transparent;
  width: 100%;
  outline: none;
  border: none;
  ${({ $removePointerEvents }) =>
    $removePointerEvents &&
    css`
      pointer-events: none;
      user-select: none;
    `}
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "text")};
  &::placeholder {
    ${({ $filledPlaceholder, $isDisabled }) =>
      $filledPlaceholder
        ? defaultFont($isDisabled)
        : css`
            color: ${componentsCSS("Input.color.text.disabled")};
            font-weight: ${fontWeightCSS("regular")};
            font-size: ${fontSizeCSS("lg")};
          `}
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    // remove autofill background color
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;
