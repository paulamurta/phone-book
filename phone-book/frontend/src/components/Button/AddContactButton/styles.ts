import styled from "styled-components";

export const AddButton = styled.button`
  padding: 1vw;
  width: 13vw;
  color: ${({ theme }) => theme.colors.typography.white};
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 8px;
  font-size: clamp(0.6rem, 0.5rem + 2.3vh, 1.8rem);
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    transition: background-color 0.3s ease-in-out;
  }

  svg {
    height: clamp(0.1rem, 0.1rem + 1.8vh, 1.3rem);
    width: clamp(0.1rem, 0.1rem + 1.8 vh, 1.3rem);
  }
`;
