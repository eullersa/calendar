import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 17px;
  width: 100%;
  font-weight: 500;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.input.text};
`;
