import { EventTimeSlot, TimeSlot } from "../types";

export const updateEventTime = (
  event: EventTimeSlot,
  timeSlot: TimeSlot,
  data?: Partial<EventTimeSlot>
): EventTimeSlot => ({
  ...event,
  ...timeSlot,
  ...data,
});
