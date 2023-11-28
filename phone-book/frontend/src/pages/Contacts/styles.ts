import styled from "styled-components";
import { theme } from "../../styles/themes/theme";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100%;
  padding: 3vw;
  background-color: ${theme.colors.background.white};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: 100%;
  padding: 3vw;
  gap: 4vh;
  background-color: ${theme.colors.background.mediumGray};
  border-radius: 8px;
`;

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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  gap: 1.2px;
  border-radius: 8px;
  background-color: ${theme.colors.border.main};
  border: 1.5px solid ${({ theme }) => theme.colors.border.main};

  :first-child {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  :last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;
