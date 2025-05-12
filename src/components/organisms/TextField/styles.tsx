import { componentsCSS, getCssVar } from "@/theme";
import styled from "styled-components";

export const StyledErrorMessage = styled.span`
  font-size: ${getCssVar("primitive.typography.fontSize.sm")};
  font-weight: ${getCssVar("primitive.typography.fontWeight.medium")};
  color: ${componentsCSS("Input.color.text.error")};
`;
