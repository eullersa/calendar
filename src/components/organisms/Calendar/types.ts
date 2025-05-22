import { useCellPosition } from "./hooks/useCellPosition";
import { useActiveEvent } from "./hooks/useActiveEvent";
import { useEvents } from "./hooks/useEvents";

export enum EventType {
  EVENT = "event",
  BLOCK = "block",
}

export enum TimeSlotData {
  TYPE = "data-type",
  WEEKDAY = "data-weekday",
  TIME = "data-time",
}

export enum EventStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  DRAGGING = "dragging",
}

export type EventTimeSlot = {
  weekDay: number;
  time: number;
  duration: number;
  type: EventType;
  status: EventStatus;
};

export type EventOverlay = ReturnType<typeof useActiveEvent>;

export type TimeSlot = Pick<EventTimeSlot, "weekDay" | "time">;

export type GetCellPosition = ReturnType<
  typeof useCellPosition
>["getCellPosition"];

export type MarkEventAsConfirmed = ReturnType<
  typeof useEvents
>["markEventAsConfirmed"];

export type MarkEventAsPending = ReturnType<
  typeof useEvents
>["markEventAsPending"];

export type GetVerticalCellPosition = ReturnType<
  typeof useCellPosition
>["getVerticalCellPosition"];

export type UpdateEventDragging = ReturnType<
  typeof useEvents
>["updateEventDragging"];

export type UpdateEventPosition = ReturnType<
  typeof useEvents
>["updateEventPosition"];

export type EventDraggable = ReturnType<typeof useEvents>["eventDraggable"];

export type AddEvent = ReturnType<typeof useEvents>["addEvent"];

export type ChangeCalendar = (event: EventTimeSlot) => Promise<boolean>;
