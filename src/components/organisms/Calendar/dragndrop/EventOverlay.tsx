"use client";

import { StyledCard } from "../styles";
import { DragOverlay } from "@dnd-kit/core";
import styled from "styled-components";
import { GetCellPosition, GetVerticalCellPosition } from "../types";
import { useActiveEvent } from "../hooks/useActiveEvent";
import { useCellKeyframes } from "../hooks/useCellKeyframes";

const StyledDragOverlay = styled(DragOverlay)`
  top: 0 !important;
  opacity: 0;
  height: auto !important;
  position: absolute !important;
  pointer-events: none;
`;

type EventOverlayProps = {
  getCellPosition: GetCellPosition;
  getVerticalCellPosition: GetVerticalCellPosition;
};

export const EventOverlay = ({
  getVerticalCellPosition,
  getCellPosition,
}: EventOverlayProps) => {
  const activeEvent = useActiveEvent();
  const keyframes = useCellKeyframes(getCellPosition);
  const cellPosition = getVerticalCellPosition(activeEvent);

  return (
    <StyledDragOverlay
      adjustScale={true}
      dropAnimation={{
        keyframes,
        duration: 550,
        easing: "linear",
      }}
    >
      {activeEvent && <StyledCard $cellPosition={cellPosition} />}
    </StyledDragOverlay>
  );
};
