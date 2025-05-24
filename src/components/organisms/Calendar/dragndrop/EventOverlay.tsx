"use client";

import { StyledCard } from "../styles";
import { DragOverlay } from "@dnd-kit/core";
import { GetVerticalCellPosition } from "../types";
import { useActiveEvent } from "../hooks/useActiveEvent";
import { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { keyframes } from "../helpers/keyframes";

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
  getVerticalCellPosition: GetVerticalCellPosition;
};

const EventOverlay = ({
  getVerticalCellPosition,
  isDragging,
}: EventOverlayProps) => {
  const activeEvent = useActiveEvent();
  const cellPosition = getVerticalCellPosition(activeEvent);

  return createPortal(
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
              easing: "linear",
            }
      }
    >
      {activeEvent && <StyledCard $cellPosition={cellPosition} />}
    </DragOverlay>,
    document.body
  );
};

export default EventOverlay;
