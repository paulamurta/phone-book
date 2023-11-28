import styled from "styled-components";

export const AddButton = styled.button`
  padding: 1vw;
  min-width: 13vw;
  color: ${({ theme }) => theme.colors.typography.white};
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 8px;
  font-size: clamp(0.6rem, 0.5rem + 2.3vh, 1.8rem);
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    transition: background-color 0.3s ease-in-out;
  }
`;
