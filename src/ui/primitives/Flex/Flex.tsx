"use client";

import styled from "styled-components";

type FlexProps = {
  $justify?: "space-between" | "center" | "flex-start" | "flex-end";
  $align?: "center" | "flex-start" | "flex-end" | "stretch";
  $wrap?: "nowrap" | "wrap" | "wrap-reverse" | boolean;
  $vertical?: boolean;
  $flex?: string;
  $gap?: number;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ $justify }) => $justify || "flex-start"};
  align-items: ${({ $align }) => $align || "flex-start"};
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};
  flex-direction: ${({ $vertical }) => ($vertical ? "column" : "row")};
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : "0")};
  flex: ${({ $flex }) => $flex || "none"};
`;
