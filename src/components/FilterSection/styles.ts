import styled, { css } from 'styled-components';
import { Typography } from '../Typography/styles';

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FilterButtonSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 0.9rem;
`;

export const FilterButton = styled.button`
  ${({ theme }) => css`
    & {
      user-select: none;
      cursor: pointer;
      border-radius: 3.3rem;
      border: 0.1rem solid ${theme.colors.gray700};
      padding: 0.6rem 1.25rem;
      text-align: center;
      transition: 0.2s;
    }
    &:hover,
    &:focus-visible {
      border-color: ${theme.colors.primary};
      ${Typography} {
        color: ${theme.colors.primary};
      }
    }
    &:focus-visible {
      outline: solid 1px ${theme.colors.gray600};
    }
    &.active {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.hoverBorder};
      ${Typography} {
        color: ${theme.colors.white};
      }
    }
  `}
`;

export const SortBy = styled.div`
  ${({ theme }) => css`
    & {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
  `}
`;

export const Label = styled.label`
  cursor: pointer;
  user-select: none;
`;

export const SelectWrapper = styled.div`
  & {
    position: relative;
  }
`;
export const Select = styled(FilterButton)`
  ${({ theme }) => css`
    & {
      padding: 0.6rem 0;
      width: 13.2rem;
      text-align: left;
      padding-left: 0.9rem;
      border-radius: 0.7rem;
      position: relative;
      user-select: none;
    }
    &:after {
      background: url('./imgs/icons/arrow.svg');
      content: '';
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      width: 13px;
      height: 13px;
      display: inline-block;
      position: absolute;
      bottom: 50%;
      right: 0;
      transform: translate(-70%, 50%);
      z-index: 100;
      transition: 0.2s;
    }
    &[aria-expanded='true']:after {
      transform: translate(-70%, 50%) rotate(-180deg);
    }
  `}
`;
export const Options = styled.div`
  ${({ theme }) => css`
    & {
      padding: 0.6rem 0.9rem;
      box-shadow: -2px 2px 16px rgba(0, 0, 0, 0.05);
      border: solid 1px ${theme.colors.gray100};
      border-radius: 0.5rem;
      position: absolute;
      z-index: 101;
      left: 0;
      display: none;
    }
    &[aria-hidden='false'] {
      display: block;
      cursor: pointer;
      background-color: ${theme.colors.white};
    }
    & button {
      padding: 0.5rem;
      width: 100%;
    }
    & button:hover,
    & button:focus-visible {
      background-color: ${theme.colors.gray100};
    }
    & button:hover ${Typography}, & button:focus-visible ${Typography} {
      color: ${theme.colors.primary};
    }
  `}
`;
