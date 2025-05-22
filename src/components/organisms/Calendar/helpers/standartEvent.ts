import { EventStatus, EventTimeSlot, EventType, TimeSlot } from "../types";

export const standartEvent = (timeSlot: TimeSlot): EventTimeSlot => ({
  ...timeSlot,
  duration: 2,
  type: EventType.EVENT,
  status: EventStatus.CONFIRMED,
});
