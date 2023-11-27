import styled, { css } from "styled-components";

interface ITypography {
  fontColor?: string;
}

export const Header1 = styled.h1<ITypography>`
  ${({ theme }) => css`
    font-size: 4rem;
    font-family: "Inter 800", sans-serif;
    color: ${theme.colors.typography.title};
  `}
`;

export const Header2 = styled.h2<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: 1.5rem;
    font-family: "Inter 600", sans-serif;
    color: ${fontColor ? fontColor : theme.colors.typography.title};
  `}
`;

export const Body1 = styled.p<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: 1rem;
    font-family: "Inter 400", sans-serif;
    color: ${fontColor ? fontColor : theme.colors.typography.body};
  `}
`;

export const Body2 = styled.p<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: 1rem;
    font-family: "Inter 400", sans-serif;
    color: ${fontColor ? fontColor : theme.colors.typography.body};
  `}
`;

export const Small = styled.small<ITypography>`
  ${({ theme }) => css`
    font-size: 0.5rem;
    font-family: "Inter 200", sans-serif;
    color: ${theme.colors.typography.small};
  `}
`;

export const LabelText = styled.p<ITypography>`
  width: 100%;
  color: ${({ theme, fontColor }) => (fontColor ? fontColor : theme.colors.typography.blue)};
  font-family: "Inter 200", sans-serif;
  font-size: 0.9rem;
`;
