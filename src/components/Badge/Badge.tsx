import React from 'react';
import styled, { css } from 'styled-components';

type TBadge = React.PropsWithChildren & {};

const Badge = ({ children, ...props }: TBadge) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: ${theme.textSize['00']};
    font-weight: ${theme.weight.bold};
    color: ${theme.colors.text.highlight};
    border: solid 2px ${theme.colors.text.highlight};
    max-width: max-content;
    margin-inline: auto;
    border-radius: 100vw;
    border-bottom-left-radius: ${theme.spacing['2xs']};
    padding: ${theme.spacing['2xs']} ${theme.spacing.s};
    letter-spacing: 0.05em;
  `}
`;

export default Badge;
