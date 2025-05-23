import { EventStatus, EventTimeSlot, EventType } from "./types";

export const BORDER_COLOR = "#8b8b8b67";

export const EVENTS: EventTimeSlot[] = [
  {
    weekDay: 1,
    time: 1,
    duration: 1.67,
    type: EventType.EVENT,
    status: EventStatus.CONFIRMED,
  },
  {
    weekDay: 2,
    time: 20,
    duration: 1.67,
    type: EventType.EVENT,
    status: EventStatus.CONFIRMED,
  },
  {
    weekDay: 2,
    time: 5.5,
    duration: 1.67,
    type: EventType.EVENT,
    status: EventStatus.CONFIRMED,
  },
  {
    weekDay: 4,
    time: 1,
    duration: 5,
    type: EventType.BLOCK,
    status: EventStatus.CONFIRMED,
  },
  {
    weekDay: 5,
    time: 3,
    duration: 7,
    type: EventType.BLOCK,
    status: EventStatus.CONFIRMED,
  },
  {
    weekDay: 4,
    time: 20,
    duration: 7,
    type: EventType.BLOCK,
    status: EventStatus.CONFIRMED,
  },
];

export const WEEK_DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const;

export const TIME_SLOTS = [
  "00:00:00",
  "00:30:00",
  "01:00:00",
  "01:30:00",
  "02:00:00",
  "02:30:00",
  "03:00:00",
  "03:30:00",
  "04:00:00",
  "04:30:00",
  "05:00:00",
  "05:30:00",
  "06:00:00",
  "06:30:00",
  "07:00:00",
  "08:00:00",
  "08:30:00",
  "09:00:00",
  "09:30:00",
  "10:00:00",
  "10:30:00",
  "11:00:00",
  "11:30:00",
  "12:00:00",
  "12:30:00",
  "13:00:00",
  "13:30:00",
  "14:00:00",
  "14:30:00",
  "15:00:00",
  "15:30:00",
  "16:00:00",
  "16:30:00",
  "17:00:00",
  "17:30:00",
  "18:00:00",
  "18:30:00",
  "19:00:00",
  "19:30:00",
  "20:00:00",
  "20:30:00",
  "21:00:00",
  "21:30:00",
  "22:00:00",
  "22:30:00",
  "23:00:00",
  "23:30:00",
];
