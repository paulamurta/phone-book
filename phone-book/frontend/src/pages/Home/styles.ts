import styled from "styled-components";
import backgroundImage from "../../assets/maxim-ilyahov-0aRycsfH57A-unsplash.jpg";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
`;

export const GlassHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 8%;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(6.3px);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 50%;
  height: 100%;
  gap: 2vh;
  padding-right: 5vw;
`;

export const EnterButton = styled.button`
  padding: 1vw;
  display: flex;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.typography.white};
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.typography.white};
    color: black;
    transition: background-color 0.4s easeout;
  }
`;
