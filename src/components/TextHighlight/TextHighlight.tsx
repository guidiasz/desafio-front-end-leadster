import { TTextSize } from '@/styles/styled';
import React from 'react';
import styled, { DefaultTheme, css, useTheme } from 'styled-components';

type StyleProps = {
  size?: keyof TTextSize;
  colorHighlight?: boolean;
};

type TTextHighlight = React.PropsWithChildren &
  StyleProps & {
    as?: React.ElementType;
  };

function setProperties({ size, colorHighlight }: StyleProps, theme: DefaultTheme) {
  return {
    '--text-highlight-size': size ? theme.textSize[size] : 'inherit',
    '--text-highlight-color': colorHighlight === true ? theme.colors.text.highlight : 'inherit',
  };
}

const TextHighlight = ({ children, size, colorHighlight, ...props }: TTextHighlight) => {
  const theme = useTheme();
  const styles = setProperties({ size, colorHighlight }, theme);
  return (
    <Wrapper style={styles} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.em`
  ${({ theme }) => css`
    font-weight: ${theme.weight.bold};
    color: var(--text-highlight-color);
    font-size: var(--text-highlight-size);
  `}
`;

export default TextHighlight;
