import { SelectItems } from "../types";

export const findItemByValue = (items: SelectItems, value?: string) => ({
  value: "",
  label: "",
  ...items.find((item) => item.value === value),
});
