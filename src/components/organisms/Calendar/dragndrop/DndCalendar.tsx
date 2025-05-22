"use client";

import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragStartEvent,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  restrictToFirstScrollableAncestor,
  snapCenterToCursor,
} from "@dnd-kit/modifiers";
import {
  EventTimeSlot,
  MarkEventAsConfirmed,
  MarkEventAsPending,
  UpdateEventPosition,
  UpdateEventDragging,
} from "../types";
import { getCellFromPoint } from "../helpers/getCellFromPoint";
import { updateEventTime } from "../helpers/updateEventTime";
import { usePointer } from "@/hooks/usePointer";
import { useEffect, useState } from "react";
import { StyledCalendar } from "../styles";
import { useCompensateScroll } from "../hooks/useCompensateScroll";

type CalendarProps = {
  children: React.ReactNode;
  eventDraggable: EventTimeSlot | null;
  updateEventDragging: UpdateEventDragging;
  updateEventPosition: UpdateEventPosition;
  changeCalendar: (event: EventTimeSlot) => Promise<boolean>;
  markEventAsPending: MarkEventAsPending;
  markEventAsConfirmed: MarkEventAsConfirmed;
};

export const DndCalendar = ({
  children,
  updateEventPosition,
  updateEventDragging,
  eventDraggable,
  changeCalendar,
  markEventAsPending,
  markEventAsConfirmed,
}: CalendarProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const mouse = usePointer(isDragging);
  const { compensateScroll, scrollRef } = useCompensateScroll();

  const handleDrag = (event: EventTimeSlot, x: number, y: number) => {
    const newTimeSlot = getCellFromPoint(x, y);
    if (!newTimeSlot) {
      updateEventDragging(null);
      return;
    }
    const updatedEvent = updateEventTime(event, newTimeSlot);
    updateEventDragging(updatedEvent);
  };

  const handleDragStart = ({ active, activatorEvent }: DragStartEvent) => {
    setIsDragging(true);
    const event = active?.data?.current as EventTimeSlot;
    const activator = activatorEvent as PointerEvent;
    handleDrag(event, activator.x, activator.y);
  };

  const handleDragMove = ({ active, activatorEvent }: DragMoveEvent) => {
    const event = active?.data?.current as EventTimeSlot;
    if (mouse.x === 0 && mouse.y === 0) {
      const activator = activatorEvent as PointerEvent;
      handleDrag(event, activator.x, activator.y);
      return;
    }
    handleDrag(event, mouse.x, mouse.y);
  };

  const confirmEvent = async (event: EventTimeSlot) => {
    markEventAsPending(event);
    const isConfirmed = await changeCalendar(event);
    if (isConfirmed) {
      updateEventPosition(event);
      updateEventDragging(null);
      return;
    }
    markEventAsConfirmed(event);
  };

  const handleDragEnd = async ({ active }: DragEndEvent) => {
    try {
      const event = active?.data?.current as EventTimeSlot;

      if (
        event.time === eventDraggable?.time &&
        event.weekDay === eventDraggable?.weekDay
      ) {
        return;
      }

      if (eventDraggable) {
        await confirmEvent(event);
      }
    } catch (e) {
      console.error("Error during drag end:", e);
    } finally {
      setIsDragging(false);
    }
  };

  const handleDragCancel = () => {
    setIsDragging(false);
  };

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const sensors = useSensors(mouseSensor);

  useEffect(() => {
    if (!isDragging) {
      updateEventDragging(null);
    }
  }, [isDragging, updateEventDragging]);

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
      onDragAbort={handleDragCancel}
      onDragCancel={handleDragCancel}
      modifiers={[
        compensateScroll,
        snapCenterToCursor,
        restrictToFirstScrollableAncestor,
      ]}
      sensors={sensors}
    >
      <StyledCalendar ref={scrollRef}>{children}</StyledCalendar>
    </DndContext>
  );
};
