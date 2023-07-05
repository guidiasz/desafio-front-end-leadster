import styled, { css, WrapperProps } from 'styled-components';

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, bgColor }) => css`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${theme.colors[bgColor]};
    padding: 6rem 1rem;
  `}
`;
