import { getCssVar } from "@/theme";
import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: ${getCssVar("typography.fontSize.lg")};
  font-weight: ${getCssVar("typography.fontWeight.medium")};
  background-color: ${getCssVar("colors.opacity.off")};
  width: 100%;
  outline: none;
  border: none;
`;
