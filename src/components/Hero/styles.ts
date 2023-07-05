import styled, { css } from 'styled-components';
import { Typography } from '../Typography/styles';
import { Wrapper } from '../Wrapper/styles';

export const Hero = styled.section`
  text-align: center;
  & hr {
    margin-top: 1.9rem;
    margin-bottom: 2.133rem;
  }
  ${Typography} {
    em {
      display: block;
      margin-top: 0.2rem;
    }
    & strong {
      font-weight: 700;
    }
  }
  ${Wrapper} {
    padding-bottom: 11.5rem;
  }
`;
