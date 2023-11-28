import styled from "styled-components";

interface IButton {
  fontcolor?: string;
  hovercolor?: string;
}

export const Button = styled.button<IButton>`
  min-width: 60px;
  height: 35px;
  border-radius: 3px;
  padding: 0 2px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  color: ${({ fontcolor }) => fontcolor};
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ hovercolor }) => hovercolor};
    transition: background-color 0.2s ease-in;
  }
`;

export const ContainerConfirm = styled.div`
  background-color: ${({ theme }) => theme.colors.background.white};
  border-radius: 16px;
  min-width: 330px;
  max-width: 430px;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 25px;
  gap: 25px;

  .text-group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const WrapperModal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.background.white};
  height: 30%;
  width: 50%;

  svg {
    height: 30px;
    width: 30px;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;
