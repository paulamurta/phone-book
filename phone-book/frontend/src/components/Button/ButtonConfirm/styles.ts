import styled from "styled-components";
import { ButtonConfirmProps } from "./types";

export const Button = styled.button<ButtonConfirmProps>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "60px")};
  color: ${({ theme }) => theme.colors.typography.white};
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 8px;
  font-size: clamp(0.6rem, 0.5rem + 2.3vh, 1.8rem);
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    transition: background-color 0.3s ease-in-out;
  }
`;
