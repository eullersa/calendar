import { fontSizeCSS, fontWeightCSS, neutralCSS, semanticCSS } from "@/theme";
import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: ${fontSizeCSS("lg")};
  font-weight: ${fontWeightCSS("medium")};
  color: ${semanticCSS("textColor")};
  background-color: transparent;
  width: 100%;
  outline: none;
  border: none;
  &::placeholder {
    color: ${neutralCSS("500")};
    font-weight: ${fontWeightCSS("regular")};
  }
`;
