import { componentsCSS, fontSizeCSS, fontWeightCSS } from "@/theme";
import styled from "styled-components";

type StyledSelectedOptionsProps = {
  $isDisabled?: boolean;
};

export const StyledSelectedItem = styled.div`
  padding: 10px 20px;
  width: 100%;
  cursor: pointer;
  font-size: ${fontSizeCSS("lg")};
  &:hover {
    background: ${componentsCSS("ModalButton.background.hovered")};
  }
`;

export const StyledSelectedOptions = styled.span<StyledSelectedOptionsProps>`
  font-size: ${fontSizeCSS("lg")};
  font-weight: ${({ $isDisabled }) =>
    $isDisabled ? fontWeightCSS("regular") : fontWeightCSS("medium")};
  color: ${({ $isDisabled }) =>
    $isDisabled
      ? componentsCSS("Input.color.text.disabled")
      : componentsCSS("Input.color.text.default")};
  user-select: none;
  background-color: transparent;
  width: 100%;
  outline: none;
  border: none;
`;
