import { getCssVar } from "@/theme";
import styled from "styled-components";

export const StyledErrorMessage = styled.span`
  font-size: ${getCssVar("typography.fontSize.sm")};
  font-weight: ${getCssVar("typography.fontWeight.medium")};
`;

export const StyledLabel = styled.label`
  font-size: ${getCssVar("typography.fontSize.lg")};
`;
