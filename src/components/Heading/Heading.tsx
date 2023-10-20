import { TSharedThemeValues, TTextSize } from '@/styles/styled';
import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

type StyleProps = {
  charactersLimit?: number;
  size?: keyof TTextSize;
  weight?: keyof TSharedThemeValues['weight'];
};

type THeading = React.PropsWithChildren &
  StyleProps & {
    as?: React.ElementType;
  };

function setProperties({ charactersLimit, size, weight }: StyleProps, theme: DefaultTheme) {
  return {
    '--heading-measure': charactersLimit && charactersLimit + 'ch',
    '--heading-size': size ? theme.textSize[size] : theme.textSize['heading-1'],
    '--heading-weight': weight ? theme.weight[weight] : theme.weight.medium,
  };
}

const Heading = ({ children, charactersLimit, size, weight, ...props }: THeading) => {
  const theme = useTheme();
  const styles = setProperties({ size, weight, charactersLimit }, theme);

  return (
    <Wrapper style={styles} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.h2`
  ${({ theme }) => css`
    font-weight: var(--heading-weight);
    line-height: ${theme.leading.tight};
    color: ${theme.colors.text.base};
    font-size: var(--heading-size);
    max-width: var(--heading-measure);
  `}
`;

export default Heading;
