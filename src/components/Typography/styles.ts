import { table } from 'console';
import styled, { css, TypographyProps, DefaultTheme } from 'styled-components';

function adjustSize(size, sizeName, viewport) {
  const resizeProportion = {
    tablet: {
      huge: 0.8,
      xxlarge: 0.8,
      xlarge: 0.8,
      large: 0.8,
      xsmall: 1,
      small: 1,
      normal: 1,
      medium: 1,
    },
    phone: {
      huge: 0.6,
      xxlarge: 0.6,
      xlarge: 0.6,
      large: 0.6,
      xsmall: 1,
      small: 1,
      normal: 1,
      medium: 1,
    },
  };
  const sizeWithoutRem = size.replace('rem', '');
  const newSize = sizeWithoutRem * resizeProportion[viewport][sizeName] + 'rem';
  return newSize;
}

function getFontSize(size: TypographyProps['size'], theme: DefaultTheme) {
  return css`
    font-size: ${theme.fontSizes[size]};
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: ${adjustSize(theme.fontSizes[size], size, 'tablet')};
    }
    @media (max-width: ${theme.breakpoints.phone}) {
      font-size: ${adjustSize(theme.fontSizes[size], size, 'phone')};
    }
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
