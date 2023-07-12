import styled, { css, TypographyProps, DefaultTheme } from 'styled-components';

function getFontSize(size: TypographyProps['size'], theme: DefaultTheme) {
  return css`
    font-size: ${theme.fontSizes[size]};
  `;
}

function getTitleCase(uppercase: boolean) {
  return css`
    text-transform: ${uppercase ? 'uppercase' : 'initial'};
    letter-spacing: ${uppercase ? '.012rem' : 'initial'};
  `;
}

export const Typography = styled.h1<TypographyProps>`
  ${({ theme, colorName, size, lineHeight, fontWeight, uppercase }) => css`
    color: ${theme.colors[colorName]};
    ${getFontSize(size, theme)};
    ${getTitleCase(uppercase)};
    line-height: ${lineHeight};
    font-weight: ${fontWeight};
    transition: 0.2s;
  `}
`;
