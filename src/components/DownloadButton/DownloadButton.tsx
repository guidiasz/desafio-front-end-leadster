import styled, { DefaultTheme, css, useTheme } from 'styled-components';
import React from 'react';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { DownloadCloud } from 'react-feather';

type StyleProps = {
  variant?: 'green' | 'blue' | 'yellow';
};

type TButton = React.PropsWithChildren &
  StyleProps & {
    href: Url;
    as?: React.ElementType;
  };

function setProperties({ variant = 'green' }: StyleProps, theme: DefaultTheme) {
  const VARIANTS = {
    green: {
      '--btn-icon-bg-color': '#6ee7b7',
      '--btn-bg-color': '#a7f3d0',
      '--btn-text-color': '#047857',
    },
    blue: {
      '--btn-icon-bg-color': theme.primitiveColors.primary200,
      '--btn-bg-color': theme.primitiveColors.primary100,
      '--btn-text-color': theme.primitiveColors.primary700,
    },
    yellow: {
      '--btn-icon-bg-color': '#fef08a',
      '--btn-bg-color': '#fef9c3',
      '--btn-text-color': '#a16207',
    },
  };

  return VARIANTS[variant];
}

const Button = ({ children, variant, ...props }: TButton) => {
  const theme = useTheme();
  const styles = setProperties({ variant }, theme);

  return (
    <Wrapper style={styles} target="_blank" rel="noopener noreferrer" {...props}>
      <IconWrapper>
        <DownloadCloud size={18} />
      </IconWrapper>
      <TextWrapper>{children}</TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  ${({ theme }) => css`
    --focus-offset: 0;
    display: inline-grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    border-radius: ${theme.borderRadius.medium};
    font-weight: ${theme.weight.normal};
    /* padding: ${theme.spacing['2xs']} ${theme.spacing.l}; */
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
const TextWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing['2xs']};
    line-height: 1;
  `}
`;
const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    background-color: var(--btn-icon-bg-color);
    border-radius: ${theme.borderRadius.small};
    padding: ${theme.spacing['2xs']};
    color: var(--btn-text-color);
  `}
`;

export default Button;
