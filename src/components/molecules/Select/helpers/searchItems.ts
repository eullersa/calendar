import { SelectItems } from "../types";

export const searchItems = (items: SelectItems, searchValue: string) =>
  items?.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );
