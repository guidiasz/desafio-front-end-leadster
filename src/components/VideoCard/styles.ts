import styled, { css } from 'styled-components';

import { Hr } from '../Hr/styles';
import { Typography } from '../Typography/styles';

export const Separator = styled(Hr)`
  margin-top: 4.8rem;
  margin-bottom: 2rem;
`;
export const Pagination = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;
export const PageButton = styled.button`
  ${({ theme }) => css`
    & {
      font-size: ${theme.fontSizes.large};
      color: ${theme.colors.gray700};
      padding: 0.3rem 0.9rem 0.4rem;
      cursor: pointer;
      border: solid 0.1rem transparent;
      transition: 0.2s;
    }
    &.active,
    &:hover,
    &:focus-visible {
      border-color: ${theme.colors.primary};
      border-radius: 5px;
      color: ${theme.colors.primary};
      font-weight: 700;
    }
    &:hover,
    &:focus-visible {
      background-color: ${theme.colors.gray100};
      outline: ${theme.outline};
    }
  `}
`;
export const Thumb = styled.div`
  ${({ theme }) => css`
    & {
      position: relative;
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      background-color: ${theme.colors.primary};
      top: 0;
      left: 0;
      opacity: 0;
      transition: 0.2s;
      z-index: 100;
    }
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      top: 0;
      left: 0;
      z-index: 101;
      position: absolute;
      opacity: 0;
      background-image: url('../imgs/icons/play.svg');
      background-repeat: no-repeat;
      background-position: center;
      transition: 0.2s;
    }
  `}
`;
export const VideoCard = styled.button`
  ${({ theme }) => css`
    & {
      overflow: hidden;
      border-radius: 1rem;
      box-shadow: -2px 2px 16px rgba(0, 0, 0, 0.05);
      height: 100%;
    }

    &:hover,
    &:focus {
      ${Typography} {
        color: ${theme.colors.primary};
      }
      ${Thumb}:after {
        opacity: 0.3;
      }
      ${Thumb}:before {
        opacity: 1;
      }
    }

    &:focus {
      outline: ${theme.outline};
    }

    & {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    & figcaption {
      margin-top: 1.4rem;
      margin-bottom: 1.4rem;
      padding: 0 2rem;
    }
  `}
`;
export const VideoCardSection = styled.section`
  & {
    display: grid;
    grid-template-columns: repeat(3, 360px);
    gap: 2rem;
    align-items: stretch;
  }
`;
