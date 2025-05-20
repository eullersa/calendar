import { useDroppable } from "@dnd-kit/core";
import { StyledTableDataColumns } from "./styles";

type DroppableDayProps = {
  id: string;
  children: React.ReactNode;
  data: Record<string, string>;
};

export const DroppableDay = ({ id, children, data }: DroppableDayProps) => {
  const { setNodeRef } = useDroppable({
    id,
    data,
  });

  return (
    <StyledTableDataColumns ref={setNodeRef}>{children}</StyledTableDataColumns>
  );
};
