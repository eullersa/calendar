import { componentsCSS, fontSizeCSS, fontWeightCSS } from "@/theme";
import styled from "styled-components";

type StyledInputProps = {
  $isDisabled?: boolean;
};

export const StyledInput = styled.input<StyledInputProps>`
  font-size: ${fontSizeCSS("lg")};
  font-weight: ${fontWeightCSS("medium")};
  color: ${({ $isDisabled }) =>
    $isDisabled
      ? componentsCSS("Input.color.text.disabled")
      : componentsCSS("Input.color.text.default")};
  background-color: transparent;
  width: 100%;
  outline: none;
  border: none;
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "text")};
  &::placeholder {
    color: ${componentsCSS("Input.color.text.disabled")};
    font-weight: ${fontWeightCSS("regular")};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    // remove autofill background color
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;
