import styled from "styled-components";

export const StyledTimeSlot = styled.div`
  transition: all 0.18s ease;
  width: 150px;
  height: 150px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.calendar.background};
  border: 1px solid ${({ theme }) => theme.calendar.border};
  &:hover {
    background-color: ${({ theme }) => theme.calendar.hoverBackground};
  }
`;
