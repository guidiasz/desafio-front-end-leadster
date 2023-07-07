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
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 2.5rem;
    padding-bottom: 2.6rem;
  }
`;
export const LogoWrapper = styled(Wrapper)`
  padding: 3.6rem 0 3.1rem 0;
`;

export const Col = styled.div`
  padding: 0 0.8rem;
  word-spacing: 1px;
`;
