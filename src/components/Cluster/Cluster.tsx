/*
CLUSTER
A layout that lets you automatically distribute items with consistent spacing, regardless of their size.

CUSTOM PROPERTIES AND CONFIGURATION
--cluster-gap (theme.gutter): This defines the space
between each item.

--cluster-horizontal-alignment (flex-start): How items should align
horizontally. Can be any acceptable flexbox aligmnent value.

--cluster-vertical-alignment (center): How items should align vertically.
Can be any acceptable flexbox alignment value.
*/

import { TSpacing } from '@/styles/styled';
import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

type StyleProps = {
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  gap?: keyof TSpacing;
};

type TCluster = React.PropsWithChildren &
  StyleProps & {
    as?: React.ElementType;
  };

function setProperties({ alignItems, gap, justifyContent }: StyleProps, theme: DefaultTheme) {
  return {
    '--cluster-gap': gap ? theme.spacing[gap] : theme.gutter,
    '--cluster-horizontal-alignment': justifyContent || 'flex-start',
    '--cluster-vertical-alignment': alignItems || 'center',
  } as React.CSSProperties;
}

const Cluster = ({ children, alignItems, justifyContent, gap, ...props }: TCluster) => {
  const theme = useTheme();
  const styles = setProperties({ alignItems, gap, justifyContent }, theme);
  return (
    <Wrapper style={styles} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--cluster-gap);
  justify-content: var(--cluster-horizontal-alignment);
  align-items: var(--cluster-vertical-alignment);
`;

export default Cluster;
