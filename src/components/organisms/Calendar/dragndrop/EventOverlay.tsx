"use client";

import { StyledCard } from "../styles";
import { DragOverlay } from "@dnd-kit/core";
import { GetCellPosition, GetVerticalCellPosition } from "../types";
import { useActiveEvent } from "../hooks/useActiveEvent";
import { useCellKeyframes } from "../hooks/useCellKeyframes";
import { CSSProperties } from "react";

const style: CSSProperties = {
  top: 0,
  opacity: 0,
  height: "auto",
  position: "absolute",
  pointerEvents: "none",
  backgroundColor: "red",
};

type EventOverlayProps = {
  isDragging: boolean;
  getCellPosition: GetCellPosition;
  getVerticalCellPosition: GetVerticalCellPosition;
};

export const EventOverlay = ({
  getVerticalCellPosition,
  getCellPosition,
  isDragging,
}: EventOverlayProps) => {
  const activeEvent = useActiveEvent();
  const keyframes = useCellKeyframes(getCellPosition);
  const cellPosition = getVerticalCellPosition(activeEvent);

  return (
    <DragOverlay
      adjustScale={true}
      style={{
        ...style,
        opacity: isDragging ? 0 : 1,
      }}
      dropAnimation={
        isDragging
          ? null
          : {
              keyframes,
              duration: 550,
              easing: "linear",
            }
      }
    >
      {activeEvent && <StyledCard $cellPosition={cellPosition} />}
    </DragOverlay>
  );
};
