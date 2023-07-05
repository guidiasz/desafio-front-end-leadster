import styled, { css } from 'styled-components';
import { HrProps } from 'styled-components';
export const Hr = styled.hr<HrProps>`
  ${({ theme, bgColor, maxWidth }) => css`
    height: 0.0667rem;
    width: 100%;
    max-width: ${maxWidth};
    background-color: ${theme.colors[bgColor]};
  `}
`;
