/*
SWITCHER

A layout that allows you to lay items next to each other
until there is not enough horizontal space to allow that.

CUSTOM PROPERTIES AND CONFIGURATION
--switcher-gap (theme.gutter): This defines the space
between each item

--switcher-target-container-width (65ch): How large the container
needs to be to allow items to sit inline with each other

--switcher-horizontal-alignment (flex-start): How items should align horizontally.
Can be any acceptable flexbox alignment value.

--switcher-vertical-alignment (flex-start): How items should align vertically.
Can be any acceptable flexbox alignment value.

$limitOfItems: If the limit is exceeded, each item occupies its own line.
*/

import { TSpacing } from '@/styles/styled';
import React from 'react';
import styled, { DefaultTheme, css, useTheme } from 'styled-components';

type StyleProps = {
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  gap?: keyof TSpacing;
  breakpoint?: React.CSSProperties['width'];
  $limitOfItems?: number;
};

type TSwitcher = React.PropsWithChildren &
  StyleProps & {
    as?: React.ElementType;
  };

function setProperties(
  { alignItems, justifyContent, gap, breakpoint }: StyleProps,
  theme: DefaultTheme,
) {
  return {
    '--switcher-gap': gap ? theme.spacing[gap] : theme.gutter,
    '--switcher-vertical-alignment': alignItems || 'flex-start',
    '--switcher-horizontal-alignment': justifyContent || 'flex-start',
    '--switcher-target-container-width': breakpoint || '65ch',
  } as React.CSSProperties;
}

const Switcher = ({
  children,
  alignItems,
  justifyContent,
  gap,
  breakpoint,
  $limitOfItems = 3,
  ...props
}: TSwitcher) => {
  const theme = useTheme();
  const styles = setProperties({ alignItems, gap, breakpoint }, theme);
  return (
    <Wrapper $limitOfItems={$limitOfItems} style={styles} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $limitOfItems: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: var(--switcher-gap);
  align-items: var(--switcher-vertical-alignment);
  justify-content: var(--switcher-horizontal-alignment);

  & > * {
    flex-grow: 1;
    flex-basis: calc((var(--switcher-target-container-width) - 100%) * 9999);
  }

  ${({ $limitOfItems }) => css`
    /* Max 3 items,
so we target everything *after* those */
    & > :nth-last-child(n + ${$limitOfItems + 1}),
    & > :nth-last-child(n + ${$limitOfItems + 1}) ~ * {
      flex-basis: 100%;
    }
  `}
`;

export default Switcher;
