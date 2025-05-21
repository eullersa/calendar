import { TIME_SLOTS, WEEK_DAYS } from "../constants";
import { TimeSlotData, TimeSlot } from "../types";

export const getCellFromPoint = (x: number, y: number): TimeSlot | null => {
  const elements = Array.from(document.elementsFromPoint(x, y));
  const weekDayValue = elements
    .find((el) => el.hasAttribute(TimeSlotData.WEEKDAY))
    ?.getAttribute(TimeSlotData.WEEKDAY);

  const timeValue = elements
    .find((el) => el.hasAttribute(TimeSlotData.TIME))
    ?.getAttribute(TimeSlotData.TIME);

  if (!weekDayValue || !timeValue) return null;

  const weekDay = WEEK_DAYS.indexOf(weekDayValue as (typeof WEEK_DAYS)[number]);
  const time = TIME_SLOTS.indexOf(timeValue);

  return weekDay !== -1 && time !== -1 ? { weekDay, time } : null;
};
