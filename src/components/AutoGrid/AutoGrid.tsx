/*
AutoGrid

A flexible layout that will create an auto-fit grid with configurable grid item sizes.

CUSTOM PROPERTIES AND CONFIGURATION
--auto-grid-gap (theme.gutter): This defines the space between each item

--auto-grid-item-min-size (16rem): How large each item should be, as a minimum

---auto-grid-placement (auto-fit): Set either auto-fit or auto-fill to change how empty grid tracks are handled

*/

import styled, { DefaultTheme, useTheme } from 'styled-components';
import React from 'react';
import { TSpacing } from '@/styles/styled';

type StyleProps = {
  placement?: 'auto-fit' | 'auto-fill';
  itemMinSize?: React.CSSProperties['width'];
  gap?: keyof TSpacing;
};

type TAutoGrid = React.PropsWithChildren &
  StyleProps & {
    as?: React.ElementType;
  };

function setProperties({ placement, itemMinSize, gap }: StyleProps, theme: DefaultTheme) {
  return {
    '--auto-grid-placement': placement || 'auto-fit',
    '--auto-grid-item-min-size': itemMinSize || '16rem',
    '--auto-grid-gap': gap ? theme.spacing[gap] : theme.gutter,
  };
}

const AutoGrid = ({ children, placement, itemMinSize, gap, ...props }: TAutoGrid) => {
  const theme = useTheme();
  const styles = setProperties({ placement, itemMinSize, gap }, theme);

  return (
    <Wrapper style={styles} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    var(--auto-grid-placement),
    minmax(min(var(--auto-grid-item-min-size), 100%), 1fr)
  );
  gap: var(--auto-grid-gap);
`;

export default AutoGrid;
