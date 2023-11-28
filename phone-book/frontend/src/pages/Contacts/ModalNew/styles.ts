import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vh;
  gap: 1vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.typography.body};
  background-color: ${({ theme }) => theme.colors.warning.main};
  font-size: clamp(0.6rem, 0.5rem + 2.3vh, 1.8rem);
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.mediumGray};
    transition: background-color 0.3s ease-in-out;
  }
`;
