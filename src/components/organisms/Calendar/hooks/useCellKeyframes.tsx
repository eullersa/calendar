"use client";

import { KeyframeResolverParameters } from "@dnd-kit/core/dist/components/DragOverlay/hooks/useDropAnimation";
import { EventTimeSlot, GetCellPosition } from "../types";
import { getCellFromPoint } from "../helpers/getCellFromPoint";

export const useCellKeyframes = (getCellPosition: GetCellPosition) => {
  const keyframes = (event: KeyframeResolverParameters) => {
    const active = event.active.data.current as EventTimeSlot;
    const { top, left, width, height } = event.dragOverlay.rect;
    const cell = getCellFromPoint(left + width / 2, top + height / 2);

    if (!cell) {
      const {
        transform: { final, initial },
      } = event;

      const transformInitial = `translate3d(${initial.x}px, ${initial.y}px, 0)`;
      const transformFinal = `translate3d(${final.x}px, ${final.y}px, 0)`;

      return [
        {
          opacity: 1,
          transform: transformInitial,
        },
        {
          opacity: 1,
          transform: transformFinal,
        },
      ];
    }

    const { top: initialTop, left: initialLeft } = getCellPosition(active);
    const { top: finalTop, left: finalLeft } = getCellPosition(cell);

    const finalX = finalLeft - initialLeft;
    const finalY = finalTop - initialTop;

    const transformInitial = `translate3d(${finalX}px, ${finalY}px, 0)`;
    const transformFinal = `translate3d(${0}px, ${0}px, 0)`;

    return [
      {
        opacity: 1,
        transform: transformInitial,
      },
      {
        opacity: 1,
        transform: transformFinal,
      },
    ];
  };

  return keyframes;
};
