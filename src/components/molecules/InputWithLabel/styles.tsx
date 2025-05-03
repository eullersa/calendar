import styled from "styled-components";

export const StyledErrorMessage = styled.span`
  color: ${({ theme }) => theme.input.borderError};
  font-size: 14px;
  font-weight: 500;
`;
