import { TTextSize } from '@/styles/styled';
import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

type StyleProps = {
  size?: keyof TTextSize;
};

type TText = React.PropsWithChildren &
  StyleProps & {
    as?: React.ElementType;
  };

function setProperties({ size }: StyleProps, theme: DefaultTheme) {
  return {
    '--text-size': size ? theme.textSize[size] : theme.textSize['0'],
  };
}

const Text = ({ children, size, ...props }: TText) => {
  const theme = useTheme();
  const styles = setProperties({ size }, theme);

  return (
    <Wrapper {...props} style={styles}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.weight.normal};
    line-height: ${theme.leading.normal};
    color: ${theme.colors.text.subdued};
    font-size: var(--text-size);
  `}
`;

export default Text;
