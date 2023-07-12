import styled, { css } from 'styled-components';
import { Container } from '../Container/styles';
import { Wrapper } from '../Wrapper/styles';

export const Footer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;

export const Info = styled(Container)`
  & {
    display: flex;
    justify-content: space-between;
    padding-top: 2.5rem;
    padding-bottom: 2.6rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
export const LogoWrapper = styled(Wrapper)`
  ${({ theme }) => css`
    & {
      padding: 3.6rem 0 3.1rem 0;
    }
    & a:focus {
      outline: ${theme.outline};
    }
  `}
`;

export const Col = styled.div`
  ${({ theme }) => css`
    & {
      padding: 0 0.8rem;
      word-spacing: 1px;
      transition: color 2s;
    }

    & a:hover,
    & a:focus {
      color: ${theme.colors.primary};
      outline: ${theme.outline};
    }
  `}
`;
