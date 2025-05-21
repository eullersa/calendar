"use client";

import { DndContext, DragMoveEvent, DragStartEvent } from "@dnd-kit/core";
import { restrictToWindowEdges, snapCenterToCursor } from "@dnd-kit/modifiers";
import { EventTimeSlot, UpdateEventDragging } from "../types";
import { getCellFromPoint } from "../helpers/getCellFromPoint";
import { updateEventTime } from "../helpers/updateEventTime";
import { usePointer } from "@/hooks/usePointer";
import { useEffect, useState } from "react";

type CalendarProps = {
  children: React.ReactNode;
  eventDraggable: EventTimeSlot | null;
  updateEventDragging: UpdateEventDragging;
  changeCalendar: (event: EventTimeSlot) => Promise<boolean>;
};

export const DndCalendar = ({
  children,
  updateEventDragging,
  eventDraggable,
  changeCalendar,
}: CalendarProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const mouse = usePointer();

  const handleDrag = (event: EventTimeSlot, x: number, y: number) => {
    const newTimeSlot = getCellFromPoint(x, y);
    if (!newTimeSlot) {
      updateEventDragging(null);
      return;
    }
    const updatedEvent = updateEventTime(event, newTimeSlot);
    updateEventDragging(updatedEvent);
  };

  const handleDragStart = ({ active }: DragStartEvent) => {
    setIsDragging(true);
    const event = active?.data?.current as EventTimeSlot;
    handleDrag(event, mouse.x, mouse.y);
  };

  const handleDragMove = ({ active }: DragMoveEvent) => {
    const event = active?.data?.current as EventTimeSlot;
    handleDrag(event, mouse.x, mouse.y);
  };

  const handleDragEnd = async () => {
    if (eventDraggable) {
      await changeCalendar(eventDraggable);
    }
    setIsDragging(false);
  };

  useEffect(() => {
    if (!isDragging) {
      updateEventDragging(null);
    }
  }, [isDragging, updateEventDragging]);

  return (
    <DndContext
      modifiers={[restrictToWindowEdges, snapCenterToCursor]}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
    >
      {children}
    </DndContext>
  );
};
