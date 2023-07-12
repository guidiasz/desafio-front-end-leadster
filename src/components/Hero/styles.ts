import styled, { css } from 'styled-components';
import { Typography } from '../Typography/styles';
import { Wrapper } from '../Wrapper/styles';

export const Hero = styled.section`
  ${({ theme }) => css`
    & {
      text-align: center;
    }
    & hr {
      margin-top: 1.9rem;
      margin-bottom: 2.133rem;
    }
    ${Typography} {
      em {
        display: block;
        margin-top: 0.2rem;
        position: relative;
        white-space: nowrap;
      }
      em:after {
        content: '';
        background-image: url('/imgs/icons/rounded-lines.svg');
        background-repeat: no-repeat;
        background-size: contain;

        width: 49px;
        height: 32px;
        display: block;
        position: absolute;
        right: 0;
        top: 2px;
        transform: translateX(35%);
      }
      & strong {
        font-weight: 700;
      }
    }
    ${Wrapper} {
      padding-bottom: 11.5rem;
    }
    @media (max-width: ${theme.breakpoints.notebook}) {
      ${Wrapper} {
        padding-bottom: 6rem;
      }
    }
    @media (max-width: ${theme.breakpoints.phone}) {
      ${Typography} {
        em:after {
          top: -6px;
          transform: translateX(40%);
        }
      }

      ${Wrapper} {
        padding-bottom: 4rem;
        padding-top: 4rem;
      }
    }
    @media (max-width: 480px) {
      ${Typography} {
        em{
          font-size: ${theme.fontSizes.xlarge};
        }
        em:after{
          width: 36.8px;
          height: 25.6px;
          transform: translateX(50%);
        }
    }
  `}
`;
