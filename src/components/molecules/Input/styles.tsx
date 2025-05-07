import { componentsCSS, fontSizeCSS, fontWeightCSS, neutralCSS } from "@/theme";
import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: ${fontSizeCSS("lg")};
  font-weight: ${fontWeightCSS("medium")};
  color: ${componentsCSS("Input.color.text.default")};
  background-color: transparent;
  width: 100%;
  outline: none;
  border: none;
  &::placeholder {
    color: ${neutralCSS("500")};
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
