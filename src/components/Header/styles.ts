import styled, { css } from 'styled-components';
import { Wrapper } from '../Wrapper/styles';

export const Header = styled(Wrapper).attrs({ as: 'header' })`
  ${({ theme }) => css`
    & {
      padding: 0;
    }

    ${Wrapper} {
      padding-top: 2.733rem;
      padding-bottom: 2.96rem;
    }
    & a:focus {
      outline: ${theme.outline};
    }
  `}
`;
