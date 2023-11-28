import styled, { css } from "styled-components";

interface ITypography {
  fontColor?: string;
}

export const Header1 = styled.h1<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: clamp(1.2rem, 1.2rem + 5.3vh, 4.2rem);
    font-family: "Inter 800", sans-serif;
    color: ${fontColor ? fontColor : theme.colors.typography.body};
  `}
`;

export const Header2 = styled.h2<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: clamp(1rem, 0.8rem + 3.8vh, 4rem);
    font-family: "Inter 800", sans-serif;
    color: ${fontColor ? fontColor : theme.colors.typography.body};
  `}
`;

export const Header3 = styled.h2<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: clamp(0.8rem, 0.7rem + 3.2vh, 3rem);
    font-family: "Inter 600", sans-serif;
    color: ${fontColor ? fontColor : theme.colors.typography.body};
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
    color: ${theme.colors.typography.body};
  `}
`;

export const LabelText = styled.p<ITypography>`
  width: 100%;
  color: ${({ theme, fontColor }) => (fontColor ? fontColor : theme.colors.typography.body)};
  font-family: "Inter 200", sans-serif;
  font-size: 0.9rem;
`;
