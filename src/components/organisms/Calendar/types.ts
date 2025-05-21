import { useCellPosition } from "./hooks/useCellPosition";
import { useActiveEvent } from "./hooks/useActiveEvent";
import { useEvents } from "./hooks/useEvents";

export enum EventType {
  DRAGGING = "dragging",
  EVENT = "event",
}

export enum TimeSlotData {
  WEEKDAY = "data-weekday",
  TIME = "data-time",
}

export type EventTimeSlot = {
  weekDay: number;
  time: number;
  duration: number;
  type: EventType;
};

export type EventOverlay = ReturnType<typeof useActiveEvent>;

export type TimeSlot = Pick<EventTimeSlot, "weekDay" | "time">;

export type GetCellPosition = ReturnType<
  typeof useCellPosition
>["getCellPosition"];

export type GetVerticalCellPosition = ReturnType<
  typeof useCellPosition
>["getVerticalCellPosition"];

export type UpdateEventDragging = ReturnType<
  typeof useEvents
>["updateEventDragging"];

export type EventDraggable = ReturnType<typeof useEvents>["eventDraggable"];

export type AddEvent = ReturnType<typeof useEvents>["addEvent"];
