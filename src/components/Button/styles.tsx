import styled, { css } from 'styled-components';
import { Typography } from '../Typography/styles';

interface ButtonProps {
  bgColor?: string;
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, bgColor }) => css`
    & {
      border-radius: 2.3rem;
      background-color: ${theme.colors[bgColor]};
      padding: 1.65rem 2.4rem;
      transition: color background-color 0.2s;
      border: solid 1px ${theme.colors[bgColor]};
    }

    &:hover,
    &:focus {
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.hoverBorder};
      ${Typography} {
        color: ${theme.colors[bgColor]};
      }
    }
    &:focus {
      outline: ${theme.outline};
    }
  `}
`;
