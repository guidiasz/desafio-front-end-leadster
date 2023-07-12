import styled, { css } from 'styled-components';
import { Typography } from '../Typography/styles';
import { Contact } from '../Contact/styles';

export const Nav = styled.nav``;
export const NavSection = styled.section`
  ${({ theme }) => css`
    & {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
    ${Nav}, ${Contact} {
      padding: 0 0.8rem;
    }
    @media (max-width: ${theme.breakpoints.notebook}) {
      & {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      & > * {
        flex-basis: 280px;
      }
    }
  `}
`;
export const NavTitle = styled(Typography)`
  & {
    margin-bottom: 3.1rem;
  }
`;

export const NavLink = styled.li`
  ${({ theme }) => css`
    & {
      margin-bottom: 2rem;
      transition: 0.2;
    }
    &:hover,
    & a:focus {
      ${Typography} {
        color: ${theme.colors.primary};
      }
    }
    & a:focus {
      outline: ${theme.outline};
    }
  `}
`;
