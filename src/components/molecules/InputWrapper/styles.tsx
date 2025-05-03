import { getCssVar } from "@/theme";
import { Flex } from "@/ui/primitives/Flex/Flex";
import styled from "styled-components";

type StyledInputWrapperProps = {
  $isFocused?: boolean;
  $position?: "left" | "right";
  $isError?: boolean;
};

export const StyledInputWrapper = styled(Flex)<StyledInputWrapperProps>`
  transition: all 0.15s ease-in-out;
  border-radius: ${getCssVar("radii.lg")};
  border: 2px solid
    ${({ $isFocused }) =>
      $isFocused
        ? getCssVar("colors.neutral.700")
        : getCssVar("colors.neutral.400")};
  padding: ${getCssVar("space.2")};
  height: 50px;
  width: 100%;
  cursor: pointer;
  flex-direction: ${({ $position }) =>
    $position === "right" ? "row-reverse" : "row"};
  & > input::placeholder {
    color: ${getCssVar("colors.neutral.400")};
    font-weight: ${getCssVar("typography.fontWeight.regular")};
  }
`;
