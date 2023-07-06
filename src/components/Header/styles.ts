import styled from 'styled-components';
import { Wrapper } from '../Wrapper/styles';

export const Header = styled(Wrapper).attrs({ as: 'header' })`
  & {
    padding: 0;
  }

  ${Wrapper} {
    padding-top: 2.733rem;
    padding-bottom: 2.96rem;
  }
`;
