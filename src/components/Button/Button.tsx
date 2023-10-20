import styled, { DefaultTheme, css, useTheme } from 'styled-components';
import React from 'react';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

type StyleProps = {
  variant?: 'primary';
};

type TButton = React.PropsWithChildren &
  StyleProps & {
    href: Url;
    as?: React.ElementType;
  };

function setProperties({ variant = 'primary' }: StyleProps, theme: DefaultTheme) {
  const VARIANTS = {
    primary: {
      '--btn-bg-color': theme.colors.background.primary,
      '--btn-text-color': theme.colors.text.invert,
    },
  };

  return VARIANTS[variant];
}

const Button = ({ children, variant, ...props }: TButton) => {
  const theme = useTheme();
  const styles = setProperties({ variant }, theme);

  return (
    <Wrapper style={styles} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  ${({ theme }) => css`
    --focus-offset: 0;
    display: inline-block;
    border-radius: 100vw;
    font-weight: ${theme.weight.bold};
    padding: ${theme.spacing.s} ${theme.spacing.l};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: solid 1px transparent;
    background-color: var(--btn-bg-color);
    color: var(--btn-text-color);
    border-color: var(--btn-bg-color);
    &:hover,
    &:focus-visible {
      color: var(--btn-bg-color);
      background-color: var(--btn-text-color);
    }
  `}
`;
export default Button;
