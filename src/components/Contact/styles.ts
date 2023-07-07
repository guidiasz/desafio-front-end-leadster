import styled, { css } from 'styled-components';
import { Typography } from '../Typography/styles';

const iconSize = '3rem';

export const Contact = styled.address`
  ${({ theme }) => css`
    ${Section} {
      padding-top: 0.5rem;
      margin-bottom: 2rem;
    }
    ${Typography} {
      color: ${theme.colors.black};
      word-spacing: 2px;
      margin-bottom: 1.2rem;
    }

    a {
      color: ${theme.colors.gray600};
    }
  `}
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, ${iconSize});
  gap: 1rem;
`;

export const Icon = styled.i`
  ${({ theme }) => css`
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
    & {
      background: ${theme.colors.gray100};
      border-radius: 50%;
      width: ${iconSize};
      height: ${iconSize};
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.gray600};
      transition: 0.2s linear;
    }
    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
    }
  `}
`;
