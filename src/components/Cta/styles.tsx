import styled, { css } from 'styled-components';
import { Wrapper } from '../Wrapper/styles';
import { Hr } from '../Hr/styles';
import { Typography } from '../Typography/styles';
import { Container } from '../Container/styles';

export const Cta = styled(Wrapper)`
  ${({ theme }) => css`
    & {
      position: relative;
      z-index: 0;
      overflow: hidden;
      padding-top: 3.3rem;
      padding-bottom: 0;
    }
    ${Container} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding: 0;
      max-width: 1480px;
    }
  `}
`;
export const Shape = styled.div`
  & {
    position: absolute;
    background-color: #e6f3ff;
    height: 1022px;
    display: block;
    left: -100px;
    transform: rotate(-43deg);
    top: 250px;
    width: 870px;
    border-radius: 80px;
    z-index: -1;
  }
`;
export const Illustration = styled.figure``;

export const Invitation = styled.div`
  & {
    padding: 0 1.7rem 0 6.25rem;
  }
  ${Hr} {
    height: 2px;
    margin-top: 1.7rem;
    margin-bottom: 1.4rem;
  }
`;

export const Subtitle = styled(Typography)`
  ${({ theme }) => css`
    & {
      color: ${theme.colors.gray700};
      margin-top: 0.7rem;
    }
  `}
`;
export const Buttons = styled.div`
  display: flex;
  gap: 1.1rem;
  justify-content: start;
  align-items: center;
`;
export const AditionalInfo = styled.div`
  & {
    margin-top: 0.8rem;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.2rem;
  }
  & div {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.4rem;
  }
`;
