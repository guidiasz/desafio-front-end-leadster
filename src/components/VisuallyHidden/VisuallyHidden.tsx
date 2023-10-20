/**
 * VisuallyHidden
 * If you hide an element with display: none,
 * it can also hide it from assistive technology, such as screen readers.
 * This utility allows you to get the effect of display: none,
 * without the a11y issues.
 */
import React from 'react';
import styled from 'styled-components';

type TVisuallyHidden = React.PropsWithChildren & { as?: React.ElementType };

const VisuallyHidden = ({ children, ...props }: TVisuallyHidden) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default VisuallyHidden;
