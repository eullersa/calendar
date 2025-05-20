import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { StyledColumnCard } from "./styles";

export const DraggableCard = ({
  id,
  inset,
  data,
  isOverlaying,
}: {
  id: string;
  inset: string;
  data: Record<string, string>;
  isOverlaying: boolean;
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        opacity: isOverlaying ? "0" : "1",
      }
    : undefined;

  return (
    <StyledColumnCard
      $inset={inset}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    />
  );
};
